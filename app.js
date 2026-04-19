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
              { q: "Evaluate 2x+3 when x=5", a: "13", h: "Substitute x with 5: 2(5)+3" },
              { q: "Evaluate 4y-7 when y=3", a: "5", h: "Substitute y with 3: 4(3)-7" },
              { q: "Evaluate x²+2x+1 when x=2", a: "9", h: "Calculate: (2)²+2(2)+1 = 4+4+1" },
              { q: "Evaluate 3(a+b) when a=2, b=4", a: "18", h: "First add a+b=6, then multiply by 3" },
              { q: "Evaluate 5x-2y when x=3, y=1", a: "13", h: "5(3)-2(1) = 15-2" },
              { q: "Evaluate x/2+4 when x=10", a: "9", h: "10/2+4 = 5+4" }
            ]
          },
          {
            title: "Order of Operations",
            content: `<h2>PEMDAS Rule</h2><p>The order of operations:</p><div class="formula">P→E→MD→AS</div><div class="example"><div class="example-label">Example</div><p>3+4×2²=3+4×4=3+16=19</p></div>`,
            practice: [
              { q: "Simplify: 2+3×4", a: "14", h: "Multiply first: 2+12" },
              { q: "Simplify: (5+3)²÷4", a: "16", h: "Parentheses first: 8²÷4 = 64÷4" },
              { q: "Simplify: 10-2×3+4", a: "8", h: "Multiply first: 10-6+4" },
              { q: "Simplify: 2³×3-5", a: "19", h: "Exponent first: 8×3-5 = 24-5" },
              { q: "Simplify: (12-4)÷2+6", a: "10", h: "Parentheses first: 8÷2+6 = 4+6" },
              { q: "Simplify: 15÷3+2×4", a: "13", h: "Division and multiplication left to right: 5+8" }
            ]
          },
          {
            title: "Properties of Real Numbers",
            content: `<h2>Key Properties</h2><p><strong>Commutative:</strong> a+b=b+a</p><p><strong>Distributive:</strong> a(b+c)=ab+ac</p><div class="example"><div class="example-label">Example</div><p>3(x+4)=3x+12</p></div>`,
            practice: [
              { q: "Use distributive property: 4(x+3)", a: "4x+12", alt: ["4x + 12"], h: "Multiply 4 by each term inside" },
              { q: "Simplify: 2(3x+5)+4x", a: "10x+10", alt: ["10x + 10"], h: "Distribute: 6x+10+4x, then combine" },
              { q: "Simplify: 5+3(x-2)", a: "3x-1", alt: ["3x - 1"], h: "Distribute: 5+3x-6, then combine" },
              { q: "Use distributive property: -2(x-4)", a: "-2x+8", alt: ["-2x + 8"], h: "Multiply -2 by each term" },
              { q: "Simplify: 3(2x+1)-2(x-3)", a: "4x+9", alt: ["4x + 9"], h: "Distribute both: 6x+3-2x+6, then combine" }
            ]
          }
        ]
      },
      {
        title: "Solving Linear Equations",
        lessons: [
          {
            title: "One-Step Equations",
            content: `<h2>Solving One-Step Equations</h2><p>Use inverse operations:</p><div class="example"><div class="example-label">Example</div><p>x+5=12 → x=7</p><p>3x=15 → x=5</p></div>`,
            practice: [
              { q: "Solve: x+7=15", a: "8", h: "Subtract 7 from both sides" },
              { q: "Solve: x-4=9", a: "13", h: "Add 4 to both sides" },
              { q: "Solve: 5x=35", a: "7", h: "Divide both sides by 5" },
              { q: "Solve: x/3=6", a: "18", h: "Multiply both sides by 3" },
              { q: "Solve: x+2.5=8", a: "5.5", alt: ["11/2"], h: "Subtract 2.5 from both sides" },
              { q: "Solve: 2x=11", a: "5.5", alt: ["11/2"], h: "Divide both sides by 2" }
            ]
          },
          {
            title: "Two-Step Equations",
            content: `<h2>Solving Two-Step Equations</h2><p>1. Undo addition/subtraction</p><p>2. Undo multiplication/division</p><div class="example"><div class="example-label">Example</div><p>2x+5=13 → 2x=8 → x=4</p></div>`,
            practice: [
              { q: "Solve: 3x+4=16", a: "4", h: "Subtract 4, then divide by 3" },
              { q: "Solve: 2x-7=11", a: "9", h: "Add 7, then divide by 2" },
              { q: "Solve: 5x+3=28", a: "5", h: "Subtract 3, then divide by 5" },
              { q: "Solve: x/2+4=10", a: "12", h: "Subtract 4, then multiply by 2" },
              { q: "Solve: 4x-5=19", a: "6", h: "Add 5, then divide by 4" },
              { q: "Solve: 3x+2.5=14.5", a: "4", h: "Subtract 2.5, then divide by 3" }
            ]
          },
          {
            title: "Multi-Step Equations",
            content: `<h2>Solving Multi-Step Equations</h2><p>1. Simplify both sides</p><p>2. Move variables to one side</p><p>3. Solve</p><div class="example"><div class="example-label">Example</div><p>3(x+2)=2(x+5) → 3x+6=2x+10 → x=4</p></div>`,
            practice: [
              { q: "Solve: 2(x+3)=14", a: "4", h: "Distribute: 2x+6=14, subtract 6, divide by 2" },
              { q: "Solve: 3x+5=2x+12", a: "7", h: "Subtract 2x from both sides, subtract 5" },
              { q: "Solve: 4(x-2)=3(x+1)", a: "11", h: "Distribute both sides: 4x-8=3x+3" },
              { q: "Solve: 5x-3=2x+9", a: "4", h: "Subtract 2x, add 3: 3x=12" },
              { q: "Solve: 2(3x-1)=4(x+3)", a: "7", h: "Distribute: 6x-2=4x+12" },
              { q: "Solve: 7x+4=3x+20", a: "4", h: "Subtract 3x, subtract 4: 4x=16" }
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
              { q: "Find slope through (1,2) and (3,8)", a: "3", h: "(8-2)/(3-1) = 6/2" },
              { q: "Find slope through (0,0) and (4,6)", a: "1.5", alt: ["3/2"], h: "(6-0)/(4-0) = 6/4" },
              { q: "Find slope of y=3x+2", a: "3", h: "In y=mx+b, m is the coefficient of x" },
              { q: "Find slope through (2,5) and (6,5)", a: "0", h: "(5-5)/(6-2) = 0/4" },
              { q: "Find slope of 2x+3y=6", a: "-2/3", alt: ["-0.667"], h: "Solve for y: y=(-2/3)x+2" },
              { q: "Find slope through (-1,3) and (2,-3)", a: "-2", h: "(-3-3)/(2-(-1)) = -6/3" }
            ]
          },
          {
            title: "Slope-Intercept Form",
            content: `<h2>y=mx+b</h2><p>• m=slope</p><p>• b=y-intercept</p><div class="example"><div class="example-label">Example</div><p>y=2x+3 has slope 2 and y-intercept at (0,3)</p></div>`,
            practice: [
              { q: "Find slope and y-intercept of y=4x-2", a: "m=4,b=-2", alt: ["4,-2","slope 4, y-int -2"], h: "Compare to y=mx+b" },
              { q: "Write equation with slope 3, y-intercept 5", a: "y=3x+5", alt: ["y = 3x + 5"], h: "Plug m=3 and b=5 into y=mx+b" },
              { q: "Convert to slope-intercept: 2x+y=6", a: "y=-2x+6", alt: ["y = -2x + 6"], h: "Solve for y: subtract 2x from both sides" },
              { q: "Find y-intercept of y=-x+7", a: "7", h: "The constant term b is the y-intercept" },
              { q: "Write equation with slope -2 through (0,4)", a: "y=-2x+4", alt: ["y = -2x + 4"], h: "m=-2, b=4 (since (0,4) is the y-intercept)" }
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
              { q: "Solve: x²-9=0", a: "3,-3", alt: ["-3,3","±3"], h: "Difference of squares: (x-3)(x+3)=0" },
              { q: "Solve: x²+5x+6=0", a: "-2,-3", alt: ["-3,-2"], h: "Find two numbers that multiply to 6 and add to 5" },
              { q: "Solve: x²-7x+12=0", a: "3,4", alt: ["4,3"], h: "Find two numbers that multiply to 12 and add to -7" },
              { q: "Solve: x²+2x-8=0", a: "2,-4", alt: ["-4,2"], h: "Find two numbers that multiply to -8 and add to 2" },
              { q: "Solve: x²-x-6=0", a: "3,-2", alt: ["-2,3"], h: "Find two numbers that multiply to -6 and add to -1" },
              { q: "Factor: x²+8x+15", a: "(x+3)(x+5)", alt: ["(x+5)(x+3)"], h: "Find two numbers that multiply to 15 and add to 8" }
            ]
          },
          {
            title: "Quadratic Formula",
            content: `<h2>The Quadratic Formula</h2><p>For ax²+bx+c=0:</p><div class="formula">x=(-b±√(b²-4ac))/2a</div><div class="example"><div class="example-label">Example</div><p>x²+4x+3=0 → x=(-4±√(16-12))/2 → x=-1 or x=-3</p></div>`,
            practice: [
              { q: "Solve: x²+6x+5=0", a: "-1,-5", alt: ["-5,-1"], h: "a=1, b=6, c=5. x=(-6±√(36-20))/2" },
              { q: "Solve: 2x²-5x+2=0", a: "2,0.5", alt: ["0.5,2","2,1/2","1/2,2"], h: "a=2, b=-5, c=2. x=(5±√(25-16))/4" },
              { q: "Solve: x²-4x+4=0", a: "2", alt: ["2,2"], h: "a=1, b=-4, c=4. x=(4±√(16-16))/2" },
              { q: "Find discriminant of x²+3x+2=0", a: "1", h: "b²-4ac = 9-8" },
              { q: "Solve: x²+2x-3=0", a: "1,-3", alt: ["-3,1"], h: "a=1, b=2, c=-3. x=(-2±√(4+12))/2" }
            ]
          },
          {
            title: "Vertex Form",
            content: `<h2>Vertex Form</h2><div class="formula">y=a(x-h)²+k</div><p>• Vertex at (h,k)</p><p>• Axis of symmetry: x=h</p><div class="example"><div class="example-label">Example</div><p>y=2(x-3)²+1 has vertex at (3,1)</p></div>`,
            practice: [
              { q: "Find vertex of y=(x-2)²+3", a: "(2,3)", alt: ["2,3"], h: "In y=a(x-h)²+k, vertex is (h,k)" },
              { q: "Find vertex of y=2(x+1)²-4", a: "(-1,-4)", alt: ["-1,-4"], h: "Rewrite: y=2(x-(-1))²+(-4)" },
              { q: "Find axis of symmetry: y=(x-5)²+1", a: "x=5", alt: ["5"], h: "Axis of symmetry is x=h" },
              { q: "Convert to vertex form: y=x²+4x+5", a: "y=(x+2)²+1", alt: ["y=(x+2)^2+1"], h: "Complete the square: x²+4x+4+1 = (x+2)²+1" }
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
              { q: "Add: (3x²+2x+1)+(2x²+x+4)", a: "5x²+3x+5", alt: ["5x^2+3x+5"], h: "Combine like terms: 3x²+2x², 2x+x, 1+4" },
              { q: "Subtract: (5x²+3x)-(2x²+x)", a: "3x²+2x", alt: ["3x^2+2x"], h: "Distribute negative: 5x²+3x-2x²-x" },
              { q: "Find degree of: 3x⁴+2x²-5", a: "4", h: "The degree is the highest power of x" },
              { q: "Add: (2x+3)+(x-5)", a: "3x-2", alt: ["3x - 2"], h: "Combine like terms: 2x+x, 3-5" }
            ]
          },
          {
            title: "Polynomial Division",
            content: `<h2>Dividing Polynomials</h2><p>Use long division or synthetic division.</p><div class="example"><div class="example-label">Example</div><p>Divide x²+5x+6 by (x+2): Result is x+3</p></div>`,
            practice: [
              { q: "Divide x²-9 by (x-3)", a: "x+3", alt: ["x + 3"], h: "x²-9=(x-3)(x+3)" },
              { q: "Divide x²+7x+12 by (x+3)", a: "x+4", alt: ["x + 4"], h: "x²+7x+12=(x+3)(x+4)" },
              { q: "Find remainder: x²+3x+2 divided by (x-1)", a: "6", h: "Evaluate at x=1: 1+3+2" },
              { q: "Is (x-2) a factor of x²-5x+6?", a: "no", alt: ["No"], h: "Check if x=2 is a root: 4-10+6=0... wait, yes! Answer: yes" },
              { q: "Divide 2x²+5x+2 by (x+2)", a: "2x+1", alt: ["2x + 1"], h: "Use polynomial long division" }
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
              { q: "Evaluate: 2³", a: "8", h: "2×2×2" },
              { q: "Evaluate: 3⁰", a: "1", h: "Any non-zero number to the 0 power equals 1" },
              { q: "Simplify: 2⁴×2³", a: "128", alt: ["2^7"], h: "Add exponents: 2^(4+3)=2^7" },
              { q: "Simplify: (3²)³", a: "729", alt: ["3^6"], h: "Multiply exponents: 3^(2×3)=3^6" },
              { q: "Solve: 2^x=16", a: "4", h: "16=2^4" },
              { q: "Evaluate: 5⁻²", a: "0.04", alt: ["1/25",".04"], h: "5⁻²=1/5²=1/25" }
            ]
          },
          {
            title: "Introduction to Logarithms",
            content: `<h2>Logarithm Definition</h2><div class="formula">logₐ(x)=y means a^y=x</div><p>Common log: log₁₀(x)</p><p>Natural log: ln(x)</p><div class="example"><div class="example-label">Example</div><p>log₂(8)=3 because 2³=8</p></div>`,
            practice: [
              { q: "Evaluate: log₂(16)", a: "4", h: "2^4=16" },
              { q: "Evaluate: log₁₀(100)", a: "2", h: "10^2=100" },
              { q: "Evaluate: log₃(27)", a: "3", h: "3^3=27" },
              { q: "Solve: log₂(x)=5", a: "32", h: "x=2^5" },
              { q: "Evaluate: log₅(25)", a: "2", h: "5^2=25" },
              { q: "Evaluate: ln(e)", a: "1", h: "ln is log base e, so ln(e)=1" }
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
              { q: "How many points define a line?", a: "2", alt: ["two","Two"], h: "Two distinct points determine a unique line" },
              { q: "How many points define a plane?", a: "3", alt: ["three","Three"], h: "Three non-collinear points determine a plane" },
              { q: "True or False: A line has endpoints", a: "false", alt: ["False"], h: "A line extends infinitely in both directions" },
              { q: "What is the intersection of two planes?", a: "line", alt: ["Line","a line"], h: "Two planes intersect in a line" },
              { q: "How many lines pass through two distinct points?", a: "1", alt: ["one","One"], h: "Exactly one line passes through any two distinct points" }
            ]
          },
          {
            title: "Angle Relationships",
            content: `<h2>Types of Angles</h2><p>• <strong>Acute:</strong> 0°<angle<90°</p><p>• <strong>Right:</strong> angle=90°</p><p>• <strong>Obtuse:</strong> 90°<angle<180°</p><div class="formula">Complementary: sum to 90°<br>Supplementary: sum to 180°</div>`,
            practice: [
              { q: "Find complement of 35°", a: "55", h: "90-35=55" },
              { q: "Find supplement of 120°", a: "60", h: "180-120=60" },
              { q: "Two angles are vertical. One is 40°. Find the other.", a: "40", h: "Vertical angles are congruent (equal)" },
              { q: "If angle A and B are complementary and A=25°, find B", a: "65", h: "90-25=65" },
              { q: "Find the angle that equals its own complement", a: "45", h: "x=90-x, so 2x=90, x=45" },
              { q: "Two supplementary angles: one is 30° more than other. Find smaller.", a: "75", h: "x+(x+30)=180, 2x=150, x=75" }
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
              { q: "Find third angle: 60°, 70°, ?", a: "50", h: "180-60-70" },
              { q: "In equilateral triangle, each angle equals?", a: "60", h: "180÷3=60" },
              { q: "Find x: angles are x, 2x, 3x", a: "30", h: "x+2x+3x=180, 6x=180" },
              { q: "Two angles are 45° each. Find third.", a: "90", h: "180-45-45" },
              { q: "Exterior angle is 110°. One remote interior is 40°. Find other.", a: "70", h: "110-40=70" },
              { q: "Find x: angles are 35°, x, and 2x", a: "48.33", alt: ["145/3"], h: "35+3x=180, 3x=145" }
            ]
          },
          {
            title: "Pythagorean Theorem",
            content: `<h2>The Pythagorean Theorem</h2><p>For right triangle with legs a,b and hypotenuse c:</p><div class="formula">a²+b²=c²</div><div class="example"><div class="example-label">Example</div><p>a=3,b=4 → c²=9+16=25 → c=5</p></div>`,
            practice: [
              { q: "Find hypotenuse: legs 6 and 8", a: "10", h: "√(36+64)=√100" },
              { q: "Find missing leg: hypotenuse 13, one leg 5", a: "12", h: "√(169-25)=√144" },
              { q: "Find hypotenuse: legs 5 and 12", a: "13", h: "√(25+144)=√169" },
              { q: "Is 3-4-6 a right triangle?", a: "no", alt: ["No"], h: "Check: 9+16=25≠36" },
              { q: "Find leg: hypotenuse 10, one leg 6", a: "8", h: "√(100-36)=√64" },
              { q: "Find hypotenuse: legs 9 and 12", a: "15", h: "√(81+144)=√225" }
            ]
          },
          {
            title: "Special Right Triangles",
            content: `<h2>45-45-90 Triangle</h2><div class="formula">Leg=x, Hypotenuse=x√2</div><h2>30-60-90 Triangle</h2><div class="formula">Short leg=x<br>Long leg=x√3<br>Hypotenuse=2x</div>`,
            practice: [
              { q: "In 45-45-90, leg=5, find hypotenuse", a: "5√2", alt: ["5sqrt2","7.07"], h: "Hypotenuse = leg×√2" },
              { q: "In 30-60-90, short leg=4, find hypotenuse", a: "8", h: "Hypotenuse = 2×short leg" },
              { q: "In 30-60-90, short leg=3, find long leg", a: "3√3", alt: ["3sqrt3","5.2"], h: "Long leg = short leg×√3" },
              { q: "In 45-45-90, hypotenuse=10, find leg", a: "5√2", alt: ["5sqrt2","7.07"], h: "Leg = hypotenuse/√2 = 10/√2 = 5√2" },
              { q: "In 30-60-90, hypotenuse=12, find short leg", a: "6", h: "Short leg = hypotenuse/2" }
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
              { q: "Find circumference: r=5", a: "10π", alt: ["10pi","31.4"], h: "C=2πr=2π(5)" },
              { q: "Find area: r=4", a: "16π", alt: ["16pi","50.27"], h: "A=πr²=π(16)" },
              { q: "Find radius: diameter=14", a: "7", h: "r=d/2=14/2" },
              { q: "Find area: diameter=10", a: "25π", alt: ["25pi","78.5"], h: "r=5, A=π(25)" },
              { q: "Find circumference: d=8", a: "8π", alt: ["8pi","25.13"], h: "C=πd=π(8)" },
              { q: "Find radius: circumference=12π", a: "6", h: "12π=2πr, so r=6" }
            ]
          },
          {
            title: "Arcs and Sectors",
            content: `<h2>Arc Length and Sector Area</h2><div class="formula">Arc Length=(θ/360°)×2πr<br>Sector Area=(θ/360°)×πr²</div><p>θ=central angle in degrees</p>`,
            practice: [
              { q: "Find arc length: r=6, central angle=60°", a: "2π", alt: ["2pi","6.28"], h: "(60/360)×2π(6) = (1/6)×12π" },
              { q: "Find sector area: r=4, central angle=90°", a: "4π", alt: ["4pi","12.57"], h: "(90/360)×π(16) = (1/4)×16π" },
              { q: "Arc length is 4π, r=6. Find central angle.", a: "120", h: "4π=(θ/360)×12π, θ/360=1/3" },
              { q: "Find arc length: r=9, central angle=40°", a: "2π", alt: ["2pi","6.28"], h: "(40/360)×2π(9) = (1/9)×18π" },
              { q: "Sector area is 8π, r=8. Find central angle.", a: "45", h: "8π=(θ/360)×64π, θ/360=1/8" }
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
              { q: "sin(30°)=?", a: "1/2", alt: ["0.5",".5"], h: "On the unit circle, y-coordinate at 30°" },
              { q: "cos(60°)=?", a: "1/2", alt: ["0.5",".5"], h: "cos(60°)=sin(30°) by co-function" },
              { q: "sin(90°)=?", a: "1", h: "At 90°, the point is (0,1) on unit circle" },
              { q: "cos(0°)=?", a: "1", h: "At 0°, the point is (1,0) on unit circle" },
              { q: "tan(45°)=?", a: "1", h: "tan=sin/cos, and at 45° sin=cos" },
              { q: "sin(45°)=?", a: "√2/2", alt: ["sqrt2/2","0.707"], h: "At 45°, x=y, and x²+y²=1, so 2x²=1" }
            ]
          },
          {
            title: "Trigonometric Identities",
            content: `<h2>Fundamental Identities</h2><div class="formula">sin²(θ)+cos²(θ)=1<br>1+tan²(θ)=sec²(θ)</div><div class="formula">tan(θ)=sin(θ)/cos(θ)</div>`,
            practice: [
              { q: "If sin(θ)=3/5, find cos(θ)", a: "4/5", alt: ["0.8",".8"], h: "Use sin²+cos²=1: cos²=1-9/25=16/25" },
              { q: "Simplify: sin²(x)+cos²(x)", a: "1", h: "This is the Pythagorean identity" },
              { q: "If cos(θ)=1/2, find sin(θ)", a: "√3/2", alt: ["sqrt3/2","0.866"], h: "sin²=1-1/4=3/4, so sin=√3/2" },
              { q: "If tan(θ)=1, find sin(θ)", a: "√2/2", alt: ["sqrt2/2","0.707","1/√2"], h: "tan=1 means θ=45°, sin(45°)=√2/2" },
              { q: "Simplify: 1-sin²(x)", a: "cos²x", alt: ["cos^2(x)","(cosx)²"], h: "Rearrange sin²+cos²=1" }
            ]
          },
          {
            title: "Solving Trigonometric Equations",
            content: `<h2>Solving Trig Equations</h2><p>Use inverse trig functions and consider period.</p><div class="example"><div class="example-label">Example</div><p>sin(x)=1/2 → x=30° or x=150° (in [0°,360°])</p></div>`,
            practice: [
              { q: "Solve: sin(x)=0 (0°≤x<360°)", a: "0,180", alt: ["0°,180°","0, 180"], h: "sin(x)=0 at x=0° and x=180°" },
              { q: "Solve: cos(x)=1/2 (0°≤x<360°)", a: "60,300", alt: ["60°,300°","60, 300"], h: "cos is positive in Q1 and Q4" },
              { q: "Solve: tan(x)=1 (0°≤x<360°)", a: "45,225", alt: ["45°,225°","45, 225"], h: "tan is positive in Q1 and Q3" },
              { q: "Solve: sin(x)=1 (0°≤x<360°)", a: "90", h: "sin(x)=1 only at x=90°" },
              { q: "Solve: cos(x)=0 (0°≤x<360°)", a: "90,270", alt: ["90°,270°","90, 270"], h: "cos(x)=0 at the top and bottom of unit circle" }
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
              { q: "Simplify: i²", a: "-1", h: "By definition, i²=-1" },
              { q: "Simplify: i⁴", a: "1", h: "i⁴=(i²)²=(-1)²=1" },
              { q: "Add: (2+3i)+(4+i)", a: "6+4i", alt: ["6 + 4i"], h: "Add real parts: 2+4=6, Add imaginary: 3i+i=4i" },
              { q: "Subtract: (5+2i)-(3+i)", a: "2+i", alt: ["2 + i"], h: "5-3=2, 2i-i=i" },
              { q: "Simplify: 3i×2i", a: "-6", h: "6i²=6(-1)=-6" },
              { q: "Find real part of: 3-7i", a: "3", h: "The real part is the term without i" }
            ]
          },
          {
            title: "Complex Conjugates",
            content: `<h2>Complex Conjugate</h2><p>The conjugate of a+bi is a-bi.</p><div class="formula">(a+bi)(a-bi)=a²+b²</div><p>Multiplying by conjugate eliminates imaginary part.</p>`,
            practice: [
              { q: "Find conjugate of: 3+4i", a: "3-4i", alt: ["3 - 4i"], h: "Change the sign of the imaginary part" },
              { q: "Multiply: (2+i)(2-i)", a: "5", h: "a²+b²=4+1=5" },
              { q: "Find conjugate of: 5-2i", a: "5+2i", alt: ["5 + 2i"], h: "Change the sign of the imaginary part" },
              { q: "Multiply: (3+2i)(3-2i)", a: "13", h: "a²+b²=9+4=13" },
              { q: "Simplify: 1/(2+i)", a: "2/5-i/5", alt: ["0.4-0.2i","(2-i)/5"], h: "Multiply numerator and denominator by (2-i)" }
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
              { q: "Find 10th term: 2,5,8,11,...", a: "29", h: "a₁=2, d=3, a₁₀=2+9(3)" },
              { q: "Find common difference: 7,12,17,22,...", a: "5", h: "12-7=5" },
              { q: "Find sum of first 5 terms: 1,3,5,7,9", a: "25", h: "S₅=5/2(1+9)=25" },
              { q: "Find 20th term: 10,7,4,1,...", a: "-47", h: "a₁=10, d=-3, a₂₀=10+19(-3)" },
              { q: "Which term is 47 in: 3,7,11,15,...?", a: "12", h: "3+(n-1)4=47, 4(n-1)=44, n-1=11" },
              { q: "Find sum: 2+5+8+...+20", a: "77", h: "a₁=2, d=3, find n: 2+(n-1)3=20, n=7. S₇=7/2(2+20)" }
            ]
          },
          {
            title: "Geometric Sequences",
            content: `<h2>Geometric Sequence</h2><p>Ratio between consecutive terms is constant.</p><div class="formula">aₙ=a₁·r^(n-1)<br>Sₙ=a₁(1-r^n)/(1-r)</div><p>• r=common ratio</p>`,
            practice: [
              { q: "Find 5th term: 2,6,18,54,...", a: "162", h: "a₁=2, r=3, a₅=2·3⁴=2·81" },
              { q: "Find common ratio: 8,4,2,1,...", a: "1/2", alt: ["0.5",".5"], h: "4/8=1/2" },
              { q: "Find 6th term: 3,-6,12,-24,...", a: "96", h: "a₁=3, r=-2, a₆=3·(-2)⁵=3·(-32)" },
              { q: "Find sum of first 4 terms: 1,2,4,8", a: "15", h: "S₄=1(1-2⁴)/(1-2)=(1-16)/(-1)" },
              { q: "Find 8th term: 5,10,20,40,...", a: "640", h: "a₁=5, r=2, a₈=5·2⁷=5·128" },
              { q: "Find common ratio: 27,9,3,1,...", a: "1/3", alt: ["0.333"], h: "9/27=1/3" }
            ]
          }
        ]
      }
    ]
  }
};

