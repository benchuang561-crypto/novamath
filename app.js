const courses = {
  algebra1: {
    title: "Algebra 1",
    description: "Master the fundamentals of algebra: equations, inequalities, functions, and more.",
    color: "#00d4ff",
    units: [
      {
        title: "Foundations of Algebra",
        lessons: [
          {
            title: "Variables and Expressions",
            content: `<h2>What is a Variable?</h2><p>A <strong>variable</strong> is a symbol that represents an unknown number.</p><div class="formula">x, y, z are common variables</div><h2>Algebraic Expressions</h2><p>An <strong>algebraic expression</strong> combines variables, numbers, and operations.</p><div class="example"><div class="example-label">Example</div><p>If x=4, then 3x+5=3(4)+5=17</p></div>`,
            practice: [
              { q: "Evaluate 2x+3 when x=5", a: "13" },
              { q: "Evaluate 4y-7 when y=3", a: "5" },
              { q: "Evaluate x²+2x+1 when x=2", a: "9" },
              { q: "Evaluate 3(a+b) when a=2,b=4", a: "18" },
              { q: "Evaluate 5x-2y when x=3,y=1", a: "13" },
              { q: "Evaluate x/2+4 when x=10", a: "9" }
            ]
          },
          {
            title: "Order of Operations",
            content: `<h2>PEMDAS Rule</h2><p>The order of operations:</p><div class="formula">P→E→MD→AS</div><div class="example"><div class="example-label">Example</div><p>3+4×2²=3+4×4=3+16=19</p></div>`,
            practice: [
              { q: "Simplify: 2+3×4", a: "14" },
              { q: "Simplify: (5+3)²÷4", a: "16" },
              { q: "Simplify: 10-2×3+4", a: "8" },
              { q: "Simplify: 2³×3-5", a: "19" },
              { q: "Simplify: (12-4)÷2+6", a: "10" },
              { q: "Simplify: 15÷3+2×4", a: "13" }
            ]
          },
          {
            title: "Properties of Real Numbers",
            content: `<h2>Key Properties</h2><p><strong>Commutative:</strong> a+b=b+a</p><p><strong>Distributive:</strong> a(b+c)=ab+ac</p><div class="example"><div class="example-label">Example</div><p>3(x+4)=3x+12</p></div>`,
            practice: [
              { q: "Use distributive: 4(x+3)", a: "4x+12", alt: ["4x + 12"] },
              { q: "Simplify: 2(3x+5)+4x", a: "10x+10", alt: ["10x + 10"] },
              { q: "Simplify: 5+3(x-2)", a: "3x-1", alt: ["3x - 1"] },
              { q: "Use distributive: -2(x-4)", a: "-2x+8", alt: ["-2x + 8"] },
              { q: "Simplify: 3(2x+1)-2(x-3)", a: "4x+9", alt: ["4x + 9"] }
            ]
          }
        ]
      },
      {
        title: "Solving Linear Equations",
        lessons: [
          {
            title: "One-Step Equations",
            content: `<h2>Solving One-Step Equations</h2><p>Use inverse operations:</p><div class="example"><div class="example-label">Example</div><p>x+5=12→x=7</p><p>3x=15→x=5</p></div>`,
            practice: [
              { q: "Solve: x+7=15", a: "8" },
              { q: "Solve: x-4=9", a: "13" },
              { q: "Solve: 5x=35", a: "7" },
              { q: "Solve: x/3=6", a: "18" },
              { q: "Solve: x+2.5=8", a: "5.5", alt: ["11/2"] },
              { q: "Solve: 2x=11", a: "5.5", alt: ["11/2"] }
            ]
          },
          {
            title: "Two-Step Equations",
            content: `<h2>Solving Two-Step Equations</h2><p>1. Undo addition/subtraction</p><p>2. Undo multiplication/division</p><div class="example"><div class="example-label">Example</div><p>2x+5=13→2x=8→x=4</p></div>`,
            practice: [
              { q: "Solve: 3x+4=16", a: "4" },
              { q: "Solve: 2x-7=11", a: "9" },
              { q: "Solve: 5x+3=28", a: "5" },
              { q: "Solve: x/2+4=10", a: "12" },
              { q: "Solve: 4x-5=19", a: "6" },
              { q: "Solve: 3x+2.5=14.5", a: "4" }
            ]
          },
          {
            title: "Multi-Step Equations",
            content: `<h2>Solving Multi-Step Equations</h2><p>1. Simplify both sides</p><p>2. Move variables to one side</p><p>3. Solve</p><div class="example"><div class="example-label">Example</div><p>3(x+2)=2(x+5)→3x+6=2x+10→x=4</p></div>`,
            practice: [
              { q: "Solve: 2(x+3)=14", a: "4" },
              { q: "Solve: 3x+5=2x+12", a: "7" },
              { q: "Solve: 4(x-2)=3(x+1)", a: "11" },
              { q: "Solve: 5x-3=2x+9", a: "4" },
              { q: "Solve: 2(3x-1)=4(x+3)", a: "7" },
              { q: "Solve: 7x+4=3x+20", a: "4" }
            ]
          }
        ]
      },
      {
        title: "Linear Functions",
        lessons: [
          {
            title: "Slope and Rate of Change",
            content: `<h2>Finding Slope</h2><div class="formula">m=(y₂-y₁)/(x₂-x₁)</div><div class="example"><div class="example-label">Example</div><p>Find slope through (2,3) and (4,7): m=(7-3)/(4-2)=2</p></div>`,
            practice: [
              { q: "Find slope through (1,2) and (3,8)", a: "3" },
              { q: "Find slope through (0,0) and (4,6)", a: "1.5", alt: ["3/2"] },
              { q: "Find slope of y=3x+2", a: "3" },
              { q: "Find slope through (2,5) and (6,5)", a: "0" },
              { q: "Find slope of 2x+3y=6", a: "-2/3", alt: ["-0.667"] },
              { q: "Find slope through (-1,3) and (2,-3)", a: "-2" }
            ]
          },
          {
            title: "Slope-Intercept Form",
            content: `<h2>y=mx+b</h2><p>• m=slope</p><p>• b=y-intercept</p><div class="example"><div class="example-label">Example</div><p>y=2x+3 has slope 2 and y-intercept at (0,3)</p></div>`,
            practice: [
              { q: "Find slope and y-intercept of y=4x-2", a: "m=4,b=-2", alt: ["4,-2","slope 4, y-int -2"] },
              { q: "Write equation with slope 3, y-intercept 5", a: "y=3x+5", alt: ["y = 3x + 5"] },
              { q: "Convert to slope-intercept: 2x+y=6", a: "y=-2x+6", alt: ["y = -2x + 6"] },
              { q: "Find y-intercept of y=-x+7", a: "7" },
              { q: "Write equation with slope -2 through (0,4)", a: "y=-2x+4", alt: ["y = -2x + 4"] }
            ]
          }
        ]
      }
    ]
  },
  algebra2: {
    title: "Algebra 2",
    description: "Advanced algebra including quadratics, polynomials, exponential functions, and logarithms.",
    color: "#a855f7",
    units: [
      {
        title: "Quadratic Functions",
        lessons: [
          {
            title: "Solving by Factoring",
            content: `<h2>Zero Product Property</h2><p>If ab=0, then a=0 or b=0</p><div class="formula">x²+5x+6=(x+2)(x+3)</div><div class="example"><div class="example-label">Example</div><p>Solve: x²-5x+6=0 → (x-2)(x-3)=0 → x=2 or x=3</p></div>`,
            practice: [
              { q: "Solve: x²-9=0", a: "3,-3", alt: ["-3,3","±3"] },
              { q: "Solve: x²+5x+6=0", a: "-2,-3", alt: ["-3,-2"] },
              { q: "Solve: x²-7x+12=0", a: "3,4", alt: ["4,3"] },
              { q: "Solve: x²+2x-8=0", a: "2,-4", alt: ["-4,2"] },
              { q: "Solve: x²-x-6=0", a: "3,-2", alt: ["-2,3"] },
              { q: "Factor: x²+8x+15", a: "(x+3)(x+5)", alt: ["(x+5)(x+3)"] }
            ]
          },
          {
            title: "Quadratic Formula",
            content: `<h2>The Quadratic Formula</h2><p>For ax²+bx+c=0:</p><div class="formula">x=(-b±√(b²-4ac))/2a</div><div class="example"><div class="example-label">Example</div><p>x²+4x+3=0 → x=(-4±√(16-12))/2 → x=-1 or x=-3</p></div>`,
            practice: [
              { q: "Solve: x²+6x+5=0", a: "-1,-5", alt: ["-5,-1"] },
              { q: "Solve: 2x²-5x+2=0", a: "2,0.5", alt: ["0.5,2","2,1/2","1/2,2"] },
              { q: "Solve: x²-4x+4=0", a: "2", alt: ["2,2"] },
              { q: "Find discriminant of x²+3x+2=0", a: "1" },
              { q: "Solve: x²+2x-3=0", a: "1,-3", alt: ["-3,1"] }
            ]
          },
          {
            title: "Vertex Form",
            content: `<h2>Vertex Form</h2><div class="formula">y=a(x-h)²+k</div><p>• Vertex at (h,k)</p><p>• Axis of symmetry: x=h</p><div class="example"><div class="example-label">Example</div><p>y=2(x-3)²+1 has vertex at (3,1)</p></div>`,
            practice: [
              { q: "Find vertex of y=(x-2)²+3", a: "(2,3)", alt: ["2,3"] },
              { q: "Find vertex of y=2(x+1)²-4", a: "(-1,-4)", alt: ["-1,-4"] },
              { q: "Find axis of symmetry: y=(x-5)²+1", a: "x=5", alt: ["5"] },
              { q: "Convert to vertex form: y=x²+4x+5", a: "y=(x+2)²+1", alt: ["y=(x+2)^2+1"] }
            ]
          }
        ]
      },
      {
        title: "Polynomial Functions",
        lessons: [
          {
            title: "Polynomial Operations",
            content: `<h2>Adding and Subtracting Polynomials</h2><p>Combine like terms.</p><div class="example"><div class="example-label">Example</div><p>(3x²+2x+5)+(2x²-3x+1)=5x²-x+6</p></div>`,
            practice: [
              { q: "Add: (3x²+2x+1)+(2x²+x+4)", a: "5x²+3x+5", alt: ["5x^2+3x+5"] },
              { q: "Subtract: (5x²+3x)-(2x²+x)", a: "3x²+2x", alt: ["3x^2+2x"] },
              { q: "Find degree of: 3x⁴+2x²-5", a: "4" },
              { q: "Add: (2x+3)+(x-5)", a: "3x-2", alt: ["3x - 2"] }
            ]
          },
          {
            title: "Polynomial Division",
            content: `<h2>Dividing Polynomials</h2><p>Use long division or synthetic division.</p><div class="example"><div class="example-label">Example</div><p>Divide x²+5x+6 by (x+2): Result is x+3</p></div>`,
            practice: [
              { q: "Divide x²-9 by (x-3)", a: "x+3", alt: ["x + 3"] },
              { q: "Divide x²+7x+12 by (x+3)", a: "x+4", alt: ["x + 4"] },
              { q: "Find remainder: x²+3x+2 divided by (x-1)", a: "6" },
              { q: "Is (x-2) a factor of x²-5x+6?", a: "no", alt: ["No"] },
              { q: "Divide 2x²+5x+2 by (x+2)", a: "2x+1", alt: ["2x + 1"] }
            ]
          }
        ]
      },
      {
        title: "Exponential and Logarithmic Functions",
        lessons: [
          {
            title: "Exponential Growth and Decay",
            content: `<h2>Exponential Functions</h2><div class="formula">y=a·b^x</div><p>• a=initial value</p><p>• b=growth factor</p><div class="example"><div class="example-label">Example</div><p>P=100(1.05)^t for 5% annual growth</p></div>`,
            practice: [
              { q: "Evaluate: 2³", a: "8" },
              { q: "Evaluate: 3⁰", a: "1" },
              { q: "Simplify: 2⁴×2³", a: "128", alt: ["2^7"] },
              { q: "Simplify: (3²)³", a: "729", alt: ["3^6"] },
              { q: "Solve: 2^x=16", a: "4" },
              { q: "Evaluate: 5⁻²", a: "0.04", alt: ["1/25",".04"] }
            ]
          },
          {
            title: "Introduction to Logarithms",
            content: `<h2>Logarithm Definition</h2><div class="formula">logₐ(x)=y means a^y=x</div><p>Common log: log₁₀(x)</p><p>Natural log: ln(x)</p><div class="example"><div class="example-label">Example</div><p>log₂(8)=3 because 2³=8</p></div>`,
            practice: [
              { q: "Evaluate: log₂(16)", a: "4" },
              { q: "Evaluate: log₁₀(100)", a: "2" },
              { q: "Evaluate: log₃(27)", a: "3" },
              { q: "Solve: log₂(x)=5", a: "32" },
              { q: "Evaluate: log₅(25)", a: "2" },
              { q: "Evaluate: ln(e)", a: "1" }
            ]
          }
        ]
      }
    ]
  },
  geometry: {
    title: "Geometry",
    description: "Explore shapes, angles, proofs, and spatial reasoning.",
    color: "#22c55e",
    units: [
      {
        title: "Foundations of Geometry",
        lessons: [
          {
            title: "Points, Lines, and Planes",
            content: `<h2>Basic Geometric Terms</h2><p>• <strong>Point:</strong> A location with no size</p><p>• <strong>Line:</strong> Infinite set of points</p><p>• <strong>Plane:</strong> Flat surface extending infinitely</p>`,
            practice: [
              { q: "How many points define a line?", a: "2", alt: ["two","Two"] },
              { q: "How many points define a plane?", a: "3", alt: ["three","Three"] },
              { q: "True or False: A line has endpoints", a: "false", alt: ["False"] },
              { q: "What is the intersection of two planes?", a: "line", alt: ["Line","a line"] },
              { q: "How many lines pass through two distinct points?", a: "1", alt: ["one","One"] }
            ]
          },
          {
            title: "Angle Relationships",
            content: `<h2>Types of Angles</h2><p>• <strong>Acute:</strong> 0°<angle<90°</p><p>• <strong>Right:</strong> angle=90°</p><p>• <strong>Obtuse:</strong> 90°<angle<180°</p><div class="formula">Complementary: sum to 90°<br>Supplementary: sum to 180°</div>`,
            practice: [
              { q: "Find complement of 35°", a: "55" },
              { q: "Find supplement of 120°", a: "60" },
              { q: "Two angles are vertical. One is 40°. Find the other.", a: "40" },
              { q: "If angle A and B are complementary and A=25°, find B", a: "65" },
              { q: "Find the angle that equals its own complement", a: "45" },
              { q: "Two supplementary angles: one is 30° more than other. Find smaller.", a: "75" }
            ]
          }
        ]
      },
      {
        title: "Triangles",
        lessons: [
          {
            title: "Triangle Sum Theorem",
            content: `<h2>Angle Sum Property</h2><div class="formula">Sum of interior angles = 180°</div><p>Exterior angle equals sum of two remote interior angles.</p><div class="example"><div class="example-label">Example</div><p>Angles 50° and 60°: third angle = 180-50-60 = 70°</p></div>`,
            practice: [
              { q: "Find third angle: 60°, 70°, ?", a: "50" },
              { q: "In equilateral triangle, each angle equals?", a: "60" },
              { q: "Find x: angles are x, 2x, 3x", a: "30" },
              { q: "Two angles are 45° each. Find third.", a: "90" },
              { q: "Exterior angle is 110°. One remote interior is 40°. Find other.", a: "70" },
              { q: "Find x: angles are 35°, x, and 2x", a: "48.33", alt: ["145/3"] }
            ]
          },
          {
            title: "Pythagorean Theorem",
            content: `<h2>The Pythagorean Theorem</h2><p>For right triangle with legs a,b and hypotenuse c:</p><div class="formula">a²+b²=c²</div><div class="example"><div class="example-label">Example</div><p>a=3,b=4 → c²=9+16=25 → c=5</p></div>`,
            practice: [
              { q: "Find hypotenuse: legs 6 and 8", a: "10" },
              { q: "Find missing leg: hypotenuse 13, one leg 5", a: "12" },
              { q: "Find hypotenuse: legs 5 and 12", a: "13" },
              { q: "Is 3-4-6 a right triangle?", a: "no", alt: ["No"] },
              { q: "Find leg: hypotenuse 10, one leg 6", a: "8" },
              { q: "Find hypotenuse: legs 9 and 12", a: "15" }
            ]
          },
          {
            title: "Special Right Triangles",
            content: `<h2>45-45-90 Triangle</h2><div class="formula">Leg=x, Hypotenuse=x√2</div><h2>30-60-90 Triangle</h2><div class="formula">Short leg=x<br>Long leg=x√3<br>Hypotenuse=2x</div>`,
            practice: [
              { q: "In 45-45-90, leg=5, find hypotenuse", a: "5√2", alt: ["5sqrt2","7.07"] },
              { q: "In 30-60-90, short leg=4, find hypotenuse", a: "8" },
              { q: "In 30-60-90, short leg=3, find long leg", a: "3√3", alt: ["3sqrt3","5.2"] },
              { q: "In 45-45-90, hypotenuse=10, find leg", a: "5√2", alt: ["5sqrt2","7.07"] },
              { q: "In 30-60-90, hypotenuse=12, find short leg", a: "6" }
            ]
          }
        ]
      },
      {
        title: "Circles",
        lessons: [
          {
            title: "Circle Basics",
            content: `<h2>Circle Formulas</h2><div class="formula">C=2πr=πd<br>A=πr²</div><p>• r=radius (center to edge)</p><p>• d=diameter=2r</p>`,
            practice: [
              { q: "Find circumference: r=5", a: "10π", alt: ["10pi","31.4"] },
              { q: "Find area: r=4", a: "16π", alt: ["16pi","50.27"] },
              { q: "Find radius: diameter=14", a: "7" },
              { q: "Find area: diameter=10", a: "25π", alt: ["25pi","78.5"] },
              { q: "Find circumference: d=8", a: "8π", alt: ["8pi","25.13"] },
              { q: "Find radius: circumference=12π", a: "6" }
            ]
          },
          {
            title: "Arcs and Sectors",
            content: `<h2>Arc Length and Sector Area</h2><div class="formula">Arc Length=(θ/360°)×2πr<br>Sector Area=(θ/360°)×πr²</div><p>θ=central angle in degrees</p>`,
            practice: [
              { q: "Find arc length: r=6, central angle=60°", a: "2π", alt: ["2pi","6.28"] },
              { q: "Find sector area: r=4, central angle=90°", a: "4π", alt: ["4pi","12.57"] },
              { q: "Arc length is 4π, r=6. Find central angle.", a: "120" },
              { q: "Find arc length: r=9, central angle=40°", a: "2π", alt: ["2pi","6.28"] },
              { q: "Sector area is 8π, r=8. Find central angle.", a: "45" }
            ]
          }
        ]
      }
    ]
  },
  precalculus: {
    title: "Precalculus",
    description: "Prepare for calculus with trigonometry, complex numbers, and advanced functions.",
    color: "#f97316",
    units: [
      {
        title: "Trigonometry",
        lessons: [
          {
            title: "Unit Circle",
            content: `<h2>The Unit Circle</h2><p>Circle with radius 1 centered at origin.</p><div class="formula">x=cos(θ), y=sin(θ)</div><p>Key angles: 0°,30°,45°,60°,90°</p><div class="example"><div class="example-label">Key Values</div><p>sin(30°)=1/2, cos(45°)=√2/2, tan(60°)=√3</p></div>`,
            practice: [
              { q: "sin(30°)=?", a: "1/2", alt: ["0.5",".5"] },
              { q: "cos(60°)=?", a: "1/2", alt: ["0.5",".5"] },
              { q: "sin(90°)=?", a: "1" },
              { q: "cos(0°)=?", a: "1" },
              { q: "tan(45°)=?", a: "1" },
              { q: "sin(45°)=?", a: "√2/2", alt: ["sqrt2/2","0.707"] }
            ]
          },
          {
            title: "Trigonometric Identities",
            content: `<h2>Fundamental Identities</h2><div class="formula">sin²(θ)+cos²(θ)=1<br>1+tan²(θ)=sec²(θ)</div><div class="formula">tan(θ)=sin(θ)/cos(θ)</div>`,
            practice: [
              { q: "If sin(θ)=3/5, find cos(θ)", a: "4/5", alt: ["0.8",".8"] },
              { q: "Simplify: sin²(x)+cos²(x)", a: "1" },
              { q: "If cos(θ)=1/2, find sin(θ)", a: "√3/2", alt: ["sqrt3/2","0.866"] },
              { q: "If tan(θ)=1, find sin(θ)", a: "√2/2", alt: ["sqrt2/2","0.707","1/√2"] },
              { q: "Simplify: 1-sin²(x)", a: "cos²x", alt: ["cos^2(x)","(cosx)²"] }
            ]
          },
          {
            title: "Solving Trigonometric Equations",
            content: `<h2>Solving Trig Equations</h2><p>Use inverse trig functions and consider period.</p><div class="example"><div class="example-label">Example</div><p>sin(x)=1/2 → x=30° or x=150° (in [0°,360°])</p></div>`,
            practice: [
              { q: "Solve: sin(x)=0", a: "0,180", alt: ["0°,180°","0, 180"] },
              { q: "Solve: cos(x)=1/2", a: "60,300", alt: ["60°,300°","60, 300"] },
              { q: "Solve: tan(x)=1", a: "45,225", alt: ["45°,225°","45, 225"] },
              { q: "Solve: sin(x)=1", a: "90" },
              { q: "Solve: cos(x)=0", a: "90,270", alt: ["90°,270°","90, 270"] }
            ]
          }
        ]
      },
      {
        title: "Complex Numbers",
        lessons: [
          {
            title: "Introduction to Complex Numbers",
            content: `<h2>Complex Number Form</h2><div class="formula">z=a+bi</div><p>• a=real part</p><p>• b=imaginary part</p><p>• i=√(-1), so i²=-1</p><div class="example"><div class="example-label">Example</div><p>(3+2i)+(1+4i)=4+6i</p></div>`,
            practice: [
              { q: "Simplify: i²", a: "-1" },
              { q: "Simplify: i⁴", a: "1" },
              { q: "Add: (2+3i)+(4+i)", a: "6+4i", alt: ["6 + 4i"] },
              { q: "Subtract: (5+2i)-(3+i)", a: "2+i", alt: ["2 + i"] },
              { q: "Simplify: 3i×2i", a: "-6" },
              { q: "Find real part of: 3-7i", a: "3" }
            ]
          },
          {
            title: "Complex Conjugates",
            content: `<h2>Complex Conjugate</h2><p>The conjugate of a+bi is a-bi.</p><div class="formula">(a+bi)(a-bi)=a²+b²</div><p>Multiplying by conjugate eliminates imaginary part.</p>`,
            practice: [
              { q: "Find conjugate of: 3+4i", a: "3-4i", alt: ["3 - 4i"] },
              { q: "Multiply: (2+i)(2-i)", a: "5" },
              { q: "Find conjugate of: 5-2i", a: "5+2i", alt: ["5 + 2i"] },
              { q: "Multiply: (3+2i)(3-2i)", a: "13" },
              { q: "Simplify: 1/(2+i)", a: "2/5-i/5", alt: ["0.4-0.2i","(2-i)/5"] }
            ]
          }
        ]
      },
      {
        title: "Sequences and Series",
        lessons: [
          {
            title: "Arithmetic Sequences",
            content: `<h2>Arithmetic Sequence</h2><p>Difference between consecutive terms is constant.</p><div class="formula">aₙ=a₁+(n-1)d<br>Sₙ=n/2(a₁+aₙ)</div><p>• d=common difference</p>`,
            practice: [
              { q: "Find 10th term: 2,5,8,11,...", a: "29" },
              { q: "Find common difference: 7,12,17,22,...", a: "5" },
              { q: "Find sum of first 5 terms: 1,3,5,7,9", a: "25" },
              { q: "Find 20th term: 10,7,4,1,...", a: "-47" },
              { q: "Which term is 47 in: 3,7,11,15,...?", a: "12" },
              { q: "Find sum: 2+5+8+...+20", a: "77" }
            ]
          },
          {
            title: "Geometric Sequences",
            content: `<h2>Geometric Sequence</h2><p>Ratio between consecutive terms is constant.</p><div class="formula">aₙ=a₁·r^(n-1)<br>Sₙ=a₁(1-r^n)/(1-r)</div><p>• r=common ratio</p>`,
            practice: [
              { q: "Find 5th term: 2,6,18,54,...", a: "162" },
              { q: "Find common ratio: 8,4,2,1,...", a: "1/2", alt: ["0.5",".5"] },
              { q: "Find 6th term: 3,-6,12,-24,...", a: "96" },
              { q: "Find sum of first 4 terms: 1,2,4,8", a: "15" },
              { q: "Find 8th term: 5,10,20,40,...", a: "640" },
              { q: "Find common ratio: 27,9,3,1,...", a: "1/3", alt: ["0.333"] }
            ]
          }
        ]
      }
    ]
  }
};

