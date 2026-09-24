/* ============================================================
   Customers and CSRs a rollout can be assigned to — seed data.
   ------------------------------------------------------------
   Sales is not chosen on a rollout: it comes with the customer
   (the account's sales rep). Names and reps are from the Rollouts
   Planning & Production Board sheet (9/23/2026). Chicken and
   Pickle, East Coast Wings and Red Lobster have no rep on it, so
   their `sales` is empty.
   In Angular this is the customer lookup the job header already
   uses, and sales is read from the account.
   ============================================================ */
window.ROLLOUT_CUSTOMERS = [
  { name: "(3244) Famous Dave's Corporate",  sales: "Pat" },
  { name: "(21491) Fogo De Chao Corporate",  sales: "Julia" },
  { name: "BDB (Buca Di Beppo)",             sales: "Pat" },
  { name: "Black Bear Diner",                sales: "Masen" },
  { name: "Boyer (Village Inn)",             sales: "Pat" },
  { name: "Famous Daves Franchise",          sales: "Pat" },
  { name: "Hampton Social",                  sales: "Masen" },
  { name: "LDL Holdings (Village Inn)",      sales: "Pat" },
  { name: "Puttshack",                       sales: "Pat" },
  { name: "Rainforest Cafe",                 sales: "Pat" },
  { name: "Saltgrass",                       sales: "Pat" },
  { name: "Texas De Brazil",                 sales: "Pat" },
  { name: "Topgolf",                         sales: "Pat" },
  { name: "Village Inn Corp",                sales: "Pat" },
  { name: "Village Inn Franchise",           sales: "Pat" },
  { name: "Bluegrass Hosp. (Drake's)",       sales: "Scott" },
  { name: "Bowlero",                         sales: "Jim" },
  { name: "Chicken and Pickle",              sales: "" },
  { name: "Del Frisco Double Eagle",         sales: "Pat" },
  { name: "Del Frisco Grille Corp",          sales: "Pat" },
  { name: "East Coast Wings",                sales: "" },
  { name: "Eat N Park",                      sales: "Maggie" },
  { name: "Flynn",                           sales: "Scott" },
  { name: "Grimaldi's",                      sales: "Brent" },
  { name: "Hal Smith",                       sales: "Jim" },
  { name: "Hickory Tavern",                  sales: "Scott" },
  { name: "KeKe's",                          sales: "Jim" },
  { name: "Lou Malnatis",                    sales: "Masen" },
  { name: "Red Lobster",                     sales: "" },
  { name: "Scramblers",                      sales: "Scott" },
  { name: "Seasons 52",                      sales: "Mary" },
  { name: "Silver Diner",                    sales: "Jim" },
  { name: "Taste Buds",                      sales: "TJ" },
  { name: "Walk On's",                       sales: "Pat" },
  { name: "Yard House",                      sales: "Mary" },
];
window.ROLLOUT_CSRS = ["Jen", "Kassandra", "Maryssa", "Peyton", "Tracy"];

/* Everyone who can be CSR or Sales on a rollout, by first name:
   the name shown on their avatar (first name + last initial; the
   initials are read from it) and their avatar's data color: one of
   the six --datacolor hues and a shade 00–07 (see
   components/avatar/avatar.css for how the shade sets ink and ring). Brent and Julia are on the sheet but
   have no last initial yet. In Angular: the user directory. */
window.ROLLOUT_PEOPLE = {
  Kassandra: { name: "Kassandra P", color: "cherry", shade: "02" },
  Pat:       { name: "Pat R",       color: "blueberry", shade: "05" },
  Maryssa:   { name: "Maryssa K",   color: "mint", shade: "03" },
  Scott:     { name: "Scott T",     color: "orange", shade: "06" },
  Tracy:     { name: "Tracy K",     color: "grape", shade: "02" },
  Jim:       { name: "Jim R",       color: "lemon", shade: "05" },
  TJ:        { name: "TJ R",        color: "cherry", shade: "06" },
  Mary:      { name: "Mary A",      color: "blueberry", shade: "02" },
  Masen:     { name: "Masen M",     color: "orange", shade: "03" },
  Jen:       { name: "Jen P",       color: "mint", shade: "06" },
  Peyton:    { name: "Peyton K",    color: "grape", shade: "05" },
  Maggie:    { name: "Maggie S",    color: "lemon", shade: "02" },
  Brent:     { name: "Brent",       color: "lemon", shade: "07" },
  Julia:     { name: "Julia",       color: "cherry", shade: "04" }
};