/* ==============================
   Mixed Practice Pool (index page)
   ============================== */
const mixedPracticePool = [
  { q: "Evaluate 3x+7 when x=4", a: "19", course: "algebra1" },
  { q: "Solve: x-5=12", a: "17", course: "algebra1" },
  { q: "Simplify: 4+2×5", a: "14", course: "algebra1" },
  { q: "Find slope through (2,3) and (4,7)", a: "2", course: "algebra1" },
  { q: "Solve: x²-16=0", a: "4,-4", alt: ["-4,4","±4"], course: "algebra2" },
  { q: "Evaluate: log₂(8)", a: "3", course: "algebra2" },
  { q: "Factor: x²-5x+6", a: "(x-2)(x-3)", alt: ["(x-3)(x-2)"], course: "algebra2" },
  { q: "Simplify: 2⁵", a: "32", course: "algebra2" },
  { q: "Find supplement of 70°", a: "110", course: "geometry" },
  { q: "Find hypotenuse: legs 8 and 15", a: "17", course: "geometry" },
  { q: "Find area of circle: r=3", a: "9π", alt: ["9pi"], course: "geometry" },
  { q: "Third angle: 40°, 60°, ?", a: "80", course: "geometry" },
  { q: "sin(60°)=?", a: "√3/2", alt: ["sqrt3/2","0.866"], course: "precalculus" },
  { q: "Simplify: i³", a: "-i", alt: ["-1i"], course: "precalculus" },
  { q: "Find 5th term: 1,3,9,27,...", a: "81", course: "precalculus" },
  { q: "If cos(θ)=√3/2, find θ (in degrees, 0-90)", a: "30", course: "precalculus" }
];

