// Sample mock data for testing the PDF search application
const dummySearchResults = [
    {
      id: 1,
      fileName: "React_Documentation.pdf",
      fileUrl: "/sample/React_Documentation.pdf",
      thumbnail: "https://via.placeholder.com/300x400?text=React+Doc",
      matchedText: "React is a JavaScript library for building user interfaces. It lets you compose complex UIs from small and isolated pieces of code called components.",
      pageCount: 42,
      fileSize: 2500000,
      lastModified: "2023-05-15T14:30:00Z"
    },
    {
      id: 2,
      fileName: "JavaScript_Advanced_Concepts.pdf",
      fileUrl: "/sample/JavaScript_Advanced_Concepts.pdf",
      thumbnail: "https://via.placeholder.com/300x400?text=JS+Advanced",
      matchedText: "Closures are a fundamental JavaScript concept that every JavaScript developer should understand. A closure is the combination of a function and the lexical environment within which that function was declared.",
      pageCount: 78,
      fileSize: 4200000,
      lastModified: "2023-04-22T09:15:00Z"
    },
    {
      id: 3,
      fileName: "CSS_Grid_Layout.pdf",
      fileUrl: "/sample/CSS_Grid_Layout.pdf",
      thumbnail: "https://via.placeholder.com/300x400?text=CSS+Grid",
      matchedText: "CSS Grid Layout is a two-dimensional layout system designed specifically for the layout of items on a webpage or application.",
      pageCount: 35,
      fileSize: 1800000,
      lastModified: "2023-06-10T11:45:00Z"
    },
    {
      id: 4,
      fileName: "TypeScript_Handbook.pdf",
      fileUrl: "/sample/TypeScript_Handbook.pdf",
      thumbnail: "https://via.placeholder.com/300x400?text=TypeScript",
      matchedText: "TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.",
      pageCount: 120,
      fileSize: 5600000,
      lastModified: "2023-03-05T16:20:00Z"
    },
    {
      id: 5,
      fileName: "Node.js_Best_Practices.pdf",
      fileUrl: "/sample/Node.js_Best_Practices.pdf",
      matchedText: "Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. It uses an event-driven, non-blocking I/O model that makes it lightweight and efficient.",
      pageCount: 65,
      fileSize: 3100000,
      lastModified: "2023-07-18T13:10:00Z"
    },
    {
      id: 6,
      fileName: "Web_Performance_Optimization.pdf",
      fileUrl: "/sample/Web_Performance_Optimization.pdf",
      thumbnail: "https://via.placeholder.com/300x400?text=Web+Performance",
      matchedText: "Web performance optimization, WPO, or website optimization is the field of knowledge about increasing the speed with which web pages are downloaded and displayed on the user's web browser.",
      pageCount: 48,
      fileSize: 2800000,
      lastModified: "2023-02-28T10:30:00Z"
    }
  ];
  
  export default dummySearchResults; 