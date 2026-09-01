export const programmingFundamentalsDomain = {
  domain: "Programming Fundamentals",
  color: "#4A5FA0",
  entries: [
    {
      term: "Basic programming building blocks",
      slug: "basic-programming-building-blocks",
      meaning: "The alphabet of code — every language, framework, and app is ultimately just these pieces combined.",
      purpose: "The small set of constructs every language is built from — learn these once, transfer them anywhere.",
      starter: {
        summary: "Variables hold data, conditions make decisions, functions package reusable logic, and loops repeat work.",
        coreConcept: "Every program consists of input → processing (variables, conditions, loops) → output.",
        quickExample: "let user = 'Ana'; if (user) { greet(user); }"
      },
      deeper: {
        tradeoffs: "Abstracting logic into functions increases readability but can add stack frame overhead in hyper-optimized runtimes.",
        edgeCases: "Scope mutation, closure leaks, and unbounded recursion stack overflows."
      },
      functions: ["Variables store and label values in memory", "Control flow (if/else, switch) makes decisions based on conditions", "Functions package logic into reusable, named units", "Loops repeat work efficiently", "I/O reads input and produces output"],
      objectives: ["Read and predict what a short program does line by line", "Break a problem into variables, conditions, and steps before coding it"],
      keyPoints: ["Master these before frameworks — frameworks are built on top of them", "Naming variables well is a primary form of self-documentation"],
      examples: [
        { isCode: true, language: "javascript", text: "let age = 20;\nif (age >= 18) {\n  console.log(\"adult\");\n} else {\n  console.log(\"minor\");\n}" },
        { isCode: true, language: "python", text: "age = 20\nif age >= 18:\n    print(\"adult\")\nelse:\n    print(\"minor\")" },
        { isCode: false, text: "A vending machine: takes input (coin + selection), runs logic (check credit), and produces output (item or error)." }
      ],
      sources: [
        { label: "MDN: JavaScript Guide", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide", type: "Official Docs" },
        { label: "W3Schools: Programming Basics", url: "https://www.w3schools.com/js/js_intro.asp", type: "Interactive Guide" },
        { label: "FreeCodeCamp: Basic Programming Concepts", url: "https://www.freecodecamp.org/news/basic-programming-concepts/", type: "Tutorial" }
      ]
    },
    {
      term: "Data types",
      slug: "data-types",
      meaning: "Labels that tell the computer what a piece of data is, so it knows what operations are allowed.",
      purpose: "Define what kind of value something is and how memory handles it.",
      starter: {
        summary: "Primitives (numbers, text, booleans) hold single values. Composites (arrays, objects) group values.",
        coreConcept: "Type checking prevents invalid operations (e.g., adding text to a number).",
        quickExample: "typeof 'hello' // 'string'"
      },
      deeper: {
        tradeoffs: "Static typing (TypeScript/Java) catches bugs early at compile time; dynamic typing (Python/JS) allows faster prototyping.",
        edgeCases: "Implicit coercion ('5' + 3 = '53'), float precision issues (0.1 + 0.2 !== 0.3)."
      },
      functions: ["Primitives (int, float, boolean, char/string) hold single values", "Composite types (array/list, object/dict, tuple, set) hold collections", "Static typing checks types at compile time; dynamic typing checks at runtime", "Type coercion automatically converts between types when operations mix them"],
      objectives: ["Choose the right type for data instead of defaulting to strings for everything", "Explain why '5' + 3 behaves differently across languages"],
      keyPoints: ["Mutable vs immutable matters — strings are immutable in most languages; arrays usually aren't", "Implicit coercion is a frequent bug source; prefer explicit conversion"],
      examples: [
        { isCode: true, language: "javascript", text: "\"5\" + 3        // JavaScript → \"53\" (string coercion)\nNumber(\"5\") + 3 // Explicit → 8" },
        { isCode: true, language: "python", text: "int(\"5\") + 3   # Python → 8 (explicit conversion required)" }
      ],
      sources: [
        { label: "MDN: JS Data Structures", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures", type: "Official Docs" },
        { label: "Python Docs: Built-in Data Types", url: "https://docs.python.org/3/library/stdtypes.html", type: "Official Spec" },
        { label: "GeeksforGeeks: Data Types in Programming", url: "https://www.geeksforgeeks.org/data-types/", type: "Reference" }
      ]
    },
    {
      term: "Loops",
      slug: "loops",
      meaning: "A way to say 'do this again' without literally copy-pasting the instruction.",
      purpose: "Repeat a block of code efficiently until a terminating condition is met.",
      starter: {
        summary: "for (counted steps), while (repeats while condition holds), for-each (iterates directly over collections).",
        coreConcept: "Automate repetition and batch processing.",
        quickExample: "for (let i = 0; i < 5; i++) console.log(i);"
      },
      deeper: {
        tradeoffs: "Recursion offers cleaner tree traversal but risks stack overflow; loops execute faster with O(1) extra space.",
        edgeCases: "Infinite loops when exit conditions are never met, off-by-one index bounds errors."
      },
      functions: ["for — fixed iterations", "while — condition-based loop", "do-while — executes at least once", "break / continue — alter execution flow"],
      objectives: ["Trace loops by hand to catch off-by-one errors", "Pick the right loop construct for array iterations"],
      keyPoints: ["Off-by-one errors stem from < vs <= or 0-based vs 1-based indexing"],
      examples: [{ isCode: true, language: "javascript", text: "for (let i = 0; i < 5; i++) {\n  console.log(i);\n}" }],
      sources: [
        { label: "MDN: Loops & Iteration", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration", type: "Official Docs" },
        { label: "W3Schools: JavaScript For Loop", url: "https://www.w3schools.com/js/js_loop_for.asp", type: "Interactive Guide" },
        { label: "Python Docs: For Statements", url: "https://docs.python.org/3/tutorial/controlflow.html#for-statements", type: "Official Spec" }
      ]
    },
    {
      term: "String slicing",
      slug: "string-slicing",
      meaning: "Cutting a smaller piece out of a longer piece of text using position numbers.",
      purpose: "Extract sub-parts of text without writing manual loops.",
      starter: {
        summary: "Python: s[start:stop:step]. Negative indices count backward from the end.",
        coreConcept: "Index ranges grab text slices cleanly.",
        quickExample: "text[0:5] // First 5 chars"
      },
      deeper: {
        tradeoffs: "Slicing produces new string copies in memory; string views (string_view in C++) avoid allocations.",
        edgeCases: "Overshooting indices in languages that throw IndexOutOfBounds exceptions."
      },
      functions: ["start:stop:step slicing syntax", "Negative indices count from end (-1)", "Reversing strings via step `-1`"],
      objectives: ["Reverse strings and extract sub-patterns without loops"],
      keyPoints: ["s[::-1] reverses a string in Python in one line"],
      examples: [{ isCode: true, language: "python", text: "s = \"hello world\"\nprint(s[:5])  # \"hello\"\nprint(s[::-1]) # \"dlrow olleh\"" }],
      sources: [
        { label: "Python Docs: String Slicing", url: "https://docs.python.org/3/tutorial/introduction.html#strings", type: "Official Spec" },
        { label: "W3Schools: Python String Slicing", url: "https://www.w3schools.com/python/python_strings_slicing.asp", type: "Interactive Guide" },
        { label: "MDN: String.prototype.slice()", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice", type: "Official Docs" }
      ]
    },
    {
      term: "Regular expressions",
      slug: "regular-expressions",
      meaning: "A specialized mini-language for matching text patterns (wildcards on steroids).",
      purpose: "Find, validate, or extract text matching specific rules without custom parser logic.",
      starter: {
        summary: "Matches text patterns like emails, phone numbers, or dates.",
        coreConcept: "Character classes [a-z], quantifiers (+, *), anchors (^, $).",
        quickExample: "^[a-zA-Z0-9]+@[a-z]+\\.[a-z]{2,}$"
      },
      deeper: {
        tradeoffs: "Regex is extremely compact, but complex regexes suffer from catastrophic backtracking performance degradation.",
        edgeCases: "Catastrophic backtracking on un-anchored nested quantifiers."
      },
      functions: ["Character classes [a-z0-9]", "Quantifiers (+, *, ?, {n,m})", "Groups () capture sub-matches"],
      objectives: ["Validate formats like emails or zip codes"],
      keyPoints: ["Do not use regex to parse nested HTML/JSON — use dedicated parsers"],
      examples: [{ isCode: true, language: "regex", text: "^[\\w.+-]+@[\\w-]+\\.[a-zA-Z]{2,}$" }],
      sources: [
        { label: "regex101 Tester", url: "https://regex101.com/", type: "Tool" },
        { label: "MDN: Regular Expressions", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions", type: "Official Docs" },
        { label: "RegExr: Learn & Test RegEx", url: "https://regexr.com/", type: "Interactive Tool" }
      ]
    },
    {
      term: "Object-oriented programming: the four pillars",
      slug: "oop-four-pillars",
      meaning: "A way to structure code around real-world 'things' bundling data and behavior together.",
      purpose: "Manage software complexity through modularity, reuse, and abstraction.",
      starter: {
        summary: "Encapsulation, Abstraction, Inheritance, and Polymorphism are the 4 pillars of OOP.",
        coreConcept: "Model real entities as classes with attributes (data) and methods (actions).",
        quickExample: "class Dog extends Animal { speak() { return 'Woof'; } }"
      },
      deeper: {
        tradeoffs: "Deep inheritance hierarchies create brittle dependencies. Prefer object composition ('has-a') over inheritance ('is-a').",
        edgeCases: "Diamond problem in multiple inheritance, unintended state mutation across subclasses."
      },
      functions: [
        "Encapsulation — bundle data with methods and hide internal state",
        "Abstraction — expose only what's necessary, hide implementation complexity",
        "Inheritance — reuse and extend behavior from parent classes",
        "Polymorphism — use different classes through a shared interface"
      ],
      objectives: ["Identify which pillar a design decision is solving for", "Explain the difference between inheritance ('is-a') and composition ('has-a')"],
      keyPoints: ["Favor composition over deep inheritance chains", "Polymorphism lets you call .speak() on any Animal without knowing its exact subclass"],
      examples: [
        { isCode: true, language: "python", text: "class Animal:\n    def speak(self): pass\n\nclass Dog(Animal):\n    def speak(self): return \"Woof\"\n\nclass Cat(Animal):\n    def speak(self): return \"Meow\"" }
      ],
      sources: [
        { label: "Gang of Four Design Patterns", url: "https://refactoring.guru/design-patterns", type: "Book Reference" },
        { label: "MDN: Object-Oriented JS", url: "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object-oriented_programming", type: "Official Docs" },
        { label: "GeeksforGeeks: 4 Pillars of OOP", url: "https://www.geeksforgeeks.org/four-main-object-oriented-programming-concepts-of-java/", type: "Reference" }
      ]
    },
    {
      term: "Encapsulation",
      slug: "encapsulation",
      meaning: "Keeping an object's inner workings private, like a car engine being under the hood instead of exposed wires.",
      purpose: "Protect internal state from being altered in invalid ways by outside code.",
      starter: {
        summary: "Mark fields private/protected; control access through getters/setters.",
        coreConcept: "Control access to private attributes.",
        quickExample: "private balance; deposit(amt) { if (amt > 0) balance += amt; }"
      },
      deeper: {
        tradeoffs: "Encapsulation prevents direct invalid mutation but requires boilerplate getter/setter code.",
        edgeCases: "Exposing mutable reference objects through public getters."
      },
      functions: ["Private/protected access modifiers", "Validation inside setters", "Immutable getter returns"],
      objectives: ["Design classes that cannot be put into invalid states from the outside"],
      keyPoints: ["Encapsulation is about controlling access, not just hiding data"],
      examples: [{ isCode: true, language: "python", text: "class BankAccount:\n    def __init__(self):\n        self.__balance = 0\n    def deposit(self, amt):\n        if amt > 0: self.__balance += amt" }],
      sources: [
        { label: "Wikipedia: Encapsulation", url: "https://en.wikipedia.org/wiki/Encapsulation_(computer_programming)", type: "Reference" },
        { label: "GeeksforGeeks: Encapsulation in Java", url: "https://www.geeksforgeeks.org/encapsulation-in-java/", type: "Tutorial" },
        { label: "MDN: Private Class Features", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Private_properties", type: "Official Docs" }
      ]
    },
    {
      term: "SOLID principles",
      slug: "solid-principles",
      meaning: "Five design rules for writing OOP code that stays maintainable and easy to extend.",
      purpose: "Prevent code bases from turning into fragile, interconnected 'spaghetti code'.",
      starter: {
        summary: "S: Single Responsibility, O: Open/Closed, L: Liskov Substitution, I: Interface Segregation, D: Dependency Inversion.",
        coreConcept: "Write classes that do one job and can be extended without altering existing code.",
        quickExample: "Split a class that manages users AND sends emails into two separate classes."
      },
      deeper: {
        tradeoffs: "Over-applying SOLID to small scripts creates unnecessary boilerplate and interface proliferation.",
        edgeCases: "Violating Liskov Substitution by throwing UnsupportedOperationException in a subclass method."
      },
      functions: [
        "Single Responsibility — a class should have only one reason to change",
        "Open/Closed — open for extension, closed for modification",
        "Liskov Substitution — sub-types must be substitutable for base types",
        "Interface Segregation — prefer fine-grained interfaces over fat ones",
        "Dependency Inversion — depend on abstractions, not concrete implementations"
      ],
      objectives: ["Spot SOLID violations during code reviews", "Refactor monolithic manager classes into focused single-responsibility services"],
      keyPoints: ["SOLID is architectural guidance, not absolute law", "Dependency Inversion makes unit testing with mocks seamless"],
      examples: [{ isCode: true, language: "typescript", text: "interface Storage { save(data: string): void; }\nclass ReportSaver {\n  constructor(private storage: Storage) {}\n}" }],
      sources: [
        { label: "Clean Architecture by Robert C. Martin", url: "https://blog.cleancoder.com/", type: "Industry Standard" },
        { label: "DigitalOcean: SOLID Principles", url: "https://www.digitalocean.com/community/conceptual-articles/s-o-l-i-d-the-first-five-principles-of-object-oriented-design", type: "Guide" },
        { label: "FreeCodeCamp: SOLID Principles Explained", url: "https://www.freecodecamp.org/news/solid-principles-explained-in-plain-english/", type: "Tutorial" }
      ]
    },
    {
      term: "Design patterns",
      slug: "design-patterns",
      meaning: "Named, reusable solutions to recurring software architecture problems.",
      purpose: "Give software teams a shared vocabulary for structural solutions.",
      starter: {
        summary: "Creational (Factory, Singleton), Structural (Adapter, Decorator), Behavioral (Observer, Strategy).",
        coreConcept: "Reusable blueprints for common software architecture problems.",
        quickExample: "Singleton: ensure only 1 DB connection instance exists."
      },
      deeper: {
        tradeoffs: "Patterns provide proven solutions but overusing them leads to over-engineering (e.g. FactoryFactory pattern).",
        edgeCases: "Singleton pattern creating hidden global state dependencies."
      },
      functions: ["Singleton — one instance global access", "Factory — centralized object creation", "Observer — publish-subscribe events", "MVC — separate Data, UI, and Controller"],
      objectives: ["Recognize design pattern shapes in unfamiliar code bases"],
      keyPoints: ["Patterns describe solution shapes, not exact code recipes"],
      examples: [{ isCode: true, language: "javascript", text: "function createShape(type) {\n  if (type === 'circle') return new Circle();\n  if (type === 'square') return new Square();\n}" }],
      sources: [
        { label: "Refactoring.Guru Design Patterns", url: "https://refactoring.guru/design-patterns", type: "Guide" },
        { label: "SourceMaking: Software Design Patterns", url: "https://sourcemaking.com/design_patterns", type: "Reference" },
        { label: "Gang of Four Catalog", url: "https://en.wikipedia.org/wiki/Design_Patterns", type: "Book Reference" }
      ]
    },
    {
      term: "Clean code principles",
      slug: "clean-code-principles",
      meaning: "Writing code for the human who reads it next — not just the computer that runs it.",
      purpose: "Minimize cost of future code maintenance.",
      starter: {
        summary: "Meaningful names, small functions, avoid deep nesting, self-documenting code.",
        coreConcept: "Code is read 10x more often than it is written.",
        quickExample: "isAdult(user) vs d(u)"
      },
      deeper: {
        tradeoffs: "Excessive micro-functions can add call stack overhead and fragment code flow readability.",
        edgeCases: "Obsolete comments that contradict updated code."
      },
      functions: ["Descriptive variable & function names", "Functions do ONE thing", "Avoid magic numbers", "Comments explain WHY, not WHAT"],
      objectives: ["Refactor vague functions into clear, readable logic"],
      keyPoints: ["If you need a comment to explain what a line does, rename it instead"],
      examples: [{ isCode: true, language: "javascript", text: "// Clean:\nfunction isAdult(user) {\n  return user.age >= 18;\n}" }],
      sources: [
        { label: "Clean Code JS Repo", url: "https://github.com/ryanmcdermott/clean-code-javascript", type: "Guide" },
        { label: "Clean Code Book Summary", url: "https://gist.github.com/wojtekm/7364150", type: "Summary" },
        { label: "Martin Fowler: Refactoring", url: "https://martinfowler.com/books/refactoring.html", type: "Book Reference" }
      ]
    },
    {
      term: "Concurrency & parallelism",
      slug: "concurrency-parallelism",
      meaning: "Concurrency is juggling multiple tasks by switching fast; parallelism is actually doing them simultaneously on multiple CPU cores.",
      purpose: "Keep applications responsive and maximize hardware utilization.",
      starter: {
        summary: "Concurrency handles multiple things at once (event loop); parallelism executes multiple things at once (multi-core).",
        coreConcept: "Async/await lets programs wait for slow network operations without freezing the main thread.",
        quickExample: "const data = await fetch('/api/user');"
      },
      deeper: {
        tradeoffs: "Multithreading enables parallel computation but introduces race conditions, deadlocks, and context-switching costs.",
        edgeCases: "Unchecked race conditions, starvation, blocking the event loop with heavy synchronous loops."
      },
      functions: ["Concurrency — interleave execution (JS event loop)", "Parallelism — multi-core execution", "Async/Await — non-blocking I/O"],
      objectives: ["Explain why UI freezes during network calls and fix it with async code"],
      keyPoints: ["JavaScript achieves concurrency through the event loop, not multi-threading"],
      examples: [{ isCode: true, language: "javascript", text: "async function loadData() {\n  const res = await fetch(\"/api/items\");\n  return res.json();\n}" }],
      sources: [
        { label: "MDN: Event Loop", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Execution_model", type: "Official Docs" },
        { label: "FreeCodeCamp: Concurrency vs Parallelism", url: "https://www.freecodecamp.org/news/concurrency-vs-parallelism/", type: "Tutorial" },
        { label: "Python Docs: asyncio Concurrency", url: "https://docs.python.org/3/library/asyncio.html", type: "Official Spec" }
      ]
    },
    {
      term: "Functional programming basics",
      slug: "functional-programming-basics",
      meaning: "A coding style built around pure functions that don't alter state outside themselves.",
      purpose: "Reduce bugs by avoiding shared mutable state.",
      starter: {
        summary: "Pure functions (same input = same output), Immutability, Map/Filter/Reduce operations.",
        coreConcept: "Input → Pure Transform → Output (No side effects).",
        quickExample: "const newArr = arr.map(x => x * 2);"
      },
      deeper: {
        tradeoffs: "Immutability avoids state corruption but creates short-lived objects that increase garbage collection overhead.",
        edgeCases: "Deep object copying performance hits on large state arrays."
      },
      functions: ["Pure functions without side effects", "Immutability (never mutate arrays in place)", "Higher-order functions (map, filter, reduce)"],
      objectives: ["Rewrite mutating code to use pure immutable returns"],
      keyPoints: ["Pure functions are trivially easy to unit test"],
      examples: [{ isCode: true, language: "javascript", text: "// Pure function:\nconst add = (arr, item) => [...arr, item];" }],
      sources: [
        { label: "Wikipedia: Functional Programming", url: "https://en.wikipedia.org/wiki/Functional_programming", type: "Reference" },
        { label: "MDN: Array.prototype.map()", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map", type: "Official Docs" },
        { label: "Mostly Adequate Guide to FP", url: "https://github.com/MostlyAdequate/mostly-adequate-guide", type: "Book Reference" }
      ]
    },
    {
      term: "Error handling & exceptions",
      slug: "error-handling-exceptions",
      meaning: "Planning for the moment something goes wrong so the app fails gracefully instead of crashing.",
      purpose: "Detect, respond to, and recover from runtime errors cleanly.",
      starter: {
        summary: "try / catch / finally blocks wrap risky code and execute cleanup.",
        coreConcept: "Catch errors, log details, surface friendly messages to users.",
        quickExample: "try { parse(); } catch (err) { handle(err); }"
      },
      deeper: {
        tradeoffs: "Swallowing errors in empty catch blocks hides critical bugs; throwing uncaught exceptions crashes threads.",
        edgeCases: "Unhandled promise rejections in async functions."
      },
      functions: ["try/catch error handling", "custom Exception classes", "finally block cleanup"],
      objectives: ["Distinguish expected validation errors from catastrophic system bugs"],
      keyPoints: ["Never leave an empty catch block"],
      examples: [{ isCode: true, language: "javascript", text: "try {\n  const data = JSON.parse(input);\n} catch (err) {\n  console.error(\"Invalid JSON:\", err.message);\n}" }],
      sources: [
        { label: "MDN: try...catch", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch", type: "Official Docs" },
        { label: "Python Docs: Handling Exceptions", url: "https://docs.python.org/3/tutorial/errors.html", type: "Official Spec" },
        { label: "JavaScript Error Handling Best Practices", url: "https://kentcdodds.com/blog/use-terser-error-messages", type: "Guide" }
      ]
    },
    {
      term: "Dependency injection",
      slug: "dependency-injection",
      meaning: "Handing a class its tools from the outside rather than creating them inside itself.",
      purpose: "Decouple classes from concrete dependencies to simplify unit testing with mocks.",
      starter: {
        summary: "Pass dependencies into constructors instead of doing `new Database()` inside the class.",
        coreConcept: "Constructor parameters accept interfaces.",
        quickExample: "class Service { constructor(private db: Database) {} }"
      },
      deeper: {
        tradeoffs: "DI enhances testability but requires DI container configurations in large applications.",
        edgeCases: "Circular dependency loops between injected services."
      },
      functions: ["Constructor injection", "Interface abstraction", "Mock substitution in unit tests"],
      objectives: ["Refactor hardcoded dependencies to constructor parameters"],
      keyPoints: ["DI is the practical implementation of Dependency Inversion Principle"],
      examples: [{ isCode: true, language: "typescript", text: "class OrderService {\n  constructor(private db: Database) {}\n}" }],
      sources: [
        { label: "Wikipedia: Dependency Injection", url: "https://en.wikipedia.org/wiki/Dependency_injection", type: "Reference" },
        { label: "Martin Fowler: Inversion of Control Containers", url: "https://martinfowler.com/articles/injection.html", type: "Industry Standard" },
        { label: "Spring Framework: Dependency Injection", url: "https://docs.spring.io/spring-framework/docs/current/reference/html/core.html#beans-factory-collaborators", type: "Official Specs" }
      ]
    },
    {
      term: "CS fundamentals",
      slug: "cs-fundamentals",
      meaning: "The underlying physics layer of computing — stack vs heap memory, processes vs threads, compiled vs interpreted.",
      purpose: "Understand system behavior underneath high-level frameworks.",
      starter: {
        summary: "Stack (fast, fixed memory), Heap (dynamic memory), Processes (isolated), Threads (shared memory).",
        coreConcept: "Understand memory allocation and OS execution.",
        quickExample: "Stack allocation vs Heap garbage collection"
      },
      deeper: {
        tradeoffs: "Processes provide crash isolation but have high context-switching overhead; threads share memory for performance but risk race conditions.",
        edgeCases: "Stack overflow from infinite recursion, heap memory leaks."
      },
      functions: ["Stack vs Heap memory allocation", "Processes vs Threads", "Compiled vs Interpreted runtimes"],
      objectives: ["Explain stack overflow and heap memory leaks"],
      keyPoints: ["Threads share process memory; separate processes do not"],
      examples: [{ isCode: false, text: "20 browser tabs = 20 processes (one tab crash won't crash others)." }],
      sources: [
        { label: "Harvard CS50 Course", url: "https://cs50.harvard.edu/x/", type: "Course" },
        { label: "Teach Yourself Computer Science", url: "https://teachyourselfcs.com/", type: "Curriculum Guide" },
        { label: "OS Concepts (Silberschatz)", url: "https://en.wikipedia.org/wiki/Operating_System_Concepts", type: "Book Reference" }
      ]
    }
  ]
};