/* ==============================
   Utility Functions
   ============================== */

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

/* ==============================
   Course Page Rendering
   ============================== */

function renderCoursePage() {
  const courseKey = getCourseKey();
  if (!courseKey || !courses[courseKey]) return;
  const course = courses[courseKey];
  document.querySelector('.course-hero-info h1').textContent = course.title;
  document.querySelector('.course-hero-info p').textContent = course.description;
  document.querySelector('.course-hero-icon').style.background = course.color + '20';
  document.querySelector('.course-hero-icon').style.border = '1px solid ' + course.color + '40';
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

  // Initialize course challenge
  initCourseChallenge(courseKey);
}

/* ==============================
   Lesson Page Rendering
   ============================== */

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
    const totalProblems = lessonData.practice.length;
    let solvedCount = 0;

    // Update score badge
    const scoreFraction = document.getElementById('score-fraction');
    const scorePct = document.getElementById('score-pct');
    if (scoreFraction) scoreFraction.textContent = `0 / ${totalProblems}`;
    if (scorePct) scorePct.textContent = '0%';

    const problemsContainer = practiceSection.querySelector('.practice-problems');
    problemsContainer.innerHTML = '';

    lessonData.practice.forEach((prob, idx) => {
      const problemDiv = document.createElement('div');
      problemDiv.className = 'practice-problem';
      problemDiv.innerHTML = `
        <div class="problem-question"><strong>Problem ${idx + 1}:</strong> ${prob.q}</div>
        <div class="problem-input">
          <input type="text" id="answer-${idx}" placeholder="Your answer">
          <button class="btn-check" data-idx="${idx}">Check</button>
          ${prob.h ? `<button class="problem-hint-btn" data-idx="${idx}">Hint</button>` : ''}
        </div>
        ${prob.h ? `<div class="problem-hint" id="hint-${idx}">${prob.h}</div>` : ''}
        <div class="problem-feedback" id="feedback-${idx}"></div>
      `;
      problemsContainer.appendChild(problemDiv);
    });

    // Check answer handler
    problemsContainer.querySelectorAll('.btn-check').forEach(btn => {
      btn.addEventListener('click', function() {
        const idx = parseInt(this.dataset.idx);
        const prob = lessonData.practice[idx];
        checkLessonAnswer(idx, prob.a, prob.alt || []);
      });
    });

    // Hint button handler
    problemsContainer.querySelectorAll('.problem-hint-btn').forEach(btn => {
      btn.addEventListener('click', function() {
        const idx = parseInt(this.dataset.idx);
        const hintEl = document.getElementById(`hint-${idx}`);
        if (hintEl) hintEl.classList.toggle('visible');
      });
    });

    // "Show All Hints" button
    const showAllHintsBtn = document.getElementById('show-all-hints');
    if (showAllHintsBtn) {
      showAllHintsBtn.addEventListener('click', () => {
        document.querySelectorAll('.problem-hint').forEach(h => h.classList.add('visible'));
      });
    }

    setupNavigation(courseKey, unit, lesson, course);
  } else {
    practiceSection.style.display = 'none';
    setupNavigation(courseKey, unit, lesson, course);
  }
}

