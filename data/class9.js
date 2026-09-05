/**
 * NeoMath - Class 9 Mathematics Content Data
 * Edit this file to add or update Class 9 chapters, videos, or study resources.
 */
window.NEOMATH_CLASS9 = {
  grade: "9",
  title: "Class 9 Mathematics",
  syllabusTarget: "CBSE & State Boards",
  chapters: [
  {
    "id": "c9-ch1",
    "number": 1,
    "title": "Number Systems",
    "description": "Irrational numbers, real numbers and decimal expansions (terminating, non-terminating recurring), representing real numbers on number line, operations on real numbers, and rationalizing the denominator.",
    "keyConcepts": [
      "Locating √2, √3, √5 geometrically on the Number Line",
      "Converting 0.p̄q̄ decimals into p/q form",
      "Rationalization of Denominators with Radicals",
      "Laws of Exponents for Real Numbers"
    ],
    "formulas": [
      {
        "name": "Rationalization Conjugate",
        "formula": "1/(√a + √b) × (√a - √b)/(√a - √b) = (√a - √b)/(a - b)"
      },
      {
        "name": "Radical Law",
        "formula": "√(ab) = √a × √b and √(a/b) = √a / √b"
      }
    ],
    "difficulty": "Moderate",
    "ncertChapterUrl": "https://ncert.nic.in/textbook.php?iemh1=1-15",
    "notesDownloadUrl": "#",
    "exercisesCount": 5,
    "videoCount": 7,
    "featured": true
  },
  {
    "id": "c9-ch2",
    "number": 2,
    "title": "Polynomials",
    "description": "Polynomials in one variable, zeros of a polynomial, Remainder Theorem, Factor Theorem, factorization of quadratic & cubic polynomials using splitting middle term and identities.",
    "keyConcepts": [
      "Degree and Classification of Polynomials",
      "Zeroes of Polynomial vs Roots of Equation",
      "Factor Theorem and Remainder Theorem",
      "Factorization of Cubic Polynomials using Factor Theorem"
    ],
    "formulas": [
      {
        "name": "Identity V (Cubes)",
        "formula": "(x + y)³ = x³ + y³ + 3xy(x + y)"
      },
      {
        "name": "Identity VI (Difference)",
        "formula": "x³ + y³ + z³ - 3xyz = (x+y+z)(x²+y²+z²-xy-yz-zx)"
      },
      {
        "name": "Conditional Identity",
        "formula": "If x + y + z = 0, then x³ + y³ + z³ = 3xyz"
      }
    ],
    "difficulty": "Advanced",
    "ncertChapterUrl": "https://ncert.nic.in/textbook.php?iemh1=2-15",
    "notesDownloadUrl": "#",
    "exercisesCount": 5,
    "videoCount": 9,
    "featured": true
  },
  {
    "id": "c9-ch3",
    "number": 3,
    "title": "Coordinate Geometry",
    "description": "Cartesian coordinate system, origin, x-axis (abscissa), y-axis (ordinate), quadrants, and plotting points on the Cartesian plane with precision.",
    "keyConcepts": [
      "Understanding the 4 Quadrants & Sign Conventions",
      "Abscissa and Ordinate Terminology",
      "Plotting Points given Coordinates",
      "Applications in Real-World Navigation & Maps"
    ],
    "formulas": [
      {
        "name": "Coordinates Convention",
        "formula": "P(x, y) where x = abscissa, y = ordinate"
      },
      {
        "name": "Axes Equation",
        "formula": "Equation of x-axis: y = 0; y-axis: x = 0"
      }
    ],
    "difficulty": "Foundation",
    "ncertChapterUrl": "https://ncert.nic.in/textbook.php?iemh1=3-15",
    "notesDownloadUrl": "#",
    "exercisesCount": 3,
    "videoCount": 4
  },
  {
    "id": "c9-ch4",
    "number": 4,
    "title": "Linear Equations in Two Variables",
    "description": "General form ax + by + c = 0, finding infinitely many solutions, plotting graphs of linear equations, and equations of lines parallel to coordinate axes.",
    "keyConcepts": [
      "Infinite Solutions of Linear Equations in Two Variables",
      "Plotting Straight Lines from Solutions Table",
      "Lines Parallel to X-axis (y = k) & Y-axis (x = k)",
      "Interpreting Slope and Intercepts conceptually"
    ],
    "formulas": [
      {
        "name": "Standard Form",
        "formula": "ax + by + c = 0 where a, b ≠ 0"
      },
      {
        "name": "Points on Graph",
        "formula": "Every point (x₁, y₁) lying on line satisfies ax₁ + by₁ + c = 0"
      }
    ],
    "difficulty": "Moderate",
    "ncertChapterUrl": "https://ncert.nic.in/textbook.php?iemh1=4-15",
    "notesDownloadUrl": "#",
    "exercisesCount": 4,
    "videoCount": 5
  },
  {
    "id": "c9-ch5",
    "number": 5,
    "title": "Lines and Angles",
    "description": "Intersecting & non-intersecting lines, pairs of angles (linear pair, vertically opposite), parallel lines and transversal, and angle sum property of a triangle.",
    "keyConcepts": [
      "Linear Pair Axiom and Vertically Opposite Angles",
      "Transversal & Parallel Lines (Alternate & Co-interior Angles)",
      "Exterior Angle Theorem: Sum of Interior Opposite Angles",
      "Step-by-Step Formal Geometric Proof Writing"
    ],
    "formulas": [
      {
        "name": "Linear Pair",
        "formula": "∠1 + ∠2 = 180° on a straight line"
      },
      {
        "name": "Co-interior Angles",
        "formula": "Sum of interior angles on same side of transversal = 180°"
      },
      {
        "name": "Exterior Angle",
        "formula": "∠ACD = ∠A + ∠B in △ABC"
      }
    ],
    "difficulty": "Moderate",
    "ncertChapterUrl": "https://ncert.nic.in/textbook.php?iemh1=6-15",
    "notesDownloadUrl": "#",
    "exercisesCount": 3,
    "videoCount": 6,
    "featured": true
  },
  {
    "id": "c9-ch6",
    "number": 6,
    "title": "Triangles (Congruence)",
    "description": "Congruence criteria (SAS, ASA, AAS, SSS, RHS), properties of isosceles triangles, and inequalities in a triangle with rigorous deductive proofs.",
    "keyConcepts": [
      "Difference between Similarity and Congruence",
      "Rigorous Verification of Criteria (SAS vs SSA fallacy)",
      "Angles opposite to equal sides are equal",
      "RHS Congruence Criterion Proof"
    ],
    "formulas": [
      {
        "name": "Criteria Check",
        "formula": "SAS, ASA, AAS, SSS, RHS are valid congruence tests"
      },
      {
        "name": "Triangle Inequality",
        "formula": "Sum of any two sides > Third side (a + b > c)"
      }
    ],
    "difficulty": "Advanced",
    "ncertChapterUrl": "https://ncert.nic.in/textbook.php?iemh1=7-15",
    "notesDownloadUrl": "#",
    "exercisesCount": 4,
    "videoCount": 8,
    "featured": true
  },
  {
    "id": "c9-ch7",
    "number": 7,
    "title": "Circles",
    "description": "Chords and distances from center, angle subtended by an arc at center and at circumference, cyclic quadrilaterals, and essential circle theorems.",
    "keyConcepts": [
      "Perpendicular from Center to Chord bisects the Chord",
      "Angle at Center is Double the Angle at Circumference",
      "Angles in the Same Segment are Equal",
      "Opposite Angles of Cyclic Quadrilateral Sum to 180°"
    ],
    "formulas": [
      {
        "name": "Center Angle Theorem",
        "formula": "∠AOB = 2 × ∠APB"
      },
      {
        "name": "Angle in Semicircle",
        "formula": "∠ in a semicircle is a right angle (90°)"
      },
      {
        "name": "Cyclic Quadrilateral",
        "formula": "∠A + ∠C = 180° and ∠B + ∠D = 180°"
      }
    ],
    "difficulty": "Advanced",
    "ncertChapterUrl": "https://ncert.nic.in/textbook.php?iemh1=10-15",
    "notesDownloadUrl": "#",
    "exercisesCount": 5,
    "videoCount": 7
  },
  {
    "id": "c9-ch8",
    "number": 8,
    "title": "Heron's Formula & Surface Areas",
    "description": "Derivation and application of Heron's formula for scalene triangles and quadrilaterals, along with surface areas & volumes of cones and spheres.",
    "keyConcepts": [
      "Semi-perimeter Calculation s = (a+b+c)/2",
      "Calculating Area of Triangle when altitude is unknown",
      "Surface Area and Volume of Right Circular Cone",
      "Surface Area and Volume of Sphere and Hemisphere"
    ],
    "formulas": [
      {
        "name": "Heron's Formula",
        "formula": "Area = √[s(s - a)(s - b)(s - c)]"
      },
      {
        "name": "Cone Curved Surface Area",
        "formula": "CSA = πrl where l = √(r² + h²)"
      },
      {
        "name": "Volume of Sphere",
        "formula": "V = (4/3)πr³"
      }
    ],
    "difficulty": "Moderate",
    "ncertChapterUrl": "https://ncert.nic.in/textbook.php?iemh1=12-15",
    "notesDownloadUrl": "#",
    "exercisesCount": 4,
    "videoCount": 6
  }
],
  videos: [
  {
    "id": "v9-1",
    "title": "Polynomials: Master Factor Theorem & Cubic Factorization Tricks",
    "description": "Learn how to factorize cubics like x³ - 23x² + 142x - 120 in under 3 minutes using trial factors and synthetic division.",
    "grade": "9",
    "chapter": "Polynomials",
    "duration": "48:10",
    "youtubeId": "dQw4w9WgXcQ",
    "youtubeUrl": "https://youtube.com/watch?v=dQw4w9WgXcQ",
    "thumbnailUrl": "https://images.unsplash.com/photo-1509228468518-180dd4864904?w=600&auto=format&fit=crop&q=80",
    "views": "58,400",
    "difficulty": "Challenging",
    "topics": [
      "Factor Theorem",
      "Cubic Splitting",
      "Algebraic Identities"
    ],
    "featured": true
  },
  {
    "id": "v9-2",
    "title": "Lines and Angles: The Golden Proof Guide (Zero Deductions)",
    "description": "Complete walkthrough on writing pristine geometric proofs with given, to prove, construction, and reason columns.",
    "grade": "9",
    "chapter": "Lines and Angles",
    "duration": "35:40",
    "youtubeId": "dQw4w9WgXcQ",
    "youtubeUrl": "https://youtube.com/watch?v=dQw4w9WgXcQ",
    "thumbnailUrl": "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=600&auto=format&fit=crop&q=80",
    "views": "43,100",
    "difficulty": "Medium",
    "topics": [
      "Geometric Proofs",
      "Alternate Interior Angles",
      "Linear Pairs"
    ],
    "featured": true
  },
  {
    "id": "v9-3",
    "title": "Circles Chapter: 5 Mandatory Theorems for Final Examinations",
    "description": "Clear geometric visualization of center angle theorem, cyclic quadrilateral sum, and perpendicular bisector theorem.",
    "grade": "9",
    "chapter": "Circles",
    "duration": "52:15",
    "youtubeId": "dQw4w9WgXcQ",
    "youtubeUrl": "https://youtube.com/watch?v=dQw4w9WgXcQ",
    "thumbnailUrl": "https://images.unsplash.com/photo-1632571401005-458e9d244591?w=600&auto=format&fit=crop&q=80",
    "views": "67,800",
    "difficulty": "Challenging",
    "topics": [
      "Cyclic Quadrilaterals",
      "Angle at Center",
      "Chord Properties"
    ]
  },
  {
    "id": "v9-4",
    "title": "Coordinate Geometry in One Shot: Concept + Full NCERT Practice",
    "description": "Everything you need to secure full 6 marks from coordinate geometry in your Class 9 finals.",
    "grade": "9",
    "chapter": "Coordinate Geometry",
    "duration": "29:30",
    "youtubeId": "dQw4w9WgXcQ",
    "youtubeUrl": "https://youtube.com/watch?v=dQw4w9WgXcQ",
    "thumbnailUrl": "https://images.unsplash.com/photo-1596495578065-6e0763fa1178?w=600&auto=format&fit=crop&q=80",
    "views": "31,200",
    "difficulty": "Easy",
    "topics": [
      "Cartesian Plane",
      "Quadrant Sign Rules",
      "Plotting Graphs"
    ]
  }
],
  resources: [
  {
    "id": "r9-1",
    "title": "Class 9 Complete Geometry Theorem Compendium & Proof Handbook",
    "type": "Formula Sheet",
    "description": "Every theorem from Lines & Angles, Triangles, Quadrilaterals, and Circles with step-by-step labeled diagrams.",
    "fileSize": "4.2 MB",
    "pages": 24,
    "downloadUrl": "#",
    "rating": 5,
    "tag": "Teacher Favorite"
  },
  {
    "id": "r9-2",
    "title": "Polynomials & Number Systems Question Bank (100 Solved Problems)",
    "type": "Worksheet",
    "chapterNumber": 2,
    "chapterTitle": "Polynomials",
    "description": "Includes challenging NCERT Exemplar and Olympiad questions with fully detailed handwritten solutions.",
    "fileSize": "3.6 MB",
    "pages": 20,
    "downloadUrl": "#",
    "rating": 4.9,
    "tag": "High Yield"
  },
  {
    "id": "r9-3",
    "title": "Class 9 Final Term Comprehensive 80-Mark Sample Examination Paper",
    "type": "Sample Paper",
    "description": "Prepared strictly according to the latest CBSE pattern with Sections A, B, C, D, and Case-Study questions.",
    "fileSize": "1.9 MB",
    "pages": 10,
    "downloadUrl": "#",
    "rating": 4.9,
    "tag": "Exam Ready"
  },
  {
    "id": "r9-4",
    "title": "Mensuration & Heron's Formula Visual Formula Cheat Chart",
    "type": "Formula Sheet",
    "chapterNumber": 8,
    "chapterTitle": "Heron's Formula & Surface Areas",
    "description": "Quick reference poster comparing 2D and 3D surface area and volume equations with metric conversions.",
    "fileSize": "2.1 MB",
    "pages": 4,
    "downloadUrl": "#",
    "rating": 4.8,
    "tag": "Quick Revision"
  }
]
};
