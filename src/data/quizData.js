const quizData = [
  {
    id: 1,
    question: "What is React?",
    options: [
      "A library for managing user interfaces",
      "A full-fledged programming language",
      "A database management system",
      "A server-side framework",
    ],
    correctAnswer: "A library for managing user interfaces",
  },
  {
    id: 2,
    question: "What is JSX?",
    options: [
      "JavaScript XML",
      "Java Syntax Extension",
      "JavaScript Extra",
      "JavaScript Executable",
    ],
    correctAnswer: "JavaScript XML",
  },
  {
    id: 3,
    question: "Which method is used to update state in a React component?",
    options: ["updateState", "setState", "changeState", "modifyState"],
    correctAnswer: "setState",
  },
  {
    id: 4,
    question: "What is the purpose of the useEffect hook?",
    options: [
      "To directly modify the DOM",
      "To perform side effects in a functional component",
      "To create a new component",
      "To manage component state",
    ],
    correctAnswer: "To perform side effects in a functional component",
  },
  {
    id: 5,
    question: "What is the virtual DOM in React?",
    options: [
      "A direct representation of the actual DOM",
      "A copy of the entire DOM",
      "A lightweight copy of the real DOM used for performance optimization",
      "A completely separate DOM used by React",
    ],
    correctAnswer:
      "A lightweight copy of the real DOM used for performance optimization",
  },
  {
    id: 6,
    question:
      "How do you pass data from a parent component to a child component?",
    options: ["Using props", "Using state", "Using context", "Using hooks"],
    correctAnswer: "Using props",
  },
  {
    id: 7,
    question: "Which hook is used to handle forms in React?",
    options: ["useForm", "useInput", "useState", "useEffect"],
    correctAnswer: "useState",
  },
  {
    id: 8,
    question: "What does the key prop do in a list of React elements?",
    options: [
      "It helps identify which items have changed, are added, or are removed",
      "It gives each element a unique ID",
      "It adds a unique CSS class to each element",
      "It is required to make the list work",
    ],
    correctAnswer:
      "It helps identify which items have changed, are added, or are removed",
  },
  {
    id: 9,
    question:
      "What is the significance of a default export in a React component?",
    options: [
      "It allows you to export multiple components",
      "It exports a component as the default module",
      "It enables the use of prop types",
      "It is used for exporting styles",
    ],
    correctAnswer: "It exports a component as the default module",
  },
  {
    id: 10,
    question:
      "Which lifecycle method is invoked immediately after a component is added to the DOM?",
    options: [
      "componentWillMount",
      "componentDidMount",
      "componentDidUpdate",
      "componentWillUnmount",
    ],
    correctAnswer: "componentDidMount",
  },
];

export default quizData;