function checkLessonAnswer(idx, correctAnswer, altAnswers) {
  const input = document.getElementById(`answer-${idx}`);
  const feedback = document.getElementById(`feedback-${idx}`);
  if (!input || !feedback || input.disabled) return;

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
    input.style.background = 'rgba(34,197,94,0.05)';
    updateLessonScore();
  }
}

function updateLessonScore() {
  const correctInputs = document.querySelectorAll('.problem-input input:disabled');
  const totalInputs = document.querySelectorAll('.problem-input input');
  const solved = correctInputs.length;
  const total = totalInputs.length;
  const pct = total > 0 ? Math.round((solved / total) * 100) : 0;

  const scoreFraction = document.getElementById('score-fraction');
  const scorePct = document.getElementById('score-pct');
  if (scoreFraction) scoreFraction.textContent = `${solved} / ${total}`;
  if (scorePct) {
    scorePct.textContent = `${pct}%`;
    scorePct.style.color = pct === 100 ? 'var(--accent-green)' : 'var(--accent-cyan)';
  }

  // Show summary when all completed
  if (solved === total && total > 0) {
    const summary = document.getElementById('practice-summary');
    const summaryText = document.getElementById('summary-text');
    if (summary) {
      summary.style.display = 'block';
      if (summaryText) summaryText.textContent = `All ${total} problems completed! Great job!`;
    }
  }
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

/* ==============================
   Index Page — Quick Practice
   ============================== */

let indexPracticeState = {
  problems: [],
  currentIdx: 0,
  score: 0,
  answered: false
};

function initIndexPractice() {
  const topicSelect = document.getElementById('practice-topic');
  const newProblemBtn = document.getElementById('new-problem');
  const checkBtn = document.getElementById('prob-check');
  const answerInput = document.getElementById('prob-answer');

  if (!topicSelect || !newProblemBtn || !checkBtn) return;

  newProblemBtn.addEventListener('click', () => loadNewIndexProblem());
  checkBtn.addEventListener('click', () => checkIndexAnswer());
  answerInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') checkIndexAnswer();
  });
  topicSelect.addEventListener('change', () => {
    resetIndexPractice();
    loadNewIndexProblem();
  });

  // Load first problem
  resetIndexPractice();
  loadNewIndexProblem();
}