function initParticles() {
  const container = document.getElementById('particles');
  if (!container) return;
  for (let i = 0; i < 50; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    p.style.left = Math.random() * 100 + '%';
    p.style.animationDuration = (5 + Math.random() * 10) + 's';
    p.style.animationDelay = Math.random() * 5 + 's';
    container.appendChild(p);
  }
}

function getCourseKey() {
  return new URLSearchParams(window.location.search).get('course');
}

function getLessonIndices() {
  const params = new URLSearchParams(window.location.search);
  return { unit: parseInt(params.get('unit')), lesson: parseInt(params.get('lesson')) };
}

function renderCoursePage() {
  const courseKey = getCourseKey();
  if (!courseKey || !courses[courseKey]) return;
  const course = courses[courseKey];
  document.querySelector('.course-hero-info h1').textContent = course.title;
  document.querySelector('.course-hero-info p').textContent = course.description;
  document.querySelector('.course-hero-icon').style.background = course.color + '20';
  document.querySelector('.course-hero-icon').style.borderColor = course.color + '40';
  document.querySelector('.course-hero-icon span').textContent = course.title[0];
  document.querySelector('.course-hero-icon span').style.color = course.color;
  document.getElementById('breadcrumb-course').textContent = course.title;
  const unitsSection = document.querySelector('.units-section');
  unitsSection.innerHTML = '';
  course.units.forEach((unit, unitIdx) => {
    const unitBlock = document.createElement('div');
    unitBlock.className = 'unit-block';
    const unitHeader = document.createElement('div');
    unitHeader.className = 'unit-header';
    unitHeader.innerHTML = `<div class="unit-header-left"><span class="unit-number">Unit ${unitIdx + 1}</span><span class="unit-title">${unit.title}</span></div><span class="unit-toggle">▼</span>`;
    const lessonsDiv = document.createElement('div');
    lessonsDiv.className = 'unit-lessons';
    unit.lessons.forEach((lesson, lessonIdx) => {
      const lessonItem = document.createElement('div');
      lessonItem.className = 'lesson-item';
      lessonItem.innerHTML = `<div class="lesson-status"></div><div class="lesson-info"><div class="lesson-name">${lesson.title}</div><div class="lesson-type">Lesson</div></div><div class="lesson-duration">${lesson.practice?.length || 0} problems</div>`;
      lessonItem.onclick = () => window.location.href = `lesson.html?course=${courseKey}&unit=${unitIdx}&lesson=${lessonIdx}`;
      lessonsDiv.appendChild(lessonItem);
    });
    unitHeader.onclick = () => unitBlock.classList.toggle('open');
    unitBlock.appendChild(unitHeader);
    unitBlock.appendChild(lessonsDiv);
    unitsSection.appendChild(unitBlock);
  });
  if (unitsSection.firstChild) unitsSection.firstChild.classList.add('open');
}

