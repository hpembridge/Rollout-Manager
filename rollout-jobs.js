/* ============================================================
   Job directory — seed data, prototype only.
   ------------------------------------------------------------
   The jobs a new master ticket can be added from, and the customer
   each belongs to. Adding a master ticket checks the typed job
   number against this: it must exist, belong to the rollout's
   customer, and not already be in the rollout. The jobs already on
   the seed rollouts are not listed — they are in their rollouts.
   In Angular this is a lookup against JM's jobs.
   ============================================================ */
window.ROLLOUT_JOBS = [
  { job: "500104", customer: "Puttshack",                      desc: "Kids Menu" },
  { job: "500105", customer: "Puttshack",                      desc: "Drink Menu Card" },
  { job: "500106", customer: "Puttshack",                      desc: "Table Tent" },
  { job: "500206", customer: "(3244) Famous Dave's Corporate", desc: "Kids Menu" },
  { job: "500207", customer: "(3244) Famous Dave's Corporate", desc: "Catering Flyer" },
  { job: "413893", customer: "(21491) Fogo De Chao Corporate", desc: "Lunch Menu" },
  { job: "413894", customer: "(21491) Fogo De Chao Corporate", desc: "Wine List" },
  /* Other customers' jobs, to show the wrong-customer refusal. */
  { job: "600101", customer: "Topgolf",                        desc: "Event Menu" },
  { job: "600102", customer: "Red Lobster",                    desc: "Lunch Insert" },
  { job: "500301", customer: "Black Bear Diner",               desc: "Placemat" },
];