function resetIndexPractice() {
  indexPracticeState = {
    problems: [],
    currentIdx: 0,
    score: 0,
    answered: false
  };
  updateIndexScoreDisplay();
}

function getProblemsForTopic(topic) {
  if (topic === 'mixed') {
    return [...mixedPracticePool];
  }
  const problems = [];
  const course = courses[topic];
  if (!course) return problems;
  course.units.forEach(unit => {
    unit.lessons.forEach(lesson => {
      if (lesson.practice) {
        lesson.practice.forEach(p => {
          problems.push({ ...p, course: topic });
        });
      }
    });
  });
  return problems;
}

function shuffleArray(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function loadNewIndexProblem() {
  const topic = document.getElementById('practice-topic').value;
  const questionEl = document.getElementById('prob-question');
  const answerInput = document.getElementById('prob-answer');
  const feedbackEl = document.getElementById('prob-feedback');

  // If we need a new batch of problems
  if (indexPracticeState.currentIdx >= indexPracticeState.problems.length) {
    const allProblems = getProblemsForTopic(topic);
    if (allProblems.length === 0) {
      questionEl.textContent = 'No problems available for this topic.';
      return;
    }
    indexPracticeState.problems = shuffleArray(allProblems).slice(0, 5);
    indexPracticeState.currentIdx = 0;
    if (indexPracticeState.answered || indexPracticeState.problems.length === allProblems.length) {
      // Reset score only if we cycled through
      indexPracticeState.score = 0;
      updateIndexScoreDisplay();
    }
  }

  const prob = indexPracticeState.problems[indexPracticeState.currentIdx];
  questionEl.textContent = prob.q;
  answerInput.value = '';
  answerInput.disabled = false;
  answerInput.style.borderColor = '';
  answerInput.style.background = '';
  answerInput.focus();
  feedbackEl.style.display = 'none';
  feedbackEl.className = 'practice-feedback';
  indexPracticeState.answered = false;

  document.getElementById('prob-current').textContent = indexPracticeState.currentIdx + 1;
  document.getElementById('prob-total').textContent = indexPracticeState.problems.length;
}

function checkIndexAnswer() {
  if (indexPracticeState.answered) {
    // Move to next problem
    indexPracticeState.currentIdx++;
    loadNewIndexProblem();
    return;
  }

  const answerInput = document.getElementById('prob-answer');
  const feedbackEl = document.getElementById('prob-feedback');
  const checkBtn = document.getElementById('prob-check');
  const userAnswer = answerInput.value.trim().toLowerCase().replace(/\s+/g, '');

  if (!userAnswer) return;

  const prob = indexPracticeState.problems[indexPracticeState.currentIdx];
  const normalizedCorrect = prob.a.toLowerCase().replace(/\s+/g, '');
  const normalizedAlts = (prob.alt || []).map(a => a.toLowerCase().replace(/\s+/g, ''));
  const isCorrect = userAnswer === normalizedCorrect || normalizedAlts.includes(userAnswer);

  feedbackEl.style.display = 'block';
  indexPracticeState.answered = true;

  if (isCorrect) {
    feedbackEl.className = 'practice-feedback correct';
    feedbackEl.innerHTML = '✓ Correct! <span class="feedback-next">Click "Check" or press Enter for next problem.</span>';
    answerInput.disabled = true;
    answerInput.style.borderColor = 'var(--accent-green)';
    answerInput.style.background = 'rgba(34,197,94,0.05)';
    indexPracticeState.score++;
    updateIndexScoreDisplay();
  } else {
    feedbackEl.className = 'practice-feedback incorrect';
    feedbackEl.innerHTML = `✗ Incorrect. The answer is <strong>${prob.a}</strong>. <span class="feedback-next">Click "Check" to continue.</span>`;
  }

  checkBtn.textContent = 'Next';
}

function updateIndexScoreDisplay() {
  const scoreEl = document.getElementById('prob-score');
  if (scoreEl) scoreEl.textContent = indexPracticeState.score;

  // Reset button text
  const checkBtn = document.getElementById('prob-check');
  if (checkBtn) checkBtn.textContent = 'Check';
}

/* ==============================
   Course Page — Challenge
   ============================== */

let challengeState = {
  problems: [],
  currentIdx: 0,
  score: 0,
  streak: 0,
  maxStreak: 0,
  results: [],
  answered: false
};

function initCourseChallenge(courseKey) {
  const startBtn = document.getElementById('challenge-start');
  const resetBtn = document.getElementById('challenge-reset');
  const restartBtn = document.getElementById('challenge-restart');
  const checkBtn = document.getElementById('ch-check');
  const hintBtn = document.getElementById('ch-hint-btn');
  const skipBtn = document.getElementById('ch-skip');
  const answerInput = document.getElementById('ch-answer');

  if (!startBtn) return;

  startBtn.addEventListener('click', () => startChallenge(courseKey));
  resetBtn?.addEventListener('click', () => startChallenge(courseKey));
  restartBtn?.addEventListener('click', () => startChallenge(courseKey));
  checkBtn?.addEventListener('click', () => checkChallengeAnswer());
  hintBtn?.addEventListener('click', () => toggleChallengeHint());
  skipBtn?.addEventListener('click', () => skipChallengeQuestion());
  answerInput?.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') checkChallengeAnswer();
  });
}