function renderLessonPage() {
  const courseKey = getCourseKey();
  const { unit, lesson } = getLessonIndices();
  if (!courseKey || isNaN(unit) || isNaN(lesson)) return;
  const course = courses[courseKey];
  const lessonData = course?.units[unit]?.lessons[lesson];
  if (!lessonData) return;
  document.getElementById('bc-course').textContent = course.title;
  document.getElementById('bc-course-link').href = `course.html?course=${courseKey}`;
  document.getElementById('bc-lesson').textContent = lessonData.title;
  document.querySelector('.lesson-header h1').textContent = lessonData.title;
  document.querySelector('.lesson-header p').textContent = `Unit ${unit + 1} • ${course.units[unit].title}`;
  document.querySelector('.lesson-content-area').innerHTML = lessonData.content;
  const practiceSection = document.querySelector('.practice-section');
  if (lessonData.practice && lessonData.practice.length > 0) {
    practiceSection.style.display = 'block';
    practiceSection.innerHTML = `<h2>Practice Problems</h2><div class="practice-problems"></div><div class="practice-stats"><span class="score-display">Score: <span id="correct-count">0</span> / ${lessonData.practice.length}</span></div>`;
    const problemsContainer = practiceSection.querySelector('.practice-problems');
    lessonData.practice.forEach((prob, idx) => {
      const problemDiv = document.createElement('div');
      problemDiv.className = 'practice-problem';
      problemDiv.innerHTML = `<div class="problem-question"><strong>Problem ${idx + 1}:</strong> ${prob.q}</div><div class="problem-input"><input type="text" id="answer-${idx}" placeholder="Your answer"><button class="btn-check" data-idx="${idx}" data-a="${prob.a}" data-alt='${JSON.stringify(prob.alt || [])}'>Check</button></div><div class="problem-feedback" id="feedback-${idx}"></div>`;
      problemsContainer.appendChild(problemDiv);
    });
    problemsContainer.querySelectorAll('.btn-check').forEach(btn => {
      btn.addEventListener('click', function() {
        checkAnswer(this.dataset.idx, this.dataset.a, JSON.parse(this.dataset.alt || '[]'));
      });
    });
    setupNavigation(courseKey, unit, lesson, course);
  } else {
    practiceSection.style.display = 'none';
    setupNavigation(courseKey, unit, lesson, course);
  }
}

