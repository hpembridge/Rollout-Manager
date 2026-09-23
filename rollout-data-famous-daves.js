/* ============================================================
   Rollout Manager - seed data (Famous Dave's Corporate)
   ------------------------------------------------------------
   From the 22 job tickets in the Famous Dave's Corporate rollout
   PDF (printed 9/22/2026). Grouped into master tickets by the part
   of the job description before " - ", with what follows as the
   version: "To Go Menu - Retro East" -> master "To Go Menu",
   version "Retro East".

   Where each piece came from:
     versions  -> one master ticket per product. A product with one
                  job keeps that job number; a product with several
                  gets a PLACEHOLDER number (5002xx) and each of its
                  versions keeps its real job number (tier.job).
                  Specs are detail #1 of the first job in the group.
     addresses -> every ship-to across the tickets, de-duplicated by
                  street address (42 locations, including Granite
                  City and Tahoe Joe's ghost kitchens).
     qtys      -> the "Addtnl Info" quantity on each ship-to. The
                  tickets' own quantities run 5 over the shipped sum
                  on several jobs (overs); the ship-to numbers win.
                  Beverage Folder - Sioux Falls ships "Full Amount",
                  entered as the ticket quantity (80).
     tierOf    -> which job (version) an address came from.

   Dine In Menu Card - Brookfield is 11 x 14 where the other six
   Dine In Menu Card versions are 11 x 17, so it is its own master
   ticket: versions share their master ticket's specs.
   ============================================================ */