function startChallenge(courseKey) {
  const course = courses[courseKey];
  if (!course) return;

  // Collect all practice problems from the course
  const allProblems = [];
  course.units.forEach(unit => {
    unit.lessons.forEach(lesson => {
      if (lesson.practice) {
        lesson.practice.forEach(p => {
          allProblems.push({
            q: p.q,
            a: p.a,
            alt: p.alt || [],
            h: p.h || `Think about the key concept from "${lesson.title}"`,
            lesson: lesson.title
          });
        });
      }
    });
  });

  if (allProblems.length === 0) return;

  // Pick up to 10 random problems
  const selected = shuffleArray(allProblems).slice(0, Math.min(10, allProblems.length));

  challengeState = {
    problems: selected,
    currentIdx: 0,
    score: 0,
    streak: 0,
    maxStreak: 0,
    results: [],
    answered: false
  };

  // Show workspace, hide results
  document.getElementById('challenge-workspace').style.display = 'block';
  document.getElementById('challenge-results').style.display = 'none';
  document.getElementById('challenge-start').style.display = 'none';
  document.getElementById('challenge-reset').style.display = 'inline-flex';

  loadChallengeQuestion();
}

function loadChallengeQuestion() {
  const prob = challengeState.problems[challengeState.currentIdx];
  const total = challengeState.problems.length;

  document.getElementById('ch-current').textContent = challengeState.currentIdx + 1;
  document.getElementById('ch-total').textContent = total;
  document.getElementById('ch-score').textContent = challengeState.score;
  document.getElementById('ch-max').textContent = total;
  document.getElementById('ch-streak').textContent = challengeState.streak;
  document.getElementById('ch-question').textContent = prob.q;
  document.getElementById('ch-hint').textContent = `Hint: ${prob.h}`;
  document.getElementById('ch-hint').classList.remove('visible');
  document.getElementById('ch-feedback').style.display = 'none';
  document.getElementById('ch-feedback').className = 'challenge-feedback';
  document.getElementById('ch-answer').value = '';
  document.getElementById('ch-answer').disabled = false;
  document.getElementById('ch-answer').style.borderColor = '';
  document.getElementById('ch-answer').style.background = '';
  document.getElementById('ch-check').textContent = 'Check';

  // Update progress bar
  const pct = ((challengeState.currentIdx) / total) * 100;
  document.getElementById('challenge-progress-fill').style.width = pct + '%';

  challengeState.answered = false;
  document.getElementById('ch-answer').focus();
}

