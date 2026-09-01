export const cat10CodingAlgorithms = [
  {
    id: "q10_1",
    category: "Category 10: Live Coding & Algorithms",
    subcategory: "Problem Solving",
    question: "What is your thought process when faced with a coding problem you don't immediately know how to solve?",
    whatHREvaluates: "Composure, problem decomposition, communication, and brute-force to optimal progression.",
    sampleAnswer: "I talk through my thought process out loud. First, I clarify input/output bounds and edge cases. Next, I outline a simple brute-force solution to establish a working baseline, then optimize time/space complexity using appropriate data structures.",
    remember: "Never stay completely silent. Interviewers evaluate how you communicate while thinking under pressure.",
    answerMayVary: "Junior candidates get guidance hints; senior candidates are expected to drive the conversation autonomously."
  },
  {
    id: "q10_2",
    category: "Category 10: Live Coding & Algorithms",
    subcategory: "Code Verification",
    question: "How do you test your code mentally before hitting run during a live coding interview?",
    whatHREvaluates: "Attention to detail, dry-running ability, and edge-case awareness.",
    sampleAnswer: "I trace the code line by line using a small example input array, maintaining variable state in comments. I explicitly test edge cases like empty arrays, null values, 1-element inputs, and duplicates.",
    remember: "Dry-running your code manually before running tests shows high software engineering maturity.",
    answerMayVary: "Testing habits carry equal weight across both frontend and backend technical screens."
  },
  {
    id: "q10_3",
    category: "Category 10: Live Coding & Algorithms",
    subcategory: "Complexity Communication",
    question: "How do you explain Big O complexity to your interviewer while coding?",
    whatHREvaluates: "Theoretical foundation, algorithm efficiency awareness, and clear technical explanation.",
    sampleAnswer: "I state both Time and Space complexity explicitly. For example: 'This nested loop gives O(n²) time complexity, but by using a Hash Map to store seen items, we reduce time complexity to O(n) while trading O(n) space.'",
    remember: "Always state both Time AND Space complexity.",
    answerMayVary: "Be prepared to explain best-case, average-case, and worst-case scenarios if asked."
  },
  {
    id: "q10_4",
    category: "Category 10: Live Coding & Algorithms",
    subcategory: "Debugging Under Pressure",
    question: "What do you do if your live coding solution fails an unexpected edge case test?",
    whatHREvaluates: "Debugging methodology, emotional composure, and resilience.",
    sampleAnswer: "I stay calm, print or log the failing test input, trace where the actual output deviates from expected output, and explain the fix before modifying code.",
    remember: "Don't randomly guess and edit code blindly. Identify the exact line where assumptions failed.",
    answerMayVary: "Senior engineers explain why the assumption broke before touching the editor."
  }
];
