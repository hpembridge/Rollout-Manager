# Rollout Manager — prototype notes

Single-file HTML prototype (`index.html`). No build step, no dependencies. Open it in a
browser. All state is in memory and resets on reload — persistence is deliberately not
built yet.

## Data model

```
versions[]    { id, name, defaults: { fieldId: value } }   // the master ticket
addresses[]   { id, name, city }
fields[]      { id, name, scope, num }
dist          { versionId: [addressId] }                    // distribution list per version
cellOverrides { "versionId::addressId::fieldId": value }
addrValues    { "addressId::fieldId": value }
```

## Field scopes

The original spec had two buckets — varies by address, varies by version — and assumed
nothing varies by both. Quantity breaks that: one property can take 400 of the national
version and 150 of the resort version. So there are three scopes:

| Scope | Stored in | Behavior |
|---|---|---|
| `version` | master ticket only | Locked in the distribution view. Trim size, stock, advisory. |
| `address` | `addrValues` | One value per address, shared across every version that address receives. Editing under V1 changes V3. Attention line, ship method. |
| `matrix` | `cellOverrides` | Independent per address per version. Quantity, in-home date. |

All three resolve the same way: **use the override if one exists, otherwise fall back to
the master ticket default for the version being viewed.** Clearing a cell deletes the
override and the default shows through. Typing a value that equals the default deletes
the override rather than storing a duplicate — there is no way to "pin" a value that
happens to match the default.

Scope is chosen at field creation. Rescoping an existing field drops its overrides and
keeps the master defaults.

## Views

**Master tickets** — a stack of tables, not one.

The first is the master tickets themselves: one row per ticket, Quantity Shipping (the
read-only sum of that ticket's quantities) and the job header fields. Tickets are added
and removed here.

The job header fields are the JM "Edit job information" modal, field for field and in its
order — For Distribution, PO Number, PO Name, Job Description, Job Type, Old Job Num,
Production Type, Menu Code. Job Description, Job Type and Production Type are on by
default; the rest are under "+ Add field".

Job Type and Production Type are typed, not picked: the cell editor completes the rest of
the first match inline and leaves it selected, lists what matches under the cell, walks
the list on arrow keys, and refuses a value that is not on the list — it toasts what the
values are and the cell keeps what it had. For Distribution is a checkbox in the cell
with no editor: click it, or press Space on the selected cell. It stores "Yes" or nothing
so it survives a copy out to TSV and back.

Old Job Num greys to "n/a" where Job Type is New Job, which is the modal's collapse rule
applied per row.

One thing that modal is inconsistent about: it labels the job name field "Job Name" while
the job header and the duplicate-job modal both say "Job Description" — using the latter,
since that is what version.desc holds. Worth settling before this becomes real.

Then one table per detail position. A detail is one of the parts that go into the single
piece that ships, so its specs belong to the part, not to the ticket — putting them all
in one table was the mistake. Each detail table lists only the tickets that have that
detail, carries Job Description (read-only) and Detail Description in front of the specs,
and offers only that detail's spec catalog under "+ Add field".

Details are added and removed on the job ticket, not in the rollout manager. A detail
table exists because some ticket has a detail in that position; it appears and disappears
with the data, and nothing on the page creates one.

**Distribution list** — rows are fields, columns are the addresses on the selected
version. One version at a time. The amber Versions row shows which versions each address
receives; the chips are clickable and switch which version you're editing while keeping
that address in view. Version-scoped fields render locked/gray rather than hidden, so
someone auditing one property sees the whole ticket without navigating away.

## Interactions built

Click, drag-select, shift-click, arrow/tab/enter navigation, type-to-replace, F2, fill
handle, Cmd+C / Cmd+V as real TSV (round-trips with Google Sheets), Cmd+A, Cmd+Z /
Cmd+Shift+Z, row header select, drag a column header to reorder columns, right-click
menus on cells and headers, Delete on a bulk selection. Destructive actions toast with
an inline Undo.

Column headers are drag handles, not selectors — clicking one does nothing. Pinned
columns are neither draggable nor drop targets: Quantity Shipping and the two
identifying columns on a detail table, and the quantity columns on the distribution
list. Since only movable headers accept a drop, nothing can be reordered in front of
them, and a column cannot leave its own table. Column order lives in JOBFIELDS / SPECS /
FIELDS, so a move is a splice on that array and undo/redo covers it.

Read-only cells are not selectable at all — no click, no drag range, no right-click menu.
That is Quantity Shipping (a roll-up of the distribution list) and Job Description on a
detail table (set on the ticket). Double-clicking one toasts where its value is set, with
a link to the view that owns it.

Undo and redo have no toolbar buttons. They are Cmd/Ctrl+Z, Cmd/Ctrl+Shift+Z, and the
Undo action on each toast. The topbar carries the two rollout outputs instead — Create
Ship Tracker and Create Tickets — neither of which is built: each toasts what it would
act on.

Undo is whole-state JSON snapshots, capped at 80. Fine at this size, would need
replacing with a proper command log before real data volumes.

## Not built

- Step 3 of the process — adding tickets to the rollout manager. Currently versions and
  addresses are created directly in the grid; there is no import or ticket-intake path.
- Persistence, multi-user, validation, required fields.
- Any notion of a rollout as a container. There is one implicit rollout.

## Open questions

1. Can one address need different attention lines on different versions? If yes,
   `address` scope collapses into `matrix` and there are really only two scopes.
2. Changing a master default currently rewrites every inheriting cell across the
   rollout, silently. That is probably correct, but it likely needs a confirmation
   showing the blast radius.
3. Should rescoping a field be blocked outright once overrides exist, rather than
   dropping them?
4. Removing an address from a version deletes its matrix overrides for that version. If
   it is re-added later, they do not come back. Acceptable, or should they be archived?
5. Version-scoped rows in the distribution view will get noisy past ~20 fields. May want
   a collapse toggle.