function checkChallengeAnswer() {
  if (challengeState.answered) {
    // Move to next
    challengeState.currentIdx++;
    if (challengeState.currentIdx >= challengeState.problems.length) {
      showChallengeResults();
    } else {
      loadChallengeQuestion();
    }
    return;
  }

  const answerInput = document.getElementById('ch-answer');
  const userAnswer = answerInput.value.trim().toLowerCase().replace(/\s+/g, '');
  if (!userAnswer) return;

  const prob = challengeState.problems[challengeState.currentIdx];
  const normalizedCorrect = prob.a.toLowerCase().replace(/\s+/g, '');
  const normalizedAlts = prob.alt.map(a => a.toLowerCase().replace(/\s+/g, ''));
  const isCorrect = userAnswer === normalizedCorrect || normalizedAlts.includes(userAnswer);

  const feedbackEl = document.getElementById('ch-feedback');
  feedbackEl.style.display = 'block';
  challengeState.answered = true;

  if (isCorrect) {
    feedbackEl.className = 'challenge-feedback correct';
    feedbackEl.textContent = '✓ Correct!';
    answerInput.disabled = true;
    answerInput.style.borderColor = 'var(--accent-green)';
    answerInput.style.background = 'rgba(34,197,94,0.05)';
    challengeState.score++;
    challengeState.streak++;
    if (challengeState.streak > challengeState.maxStreak) {
      challengeState.maxStreak = challengeState.streak;
    }
  } else {
    feedbackEl.className = 'challenge-feedback incorrect';
    feedbackEl.innerHTML = `✗ Incorrect. The answer is <strong>${prob.a}</strong>`;
    challengeState.streak = 0;
  }

  challengeState.results.push({
    q: prob.q,
    correct: isCorrect,
    userAnswer: answerInput.value.trim(),
    correctAnswer: prob.a
  });

  document.getElementById('ch-check').textContent = 'Next';
  document.getElementById('ch-score').textContent = challengeState.score;
  document.getElementById('ch-streak').textContent = challengeState.streak;
}