function checkAnswer(idx, correctAnswer, altAnswers) {
  const input = document.getElementById(`answer-${idx}`);
  const feedback = document.getElementById(`feedback-${idx}`);
  const userAnswer = input.value.trim().toLowerCase().replace(/\s+/g, '');
  const normalizedCorrect = correctAnswer.toLowerCase().replace(/\s+/g, '');
  const normalizedAlts = altAnswers.map(a => a.toLowerCase().replace(/\s+/g, ''));
  const isCorrect = userAnswer === normalizedCorrect || normalizedAlts.includes(userAnswer);
  feedback.className = 'problem-feedback ' + (isCorrect ? 'correct' : 'incorrect');
  feedback.textContent = isCorrect ? '✓ Correct!' : `✗ Incorrect. The answer is ${correctAnswer}`;
  feedback.style.display = 'block';
  if (isCorrect) {
    input.disabled = true;
    input.style.borderColor = 'var(--accent-green)';
    updateScore();
  }
}

function updateScore() {
  const correctInputs = document.querySelectorAll('.problem-input input:disabled');
  const scoreDisplay = document.getElementById('correct-count');
  if (scoreDisplay) scoreDisplay.textContent = correctInputs.length;
}

function setupNavigation(courseKey, unitIdx, lessonIdx, course) {
  const prevBtn = document.getElementById('prev-lesson');
  const nextBtn = document.getElementById('next-lesson');
  const markBtn = document.getElementById('mark-complete');
  let prevUnit = unitIdx, prevLesson = lessonIdx - 1;
  if (prevLesson < 0) {
    prevUnit--;
    if (prevUnit >= 0) prevLesson = course.units[prevUnit].lessons.length - 1;
  }
  let nextUnit = unitIdx, nextLesson = lessonIdx + 1;
  if (nextLesson >= course.units[unitIdx].lessons.length) {
    nextUnit++;
    nextLesson = 0;
  }
  if (prevUnit >= 0 && prevLesson >= 0) {
    prevBtn.onclick = () => window.location.href = `lesson.html?course=${courseKey}&unit=${prevUnit}&lesson=${prevLesson}`;
  } else {
    prevBtn.disabled = true;
    prevBtn.style.opacity = '0.5';
  }
  if (nextUnit < course.units.length) {
    nextBtn.onclick = () => window.location.href = `lesson.html?course=${courseKey}&unit=${nextUnit}&lesson=${nextLesson}`;
  } else {
    nextBtn.disabled = true;
    nextBtn.style.opacity = '0.5';
    nextBtn.textContent = 'Course Complete!';
  }
  markBtn.onclick = () => {
    markBtn.textContent = '✓ Completed';
    markBtn.style.background = 'var(--accent-green)';
  };
}

document.addEventListener('DOMContentLoaded', () => {
  initParticles();
  const path = window.location.pathname;
  if (path.includes('course.html')) renderCoursePage();
  else if (path.includes('lesson.html')) renderLessonPage();
});
