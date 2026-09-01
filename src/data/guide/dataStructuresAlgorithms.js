export const dataStructuresAlgorithmsDomain = {
  domain: "Data Structures & Algorithms",
  color: "#3D6E86",
  entries: [
    {
      term: "Data structures",
      slug: "data-structures",
      meaning: "Different ways to arrange data in memory — like filing cabinets, stacks of paper, or lookup tables.",
      purpose: "Choose the optimal layout for data based on how frequently you read, insert, search, or delete.",
      starter: {
        summary: "Arrays (indexed), Linked Lists (pointers), Stacks (LIFO), Queues (FIFO), Hash Tables (key-value), Trees & Graphs.",
        coreConcept: "Every structure makes tradeoffs between memory usage and speed of access.",
        quickExample: "stack.push(x); item = stack.pop(); // LIFO"
      },
      deeper: {
        tradeoffs: "Arrays offer O(1) index access but contiguous memory limits allocation; Hash tables offer O(1) lookups but trade memory for key collisions.",
        edgeCases: "Hash collisions degrading lookup to O(n), stack overflow in deep tree recursion."
      },
      functions: ["Array — contiguous memory", "Linked List — node pointers", "Stack/Queue — LIFO/FIFO", "Hash Table — key-value O(1)", "Trees/Graphs — hierarchical/networked"],
      objectives: ["Match access patterns to data structures", "Evaluate memory vs speed tradeoffs"],
      keyPoints: ["Hash tables trade memory for O(1) speed", "A tree is a connected graph with no cycles"],
      examples: [{ isCode: false, text: "Browser back button = Stack. Print queue = Queue. Contacts app = Hash table." }],
      sources: [
        { label: "CLRS Algorithms", url: "https://mitpress.mit.edu/9780262046305/introduction-to-algorithms/", type: "Academic Standard" },
        { label: "GeeksforGeeks Data Structures", url: "https://www.geeksforgeeks.org/data-structures/", type: "Free Reference" },
        { label: "VisuAlgo: Visualizing Data Structures", url: "https://visualgo.net/en", type: "Interactive Visualization" }
      ]
    },
    {
      term: "Big O notation",
      slug: "big-o-notation",
      meaning: "A rating for how much slower an algorithm gets as the input size grows.",
      purpose: "Measure time and space complexity independent of execution hardware.",
      starter: {
        summary: "O(1) Constant < O(log n) Logarithmic < O(n) Linear < O(n log n) Efficient Sort < O(n²) Nested Loops.",
        coreConcept: "Focus on asymptotic growth as input size (n) approaches infinity.",
        quickExample: "O(1) lookup vs O(n) loop over array"
      },
      deeper: {
        tradeoffs: "Big O measures worst-case growth rate, ignoring constant factors.",
        edgeCases: "Space complexity memory spikes caused by deep recursion frames."
      },
      functions: ["O(1) constant", "O(log n) binary search", "O(n) linear scan", "O(n log n) merge sort", "O(n²) nested loop"],
      objectives: ["Estimate complexity by counting loops"],
      keyPoints: ["Drop non-dominant terms in Big O"],
      examples: [{ isCode: true, language: "python", text: "# O(n²) nested loop\nfor i in arr:\n    for j in arr: pass" }],
      sources: [
        { label: "Big-O Cheat Sheet", url: "https://www.bigocheatsheet.com/", type: "Reference" },
        { label: "FreeCodeCamp: Big O Notation", url: "https://www.freecodecamp.org/news/big-o-notation-why-it-matters-and-why-it-doesnt-41aee8317c04/", type: "Guide" },
        { label: "Khan Academy: Algorithm Analysis", url: "https://www.khanacademy.org/computing/computer-science/algorithms", type: "Interactive Course" }
      ]
    },
    {
      term: "DSA patterns",
      slug: "dsa-patterns",
      meaning: "A cheat-sheet of recurring 'shapes' that most algorithm problems turn out to be.",
      purpose: "Solve technical interview and real-world algorithm problems efficiently using proven patterns.",
      starter: {
        summary: "Two Pointers, Sliding Window, Fast & Slow Pointers, BFS/DFS, Binary Search, Dynamic Programming.",
        coreConcept: "Recognize problem shapes to apply optimal algorithmic patterns.",
        quickExample: "Sliding window for 'longest substring without repeats'"
      },
      deeper: {
        tradeoffs: "Dynamic programming trades O(n) space for memoization to reduce O(2^n) exponential recursion to O(n) time.",
        edgeCases: "Overlapping subproblem cache memory consumption."
      },
      functions: ["Two Pointers — search sorted arrays", "Sliding Window — contiguous subarray problems", "BFS/DFS — tree and graph traversals", "Dynamic Programming — recursion + caching"],
      objectives: ["Recognize pattern shapes in coding challenges"],
      keyPoints: ["Dynamic programming is recursion plus memoization caching"],
      examples: [{ isCode: true, language: "python", text: "cache = {}\ndef fib(n):\n    if n in cache: return cache[n]\n    cache[n] = n if n < 2 else fib(n-1) + fib(n-2)\n    return cache[n]" }],
      sources: [
        { label: "NeetCode Patterns", url: "https://neetcode.io/", type: "Guide" },
        { label: "LeetCode Explore", url: "https://leetcode.com/explore/", type: "Practice Platform" },
        { label: "GeeksforGeeks Top 10 Algorithms", url: "https://www.geeksforgeeks.org/top-10-algorithms-in-interview-questions/", type: "Guide" }
      ]
    }
  ]
};
