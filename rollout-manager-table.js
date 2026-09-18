/* ============================================================
   Rollout Manager (table version) — prototype behaviour
   ------------------------------------------------------------
   Interactions only: row cloning, selection, search, sort, the
   bulk edit modal and totals. Every piece of UI structure lives
   in rollout-manager-table.html; nothing here builds markup from
   strings.

   State is the same shape as the grid prototype:
     qtys["jobId::addressId"]  — a quantity IS the membership record
     addrValues["addressId::field"]
   ============================================================ */
(function () {
  "use strict";

  const bulkJob = document.getElementById("bulkJob");
  const SEED = window.ROLLOUT_DATA || {rollout:{}, versions:[], addresses:[], qtys:{}, addrValues:{}};

  const state = {
    versions: JSON.parse(JSON.stringify(SEED.versions)),
    addresses: JSON.parse(JSON.stringify(SEED.addresses)),
    qtys: {...SEED.qtys},
    addrValues: {...SEED.addrValues},
  };

  const $  = (sel, root) => (root || document).querySelector(sel);
  const $$ = (sel, root) => Array.from((root || document).querySelectorAll(sel));
  const qtyKey  = (vId, aId) => vId + "::" + aId;
  const getQty  = (vId, aId) => state.qtys[qtyKey(vId, aId)] ?? "";
  const addrVal = (aId, fId) => state.addrValues[aId + "::" + fId] ?? "";
  const num     = v => { const n = parseFloat(String(v).replace(/[^0-9.\-]/g, "")); return isNaN(n) ? 0 : n; };

  function setQty(vId, aId, raw) {
    const val = String(raw).trim();
    if (val === "") delete state.qtys[qtyKey(vId, aId)];
    else state.qtys[qtyKey(vId, aId)] = val;
  }
  function setAddrValue(aId, fId, raw) {
    const val = String(raw).trim();
    if (val === "") delete state.addrValues[aId + "::" + fId];
    else state.addrValues[aId + "::" + fId] = val;
  }
  function jobTotal(vId) {
    return state.addresses.reduce((n, a) => n + num(getQty(vId, a.id)), 0);
  }
  function addressesOn(vId) {
    return state.addresses.filter(a => String(getQty(vId, a.id)).trim() !== "").length;
  }

  /* ── Rollout identity ──────────────────────────────────────── */
  const r = SEED.rollout || {};
  const label = [r.customer, r.name].filter(Boolean).join(" · ");
  if ($("#rolloutName")) $("#rolloutName").textContent = label ? "/ " + label : "";
  if ($("#rolloutCrumb")) $("#rolloutCrumb").textContent = r.name || "Rollout";

  /* ── Master tickets table ──────────────────────────────────── */
  const masterBody = $("#masterBody");

  function masterRow(v) {
    const row = $("#masterRowTemplate").content.firstElementChild.cloneNode(true);
    row.dataset.job = v.id;
    $('[data-master="job"]', row).value = v.job || "";
    $('[data-master="desc"]', row).value = v.desc || "";
    $$("[data-spec]", row).forEach(inp => {
      inp.value = (v.details[0] && v.details[0].specs[inp.dataset.spec]) || "";
    });
    return row;
  }
  function buildMaster() {
    state.versions.forEach(v => masterBody.appendChild(masterRow(v)));
  }

  /* One delegated listener for the whole master table. */
  masterBody.addEventListener("change", e => {
    const inp = e.target.closest("input.cell-field");
    if (!inp) return;
    const v = state.versions.find(x => x.id === inp.closest("tr").dataset.job);
    if (!v) return;
    if (inp.dataset.master === "job")  { v.job = inp.value.trim(); syncJobHeaders(); }
    else if (inp.dataset.master === "desc") { v.desc = inp.value.trim(); syncJobHeaders(); }
    else if (inp.dataset.spec && v.details[0]) v.details[0].specs[inp.dataset.spec] = inp.value.trim();
  });

  masterBody.addEventListener("click", e => {
    const btn = e.target.closest(".master-remove");
    if (!btn) return;
    const row = btn.closest("tr"), vId = row.dataset.job;
    if (state.versions.length <= 1) { toast("A rollout needs at least one master ticket."); return; }
    state.versions = state.versions.filter(v => v.id !== vId);
    Object.keys(state.qtys).forEach(k => { if (k.split("::")[0] === vId) delete state.qtys[k]; });
    row.remove();
    removeJobColumn(vId);
    paintTotals();
    toast("Master ticket deleted, with its quantities.");
  });

  /* Add a master ticket: a row here and a quantity column on the
     distribution list, since the two are the same thing. */
  function addMaster() {
    let n = state.versions.length + 1;
    while (state.versions.some(v => v.id === "v" + n)) n++;
    const nextJob = String(Math.max(204000, ...state.versions.map(v => +v.job || 0)) + 1);
    const v = {id: "v" + n, job: nextJob, desc: "", details: [{name: "Inserts", specs: {}}]};
    state.versions.push(v);

    const row = masterRow(v);
    masterBody.appendChild(row);
    addJobColumn(v);
    paintTotals();
    showPanel("master");
    $('[data-master="desc"]', row).focus();
    toast(`Master ticket ${v.job} added. Name it, then enter quantities.`);
  }

  /* Keep the distribution list's job headers in step with the master
     table, so renaming a ticket renames its column. */
  function syncJobHeaders() {
    state.versions.forEach(v => {
      const th = headJobs.querySelector(`th[data-job="${v.id}"]`);
      if (!th) return;
      $('[data-field="job"]', th).textContent = v.job;
      $('[data-field="desc"]', th).textContent = shortDesc(v.desc);
      th.title = v.job + (v.desc ? " · " + v.desc : "");
    });
    $$("#bulkJob option").forEach(opt => {
      const v = state.versions.find(x => x.id === opt.value);
      if (v) opt.textContent = v.job + (v.desc ? " · " + v.desc : "");
    });
  }
  const shortDesc = d => (d || "").replace(" Menu Inserts", "").replace(" Menu Insert", "");
  function paintMasterTotals() {
    $$("#masterBody .master-row").forEach(row => {
      const v = state.versions.find(x => x.id === row.dataset.job);
      $('[data-field="total"]', row).textContent = jobTotal(v.id).toLocaleString();
    });
  }

  /* ── Distribution table: header, rows, totals ──────────────── */
  const headGroup = $("#distHeadGroup");
  const headJobs  = $("#distHeadJobs");
  const distBody  = $("#distBody");
  const totalsRow = $("#distTotals");

  function jobHeadCell(v) {
    const th = $("#jobHeadTemplate").content.firstElementChild.cloneNode(true);
    th.dataset.job = v.id;
    $('[data-field="job"]', th).textContent = v.job;
    $('[data-field="desc"]', th).textContent = shortDesc(v.desc);
    th.title = v.job + (v.desc ? " · " + v.desc : "");
    $(".th-sort", th).dataset.sort = "qty:" + v.id;
    return th;
  }
  function jobTotalCell(v) {
    const td = $("#jobTotalTemplate").content.firstElementChild.cloneNode(true);
    td.dataset.job = v.id;
    return td;
  }
  function qtyCell(v, aId) {
    const cell = $("#qtyCellTemplate").content.firstElementChild.cloneNode(true);
    const inp = $("input", cell);
    inp.dataset.job = v.id;
    inp.value = getQty(v.id, aId);
    return cell;
  }
  const groupCell = () => headGroup.querySelector("th.col-qty-group");

  function buildHead() {
    const group = $("#jobGroupHeadTemplate").content.firstElementChild.cloneNode(true);
    group.colSpan = state.versions.length;
    headGroup.insertBefore(group, headGroup.children[2]);

    state.versions.forEach(v => headJobs.appendChild(jobHeadCell(v)));
    state.versions.forEach(v => totalsRow.insertBefore(jobTotalCell(v), totalsRow.lastElementChild));
  }

  /* A job column spans the header, the totals row and every address
     row — added and removed in one place. */
  function addJobColumn(v) {
    groupCell().colSpan = state.versions.length;
    headJobs.appendChild(jobHeadCell(v));
    totalsRow.insertBefore(jobTotalCell(v), totalsRow.lastElementChild);
    $$("#distBody tr.address-row").forEach(row => {
      const anchor = row.querySelector("td.col-ship");
      row.insertBefore(qtyCell(v, row.dataset.addr), anchor);
    });
    const opt = document.createElement("option");
    opt.value = v.id;
    opt.textContent = v.job + (v.desc ? " · " + v.desc : "");
    bulkJob.appendChild(opt);
  }
  function removeJobColumn(vId) {
    groupCell().colSpan = Math.max(state.versions.length, 1);
    const th = headJobs.querySelector(`th[data-job="${vId}"]`); if (th) th.remove();
    const td = totalsRow.querySelector(`td[data-job="${vId}"]`); if (td) td.remove();
    $$(`#distBody input[data-job="${vId}"]`).forEach(inp => inp.closest("td").remove());
    const opt = bulkJob.querySelector(`option[value="${vId}"]`); if (opt) opt.remove();
  }

  function buildRows() {
    const rowTpl = $("#addressRowTemplate");
    const frag = document.createDocumentFragment();

    state.addresses.forEach(a => {
      const row = rowTpl.content.firstElementChild.cloneNode(true);
      row.dataset.addr = a.id;
      $('[data-field="name"]', row).textContent = a.name;
      $('[data-field="code"]', row).textContent = a.code || "";
      $('[data-field="city"]', row).textContent = a.city || "";
      $('[data-field="street"]', row).textContent = a.street || "";
      row.dataset.search = [a.name, a.code, a.city, a.street].join(" ").toLowerCase();

      /* One quantity cell per job, in front of the shipping fields. */
      const anchor = row.children[2];
      state.versions.forEach(v => row.insertBefore(qtyCell(v, a.id), anchor));

      $$("[data-addrfield]", row).forEach(inp => { inp.value = addrVal(a.id, inp.dataset.addrfield); });
      frag.appendChild(row);
    });

    distBody.appendChild(frag);
  }

  function paintTotals() {
    state.versions.forEach(v => {
      const td = totalsRow.querySelector(`td[data-job="${v.id}"]`);
      if (td) td.textContent = jobTotal(v.id).toLocaleString();
    });
    paintMasterTotals();
  }

  /* One delegated listener for every input in the table, rather than
     one per cell. */
  distBody.addEventListener("change", e => {
    const inp = e.target.closest("input.cell-field");
    if (!inp) return;
    const aId = inp.closest("tr").dataset.addr;
    if (inp.dataset.job) { setQty(inp.dataset.job, aId, inp.value); paintTotals(); }
    else if (inp.dataset.addrfield) setAddrValue(aId, inp.dataset.addrfield, inp.value);
  });

  /* ── Selection ─────────────────────────────────────────────── */
  const selectAll = $("#selectAllAddresses");
  const footerLeft = $(".list-footer-left");
  const countEl = $("#addrCount");

  const visibleRows = () => $$("#distBody tr.address-row:not(.row-hidden)");
  const checkedRows = () => visibleRows().filter(r => $(".row-check", r).checked);

  function syncSelection() {
    const vis = visibleRows(), checked = checkedRows();
    vis.forEach(r => r.classList.toggle("is-selected", $(".row-check", r).checked));
    selectAll.checked = checked.length === vis.length && vis.length > 0;
    selectAll.indeterminate = checked.length > 0 && checked.length < vis.length;

    if (checked.length > 0) {
      countEl.textContent = `${checked.length} SELECTED`;
      footerLeft.classList.add("multi-select");
    } else {
      const total = state.addresses.length;
      countEl.textContent = vis.length < total
        ? `${vis.length} OF ${total} ADDRESSES`
        : `${total} ADDRESSES`;
      footerLeft.classList.remove("multi-select");
    }
  }

  distBody.addEventListener("change", e => {
    if (e.target.classList.contains("row-check")) syncSelection();
  });
  selectAll.addEventListener("change", () => {
    visibleRows().forEach(r => { $(".row-check", r).checked = selectAll.checked; });
    syncSelection();
  });
  $("#clearSelBtn").addEventListener("click", () => {
    $$("#distBody .row-check").forEach(c => { c.checked = false; });
    syncSelection();
  });

  /* ── Search ────────────────────────────────────────────────── */
  $("#addrSearch").addEventListener("input", e => {
    const q = e.target.value.trim().toLowerCase();
    $$("#distBody tr.address-row").forEach(r => {
      r.classList.toggle("row-hidden", q.length > 0 && !r.dataset.search.includes(q));
    });
    syncSelection();
  });

  /* ── Sort ──────────────────────────────────────────────────── */
  let sortKey = null, sortDir = 1;
  document.addEventListener("click", e => {
    const btn = e.target.closest("#distTable .th-sort");
    if (!btn) return;
    const key = btn.dataset.sort;
    sortDir = (key === sortKey) ? -sortDir : 1;
    sortKey = key;

    $$("#distTable th[aria-sort]").forEach(th => th.removeAttribute("aria-sort"));
    btn.closest("th").setAttribute("aria-sort", sortDir === 1 ? "ascending" : "descending");

    const rows = $$("#distBody tr.address-row");
    rows.sort((x, y) => {
      const ax = x.dataset.addr, ay = y.dataset.addr;
      if (key === "name") {
        const nx = state.addresses.find(a => a.id === ax).name;
        const ny = state.addresses.find(a => a.id === ay).name;
        return nx.localeCompare(ny) * sortDir;
      }
      const vId = key.slice(4);
      return (num(getQty(vId, ax)) - num(getQty(vId, ay))) * sortDir;
    });
    rows.forEach(r => distBody.appendChild(r));
  });

  /* ── Modals ────────────────────────────────────────────────── */
  function openModal(id) { $("#modal-" + id).classList.add("open"); }
  function closeModal(id) { $("#modal-" + id).classList.remove("open"); }
  document.addEventListener("click", e => {
    const btn = e.target.closest("[data-close]");
    if (btn) closeModal(btn.dataset.close);
    const overlay = e.target.classList && e.target.classList.contains("modal-overlay") ? e.target : null;
    if (overlay) overlay.classList.remove("open");
  });

  /* Bulk edit: every field optional, blank leaves the row alone. */
  state.versions.forEach(v => {
    const opt = document.createElement("option");
    opt.value = v.id;
    opt.textContent = v.job + (v.desc ? " · " + v.desc : "");
    bulkJob.appendChild(opt);
  });

  $("#bulkEditBtn").addEventListener("click", () => {
    const n = checkedRows().length;
    if (!n) return;
    $("#bulkCount").textContent = n;
    ["bulkQty", "bulkAttn", "bulkNotes"].forEach(id => { $("#" + id).value = ""; });
    ["bulkCarrier", "bulkAccount", "bulkMethod"].forEach(id => { $("#" + id).value = ""; });
    openModal("bulkEdit");
  });

  $("#bulkApplyBtn").addEventListener("click", () => {
    const rows = checkedRows();
    const qty = $("#bulkQty").value.trim();
    const jobId = bulkJob.value;
    const fields = {
      carrier: $("#bulkCarrier").value,
      account: $("#bulkAccount").value,
      method:  $("#bulkMethod").value,
      attn:    $("#bulkAttn").value.trim(),
      notes:   $("#bulkNotes").value.trim(),
    };
    const before = {qtys: {...state.qtys}, addrValues: {...state.addrValues}};

    rows.forEach(row => {
      const aId = row.dataset.addr;
      if (qty !== "") {
        setQty(jobId, aId, qty);
        const inp = row.querySelector(`input[data-job="${jobId}"]`);
        if (inp) inp.value = qty;
      }
      Object.entries(fields).forEach(([f, val]) => {
        if (!val) return;
        setAddrValue(aId, f, val);
        const inp = row.querySelector(`input[data-addrfield="${f}"]`);
        if (inp) inp.value = val;
      });
    });

    paintTotals();
    closeModal("bulkEdit");
    toast(`Updated ${rows.length} address${rows.length === 1 ? "" : "es"}.`, () => {
      state.qtys = before.qtys; state.addrValues = before.addrValues;
      repaintValues(); paintTotals();
    });
  });

  /* Remove selected */
  $("#bulkRemoveBtn").addEventListener("click", () => {
    const n = checkedRows().length;
    if (!n) return;
    $("#removeCount").textContent = n;
    openModal("removeConfirm");
  });
  $("#removeConfirmBtn").addEventListener("click", () => {
    const rows = checkedRows();
    rows.forEach(row => removeAddress(row.dataset.addr, row));
    closeModal("removeConfirm");
    syncSelection(); paintTotals();
    toast(`Removed ${rows.length} address${rows.length === 1 ? "" : "es"}.`);
  });

  distBody.addEventListener("click", e => {
    const btn = e.target.closest(".row-remove");
    if (!btn) return;
    const row = btn.closest("tr");
    removeAddress(row.dataset.addr, row);
    syncSelection(); paintTotals();
    toast("Address removed.");
  });

  function removeAddress(aId, row) {
    state.addresses = state.addresses.filter(a => a.id !== aId);
    Object.keys(state.qtys).forEach(k => { if (k.split("::")[1] === aId) delete state.qtys[k]; });
    Object.keys(state.addrValues).forEach(k => { if (k.split("::")[0] === aId) delete state.addrValues[k]; });
    row.remove();
  }

  /* Add address: a new row at the top, ready to be named. */
  function addAddress() {
    let n = state.addresses.length + 1;
    while (state.addresses.some(a => a.id === "a" + n)) n++;
    const a = {id: "a" + n, name: "New address", city: "", street: ""};
    state.addresses.push(a);

    const row = $("#addressRowTemplate").content.firstElementChild.cloneNode(true);
    row.dataset.addr = a.id;
    row.dataset.search = "new address";
    $('[data-field="name"]', row).textContent = a.name;
    const anchor = row.children[2];
    state.versions.forEach(v => row.insertBefore(qtyCell(v, a.id), anchor));
    distBody.insertBefore(row, distBody.firstChild);
    row.scrollIntoView({block: "nearest"});
    $("input.cell-field", row).focus();
    syncSelection();
  }
  $("#addAddressBtn2").addEventListener("click", addAddress);
  $("#addMasterBtn").addEventListener("click", addMaster);

  /* ── Tabs ──────────────────────────────────────────────────── */
  function showPanel(which) {
    $("#panel-master").classList.toggle("hidden-section", which !== "master");
    $("#panel-dist").classList.toggle("hidden-section", which !== "dist");
    [["#tabMaster", "master"], ["#tabDist", "dist"]].forEach(([sel, key]) => {
      const btn = $(sel);
      btn.classList.toggle("active", which === key);
      btn.setAttribute("aria-pressed", which === key);
    });
  }
  $("#tabMaster").addEventListener("click", () => showPanel("master"));
  $("#tabDist").addEventListener("click", () => showPanel("dist"));

  /* ── Toast ─────────────────────────────────────────────────── */
  let toastTimer = null;
  function toast(text, undo) {
    const host = $("#toastHost");
    host.innerHTML = "";
    const el = $("#toastTemplate").content.firstElementChild.cloneNode(true);
    $(".toast-text", el).textContent = text;
    const action = $(".toast-action", el);
    if (undo) action.addEventListener("click", () => { undo(); el.remove(); });
    else action.remove();
    host.appendChild(el);
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => el.remove(), 5000);
  }

  /* Repaint every input from state — used by undo. */
  function repaintValues() {
    $$("#distBody tr.address-row").forEach(row => {
      const aId = row.dataset.addr;
      $$("input[data-job]", row).forEach(inp => { inp.value = getQty(inp.dataset.job, aId); });
      $$("input[data-addrfield]", row).forEach(inp => { inp.value = addrVal(aId, inp.dataset.addrfield); });
    });
  }

  /* ── Boot ──────────────────────────────────────────────────── */
  buildMaster();
  buildHead();
  buildRows();
  paintTotals();
  syncSelection();
  showPanel("dist");
})();
