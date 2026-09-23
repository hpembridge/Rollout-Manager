/* ============================================================
   Rollout milestone status — shared by the dashboard and the
   Rollout Manager's Overview tab.
   ------------------------------------------------------------
   The real domain logic, written plainly so it can move into a
   rollout service as-is. A milestone is {target, actual, note}
   with ISO dates ("2026-09-24").

     done      actual is set     shows actual, "Done", ± days vs target
     late      target passed, no actual
     due       target within DUE_SOON_DAYS, no actual
     upcoming  target further out
     empty     nothing set
   ============================================================ */
(function(){
  /* Status is measured against today. Pin this to a fixed date
     (new Date(2026, 8, 22)) to keep the sample data's states. */
  const TODAY = new Date(); TODAY.setHours(0, 0, 0, 0);
  const DUE_SOON_DAYS = 3;

  /* Parsed by hand so a date never shifts a day across time zones. */
  function parseISO(iso){
    const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(iso || "");
    return m ? new Date(+m[1], +m[2] - 1, +m[3]) : null;
  }
  const toISO = d => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
  const daysBetween = (a, b) => Math.round((a - b) / 864e5);
  /* "2026-09-04" → "9/04" */
  const shortDate = iso => { const d = parseISO(iso); return d ? `${d.getMonth() + 1}/${String(d.getDate()).padStart(2, "0")}` : ""; };

  function milestoneStatus(m){
    m = m || {};
    const target = parseISO(m.target), actual = parseISO(m.actual);
    if (actual){
      const d = target ? daysBetween(actual, target) : 0;
      return { state: "done", date: m.actual,
               sub: d > 0 ? `Done · +${d}d` : d < 0 ? `Done · −${-d}d` : "Done" };
    }
    if (target){
      const d = daysBetween(target, TODAY);
      if (d < 0) return { state: "late", date: m.target, sub: `${-d}d late` };
      if (d <= DUE_SOON_DAYS) return { state: "due", date: m.target, sub: d === 0 ? "Due today" : `Due in ${d}d` };
      return { state: "upcoming", date: m.target, sub: "Target" };
    }
    return { state: "empty", date: "", sub: "Set dates" };
  }

  window.RolloutStatus = {
    TODAY, DUE_SOON_DAYS, parseISO, toISO, daysBetween, shortDate, milestoneStatus,
    STATES: ["done", "due", "late", "upcoming", "empty"],
    /* Worst first — for one dot that stands for several milestones. */
    SEVERITY: ["late", "due", "upcoming", "empty", "done"],
  };
})();
