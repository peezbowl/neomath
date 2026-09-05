/**
 * NeoMath - Class 10 Mathematics Content Data
 * Edit this file to add or update Class 10 chapters, videos, or study resources.
 */
window.NEOMATH_CLASS10 = {
  grade: "10",
  title: "Class 10 Mathematics (Board Exam Focus)",
  syllabusTarget: "CBSE Standard & Basic Math, ICSE",
  chapters: [
  {
    "id": "c10-ch1",
    "number": 1,
    "title": "Real Numbers",
    "description": "Fundamental Theorem of Arithmetic, proving irrationality of √2, √3, √5, revisited decimal representations of rational numbers, and HCF & LCM relationships.",
    "keyConcepts": [
      "Fundamental Theorem of Arithmetic (Unique Factorization)",
      "Proof by Contradiction for Irrational Numbers",
      "HCF(a, b) × LCM(a, b) = a × b",
      "Revisiting Terminating vs Non-Terminating Decimals"
    ],
    "formulas": [
      {
        "name": "Product Formula",
        "formula": "HCF(a, b) × LCM(a, b) = a × b"
      },
      {
        "name": "Prime Factorization",
        "formula": "n = p₁^k₁ × p₂^k₂ × ... × pₘ^kₘ"
      },
      {
        "name": "Irrationality Test",
        "formula": "If p is prime and p divides a², then p divides a"
      }
    ],
    "difficulty": "Foundation",
    "ncertChapterUrl": "https://ncert.nic.in/textbook.php?jemh1=1-14",
    "notesDownloadUrl": "#",
    "exercisesCount": 3,
    "videoCount": 5,
    "featured": true
  },
  {
    "id": "c10-ch2",
    "number": 2,
    "title": "Polynomials",
    "description": "Geometrical meaning of zeros of a polynomial, relationships between zeros and coefficients for quadratic and cubic polynomials, and division algorithm.",
    "keyConcepts": [
      "Parabolas and Geometrical Meaning of Zeroes",
      "Sum & Product of Zeroes of Quadratic Polynomial",
      "Forming Quadratic Polynomials from Given Zeroes",
      "Cubic Polynomial Zero-Coefficient Relations"
    ],
    "formulas": [
      {
        "name": "Sum of Zeroes (Quadratic)",
        "formula": "α + β = -b / a"
      },
      {
        "name": "Product of Zeroes",
        "formula": "αβ = c / a"
      },
      {
        "name": "Forming Polynomial",
        "formula": "p(x) = k[x² - (α + β)x + αβ]"
      }
    ],
    "difficulty": "Moderate",
    "ncertChapterUrl": "https://ncert.nic.in/textbook.php?jemh1=2-14",
    "notesDownloadUrl": "#",
    "exercisesCount": 3,
    "videoCount": 6,
    "featured": true
  },
  {
    "id": "c10-ch3",
    "number": 3,
    "title": "Pair of Linear Equations in Two Variables",
    "description": "Graphical method of solution and consistency conditions, algebraic methods: Substitution method, Elimination method, and Word Problems (speed, age, upstream-downstream).",
    "keyConcepts": [
      "Consistency Ratios (a₁/a₂, b₁/b₂, c₁/c₂)",
      "Unique, Infinitely Many, and No Solution Conditions",
      "Elimination Method Mastery",
      "Upstream vs Downstream Boat Problems"
    ],
    "formulas": [
      {
        "name": "Unique Solution",
        "formula": "a₁/a₂ ≠ b₁/b₂ (Intersecting Lines)"
      },
      {
        "name": "Infinite Solutions",
        "formula": "a₁/a₂ = b₁/b₂ = c₁/c₂ (Coincident Lines)"
      },
      {
        "name": "No Solution",
        "formula": "a₁/a₂ = b₁/b₂ ≠ c₁/c₂ (Parallel Lines)"
      },
      {
        "name": "Upstream/Downstream",
        "formula": "Speed Downstream = u + v; Upstream = u - v"
      }
    ],
    "difficulty": "Moderate",
    "ncertChapterUrl": "https://ncert.nic.in/textbook.php?jemh1=3-14",
    "notesDownloadUrl": "#",
    "exercisesCount": 4,
    "videoCount": 8
  },
  {
    "id": "c10-ch4",
    "number": 4,
    "title": "Quadratic Equations",
    "description": "Standard form ax² + bx + c = 0, solving by factorization and quadratic formula, nature of roots using Discriminant D = b² - 4ac, and applied real-life problems.",
    "keyConcepts": [
      "Standard Form ax² + bx + c = 0 (a ≠ 0)",
      "Splitting the Middle Term with Signs",
      "Quadratic Formula (Sridharacharya Formula)",
      "Discriminant D and Nature of Roots (Real & Equal, Real & Distinct, No Real Roots)"
    ],
    "formulas": [
      {
        "name": "Quadratic Formula",
        "formula": "x = [-b ± √(b² - 4ac)] / (2a)"
      },
      {
        "name": "Discriminant",
        "formula": "D = b² - 4ac"
      },
      {
        "name": "Real & Distinct Roots",
        "formula": "D > 0"
      },
      {
        "name": "Equal Roots",
        "formula": "D = 0 ⇒ x = -b / (2a)"
      }
    ],
    "difficulty": "Advanced",
    "ncertChapterUrl": "https://ncert.nic.in/textbook.php?jemh1=4-14",
    "notesDownloadUrl": "#",
    "exercisesCount": 4,
    "videoCount": 9,
    "featured": true
  },
  {
    "id": "c10-ch5",
    "number": 5,
    "title": "Arithmetic Progressions (AP)",
    "description": "nth term of an AP, sum of first n terms, identifying arithmetic progressions, and solving high-yield word problems from daily life scenarios.",
    "keyConcepts": [
      "First Term a and Common Difference d",
      "General nth Term Formula aₙ = a + (n - 1)d",
      "Sum of n Terms Sₙ = n/2 [2a + (n - 1)d]",
      "Finding nth term from Sₙ: aₙ = Sₙ - Sₙ₋₁"
    ],
    "formulas": [
      {
        "name": "nth Term",
        "formula": "aₙ = a + (n - 1)d"
      },
      {
        "name": "Sum of n Terms",
        "formula": "Sₙ = n/2 [2a + (n - 1)d] = n/2 (a + l)"
      },
      {
        "name": "Sum of First n Natural Numbers",
        "formula": "Sₙ = n(n + 1) / 2"
      }
    ],
    "difficulty": "Moderate",
    "ncertChapterUrl": "https://ncert.nic.in/textbook.php?jemh1=5-14",
    "notesDownloadUrl": "#",
    "exercisesCount": 4,
    "videoCount": 7,
    "featured": true
  },
  {
    "id": "c10-ch6",
    "number": 6,
    "title": "Triangles (Similarity)",
    "description": "Basic Proportionality Theorem (Thales Theorem) and its converse, criteria for similarity of triangles (AAA, SSS, SAS), and application in height and shadow problems.",
    "keyConcepts": [
      "Basic Proportionality Theorem (BPT) Step-by-Step Proof",
      "Converse of BPT Theorem",
      "AAA, SSS, and SAS Similarity Criteria",
      "Solving Board Guaranteed 5-Marker Proofs"
    ],
    "formulas": [
      {
        "name": "Thales Theorem (BPT)",
        "formula": "In △ABC, if DE ∥ BC, then AD/DB = AE/EC"
      },
      {
        "name": "Similarity Ratio",
        "formula": "△ABC ~ △DEF ⇒ AB/DE = BC/EF = AC/DF"
      }
    ],
    "difficulty": "Advanced",
    "ncertChapterUrl": "https://ncert.nic.in/textbook.php?jemh1=6-14",
    "notesDownloadUrl": "#",
    "exercisesCount": 4,
    "videoCount": 8,
    "featured": true
  },
  {
    "id": "c10-ch7",
    "number": 7,
    "title": "Coordinate Geometry",
    "description": "Distance formula, Section formula (internal division), and coordinates of midpoint of a line segment with geometric applications.",
    "keyConcepts": [
      "Distance Between Two Points in 2D Plane",
      "Collinearity of 3 Points using Distance Formula",
      "Section Formula for Internal Division",
      "Centroid of a Triangle Coordinates"
    ],
    "formulas": [
      {
        "name": "Distance Formula",
        "formula": "d = √[(x₂ - x₁)² + (y₂ - y₁)²]"
      },
      {
        "name": "Section Formula",
        "formula": "P(x, y) = [(m₁x₂ + m₂x₁)/(m₁ + m₂), (m₁y₂ + m₂y₁)/(m₁ + m₂)]"
      },
      {
        "name": "Midpoint Formula",
        "formula": "M = [(x₁ + x₂)/2, (y₁ + y₂)/2]"
      }
    ],
    "difficulty": "Moderate",
    "ncertChapterUrl": "https://ncert.nic.in/textbook.php?jemh1=7-14",
    "notesDownloadUrl": "#",
    "exercisesCount": 3,
    "videoCount": 6
  },
  {
    "id": "c10-ch8",
    "number": 8,
    "title": "Introduction to Trigonometry",
    "description": "Trigonometric ratios of an acute angle of a right-angled triangle, values of trigonometric ratios of 0°, 30°, 45°, 60°, 90°, and proof of fundamental Pythagorean trigonometric identities.",
    "keyConcepts": [
      "Definitions: sin, cos, tan, cosec, sec, cot",
      "Trigonometric Ratio Values Table Memory Tricks",
      "Proof of sin²θ + cos²θ = 1",
      "Deriving 1 + tan²θ = sec²θ and 1 + cot²θ = cosec²θ"
    ],
    "formulas": [
      {
        "name": "Identity 1",
        "formula": "sin²θ + cos²θ = 1"
      },
      {
        "name": "Identity 2",
        "formula": "1 + tan²θ = sec²θ"
      },
      {
        "name": "Identity 3",
        "formula": "1 + cot²θ = cosec²θ"
      },
      {
        "name": "Quotient Relations",
        "formula": "tanθ = sinθ / cosθ; cotθ = cosθ / sinθ"
      }
    ],
    "difficulty": "Advanced",
    "ncertChapterUrl": "https://ncert.nic.in/textbook.php?jemh1=8-14",
    "notesDownloadUrl": "#",
    "exercisesCount": 4,
    "videoCount": 10,
    "featured": true
  },
  {
    "id": "c10-ch9",
    "number": 9,
    "title": "Some Applications of Trigonometry (Heights & Distances)",
    "description": "Line of sight, angles of elevation and depression, and solving real-world height and distance problems involving towers, ships, balloons, and buildings.",
    "keyConcepts": [
      "Line of Sight, Angle of Elevation & Angle of Depression",
      "Drawing Accurate Geometric Figure Diagrams",
      "Two-Triangle Double Elevation/Depression Problems",
      "Solving with √3 ≈ 1.732 and √2 ≈ 1.414"
    ],
    "formulas": [
      {
        "name": "Height Calculation",
        "formula": "tan θ = (Opposite Side) / (Adjacent Side) = Height / Distance"
      },
      {
        "name": "Angle of Depression",
        "formula": "Angle of Depression = Alternate Interior Angle of Elevation"
      }
    ],
    "difficulty": "Moderate",
    "ncertChapterUrl": "https://ncert.nic.in/textbook.php?jemh1=9-14",
    "notesDownloadUrl": "#",
    "exercisesCount": 1,
    "videoCount": 6,
    "featured": true
  },
  {
    "id": "c10-ch10",
    "number": 10,
    "title": "Circles",
    "description": "Tangents to a circle at a point of contact, Theorem 10.1 (tangent is perpendicular to radius), and Theorem 10.2 (lengths of tangents from external point are equal).",
    "keyConcepts": [
      "Definition of Tangent and Point of Contact",
      "Theorem 10.1: Tangent ⊥ Radius at Point of Contact",
      "Theorem 10.2: Tangents drawn from external point are equal",
      "Quadrilaterals Circumscribing a Circle"
    ],
    "formulas": [
      {
        "name": "External Tangent Equality",
        "formula": "PA = PB where P is external point to circle"
      },
      {
        "name": "Circumscribed Quadrilateral",
        "formula": "AB + CD = AD + BC for circumscribed quadrilateral ABCD"
      }
    ],
    "difficulty": "Advanced",
    "ncertChapterUrl": "https://ncert.nic.in/textbook.php?jemh1=10-14",
    "notesDownloadUrl": "#",
    "exercisesCount": 2,
    "videoCount": 6
  },
  {
    "id": "c10-ch11",
    "number": 11,
    "title": "Areas Related to Circles",
    "description": "Area of sector and segment of a circle, arc length calculation, and problems on areas of shaded combination plane figures.",
    "keyConcepts": [
      "Area of Sector with Central Angle θ",
      "Length of an Arc of a Sector",
      "Area of Major and Minor Segments of a Circle",
      "Shaded Region Calculations with Combined Geometric Figures"
    ],
    "formulas": [
      {
        "name": "Area of Sector",
        "formula": "Area = (θ / 360°) × πr²"
      },
      {
        "name": "Length of Arc",
        "formula": "l = (θ / 360°) × 2πr"
      },
      {
        "name": "Area of Minor Segment",
        "formula": "Area = Area of Sector - Area of △OAB"
      }
    ],
    "difficulty": "Moderate",
    "ncertChapterUrl": "https://ncert.nic.in/textbook.php?jemh1=11-14",
    "notesDownloadUrl": "#",
    "exercisesCount": 2,
    "videoCount": 5
  },
  {
    "id": "c10-ch12",
    "number": 12,
    "title": "Surface Areas and Volumes",
    "description": "Surface areas and volumes of combinations of solids: cuboid, cone, cylinder, hemisphere, and sphere; conversion of solids from one shape to another.",
    "keyConcepts": [
      "Total Surface Area of Combined Solids (Careful with Joint Faces!)",
      "Volume of Combined Figures (Direct Addition)",
      "Melting and Recasting One Solid into Another (Volume Conservation)",
      "Water Flowing through Pipes into Cylindrical Cisterns"
    ],
    "formulas": [
      {
        "name": "Volume Conservation",
        "formula": "Volume of New Object = Total Volume of Melted Shapes"
      },
      {
        "name": "Hemisphere TSA",
        "formula": "TSA = 3πr²; Curved = 2πr²; Volume = (2/3)πr³"
      },
      {
        "name": "Cone Total Area",
        "formula": "TSA = πr(l + r) where l = √(r² + h²)"
      }
    ],
    "difficulty": "Advanced",
    "ncertChapterUrl": "https://ncert.nic.in/textbook.php?jemh1=12-14",
    "notesDownloadUrl": "#",
    "exercisesCount": 2,
    "videoCount": 7
  },
  {
    "id": "c10-ch13",
    "number": 13,
    "title": "Statistics & Probability",
    "description": "Mean of grouped data (Direct, Assumed Mean Method), Mode of grouped data, Median of grouped data, and classical definition of probability.",
    "keyConcepts": [
      "Direct and Assumed Mean Method: x̄ = a + (∑fᵢdᵢ / ∑fᵢ)",
      "Modal Class & Mode Formula Calculation",
      "Median Class & Median Formula Calculation",
      "Empirical Relationship: 3 Median = Mode + 2 Mean",
      "Complementary Event: P(E) + P(not E) = 1"
    ],
    "formulas": [
      {
        "name": "Mode of Grouped Data",
        "formula": "Mode = l + [(f₁ - f₀) / (2f₁ - f₀ - f₂)] × h"
      },
      {
        "name": "Median of Grouped Data",
        "formula": "Median = l + [((n/2) - cf) / f] × h"
      },
      {
        "name": "Empirical Formula",
        "formula": "3 × Median = Mode + 2 × Mean"
      }
    ],
    "difficulty": "Moderate",
    "ncertChapterUrl": "https://ncert.nic.in/textbook.php?jemh1=13-14",
    "notesDownloadUrl": "#",
    "exercisesCount": 4,
    "videoCount": 6
  }
],
  videos: [
  {
    "id": "v10-1",
    "title": "Trigonometric Identities: Zero to Hero (Board Exam 5-Markers Guaranteed)",
    "description": "The definitive blueprint to proving any trigonometric identity without freezing. Includes 15 repeated board exam proofs.",
    "grade": "10",
    "chapter": "Introduction to Trigonometry",
    "duration": "1:12:40",
    "youtubeId": "dQw4w9WgXcQ",
    "youtubeUrl": "https://youtube.com/watch?v=dQw4w9WgXcQ",
    "thumbnailUrl": "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=600&auto=format&fit=crop&q=80",
    "views": "142,000",
    "difficulty": "Challenging",
    "topics": [
      "Trigonometric Proofs",
      "sin²θ + cos²θ = 1",
      "Board Guaranteed Questions"
    ],
    "featured": true
  },
  {
    "id": "v10-2",
    "title": "Basic Proportionality Theorem (Thales): Step-by-Step Board Proof",
    "description": "How to write the BPT theorem in your board examination answer sheet to guarantee full 5 out of 5 marks.",
    "grade": "10",
    "chapter": "Triangles",
    "duration": "28:15",
    "youtubeId": "dQw4w9WgXcQ",
    "youtubeUrl": "https://youtube.com/watch?v=dQw4w9WgXcQ",
    "thumbnailUrl": "https://images.unsplash.com/photo-1509228468518-180dd4864904?w=600&auto=format&fit=crop&q=80",
    "views": "98,300",
    "difficulty": "Medium",
    "topics": [
      "Thales Theorem",
      "Triangle Similarity",
      "Exam Writing Pattern"
    ],
    "featured": true
  },
  {
    "id": "v10-3",
    "title": "Quadratic Equations Word Problems: Speed, Pipe & Age Tricks",
    "description": "Never get stuck formulating quadratic word equations again. Master standard templates for upstream/downstream and pipe questions.",
    "grade": "10",
    "chapter": "Quadratic Equations",
    "duration": "49:20",
    "youtubeId": "dQw4w9WgXcQ",
    "youtubeUrl": "https://youtube.com/watch?v=dQw4w9WgXcQ",
    "thumbnailUrl": "https://images.unsplash.com/photo-1632571401005-458e9d244591?w=600&auto=format&fit=crop&q=80",
    "views": "76,500",
    "difficulty": "Challenging",
    "topics": [
      "Speed & Distance",
      "Pipes & Cisterns",
      "Discriminant D"
    ]
  },
  {
    "id": "v10-4",
    "title": "Statistics: Mean, Median & Mode of Grouped Data Made Simple",
    "description": "Calculate median class, modal class, and cumulative frequencies with zero calculation slip-ups in board exams.",
    "grade": "10",
    "chapter": "Statistics & Probability",
    "duration": "41:10",
    "youtubeId": "dQw4w9WgXcQ",
    "youtubeUrl": "https://youtube.com/watch?v=dQw4w9WgXcQ",
    "thumbnailUrl": "https://images.unsplash.com/photo-1596495578065-6e0763fa1178?w=600&auto=format&fit=crop&q=80",
    "views": "64,900",
    "difficulty": "Easy",
    "topics": [
      "Assumed Mean",
      "Median Class",
      "Empirical Relation"
    ]
  }
],
  resources: [
  {
    "id": "r10-1",
    "title": "Class 10 CBSE Board Exam: 100 Most Expected Guaranteed Questions PDF",
    "type": "Worksheet",
    "description": "Meticulously analyzed from the past 12 years of CBSE question papers with official marking scheme solutions.",
    "fileSize": "5.8 MB",
    "pages": 42,
    "downloadUrl": "#",
    "rating": 5,
    "tag": "Board Favorite"
  },
  {
    "id": "r10-2",
    "title": "Class 10 All Formulas Quick-Revision Handbook & Cheat-Sheet (2026 Edition)",
    "type": "Formula Sheet",
    "description": "High-yield 1-page summary per chapter. Covers AP, Trigonometry, Coordinate Geometry, Mensuration & Statistics.",
    "fileSize": "2.9 MB",
    "pages": 18,
    "downloadUrl": "#",
    "rating": 4.9,
    "tag": "Must-Have"
  },
  {
    "id": "r10-3",
    "title": "Class 10 Standard & Basic Mathematics Full Model Sample Papers (Set 1-5)",
    "type": "Sample Paper",
    "description": "Five timed 3-hour mock papers with official step-by-step marking rubrics to calibrate your exam speed.",
    "fileSize": "4.5 MB",
    "pages": 35,
    "downloadUrl": "#",
    "rating": 4.9,
    "tag": "Exam Ready"
  },
  {
    "id": "r10-4",
    "title": "Case-Study Based Questions Master File for Class 10 Board Exam",
    "type": "Worksheet",
    "description": "50 real-life applied situation case-studies from Trigonometry heights, AP seating, Coordinate stadiums, and Probability.",
    "fileSize": "3.4 MB",
    "pages": 22,
    "downloadUrl": "#",
    "rating": 5,
    "tag": "Case Study Focus"
  }
]
};
