/* ============================================================
   Customers and CSRs a rollout can be assigned to — seed data.
   ------------------------------------------------------------
   Sales is not chosen on a rollout: it comes with the customer
   (the account's sales rep). Names and reps are from the rollout
   planning spreadsheet; the Fogo de Chao account has no rep on
   that sheet, so its `sales` is empty.
   In Angular this is the customer lookup the job header already
   uses, and sales is read from the account.
   ============================================================ */
window.ROLLOUT_CUSTOMERS = [
  { name: "(3244) Famous Dave's Corporate",  sales: "Pat" },
  { name: "(21491) Fogo De Chao Corporate",  sales: "" },
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
];
window.ROLLOUT_CSRS = ["Jen", "Kassandra"];
