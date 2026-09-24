/* ============================================================
   Rollout dashboard — board rollouts (summary only)
   ------------------------------------------------------------
   The rest of the "Rollouts Planning & Production Board" sheet
   (as of 9/23/2026): customer, rollout name, CSR, sales, the
   Quantity / Press Run text, and the ten milestones. No products,
   versions or addresses — these rollouts live on the dashboard
   only, so their name is not a link into the Rollout Manager.

   How the sheet's cells became milestones:
     a date in a Pre-Production column  -> actual (done) if on or
                                           before 9/23, else target
                                           ("To come", "Awaiting"
                                           always target)
     a date in Ship Date                -> target, unless ticked
     a tick (or "x")                    -> done; its date, if any,
                                           is the actual. Ticks with no
                                           date got a made-up actual:
                                           a business day or two after
                                           the milestone before it, never
                                           past 9/23.
     any other words                    -> kept as the note
   size: products (name, versions, qty) and locations, in the same
   shape the dashboard's Products / Locations / Total qty columns
   use. Taken from the Quantity / Press Run text where it gives
   them; everything it doesn't give (product names, location
   counts, "See Google Doc", "TBD") is MADE UP for the prototype.
   The four Del Frisco Double Eagle rows are one rollout (Fall Menus):
   4 products, 18 versions, 16 locations, 13,965.
   On Property / Goes Live are key dates, not milestones: a
   { target, note }, no actual or status, not shown on the dashboard.
   They were split out of the sheet's Ship Date notes
   ("On prop 9/30", "Goes live 9-29", "Live 11-16"); where the sheet
   date was really the on-property date, the ship date is MADE UP a
   few business days earlier. A rollout that has shipped with no
   on-property date gets a MADE-UP one (ship + 2 business days) and a
   Goes Live date 3 business days after that.
   In Billing: the sheet's "In Billing" (under Billing Done) became
   Billing Prep + In Billing done on MADE-UP recent dates, Billing
   Done still open. Rollouts with Billing Done get MADE-UP Billing
   Prep / In Billing dates a few business days before it.
   Status Check column is not carried over. "Red Loster" in the
   sheet is entered as Red Lobster.

   Puttshack, Famous Daves Corp. and Fogo De Chao are the three
   full rollouts; their sheet rows were applied to those files.
   ============================================================ */