(window.ROLLOUTS = window.ROLLOUTS || {})["famous-daves-corp"] = {
  "rollout": {
    "id": "famous-daves-corp",
    "_milestonesNote": "SAMPLE dates for the dashboard demo, relative to 9/22/2026.",
    "milestones": {
      "filesReceived": {
        "target": "2026-09-14",
        "actual": "2026-09-15"
      },
      "tickets": {
        "target": "2026-09-18",
        "actual": "2026-09-18"
      },
      "initialProofOut": {
        "target": "2026-09-24",
        "note": "To Go Menu v4 copy still with client."
      },
      "filesApproved": {
        "target": "2026-10-01"
      },
      "printed": {
        "target": "2026-10-12"
      },
      "cut": {
        "target": "2026-10-14"
      },
      "finishing": {
        "target": "2026-10-16"
      },
      "shipDate": {
        "target": "2026-10-20"
      },
      "billingPrep": {
        "target": "2026-10-23"
      },
      "billingCompleted": {
        "target": "2026-10-30"
      }
    },
    "customer": "(3244) Famous Dave's Corporate",
    "name": "Corporate Rollout",
    "csr": "Kassandra",
    "sales": "Pat"
  },
  "specs": [
    {
      "id": "sp1",
      "detail": 0,
      "section": "General",
      "field": "Menu Size"
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
    },
    {
      "id": "sp4",
      "detail": 0,
      "section": "Print Finishing",
      "field": "UV"
    },
    {
      "id": "sp5",
      "detail": 0,
      "section": "General",
      "field": "Number of Panels"
    },
    {
      "id": "sp6",
      "detail": 0,
      "section": "General",
      "field": "Number of Sides"
    }
  ],
  "versions": [
    {
      "id": "v1",
      "job": "500201",
      "desc": "Catering Menus",
      "fields": {},
      "tiers": [
        {
          "id": "t1",
          "name": "Corp",
          "job": "413810"
        },
        {
          "id": "t2",
          "name": "Ghost Kitchen",
          "job": "413804"
        }
      ],
      "details": [
        {
          "name": "Catering Menus",
          "specs": {
            "General|Menu Size": "14x9.375 Flat; 4.66x9.375 Folded",
            "Paper|Type": "Uncoated",
            "Paper|Weight": "70# Text",
            "General|Number of Panels": "3",
            "General|Number of Sides": "2"
          }
        }
      ]
    },
    {
      "id": "v2",
      "job": "413808",
      "desc": "Pig Hats",
      "fields": {},
      "tiers": [],
      "details": [
        {
          "name": "Pig Hats",
          "specs": {
            "General|Menu Size": "Die Cut",
            "Paper|Type": "Reply Card",
            "Paper|Weight": "7pt",
            "General|Number of Panels": "1",
            "General|Number of Sides": "2"
          }
        }
      ]
    },
    {
      "id": "v3",
      "job": "413807",
      "desc": "Kids Menu",
      "fields": {},
      "tiers": [],
      "details": [
        {
          "name": "Kids Menus",
          "specs": {
            "General|Menu Size": "8.5 x 11",
            "Paper|Type": "Uncoated",
            "Paper|Weight": "70# Text",
            "General|Number of Panels": "1",
            "General|Number of Sides": "2"
          }
        }
      ]
    },
    {
      "id": "v4",
      "job": "500202",
      "desc": "Dine In Menus",
      "fields": {},
      "tiers": [
        {
          "id": "t1",
          "name": "Ghost Kitchen T J",
          "job": "413743"
        },
        {
          "id": "t2",
          "name": "Ghost Kitchen G C",
          "job": "413742"
        }
      ],
      "details": [
        {
          "name": "Menus",
          "specs": {
            "General|Menu Size": "8.5 x 14",
            "Paper|Type": "Uncoated",
            "Paper|Weight": "70# Text",
            "General|Number of Panels": "1",
            "General|Number of Sides": "1"
          }
        }
      ]
    },
    {
      "id": "v5",
      "job": "500203",
      "desc": "To Go Menu",
      "fields": {},
      "tiers": [
        {
          "id": "t1",
          "name": "Retro High N C",
          "job": "413741"
        },
        {
          "id": "t2",
          "name": "Retro East N C",
          "job": "413738"
        },
        {
          "id": "t3",
          "name": "Retro Full Serve",
          "job": "413736"
        },
        {
          "id": "t4",
          "name": "Retro East",
          "job": "413735"
        },
        {
          "id": "t5",
          "name": "Full Serve High",
          "job": "413734"
        },
        {
          "id": "t6",
          "name": "Core High",
          "job": "413733"
        },
        {
          "id": "t7",
          "name": "Brookfield",
          "job": "413732"
        }
      ],
      "details": [
        {
          "name": "To Go",
          "specs": {
            "General|Menu Size": "14x9.375 Flat; 4.66x9.375 Folded",
            "Paper|Type": "Uncoated",
            "Paper|Weight": "70# Text",
            "General|Number of Panels": "3",
            "General|Number of Sides": "2"
          }
        }
      ]
    },
    {
      "id": "v6",
      "job": "500204",
      "desc": "Dine In Menu Card",
      "fields": {},
      "tiers": [
        {
          "id": "t1",
          "name": "Retro High N C",
          "job": "413731"
        },
        {
          "id": "t2",
          "name": "Retro East N C",
          "job": "413730"
        },
        {
          "id": "t3",
          "name": "Retro Full Serve",
          "job": "413729"
        },
        {
          "id": "t4",
          "name": "Retro East",
          "job": "413728"
        },
        {
          "id": "t5",
          "name": "Full Serve High",
          "job": "413727"
        },
        {
          "id": "t6",
          "name": "Core High",
          "job": "413726"
        }
      ],
      "details": [
        {
          "name": "Menu Card",
          "specs": {
            "General|Menu Size": "11 x 17",
            "Paper|Type": "Durapoly",
            "Paper|Weight": "20pt",
            "Print Finishing|UV": "LYALL/SATIN",
            "General|Number of Panels": "1",
            "General|Number of Sides": "2"
          }
        }
      ]
    },
    {
      "id": "v7",
      "job": "413724",
      "desc": "Dine In Menu Card (11 x 14)",
      "fields": {},
      "tiers": [],
      "details": [
        {
          "name": "Menus",
          "specs": {
            "General|Menu Size": "11 x 14",
            "Paper|Type": "Durapoly",
            "Paper|Weight": "20pt",
            "Print Finishing|UV": "LYALL/SATIN",
            "General|Number of Panels": "1",
            "General|Number of Sides": "2"
          }
        }
      ]
    },
    {
      "id": "v8",
      "job": "500205",
      "desc": "Beverage Folder",
      "fields": {},
      "tiers": [
        {
          "id": "t1",
          "name": "Jones",
          "job": "413715"
        },
        {
          "id": "t2",
          "name": "Sioux Falls",
          "job": "413713"
        }
      ],
      "details": [
        {
          "name": "Folder",
          "specs": {
            "General|Menu Size": "9x14 Flat; 4.5x14",
            "Paper|Type": "Durapoly",
            "Paper|Weight": "20pt",
            "Print Finishing|UV": "MATTE",
            "General|Number of Panels": "2",
            "General|Number of Sides": "2"
          }
        }
      ]
    }
  ],
  "addresses": [
    {
      "id": "a1",
      "name": "Chandler",
      "city": "AZ 85226",
      "street": "3250 W. Frye Road South Side Of Chandler Fashion Center Chandler AZ 85226"
    },
    {
      "id": "a2",
      "name": "Mesa",
      "city": "AZ 85201",
      "street": "1011 N. Dobson Road Mesa AZ 85201"
    },
    {
      "id": "a3",
      "name": "Peoria",
      "city": "AZ 85382",
      "street": "16148 N. 83rd Ave. Across From Peoria Sports Complex Peoria AZ 85382"
    },
    {
      "id": "a4",
      "name": "Denver/Stapleton",
      "city": "CO 80238",
      "street": "7557 East 36th Avenue Denver CO 80238"
    },
    {
      "id": "a5",
      "name": "Thornton",
      "city": "CO 80023",
      "street": "16539 North Washington Street Thornton CO 80023"
    },
    {
      "id": "a6",
      "name": "Aurora",
      "city": "CO 80016",
      "street": "15725 E. Briarwood Circle Aurora CO 80016"
    },
    {
      "id": "a7",
      "name": "West Des Moines",
      "city": "IA 50266",
      "street": "1720 22nd St. West Des Moines IA 50266"
    },
    {
      "id": "a8",
      "name": "Cedar Falls",
      "city": "IA 50613",
      "street": "6222 University Ave. Cedar Falls IA 50613"
    },
    {
      "id": "a9",
      "name": "Indianapolis",
      "city": "IN 46268",
      "street": "3645 Vincennes Road Indianapolis IN 46268"
    },
    {
      "id": "a10",
      "name": "Louisville",
      "city": "KY 40220",
      "street": "8605 Citadel Way Louisville KY 40220"
    },
    {
      "id": "a11",
      "name": "Saginaw",
      "city": "MI 48604",
      "street": "5665 Bay Road Saginaw MI 48604"
    },
    {
      "id": "a12",
      "name": "Flint",
      "city": "MI 48507",
      "street": "G-3558 Miller Road Flint MI 48507"
    },
    {
      "id": "a13",
      "name": "Forest Lake",
      "city": "MN 55025",
      "street": "43 19th St. SW Forest Lake MN 55025"
    },
    {
      "id": "a14",
      "name": "Highland Park/St. Paul",
      "city": "MN 55116",
      "street": "1930 W. 7th St. St. Paul MN 55116"
    },
    {
      "id": "a15",
      "name": "Roseville",
      "city": "MN 55113",
      "street": "2131 Snelling Ave. Roseville MN 55113"
    },
    {
      "id": "a16",
      "name": "Bellevue",
      "city": "NE 68123",
      "street": "2015 Pratt Ave Suite:125 Bellevue NE 68123"
    },
    {
      "id": "a17",
      "name": "Lincoln",
      "city": "NE 68516",
      "street": "2750 Pine Lake Rd. Lincoln NE 68516"
    },
    {
      "id": "a18",
      "name": "Mountainside",
      "city": "NJ 07092",
      "street": "1443 Route 22 East Mountainside NJ 07092"
    },
    {
      "id": "a19",
      "name": "Westbury",
      "city": "NY 11590",
      "street": "1060 Corporate Drive Westbury NY 11590"
    },
    {
      "id": "a20",
      "name": "Hermitage",
      "city": "TN 37076",
      "street": "5000 Old Hickory Boulevard Hermitage TN 37076"
    },
    {
      "id": "a21",
      "name": "Smyrna",
      "city": "TN 37167",
      "street": "991 Industrial Boulevard Smyrna TN 37167"
    },
    {
      "id": "a22",
      "name": "Brookfield",
      "city": "WI 53005",
      "street": "15455 West Bluemound Rd Suite 200 Brookfield WI 53005"
    },
    {
      "id": "a23",
      "name": "Greenfield",
      "city": "WI 53221",
      "street": "5077 South 27th Street Greenfield WI 53221"
    },
    {
      "id": "a24",
      "name": "Madison",
      "city": "WI 53715",
      "street": "900 South Park Street Madison WI 53715"
    },
    {
      "id": "a25",
      "name": "La Crosse",
      "city": "WI 54601",
      "street": "3055 State Highway 16 La Crosse WI 54601"
    },
    {
      "id": "a26",
      "name": "Tahoe Joe's Famous Steakhouse - Bakersfield",
      "city": "CA 93311",
      "street": "9000 Ming Ave Bakersfield CA 93311"
    },
    {
      "id": "a27",
      "name": "Granite City Brewery - Cedar Rapids",
      "city": "IA 52403",
      "street": "4755 1st Avenue S E Cedar Rapids IA 52403"
    },
    {
      "id": "a28",
      "name": "Granite City Brewery - Naperville",
      "city": "IL 60563",
      "street": "1828 Abriter Court Naperville IL 60563"
    },
    {
      "id": "a29",
      "name": "Granite City Brewery - Fort Wayne",
      "city": "IN 46805",
      "street": "3809 Coldwater Road Fort Wayne IN 46805"
    },
    {
      "id": "a30",
      "name": "Granite City Brewery - Troy",
      "city": "MI 48084",
      "street": "699 W Big Beaver Road Troy MI 48084"
    },
    {
      "id": "a31",
      "name": "Granite City Brewery - St. Cloud",
      "city": "MN 56301",
      "street": "3945 2nd St. S St. Cloud MN 56301"
    },
    {
      "id": "a32",
      "name": "Granite City Brewery - Zona Rosa",
      "city": "MO 64153",
      "street": "8461 Nw Prairie View Road Zona Rosa MO 64153"
    },
    {
      "id": "a33",
      "name": "Granite City Brewery - Fargo",
      "city": "ND 58103",
      "street": "1636 Sw 42nd Street Fargo ND 58103"
    },
    {
      "id": "a34",
      "name": "Granite City Brewery - Franklin",
      "city": "TN 37067",
      "street": "1864 West Mcewen Drive Franklin TN 37067"
    },
    {
      "id": "a35",
      "name": "Rockford",
      "city": "IL 61114",
      "street": "3303 North Perryville Road Rockford IL 61114"
    },
    {
      "id": "a36",
      "name": "Minnetonka",
      "city": "MN 55345",
      "street": "14601 Highway 7 Minnetonka MN 55345"
    },
    {
      "id": "a37",
      "name": "Maple Grove",
      "city": "MN 55369",
      "street": "7825 Vinewood Lane N Maple Grove MN 55369"
    },
    {
      "id": "a38",
      "name": "Apple Valley",
      "city": "MN 55124",
      "street": "7593 147th St. Apple Valley MN 55124"
    },
    {
      "id": "a39",
      "name": "Plymouth",
      "city": "MN 55441",
      "street": "11308 Highway 55 Plymouth MN 55441"
    },
    {
      "id": "a40",
      "name": "Kansas City (Speedway)",
      "city": "KS 66111",
      "street": "1320 Village West Pkwy Kansas City KS 66111"
    },
    {
      "id": "a41",
      "name": "Branson",
      "city": "MO 65616",
      "street": "1855 W 76 Country Blvd Branson MO 65616"
    },
    {
      "id": "a42",
      "name": "Sioux Falls",
      "city": "SD 57105",
      "street": "2700 South Minnesota Avenue Sioux Falls SD 57105"
    }
  ],
  "qtys": {
    "v1::a1": "1000",
    "v1::a2": "1000",
    "v1::a3": "1000",
    "v1::a4": "1000",
    "v1::a5": "1000",
    "v1::a6": "1000",
    "v1::a7": "1000",
    "v1::a8": "500",
    "v1::a9": "1000",
    "v1::a10": "1000",
    "v1::a11": "500",
    "v1::a12": "500",
    "v1::a13": "500",
    "v1::a14": "500",
    "v1::a15": "500",
    "v1::a16": "500",
    "v1::a17": "500",
    "v1::a18": "500",
    "v1::a19": "500",
    "v1::a20": "1000",
    "v1::a21": "500",
    "v1::a22": "500",
    "v1::a23": "500",
    "v1::a24": "500",
    "v1::a25": "1000",
    "v1::a26": "250",
    "v1::a27": "250",
    "v1::a28": "250",
    "v1::a29": "250",
    "v1::a30": "250",
    "v1::a31": "250",
    "v1::a32": "250",
    "v1::a33": "250",
    "v1::a34": "250",
    "v2::a1": "1000",
    "v2::a2": "1000",
    "v2::a3": "1000",
    "v2::a6": "1000",
    "v2::a4": "1000",
    "v2::a5": "1000",
    "v2::a7": "1000",
    "v2::a8": "1000",
    "v2::a35": "1000",
    "v2::a9": "1000",
    "v2::a10": "1000",
    "v2::a11": "500",
    "v2::a12": "500",
    "v2::a36": "500",
    "v2::a37": "500",
    "v2::a38": "500",
    "v2::a13": "500",
    "v2::a14": "1000",
    "v2::a39": "500",
    "v2::a15": "1000",
    "v2::a16": "1000",
    "v2::a17": "1000",
    "v2::a18": "1000",
    "v2::a19": "1000",
    "v2::a20": "1000",
    "v2::a21": "1000",
    "v2::a23": "1000",
    "v2::a24": "1000",
    "v2::a25": "1000",
    "v3::a1": "1000",
    "v3::a2": "1000",
    "v3::a3": "1000",
    "v3::a6": "1000",
    "v3::a4": "1000",
    "v3::a5": "1000",
    "v3::a7": "1000",
    "v3::a8": "1000",
    "v3::a35": "1000",
    "v3::a9": "1000",
    "v3::a10": "1000",
    "v3::a11": "1000",
    "v3::a12": "1000",
    "v3::a36": "1000",
    "v3::a37": "1000",
    "v3::a38": "1000",
    "v3::a13": "1000",
    "v3::a14": "1000",
    "v3::a39": "1000",
    "v3::a15": "1000",
    "v3::a16": "1000",
    "v3::a17": "1000",
    "v3::a18": "1000",
    "v3::a19": "1000",
    "v3::a20": "1000",
    "v3::a21": "1000",
    "v3::a23": "1000",
    "v3::a24": "1000",
    "v3::a25": "1000",
    "v4::a26": "300",
    "v4::a27": "300",
    "v4::a28": "300",
    "v4::a29": "300",
    "v4::a30": "300",
    "v4::a31": "300",
    "v4::a32": "300",
    "v4::a33": "300",
    "v4::a34": "300",
    "v5::a6": "4000",
    "v5::a8": "500",
    "v5::a14": "3000",
    "v5::a24": "2000",
    "v5::a19": "4000",
    "v5::a4": "4000",
    "v5::a5": "4000",
    "v5::a7": "3000",
    "v5::a11": "3000",
    "v5::a12": "3000",
    "v5::a18": "4000",
    "v5::a23": "5000",
    "v5::a10": "3000",
    "v5::a21": "3000",
    "v5::a20": "3000",
    "v5::a3": "3000",
    "v5::a1": "3000",
    "v5::a2": "3000",
    "v5::a35": "3000",
    "v5::a9": "3000",
    "v5::a36": "1000",
    "v5::a37": "1000",
    "v5::a17": "3000",
    "v5::a16": "3000",
    "v5::a25": "3000",
    "v5::a38": "1000",
    "v5::a13": "3000",
    "v5::a39": "1000",
    "v5::a15": "3000",
    "v5::a22": "1000",
    "v6::a6": "100",
    "v6::a8": "50",
    "v6::a14": "15",
    "v6::a24": "15",
    "v6::a19": "50",
    "v6::a4": "100",
    "v6::a5": "100",
    "v6::a7": "150",
    "v6::a11": "150",
    "v6::a12": "150",
    "v6::a18": "150",
    "v6::a23": "150",
    "v6::a10": "150",
    "v6::a21": "150",
    "v6::a20": "150",
    "v6::a3": "200",
    "v6::a1": "200",
    "v6::a2": "200",
    "v6::a35": "150",
    "v6::a9": "150",
    "v6::a36": "100",
    "v6::a37": "100",
    "v6::a17": "150",
    "v6::a16": "150",
    "v6::a25": "150",
    "v6::a38": "50",
    "v6::a13": "15",
    "v6::a15": "15",
    "v6::a39": "50",
    "v7::a22": "15",
    "v8::a40": "60",
    "v8::a41": "60",
    "v8::a42": "80"
  },
  "tierOf": {
    "v1::a1": "t1",
    "v1::a2": "t1",
    "v1::a3": "t1",
    "v1::a4": "t1",
    "v1::a5": "t1",
    "v1::a6": "t1",
    "v1::a7": "t1",
    "v1::a8": "t1",
    "v1::a9": "t1",
    "v1::a10": "t1",
    "v1::a11": "t1",
    "v1::a12": "t1",
    "v1::a13": "t1",
    "v1::a14": "t1",
    "v1::a15": "t1",
    "v1::a16": "t1",
    "v1::a17": "t1",
    "v1::a18": "t1",
    "v1::a19": "t1",
    "v1::a20": "t1",
    "v1::a21": "t1",
    "v1::a22": "t1",
    "v1::a23": "t1",
    "v1::a24": "t1",
    "v1::a25": "t1",
    "v1::a26": "t2",
    "v1::a27": "t2",
    "v1::a28": "t2",
    "v1::a29": "t2",
    "v1::a30": "t2",
    "v1::a31": "t2",
    "v1::a32": "t2",
    "v1::a33": "t2",
    "v1::a34": "t2",
    "v4::a26": "t1",
    "v4::a27": "t2",
    "v4::a28": "t2",
    "v4::a29": "t2",
    "v4::a30": "t2",
    "v4::a31": "t2",
    "v4::a32": "t2",
    "v4::a33": "t2",
    "v4::a34": "t2",
    "v5::a6": "t1",
    "v5::a8": "t1",
    "v5::a14": "t1",
    "v5::a24": "t1",
    "v5::a19": "t2",
    "v5::a4": "t3",
    "v5::a5": "t3",
    "v5::a7": "t3",
    "v5::a11": "t3",
    "v5::a12": "t3",
    "v5::a18": "t3",
    "v5::a23": "t3",
    "v5::a10": "t4",
    "v5::a21": "t4",
    "v5::a20": "t4",
    "v5::a3": "t5",
    "v5::a1": "t5",
    "v5::a2": "t5",
    "v5::a35": "t5",
    "v5::a9": "t5",
    "v5::a36": "t5",
    "v5::a37": "t5",
    "v5::a17": "t5",
    "v5::a16": "t5",
    "v5::a25": "t5",
    "v5::a38": "t6",
    "v5::a13": "t6",
    "v5::a39": "t6",
    "v5::a15": "t6",
    "v5::a22": "t7",
    "v6::a6": "t1",
    "v6::a8": "t1",
    "v6::a14": "t1",
    "v6::a24": "t1",
    "v6::a19": "t2",
    "v6::a4": "t3",
    "v6::a5": "t3",
    "v6::a7": "t3",
    "v6::a11": "t3",
    "v6::a12": "t3",
    "v6::a18": "t3",
    "v6::a23": "t3",
    "v6::a10": "t4",
    "v6::a21": "t4",
    "v6::a20": "t4",
    "v6::a3": "t5",
    "v6::a1": "t5",
    "v6::a2": "t5",
    "v6::a35": "t5",
    "v6::a9": "t5",
    "v6::a36": "t5",
    "v6::a37": "t5",
    "v6::a17": "t5",
    "v6::a16": "t5",
    "v6::a25": "t5",
    "v6::a38": "t6",
    "v6::a13": "t6",
    "v6::a15": "t6",
    "v6::a39": "t6",
    "v8::a40": "t1",
    "v8::a41": "t1",
    "v8::a42": "t2"
  },
  "addrValues": {
    "a1::account": "CMP (487275)",
    "a1::method": "Ground (will take 4 day)",
    "a1::attn": "GM",
    "a2::account": "CMP (487275)",
    "a2::method": "Ground (will take 4 day)",
    "a2::attn": "GM",
    "a3::account": "CMP (487275)",
    "a3::method": "Ground (will take 4 day)",
    "a3::attn": "GM",
    "a4::account": "CMP (487275)",
    "a4::method": "Ground (will take 3 day)",
    "a4::attn": "GM",
    "a5::account": "CMP (487275)",
    "a5::method": "Ground (will take 3 day)",
    "a5::attn": "GM",
    "a6::account": "CMP (487275)",
    "a6::method": "Ground (will take 2 day)",
    "a6::attn": "GM",
    "a7::account": "CMP (487275)",
    "a7::method": "Ground (will take 2 day)",
    "a7::attn": "GM",
    "a8::account": "CMP (487275)",
    "a8::method": "Ground (will take 2 day)",
    "a8::attn": "GM",
    "a9::account": "CMP (487275)",
    "a9::method": "Ground (will take 1 days)",
    "a9::attn": "GM",
    "a10::account": "CMP (487275)",
    "a10::method": "Ground (will take 2 day)",
    "a10::attn": "GM",
    "a11::account": "CMP (487275)",
    "a11::method": "Ground (will take 1 days)",
    "a11::attn": "GM",
    "a12::account": "CMP (487275)",
    "a12::method": "Ground (will take 1 days)",
    "a12::attn": "GM",
    "a13::account": "CMP (487275)",
    "a13::method": "Ground (will take 2 day)",
    "a13::attn": "GM",
    "a14::account": "CMP (487275)",
    "a14::method": "Ground (will take 2 day)",
    "a14::attn": "GM",
    "a15::account": "CMP (487275)",
    "a15::method": "Ground (will take 2 day)",
    "a15::attn": "GM",
    "a16::account": "CMP (487275)",
    "a16::method": "Ground (will take 3 day)",
    "a16::attn": "GM",
    "a17::account": "CMP (487275)",
    "a17::method": "Ground (will take 3 day)",
    "a17::attn": "GM",
    "a18::account": "CMP (487275)",
    "a18::method": "Ground (will take 2 day)",
    "a18::attn": "GM",
    "a19::account": "CMP (487275)",
    "a19::method": "Ground (will take 2 day)",
    "a19::attn": "GM",
    "a20::account": "CMP (487275)",
    "a20::method": "Ground (will take 2 day)",
    "a20::attn": "GM",
    "a21::account": "CMP (487275)",
    "a21::method": "Ground (will take 2 day)",
    "a21::attn": "GM",
    "a22::account": "CMP (487275)",
    "a22::method": "Ground (will take 2 day)",
    "a22::attn": "GM",
    "a23::account": "CMP (487275)",
    "a23::method": "Ground (will take 2 day)",
    "a23::attn": "GM",
    "a24::account": "CMP (487275)",
    "a24::method": "Ground (will take 2 day)",
    "a24::attn": "GM",
    "a25::account": "CMP (487275)",
    "a25::method": "Ground (will take 2 day)",
    "a25::attn": "GM",
    "a26::account": "CMP (487275)",
    "a26::method": "Ground (will take 4 day)",
    "a26::attn": "GM",
    "a27::account": "CMP (487275)",
    "a27::method": "Ground (will take 2 day)",
    "a27::attn": "GM",
    "a28::account": "CMP (487275)",
    "a28::method": "Ground (will take 2 day)",
    "a28::attn": "GM",
    "a29::account": "CMP (487275)",
    "a29::method": "Ground (will take 1 days)",
    "a29::attn": "GM",
    "a30::account": "CMP (487275)",
    "a30::method": "Ground (will take 1 days)",
    "a30::attn": "GM",
    "a31::account": "CMP (487275)",
    "a31::method": "Ground (will take 2 day)",
    "a31::attn": "GM",
    "a32::account": "CMP (487275)",
    "a32::method": "Ground (will take 3 day)",
    "a32::attn": "GM",
    "a33::account": "CMP (487275)",
    "a33::method": "Ground (will take 3 day)",
    "a33::attn": "GM",
    "a34::account": "CMP (487275)",
    "a34::method": "Ground (will take 2 day)",
    "a34::attn": "GM",
    "a35::account": "CMP (487275)",
    "a35::method": "Ground (will take 2 day)",
    "a35::attn": "GM",
    "a36::account": "CMP (487275)",
    "a36::method": "Ground (will take 2 day)",
    "a36::attn": "GM",
    "a37::account": "CMP (487275)",
    "a37::method": "Ground (will take 3 day)",
    "a37::attn": "GM",
    "a38::account": "CMP (487275)",
    "a38::method": "Ground (will take 2 day)",
    "a38::attn": "GM",
    "a39::account": "CMP (487275)",
    "a39::method": "Ground (will take 2 day)",
    "a39::attn": "GM",
    "a40::account": "CMP (487275)",
    "a40::method": "Ground (will take 3 day)",
    "a40::attn": "General Manager",
    "a41::account": "CMP (487275)",
    "a41::method": "Ground (will take 3 day)",
    "a41::attn": "General Manager",
    "a42::account": "CMP (487275)",
    "a42::method": "Ground (will take 3 day)",
    "a42::attn": "General Manager"
  }
};
