/* ============================================================
   Rollout Manager - seed data (Puttshack)
   ------------------------------------------------------------
   Chosen because it exercises versions: three master tickets x 20
   locations, where the Main Menu Card and Beverage Menu Inserts
   each come in two versions (T1 for Boston, Miami, Nashville; T2 for
   the rest) and the Dessert Menu Card is one design for everyone.

   Where each piece came from:
     versions   -> ticket names, sizes and stocks from the client
                   ticket list ("Main Menu Card - T1 - Boston  14 x 11
                   20pt Durapoly"). Job numbers are PLACEHOLDERS.
     addresses  -> the 20 locations, names only. No street, code or
                   shipping values were supplied, so the Shipping tab
                   starts empty.
     qtys       -> per-location quantities from the client
                   distribution spreadsheet.
     tierOf     -> the Version column of that spreadsheet (T1/T2 are
                   version names), keyed
                   "vId::aId" -> tier id on that version.

   Open from the rollout dashboard, or rollout-manager.html
   ?rollout=puttshack.
   ============================================================ */
(window.ROLLOUTS = window.ROLLOUTS || {})["puttshack"] = {
  "rollout": {
    "id": "puttshack",
    "pressRun": "Main 20 vers 3,810; Bev 20 ver 2,340; Dessert 20 ver 1,900",
    "_milestonesNote": "From the Rollouts Planning & Production Board sheet, 9/23/2026. Ticked milestones with no date on the sheet have made-up actual dates.",
    "milestones": {
      "filesReceived": {
        "actual": "2026-08-20",
        "note": "8-20 In Creative"
      },
      "initialProofOut": {
        "actual": "2026-09-15",
        "note": "9-15 New Proofs"
      },
      "shipDate": {
        "target": "2026-09-25"
      },
      "onProperty": {
        "target": "2026-09-30"
      }
    },
    "customer": "Puttshack",
    "name": "Menu Rollout",
    "csr": "Kassandra",
    "sales": "Pat"
  },
  "specs": [
    {
      "id": "sp1",
      "detail": 0,
      "section": "General",
      "field": "Size Desc"
    },
    {
      "id": "sp2",
      "detail": 0,
      "section": "Paper",
      "field": "Type"
    },
    {
      "id": "sp3",
      "detail": 0,
      "section": "Paper",
      "field": "Weight"
    }
  ],
  "versions": [
    {
      "id": "v1",
      "job": "500101",
      "desc": "Main Menu Card",
      "fields": {},
      "tiers": [
        {
          "id": "t1",
          "name": "T1"
        },
        {
          "id": "t2",
          "name": "T2"
        }
      ],
      "details": [
        {
          "name": "Card",
          "specs": {
            "General|Size Desc": "14 x 11",
            "Paper|Type": "Durapoly",
            "Paper|Weight": "20pt"
          }
        }
      ]
    },
    {
      "id": "v2",
      "job": "500102",
      "desc": "Beverage Menu Inserts",
      "fields": {},
      "tiers": [
        {
          "id": "t1",
          "name": "T1"
        },
        {
          "id": "t2",
          "name": "T2"
        }
      ],
      "details": [
        {
          "name": "Insert",
          "specs": {
            "General|Size Desc": "11 x 8.5 Flat",
            "Paper|Type": "Durapoly",
            "Paper|Weight": "12pt"
          }
        }
      ]
    },
    {
      "id": "v3",
      "job": "500103",
      "desc": "Dessert Menu Card",
      "fields": {},
      "tiers": [],
      "details": [
        {
          "name": "Card",
          "specs": {
            "General|Size Desc": "5.5 x 8.5",
            "Paper|Type": "Durapoly",
            "Paper|Weight": "20pt"
          }
        }
      ]
    }
  ],
  "addresses": [
    {
      "id": "a1",
      "name": "Boston"
    },
    {
      "id": "a2",
      "name": "Miami"
    },
    {
      "id": "a3",
      "name": "Nashville"
    },
    {
      "id": "a4",
      "name": "Addison"
    },
    {
      "id": "a5",
      "name": "Atlanta"
    },
    {
      "id": "a6",
      "name": "Columbus"
    },
    {
      "id": "a7",
      "name": "Dania Beach"
    },
    {
      "id": "a8",
      "name": "Denver"
    },
    {
      "id": "a9",
      "name": "Dunwoody"
    },
    {
      "id": "a10",
      "name": "Edina"
    },
    {
      "id": "a11",
      "name": "Houston"
    },
    {
      "id": "a12",
      "name": "Louisville"
    },
    {
      "id": "a13",
      "name": "Minneapolis"
    },
    {
      "id": "a14",
      "name": "Natick"
    },
    {
      "id": "a15",
      "name": "Oakbrook"
    },
    {
      "id": "a16",
      "name": "Philadelphia"
    },
    {
      "id": "a17",
      "name": "Pittsburgh"
    },
    {
      "id": "a18",
      "name": "Scottsdale"
    },
    {
      "id": "a19",
      "name": "Skokie"
    },
    {
      "id": "a20",
      "name": "St. Louis"
    }
  ],
  "qtys": {
    "v1::a1": "200",
    "v2::a1": "110",
    "v3::a1": "100",
    "v1::a2": "200",
    "v2::a2": "140",
    "v3::a2": "100",
    "v1::a3": "200",
    "v2::a3": "130",
    "v3::a3": "100",
    "v1::a4": "200",
    "v2::a4": "155",
    "v3::a4": "100",
    "v1::a5": "200",
    "v2::a5": "110",
    "v3::a5": "100",
    "v1::a6": "160",
    "v2::a6": "65",
    "v3::a6": "75",
    "v1::a7": "200",
    "v2::a7": "100",
    "v3::a7": "100",
    "v1::a8": "200",
    "v2::a8": "125",
    "v3::a8": "100",
    "v1::a9": "200",
    "v2::a9": "120",
    "v3::a9": "100",
    "v1::a10": "200",
    "v2::a10": "150",
    "v3::a10": "100",
    "v1::a11": "200",
    "v2::a11": "120",
    "v3::a11": "100",
    "v1::a12": "200",
    "v2::a12": "140",
    "v3::a12": "100",
    "v1::a13": "150",
    "v2::a13": "90",
    "v3::a13": "75",
    "v1::a14": "150",
    "v2::a14": "90",
    "v3::a14": "75",
    "v1::a15": "200",
    "v2::a15": "135",
    "v3::a15": "100",
    "v1::a16": "150",
    "v2::a16": "80",
    "v3::a16": "75",
    "v1::a17": "200",
    "v2::a17": "140",
    "v3::a17": "100",
    "v1::a18": "200",
    "v2::a18": "135",
    "v3::a18": "100",
    "v1::a19": "200",
    "v2::a19": "90",
    "v3::a19": "100",
    "v1::a20": "200",
    "v2::a20": "135",
    "v3::a20": "100"
  },
  "tierOf": {
    "v1::a1": "t1",
    "v2::a1": "t1",
    "v1::a2": "t1",
    "v2::a2": "t1",
    "v1::a3": "t1",
    "v2::a3": "t1",
    "v1::a4": "t2",
    "v2::a4": "t2",
    "v1::a5": "t2",
    "v2::a5": "t2",
    "v1::a6": "t2",
    "v2::a6": "t2",
    "v1::a7": "t2",
    "v2::a7": "t2",
    "v1::a8": "t2",
    "v2::a8": "t2",
    "v1::a9": "t2",
    "v2::a9": "t2",
    "v1::a10": "t2",
    "v2::a10": "t2",
    "v1::a11": "t2",
    "v2::a11": "t2",
    "v1::a12": "t2",
    "v2::a12": "t2",
    "v1::a13": "t2",
    "v2::a13": "t2",
    "v1::a14": "t2",
    "v2::a14": "t2",
    "v1::a15": "t2",
    "v2::a15": "t2",
    "v1::a16": "t2",
    "v2::a16": "t2",
    "v1::a17": "t2",
    "v2::a17": "t2",
    "v1::a18": "t2",
    "v2::a18": "t2",
    "v1::a19": "t2",
    "v2::a19": "t2",
    "v1::a20": "t2",
    "v2::a20": "t2"
  },
  "addrValues": {}
};