(function(){
  /* One entry per sheet row, same shape as a full rollout's `rollout`
     block plus pressRun. Registered by id like the other seed files. */
  const ROWS = [
    {
      "rollout": {
        "id": "black-bear-diner",
        "size": {
          "products": [
            {
              "name": "Trifold Menu",
              "versions": 9,
              "qty": 7200
            }
          ],
          "locations": 84
        },
        "customer": "Black Bear Diner",
        "name": "",
        "csr": "Jen",
        "sales": "Masen",
        "pressRun": "7,200 trifolds / 9 versions",
        "milestones": {
          "shipDate": {
            "target": "2026-10-05"
          },
          "onProperty": {
            "target": "2026-10-08"
          }
        }
      }
    },
    {
      "rollout": {
        "id": "hampton-social",
        "size": {
          "products": [
            {
              "name": "8.5 x 14 Menu Card",
              "versions": 30,
              "qty": 8325
            }
          ],
          "locations": 11
        },
        "customer": "Hampton Social",
        "name": "",
        "csr": "Jen",
        "sales": "Masen",
        "pressRun": "8,325 / 8.5 x 14 Cards / 30 Versions",
        "milestones": {
          "onProperty": {
            "note": "Nov."
          }
        }
      }
    },
    {
      "rollout": {
        "id": "bdb-buca-di-beppo-posters",
        "size": {
          "products": [
            {
              "name": "Poster",
              "versions": 1,
              "qty": 40
            }
          ],
          "locations": 40
        },
        "customer": "BDB (Buca Di Beppo)",
        "name": "Posters",
        "csr": "Kassandra",
        "sales": "Pat",
        "pressRun": "40 posters; 40 locations",
        "milestones": {
          "filesReceived": {
            "actual": "2026-09-09"
          },
          "tickets": {
            "actual": "2026-09-10"
          },
          "initialProofOut": {
            "actual": "2026-09-10"
          },
          "filesApproved": {
            "actual": "2026-09-10"
          },
          "printed": {
            "done": true,
            "actual": "2026-09-14"
          },
          "cut": {
            "done": true,
            "actual": "2026-09-15"
          },
          "finishing": {
            "done": true,
            "actual": "2026-09-17"
          },
          "shipDate": {
            "done": true,
            "actual": "2026-09-21"
          },
          "onProperty": {
            "target": "2026-09-23"
          },
          "goesLive": {
            "target": "2026-09-28"
          },
          "billingPrep": {
            "actual": "2026-09-21"
          },
          "inBilling": {
            "actual": "2026-09-22"
          }
        }
      }
    },
    {
      "rollout": {
        "id": "boyer-village-inn",
        "size": {
          "products": [
            {
              "name": "Kids Menu",
              "versions": 1,
              "qty": 54000
            },
            {
              "name": "EDD Card",
              "versions": 1,
              "qty": 456
            },
            {
              "name": "Table Tent Trifold",
              "versions": 1,
              "qty": 675
            }
          ],
          "locations": 36
        },
        "customer": "Boyer (Village Inn)",
        "name": "",
        "csr": "Kassandra",
        "sales": "Pat",
        "pressRun": "Kids 54,000; EDD 456; TT trifolds 675",
        "milestones": {
          "filesReceived": {
            "actual": "2026-09-02"
          },
          "tickets": {
            "actual": "2026-09-03"
          },
          "initialProofOut": {
            "actual": "2026-09-03"
          },
          "filesApproved": {
            "actual": "2026-09-08"
          },
          "printed": {
            "done": true,
            "actual": "2026-09-09"
          },
          "cut": {
            "done": true,
            "actual": "2026-09-11"
          },
          "finishing": {
            "done": true,
            "actual": "2026-09-14"
          },
          "shipDate": {
            "done": true,
            "actual": "2026-09-15"
          },
          "onProperty": {
            "target": "2026-09-17"
          },
          "goesLive": {
            "target": "2026-09-22"
          },
          "billingPrep": {
            "actual": "2026-09-21"
          },
          "inBilling": {
            "actual": "2026-09-22"
          }
        }
      }
    },
    {
      "rollout": {
        "id": "famous-daves-franchise",
        "size": {
          "products": [
            {
              "name": "Main Menu",
              "versions": 4,
              "qty": 9300
            },
            {
              "name": "Kids Menu",
              "versions": 1,
              "qty": 6200
            },
            {
              "name": "Catering Menu",
              "versions": 1,
              "qty": 3100
            }
          ],
          "locations": 62
        },
        "customer": "Famous Daves Franchise",
        "name": "",
        "csr": "Kassandra",
        "sales": "Pat",
        "pressRun": "See Google Doc",
        "milestones": {
          "filesReceived": {
            "actual": "2026-08-05",
            "note": "8-5 In Creative"
          },
          "tickets": {
            "actual": "2026-08-31"
          },
          "initialProofOut": {
            "actual": "2026-08-14"
          },
          "filesApproved": {
            "actual": "2026-08-31"
          },
          "printed": {
            "done": true,
            "actual": "2026-09-02"
          },
          "cut": {
            "done": true,
            "actual": "2026-09-03"
          },
          "finishing": {
            "done": true,
            "note": "Fold ✓",
            "actual": "2026-09-07"
          },
          "shipDate": {
            "done": true,
            "actual": "2026-09-08"
          },
          "onProperty": {
            "target": "2026-09-10"
          },
          "goesLive": {
            "target": "2026-09-15"
          },
          "billingPrep": {
            "actual": "2026-09-21"
          },
          "inBilling": {
            "actual": "2026-09-22"
          }
        }
      }
    },
    {
      "rollout": {
        "id": "ldl-holdings-village-inn",
        "size": {
          "products": [
            {
              "name": "Kids Menu",
              "versions": 2,
              "qty": 14000
            },
            {
              "name": "Pie Table Tent",
              "versions": 2,
              "qty": 350
            },
            {
              "name": "EDD Card",
              "versions": 2,
              "qty": 350
            },
            {
              "name": "Senior Breakfast Card",
              "versions": 2,
              "qty": 350
            },
            {
              "name": "Catering Menu",
              "versions": 1,
              "qty": 700
            }
          ],
          "locations": 14
        },
        "customer": "LDL Holdings (Village Inn)",
        "name": "",
        "csr": "Kassandra",
        "sales": "Pat",
        "pressRun": "2 Ver Per - Kids 14,000 / Pie Table Tents 350 / EDD 350 / Senior Breakfast 350 / 1 Ver Catering 700",
        "milestones": {
          "filesReceived": {
            "actual": "2026-09-16"
          },
          "tickets": {
            "actual": "2026-09-18"
          },
          "initialProofOut": {
            "actual": "2026-09-18"
          },
          "filesApproved": {
            "actual": "2026-09-18"
          },
          "printed": {
            "done": true,
            "actual": "2026-09-21"
          },
          "cut": {
            "done": true,
            "actual": "2026-09-22"
          },
          "finishing": {
            "done": true,
            "actual": "2026-09-23"
          },
          "shipDate": {
            "target": "2026-09-23",
            "note": "Believe this is shipped 9/23"
          }
        }
      }
    },
    {
      "rollout": {
        "id": "rainforest-cafe",
        "size": {
          "products": [
            {
              "name": "Main Menu",
              "versions": 1,
              "qty": 1500
            }
          ],
          "locations": 15
        },
        "customer": "Rainforest Cafe",
        "name": "",
        "csr": "Kassandra",
        "sales": "Pat",
        "pressRun": "15 Locations / 1,500 Menus",
        "milestones": {
          "filesReceived": {
            "actual": "2026-09-21"
          },
          "tickets": {
            "actual": "2026-09-21"
          },
          "initialProofOut": {
            "actual": "2026-09-21"
          },
          "filesApproved": {
            "actual": "2026-09-21"
          },
          "printed": {
            "done": true,
            "actual": "2026-09-23"
          },
          "cut": {
            "done": true,
            "actual": "2026-09-23"
          },
          "finishing": {
            "done": true,
            "actual": "2026-09-23"
          },
          "shipDate": {
            "target": "2026-09-25",
            "note": "Ship By 9-25"
          }
        }
      }
    },
    {
      "rollout": {
        "id": "saltgrass-main-menus",
        "size": {
          "products": [
            {
              "name": "Main Menu",
              "versions": 51,
              "qty": 27600
            }
          ],
          "locations": 92
        },
        "customer": "Saltgrass",
        "name": "Main Menus",
        "csr": "Kassandra",
        "sales": "Pat",
        "pressRun": "51 versions; 27,600 qty",
        "milestones": {
          "filesReceived": {
            "actual": "2026-09-11"
          },
          "tickets": {
            "actual": "2026-09-14"
          },
          "initialProofOut": {
            "actual": "2026-09-16"
          },
          "filesApproved": {
            "actual": "2026-09-16"
          },
          "printed": {
            "done": true,
            "actual": "2026-09-18"
          },
          "cut": {
            "done": true,
            "actual": "2026-09-22"
          },
          "finishing": {
            "done": true,
            "actual": "2026-09-23"
          },
          "shipDate": {
            "target": "2026-09-24",
            "note": "Ship by 9-24"
          }
        }
      }
    },
    {
      "rollout": {
        "id": "saltgrass-1-page-dessert-wine",
        "size": {
          "products": [
            {
              "name": "Dessert / Wine Card",
              "versions": 17,
              "qty": 7860
            }
          ],
          "locations": 92
        },
        "customer": "Saltgrass",
        "name": "1 Page Dessert / Wine",
        "csr": "Kassandra",
        "sales": "Pat",
        "pressRun": "17 Versions / 7,860 qty.",
        "milestones": {
          "filesReceived": {
            "actual": "2026-09-21"
          },
          "tickets": {
            "actual": "2026-09-21"
          },
          "shipDate": {
            "target": "2026-09-28"
          },
          "onProperty": {
            "target": "2026-10-01"
          }
        }
      }
    },
    {
      "rollout": {
        "id": "texas-de-brazil-appetizer-wbtg-inserts",
        "size": {
          "products": [
            {
              "name": "Appetizer / WBTG Insert",
              "versions": 1,
              "qty": 896
            }
          ],
          "locations": 57
        },
        "customer": "Texas De Brazil",
        "name": "Appetizer / WBTG Inserts",
        "csr": "Kassandra",
        "sales": "Pat",
        "pressRun": "1 Version 896 Qty. / Ships to 57 Locations",
        "milestones": {
          "filesReceived": {
            "actual": "2026-09-16"
          },
          "tickets": {
            "actual": "2026-09-17"
          },
          "initialProofOut": {
            "actual": "2026-09-17"
          },
          "filesApproved": {
            "actual": "2026-09-18"
          },
          "printed": {
            "done": true,
            "actual": "2026-09-22"
          },
          "cut": {
            "done": true,
            "actual": "2026-09-23"
          },
          "finishing": {
            "done": true,
            "actual": "2026-09-23"
          },
          "shipDate": {
            "target": "2026-03-05",
            "note": "3-5 Days From Approval"
          }
        }
      }
    },
    {
      "rollout": {
        "id": "topgolf-halloween-lto",
        "size": {
          "products": [
            {
              "name": "Halloween LTO Card",
              "versions": 10,
              "qty": 24825
            }
          ],
          "locations": 97
        },
        "customer": "Topgolf",
        "name": "Halloween LTO",
        "csr": "Kassandra",
        "sales": "Pat",
        "pressRun": "10 Versions / 24,825 Qty.",
        "milestones": {
          "filesReceived": {
            "actual": "2026-09-16"
          },
          "tickets": {
            "actual": "2026-09-18"
          },
          "initialProofOut": {
            "actual": "2026-09-18"
          },
          "filesApproved": {
            "actual": "2026-09-21"
          },
          "printed": {
            "done": true,
            "actual": "2026-09-23"
          },
          "cut": {
            "done": true,
            "actual": "2026-09-23"
          },
          "finishing": {
            "done": true,
            "actual": "2026-09-23"
          },
          "shipDate": {
            "target": "2026-09-23"
          }
        }
      }
    },
    {
      "rollout": {
        "id": "topgolf-aquafina-caddy-cards",
        "size": {
          "products": [
            {
              "name": "Aquafina Caddy Card",
              "versions": 1,
              "qty": 19700
            }
          ],
          "locations": 97
        },
        "customer": "Topgolf",
        "name": "Aquafina Caddy Cards",
        "csr": "Kassandra",
        "sales": "Pat",
        "pressRun": "1 Version / 19,700 Qty",
        "milestones": {
          "filesReceived": {
            "actual": "2026-09-17"
          },
          "tickets": {
            "actual": "2026-09-18"
          },
          "initialProofOut": {
            "actual": "2026-09-18"
          },
          "shipDate": {
            "note": "TBD"
          }
        }
      }
    },
    {
      "rollout": {
        "id": "topgolf-membership-caddy-cards",
        "size": {
          "products": [
            {
              "name": "Membership Caddy Card",
              "versions": 15,
              "qty": 2250
            }
          ],
          "locations": 15
        },
        "customer": "Topgolf",
        "name": "Membership Caddy Cards",
        "csr": "Kassandra",
        "sales": "Pat",
        "pressRun": "15 Versions - 2,250",
        "milestones": {
          "filesReceived": {
            "actual": "2026-09-21"
          },
          "tickets": {
            "actual": "2026-09-21"
          },
          "initialProofOut": {
            "actual": "2026-09-21"
          },
          "shipDate": {
            "note": "TBD"
          }
        }
      }
    },
    {
      "rollout": {
        "id": "topgolf-main-menu-rollout-new-format",
        "size": {
          "products": [
            {
              "name": "Main Menu",
              "versions": 12,
              "qty": 14550
            },
            {
              "name": "Kids Menu",
              "versions": 1,
              "qty": 4850
            }
          ],
          "locations": 97
        },
        "customer": "Topgolf",
        "name": "Main Menu Rollout - New Format",
        "csr": "Kassandra",
        "sales": "Pat",
        "pressRun": "TBD",
        "milestones": {
          "filesReceived": {
            "target": "2026-09-25",
            "note": "9-25 In Creative"
          },
          "shipDate": {
            "target": "2026-10-16",
            "note": "Ship by 10-16"
          }
        }
      }
    },
    {
      "rollout": {
        "id": "village-inn-corp",
        "size": {
          "products": [
            {
              "name": "Dine In Trifold",
              "versions": 1,
              "qty": 3660
            },
            {
              "name": "Pie Card",
              "versions": 1,
              "qty": 3805
            },
            {
              "name": "Kids Menu",
              "versions": 1,
              "qty": 97005
            },
            {
              "name": "Catering Menu",
              "versions": 1,
              "qty": 10505
            }
          ],
          "locations": 118
        },
        "customer": "Village Inn Corp",
        "name": "",
        "csr": "Kassandra",
        "sales": "Pat",
        "pressRun": "Dine In Trifold 3,660 / Pie 3,805 / Kids 97,005 / Catering 10,505",
        "milestones": {
          "filesReceived": {
            "actual": "2026-09-18"
          },
          "tickets": {
            "actual": "2026-09-18"
          },
          "initialProofOut": {
            "actual": "2026-09-18"
          },
          "filesApproved": {
            "actual": "2026-09-18"
          },
          "printed": {
            "done": true,
            "actual": "2026-09-21"
          },
          "cut": {
            "done": true,
            "actual": "2026-09-22"
          },
          "finishing": {
            "note": "need to be diecut and fold"
          },
          "shipDate": {
            "target": "2026-09-24"
          }
        }
      }
    },
    {
      "rollout": {
        "id": "village-inn-franchise",
        "size": {
          "products": [
            {
              "name": "Dine In Trifold",
              "versions": 1,
              "qty": 2130
            },
            {
              "name": "Pie Card",
              "versions": 1,
              "qty": 2200
            },
            {
              "name": "Kids Menu",
              "versions": 1,
              "qty": 58000
            }
          ],
          "locations": 71
        },
        "customer": "Village Inn Franchise",
        "name": "",
        "csr": "Kassandra",
        "sales": "Pat",
        "pressRun": "See Google Doc",
        "milestones": {
          "filesReceived": {
            "actual": "2026-08-25",
            "note": "8-25 In Creative"
          },
          "tickets": {
            "actual": "2026-09-15"
          },
          "initialProofOut": {
            "actual": "2026-09-01"
          },
          "filesApproved": {
            "target": "2026-09-15",
            "note": "9-15 - 2 Menus Awaiting Approval"
          },
          "printed": {
            "done": true,
            "actual": "2026-09-16"
          },
          "cut": {
            "done": true,
            "actual": "2026-09-18"
          },
          "shipDate": {
            "target": "2026-09-24"
          },
          "goesLive": {
            "target": "2026-09-29"
          },
          "billingPrep": {
            "actual": "2026-09-21"
          },
          "inBilling": {
            "actual": "2026-09-22"
          }
        }
      }
    },
    {
      "rollout": {
        "id": "walk-on-s-florida-location-updates",
        "size": {
          "products": [
            {
              "name": "Main Menu",
              "versions": 4,
              "qty": 900
            },
            {
              "name": "Kids Menu",
              "versions": 1,
              "qty": 6000
            },
            {
              "name": "To Go Menu",
              "versions": 4,
              "qty": 4000
            },
            {
              "name": "Beverage Card",
              "versions": 4,
              "qty": 300
            }
          ],
          "locations": 12
        },
        "customer": "Walk On's",
        "name": "Florida Location Updates",
        "csr": "Kassandra",
        "sales": "Pat",
        "pressRun": "Main 4 Ver: 900 / Kids 6,000 / ToGo 4 Ver: 4000 / Bev Cards 4 Ver: 300",
        "milestones": {
          "filesReceived": {
            "actual": "2026-09-16"
          },
          "tickets": {
            "actual": "2026-09-18"
          },
          "initialProofOut": {
            "actual": "2026-09-21"
          },
          "filesApproved": {
            "actual": "2026-09-22"
          },
          "printed": {
            "note": "Plated 9/22 & 9/23"
          },
          "shipDate": {
            "target": "2026-09-25"
          }
        }
      }
    },
    {
      "rollout": {
        "id": "hal-smith",
        "size": {
          "products": [
            {
              "name": "Main Menu",
              "versions": 3,
              "qty": 1305
            }
          ],
          "locations": 9
        },
        "customer": "Hal Smith",
        "name": "",
        "csr": "Maryssa",
        "sales": "Jim",
        "pressRun": "3 versions; 1305",
        "milestones": {
          "filesReceived": {
            "actual": "2026-09-08"
          },
          "tickets": {
            "actual": "2026-09-08"
          },
          "initialProofOut": {
            "actual": "2026-09-09"
          },
          "printed": {
            "done": true,
            "actual": "2026-09-11"
          },
          "cut": {
            "done": true,
            "actual": "2026-09-15"
          },
          "finishing": {
            "done": true,
            "actual": "2026-09-17"
          },
          "shipDate": {
            "done": true,
            "actual": "2026-09-18"
          },
          "onProperty": {
            "target": "2026-09-22"
          },
          "goesLive": {
            "target": "2026-09-25"
          },
          "billingPrep": {
            "actual": "2026-09-18"
          },
          "inBilling": {
            "actual": "2026-09-18"
          },
          "billingCompleted": {
            "done": true,
            "actual": "2026-09-21"
          }
        }
      }
    },
    {
      "rollout": {
        "id": "hickory-tavern",
        "size": {
          "products": [
            {
              "name": "Main Menu",
              "versions": 3,
              "qty": 3200
            }
          ],
          "locations": 16
        },
        "customer": "Hickory Tavern",
        "name": "",
        "csr": "Maryssa",
        "sales": "Scott",
        "pressRun": "3 versions; 3,200 qty",
        "milestones": {
          "filesReceived": {
            "actual": "2026-08-31"
          },
          "tickets": {
            "actual": "2026-08-31"
          },
          "initialProofOut": {
            "actual": "2026-08-31"
          },
          "filesApproved": {
            "actual": "2026-09-02"
          },
          "printed": {
            "done": true,
            "actual": "2026-09-03"
          },
          "cut": {
            "done": true,
            "actual": "2026-09-04"
          },
          "finishing": {
            "done": true,
            "actual": "2026-09-07"
          },
          "shipDate": {
            "done": true,
            "actual": "2026-09-07",
            "note": "Ship 9-7 ✓"
          },
          "onProperty": {
            "target": "2026-09-09"
          },
          "goesLive": {
            "target": "2026-09-14"
          },
          "billingPrep": {
            "actual": "2026-09-07"
          },
          "inBilling": {
            "actual": "2026-09-07"
          },
          "billingCompleted": {
            "done": true,
            "actual": "2026-09-08"
          }
        }
      }
    },
    {
      "rollout": {
        "id": "scramblers-352-lto-s",
        "size": {
          "products": [
            {
              "name": "All Day Menu",
              "versions": 6,
              "qty": 2160
            },
            {
              "name": "Carryout Menu",
              "versions": 3,
              "qty": 3500
            }
          ],
          "locations": 38
        },
        "customer": "Scramblers",
        "name": "352 LTO's",
        "csr": "Maryssa",
        "sales": "Scott",
        "pressRun": "All Day 6v (2,160); Carryout 3v (3,500)",
        "milestones": {
          "filesReceived": {
            "actual": "2026-09-08",
            "note": "9-8 for creative"
          },
          "tickets": {
            "actual": "2026-09-08",
            "note": "9-8 creative"
          },
          "shipDate": {
            "target": "2026-10-07",
            "note": "Ship 10-7"
          }
        }
      }
    },
    {
      "rollout": {
        "id": "keke-s",
        "size": {
          "products": [
            {
              "name": "Main Menu",
              "versions": 9,
              "qty": 4450
            }
          ],
          "locations": 64
        },
        "customer": "KeKe's",
        "name": "",
        "csr": "Peyton",
        "sales": "Jim",
        "pressRun": "9 versions; 4,450 total",
        "milestones": {
          "filesReceived": {
            "actual": "2026-09-09"
          },
          "tickets": {
            "actual": "2026-09-09"
          },
          "initialProofOut": {
            "actual": "2026-09-09"
          },
          "filesApproved": {
            "actual": "2026-09-10"
          },
          "printed": {
            "done": true,
            "actual": "2026-09-11"
          },
          "cut": {
            "done": true,
            "actual": "2026-09-14"
          },
          "finishing": {
            "done": true,
            "actual": "2026-09-15"
          },
          "shipDate": {
            "done": true,
            "actual": "2026-09-14"
          },
          "onProperty": {
            "target": "2026-09-17"
          },
          "goesLive": {
            "target": "2026-09-22"
          },
          "billingPrep": {
            "actual": "2026-09-16"
          },
          "inBilling": {
            "actual": "2026-09-17"
          },
          "billingCompleted": {
            "done": true,
            "actual": "2026-09-21"
          }
        }
      }
    },
    {
      "rollout": {
        "id": "silver-diner",
        "size": {
          "products": [
            {
              "name": "Main Menu",
              "versions": 2,
              "qty": 2400
            },
            {
              "name": "Kids Menu",
              "versions": 1,
              "qty": 1600
            }
          ],
          "locations": 8
        },
        "customer": "Silver Diner",
        "name": "",
        "csr": "Peyton",
        "sales": "Jim",
        "pressRun": "",
        "milestones": {
          "filesReceived": {
            "actual": "2026-08-27"
          },
          "tickets": {
            "actual": "2026-08-28"
          },
          "initialProofOut": {
            "actual": "2026-08-27"
          },
          "filesApproved": {
            "actual": "2026-08-28"
          },
          "printed": {
            "done": true,
            "actual": "2026-08-31",
            "note": "Will start printing 8-31; all booklets printed ✓"
          },
          "cut": {
            "done": true,
            "actual": "2026-09-02"
          },
          "finishing": {
            "done": true,
            "actual": "2026-09-04"
          },
          "shipDate": {
            "done": true,
            "actual": "2026-09-09"
          },
          "onProperty": {
            "target": "2026-09-11"
          },
          "goesLive": {
            "target": "2026-09-16"
          },
          "billingPrep": {
            "actual": "2026-09-09"
          },
          "inBilling": {
            "actual": "2026-09-09"
          },
          "billingCompleted": {
            "done": true,
            "actual": "2026-09-10"
          }
        }
      }
    },
    {
      "rollout": {
        "id": "bowlero-table-tents",
        "size": {
          "products": [
            {
              "name": "Table Tent",
              "versions": 12,
              "qty": 89700
            }
          ],
          "locations": 299
        },
        "customer": "Bowlero",
        "name": "Table Tents",
        "csr": "Tracy",
        "sales": "Jim",
        "pressRun": "12 versions, 89,700; 299 locations, 300 each",
        "milestones": {
          "filesReceived": {
            "note": "We are working on files in Trello for them"
          },
          "initialProofOut": {
            "actual": "2026-08-27",
            "note": "3 art 8-27, 12 versions"
          },
          "printed": {
            "done": true,
            "actual": "2026-08-31"
          },
          "cut": {
            "done": true,
            "actual": "2026-09-01"
          },
          "finishing": {
            "done": true,
            "actual": "2026-09-03"
          },
          "shipDate": {
            "done": true,
            "actual": "2026-09-22"
          },
          "onProperty": {
            "target": "2026-09-23"
          },
          "goesLive": {
            "target": "2026-09-28"
          },
          "billingPrep": {
            "actual": "2026-09-22"
          },
          "inBilling": {
            "actual": "2026-09-23"
          }
        }
      }
    },
    {
      "rollout": {
        "id": "flynn",
        "size": {
          "products": [
            {
              "name": "Counter Menu",
              "versions": 1,
              "qty": 64
            },
            {
              "name": "Handheld Menu",
              "versions": 64,
              "qty": 2020
            }
          ],
          "locations": 64
        },
        "customer": "Flynn",
        "name": "",
        "csr": "Tracy",
        "sales": "Scott",
        "pressRun": "Counter 1; handhelds 64 ver = 2020",
        "milestones": {
          "filesReceived": {
            "note": "In typesetting"
          },
          "tickets": {
            "actual": "2026-08-25"
          },
          "initialProofOut": {
            "actual": "2026-08-27"
          },
          "filesApproved": {
            "actual": "2026-09-04",
            "note": "Timeline 9-4; 8-28"
          },
          "printed": {
            "done": true,
            "actual": "2026-09-08"
          },
          "cut": {
            "done": true,
            "actual": "2026-09-09"
          },
          "finishing": {
            "done": true,
            "actual": "2026-09-11"
          },
          "shipDate": {
            "done": true,
            "actual": "2026-09-15"
          },
          "onProperty": {
            "target": "2026-09-17"
          },
          "goesLive": {
            "target": "2026-09-22"
          },
          "billingPrep": {
            "actual": "2026-09-15"
          },
          "inBilling": {
            "actual": "2026-09-15"
          },
          "billingCompleted": {
            "done": true,
            "actual": "2026-09-16"
          }
        }
      }
    },
    {
      "rollout": {
        "id": "grimaldi-s",
        "size": {
          "products": [
            {
              "name": "Menu",
              "versions": 28,
              "qty": 15875
            }
          ],
          "locations": 58
        },
        "customer": "Grimaldi's",
        "name": "",
        "csr": "Tracy",
        "sales": "Brent",
        "pressRun": "28 versions, 3 styles; qty 15,875",
        "milestones": {
          "filesReceived": {
            "actual": "2026-08-25",
            "note": "8-25 (proofreading 8/26)"
          },
          "tickets": {
            "actual": "2026-08-25"
          },
          "initialProofOut": {
            "actual": "2026-08-31"
          },
          "filesApproved": {
            "actual": "2026-09-02"
          },
          "printed": {
            "done": true,
            "actual": "2026-09-04"
          },
          "cut": {
            "done": true,
            "actual": "2026-09-04"
          },
          "finishing": {
            "done": true,
            "actual": "2026-09-04"
          },
          "shipDate": {
            "done": true,
            "actual": "2026-09-04"
          },
          "onProperty": {
            "target": "2026-09-11"
          },
          "goesLive": {
            "target": "2026-09-16"
          },
          "billingPrep": {
            "actual": "2026-09-04"
          },
          "inBilling": {
            "actual": "2026-09-04"
          },
          "billingCompleted": {
            "done": true,
            "actual": "2026-09-07"
          }
        }
      }
    },
    {
      "rollout": {
        "id": "seasons-52",
        "size": {
          "products": [
            {
              "name": "Dinner Menu",
              "versions": 19,
              "qty": 14950
            },
            {
              "name": "Lunch Menu",
              "versions": 20,
              "qty": 13000
            },
            {
              "name": "Kids Menu",
              "versions": 3,
              "qty": 2900
            }
          ],
          "locations": 45
        },
        "customer": "Seasons 52",
        "name": "",
        "csr": "Tracy",
        "sales": "Mary",
        "pressRun": "Dinner 19 vers, qty 14,950; Lunch 20 vers, qty 13,000; Kids 3 ver, 2,900",
        "milestones": {
          "filesReceived": {
            "actual": "2026-08-19",
            "note": "8-19 press proof only 8/26"
          },
          "tickets": {
            "actual": "2026-08-24",
            "note": "8-24 all tickets completed"
          },
          "initialProofOut": {
            "actual": "2026-08-27"
          },
          "filesApproved": {
            "actual": "2026-08-27"
          },
          "printed": {
            "done": true,
            "actual": "2026-08-28"
          },
          "cut": {
            "done": true,
            "actual": "2026-08-31"
          },
          "finishing": {
            "done": true,
            "actual": "2026-09-02"
          },
          "shipDate": {
            "done": true,
            "actual": "2026-09-10"
          },
          "onProperty": {
            "target": "2026-09-15",
            "note": "Plus samples, 10 versions"
          },
          "goesLive": {
            "target": "2026-09-18"
          },
          "billingPrep": {
            "actual": "2026-09-11"
          },
          "inBilling": {
            "actual": "2026-09-14"
          },
          "billingCompleted": {
            "done": true,
            "actual": "2026-09-16"
          }
        }
      }
    },
    {
      "rollout": {
        "id": "taste-buds",
        "size": {
          "products": [
            {
              "name": "Dinner Menu",
              "versions": 7,
              "qty": 1475
            },
            {
              "name": "Lunch Menu",
              "versions": 4,
              "qty": 1175
            }
          ],
          "locations": 7
        },
        "customer": "Taste Buds",
        "name": "",
        "csr": "Tracy",
        "sales": "TJ",
        "pressRun": "Dinner qty 1,475, 7 versions; Lunch qty 1,175, 4 versions",
        "milestones": {
          "filesReceived": {
            "actual": "2026-09-10"
          },
          "tickets": {
            "actual": "2026-09-10"
          },
          "printed": {
            "done": true,
            "actual": "2026-09-14"
          },
          "cut": {
            "done": true,
            "actual": "2026-09-16"
          },
          "finishing": {
            "done": true,
            "actual": "2026-09-17"
          },
          "shipDate": {
            "done": true,
            "actual": "2026-09-15"
          },
          "onProperty": {
            "target": "2026-09-18",
            "note": "Latest 9-21?"
          },
          "goesLive": {
            "target": "2026-09-23"
          },
          "billingPrep": {
            "actual": "2026-09-21"
          },
          "inBilling": {
            "actual": "2026-09-22"
          }
        }
      }
    },
    {
      "rollout": {
        "id": "yard-house-covers",
        "size": {
          "products": [
            {
              "name": "Menu Cover",
              "versions": 1,
              "qty": 1720
            }
          ],
          "locations": 86
        },
        "customer": "Yard House",
        "name": "Covers",
        "csr": "Tracy",
        "sales": "Mary",
        "pressRun": "Covers",
        "milestones": {
          "filesReceived": {
            "target": "2026-09-21",
            "note": "To come 9-21"
          },
          "printed": {
            "note": "Covers plating 9/11"
          },
          "shipDate": {
            "target": "2026-10-26"
          },
          "goesLive": {
            "target": "2026-11-16"
          }
        }
      }
    },
    {
      "rollout": {
        "id": "yard-house-inserts-12-pages",
        "size": {
          "products": [
            {
              "name": "12-Page Insert",
              "versions": 6,
              "qty": 5160
            }
          ],
          "locations": 86
        },
        "customer": "Yard House",
        "name": "Inserts 12 pages",
        "csr": "Tracy",
        "sales": "Mary",
        "pressRun": "Inserts 12 pages",
        "milestones": {
          "filesReceived": {
            "target": "2026-09-21",
            "note": "To come 9-21"
          },
          "printed": {
            "note": "Covers plating 9/11"
          },
          "shipDate": {
            "target": "2026-10-26"
          },
          "goesLive": {
            "target": "2026-11-16"
          }
        }
      }
    },
    {
      "rollout": {
        "id": "bluegrass-hosp-drake-s-oct-bbsotm",
        "size": {
          "products": [
            {
              "name": "BBSOTM Card",
              "versions": 1,
              "qty": 3105
            }
          ],
          "locations": 23
        },
        "customer": "Bluegrass Hosp. (Drake's)",
        "name": "Oct. BBSOTM",
        "csr": "Maryssa",
        "sales": "Scott",
        "pressRun": "Card - Qty 3,105, 1 version",
        "milestones": {
          "filesReceived": {
            "actual": "2026-09-21"
          },
          "tickets": {
            "actual": "2026-09-21"
          },
          "finishing": {
            "note": "DC"
          }
        }
      }
    },
    {
      "rollout": {
        "id": "del-frisco-grille-corp-dessert-beverage-folder",
        "size": {
          "products": [
            {
              "name": "Dessert Beverage Folder",
              "versions": 4,
              "qty": 1300
            }
          ],
          "locations": 13
        },
        "customer": "Del Frisco Grille Corp",
        "name": "Dessert Beverage Folder",
        "csr": "Kassandra",
        "sales": "Pat",
        "pressRun": "4 Versions / 1,300 Qty.",
        "milestones": {
          "filesReceived": {
            "actual": "2026-09-22"
          },
          "tickets": {
            "actual": "2026-09-22"
          },
          "shipDate": {
            "target": "2026-09-28",
            "note": "Ship By 9-28"
          }
        }
      }
    },
    {
      "rollout": {
        "id": "del-frisco-double-eagle-fall-menus",
        "size": {
          "products": [
            {
              "name": "Dinner Menu Folder",
              "versions": 7,
              "qty": 8300
            },
            {
              "name": "Lunch Menu Card",
              "versions": 3,
              "qty": 3600
            },
            {
              "name": "Bar Food Insert",
              "versions": 4,
              "qty": 1015
            },
            {
              "name": "Bar Dessert Insert",
              "versions": 4,
              "qty": 1050
            }
          ],
          "locations": 16
        },
        "customer": "Del Frisco Double Eagle",
        "name": "Fall Menus",
        "csr": "Kassandra",
        "sales": "Pat",
        "pressRun": "Dinner 7 Ver / 8,300; Lunch 3 Ver / 3,600; Bar Food 4 Ver / 1,015; Bar Dessert 4 Ver / 1,050",
        "milestones": {
          "filesReceived": {
            "actual": "2026-09-22"
          },
          "tickets": {
            "actual": "2026-09-23"
          },
          "shipDate": {
            "target": "2026-09-24",
            "note": "Press Proof Ship By 9-24; Full Ship 9-?"
          }
        }
      }
    },
    {
      "rollout": {
        "id": "lou-malnatis",
        "size": {
          "products": [
            {
              "name": "Dine In Menu",
              "versions": 3,
              "qty": 5400
            },
            {
              "name": "Carryout Menu",
              "versions": 2,
              "qty": 8100
            },
            {
              "name": "Catering Menu",
              "versions": 1,
              "qty": 2700
            }
          ],
          "locations": 54
        },
        "customer": "Lou Malnatis",
        "name": "",
        "csr": "Jen",
        "sales": "Masen",
        "pressRun": "stuff see the board",
        "milestones": {}
      }
    },
    {
      "rollout": {
        "id": "red-lobster",
        "size": {
          "products": [
            {
              "name": "Main Menu",
              "versions": 24,
              "qty": 100000
            }
          ],
          "locations": 578
        },
        "customer": "Red Lobster",
        "name": "",
        "csr": "",
        "sales": "",
        "pressRun": "24 versions / 100,000",
        "milestones": {
          "printed": {
            "note": "started printing 9/22"
          },
          "finishing": {
            "note": "die-cut / fold"
          },
          "shipDate": {
            "target": "2026-10-02"
          },
          "onProperty": {
            "target": "2026-10-07"
          }
        }
      }
    },
    {
      "rollout": {
        "id": "east-coast-wings",
        "size": {
          "products": [
            {
              "name": "Main Menu",
              "versions": 19,
              "qty": 2570
            }
          ],
          "locations": 19
        },
        "customer": "East Coast Wings",
        "name": "",
        "csr": "",
        "sales": "",
        "pressRun": "19 versions / 2,570",
        "milestones": {
          "printed": {
            "note": "plated 9/21"
          },
          "shipDate": {
            "target": "2026-09-29",
            "note": "Requested ship date 9/29"
          }
        }
      }
    },
    {
      "rollout": {
        "id": "chicken-and-pickle",
        "size": {
          "products": [
            {
              "name": "Main Menu",
              "versions": 2,
              "qty": 1800
            },
            {
              "name": "Kids Menu",
              "versions": 1,
              "qty": 900
            }
          ],
          "locations": 12
        },
        "customer": "Chicken and Pickle",
        "name": "",
        "csr": "",
        "sales": "",
        "pressRun": "",
        "milestones": {
          "shipDate": {
            "target": "2026-09-23"
          }
        }
      }
    },
    {
      "rollout": {
        "id": "eat-n-park-dessert-folder",
        "size": {
          "products": [
            {
              "name": "Dessert Folder",
              "versions": 1,
              "qty": 3740
            }
          ],
          "locations": 58
        },
        "customer": "Eat N Park",
        "name": "Dessert Folder",
        "csr": "Peyton",
        "sales": "Maggie",
        "pressRun": "1 version / 3,740 qty",
        "milestones": {}
      }
    }
  ];
  const R = window.ROLLOUTS = window.ROLLOUTS || {};
  ROWS.forEach(r => { R[r.rollout.id] = r; });
})();