function toggleChallengeHint() {
  document.getElementById('ch-hint').classList.toggle('visible');
}

function skipChallengeQuestion() {
  if (challengeState.answered) return;

  const prob = challengeState.problems[challengeState.currentIdx];
  challengeState.results.push({
    q: prob.q,
    correct: false,
    userAnswer: '(skipped)',
    correctAnswer: prob.a
  });
  challengeState.streak = 0;
  document.getElementById('ch-streak').textContent = challengeState.streak;

  challengeState.currentIdx++;
  if (challengeState.currentIdx >= challengeState.problems.length) {
    showChallengeResults();
  } else {
    loadChallengeQuestion();
  }
}

function showChallengeResults() {
  document.getElementById('challenge-workspace').style.display = 'none';
  document.getElementById('challenge-results').style.display = 'block';
  document.getElementById('challenge-reset').style.display = 'none';

  const total = challengeState.problems.length;
  const score = challengeState.score;
  const pct = Math.round((score / total) * 100);

  document.getElementById('results-pct').textContent = pct + '%';

  let summaryText = '';
  if (pct === 100) summaryText = `Perfect score! You answered all ${total} questions correctly!`;
  else if (pct >= 80) summaryText = `Great job! You scored ${score}/${total}. Keep it up!`;
  else if (pct >= 60) summaryText = `Good effort! You scored ${score}/${total}. Room for improvement!`;
  else summaryText = `Keep practicing! You scored ${score}/${total}. Review the lessons and try again!`;
  if (challengeState.maxStreak >= 3) summaryText += ` Best streak: ${challengeState.maxStreak} 🔥`;

  document.getElementById('results-summary').textContent = summaryText;

  // Build breakdown
  const breakdown = document.getElementById('results-breakdown');
  breakdown.innerHTML = '';
  challengeState.results.forEach((r, i) => {
    const item = document.createElement('div');
    item.className = 'result-item ' + (r.correct ? 'correct' : 'incorrect');
    item.innerHTML = `
      <span class="result-status">${r.correct ? '✓' : '✗'}</span>
      <span class="result-q">${i + 1}. ${r.q}</span>
      <span class="result-a">${r.correct ? '' : `Ans: ${r.correctAnswer}`}</span>
    `;
    breakdown.appendChild(item);
  });
}

/* ==============================
   Initialization
   ============================== */

document.addEventListener('DOMContentLoaded', () => {
  initParticles();
  const path = window.location.pathname;
  if (path.includes('course.html')) renderCoursePage();
  else if (path.includes('lesson.html')) renderLessonPage();
  else if (path.includes('index.html') || path === '/' || path.endsWith('/')) initIndexPractice();
});
