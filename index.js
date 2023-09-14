var quizData = [
    {
        question: "Which of the following methods is used to access HTML elements using JavaScript?",
        a: "getElementById()",
        b: "getElementByClassName()",
        c: "Both A and B",
        d: "None of these",
        correct: "c"
    },
    {
        question: "Which of the following methods can be used to display data in some form using JavaScript?",
        a: "document.write()",
        b: "console.log()",
        c: "window.alert()",
        d: "All of these",
        correct: "d"
    },
    {
        question: "How can a datatype be declared to be a constant type in JavaScript?",
        a: "constant",
        b: "var",
        c: "const",
        d: "let",
        correct: "c"
    },
    {
        question: "Which of the following is not a data type in JavaScript?",
        a: "string",
        b: "number",
        c: "boolean",
        d: "float",
        correct: "d"
    },
    {
        question: "What is the result of 2 + '2' in JavaScript?",
        a: "4",
        b: "22",
        c: "Error",
        d: "None of these",
        correct: "b"
    },
    {
        question: "In JavaScript, how can you comment out a single line?",
        a: "// This is a comment",
        b: "/* This is a comment */",
        c: "# This is a comment",
        d: "None of these",
        correct: "a"
    },
    {
        question: "Which of the following is used to declare a function in JavaScript?",
        a: "func",
        b: "def",
        c: "function",
        d: "None of these",
        correct: "c"
    },
    {
        question: "What is the primary purpose of the 'use strict' directive in JavaScript?",
        a: "To enable strict mode for the entire script",
        b: "To allow mixed mode scripting",
        c: "To improve performance",
        d: "None of these",
        correct: "a"
    },
    {
        question: "Which built-in method returns the characters in a string beginning at the specified location?",
        a: "substr()",
        b: "getSubstring()",
        c: "slice()",
        d: "None of these",
        correct: "a"
    },
    {
        question: "In JavaScript, what is the purpose of the 'this' keyword?",
        a: "To refer to the current function",
        b: "To refer to the current object",
        c: "To declare a variable",
        d: "None of these",
        correct: "b"
    },
    {
        question: "Which of the following is NOT a valid variable name in JavaScript?",
        a: "myVariable",
        b: "$variable",
        c: "2ndVariable",
        d: "_variable",
        correct: "c"
    },
    {
        question: "What is the output of the following code?\n\n```javascript\nconsole.log(5 + '5' - 2);\n```",
        a: "53",
        b: "3",
        c: "Error",
        d: "None of these",
        correct: "b"
    },
    {
        question: "Which method is used to remove the last element from an array in JavaScript?",
        a: "pop()",
        b: "removeLast()",
        c: "deleteLast()",
        d: "None of these",
        correct: "a"
    },
    {
        question: "What is the purpose of the 'break' statement in a JavaScript loop?",
        a: "To skip the current iteration and continue with the next one",
        b: "To exit the loop entirely",
        c: "To pause the loop temporarily",
        d: "None of these",
        correct: "b"
    },
    {
        question: "In Node.js, which module is used for file operations?",
        a: "fs",
        b: "http",
        c: "net",
        d: "None of these",
        correct: "a"
    },
    {
        question: "What is React.js mainly used for?",
        a: "Server-side scripting",
        b: "Building user interfaces",
        c: "Database management",
        d: "None of these",
        correct: "b"
    },
    {
        question: "In React.js, what is a component?",
        a: "A functional component",
        b: "A class-based component",
        c: "A reusable UI element",
        d: "All of these",
        correct: "d"
    },
    {
        question: "Which method is used to update the state of a React component?",
        a: "setState()",
        b: "updateState()",
        c: "changeState()",
        d: "None of these",
        correct: "a"
    },
    {
        question: "Which of the following is NOT a valid data structure?",
        a: "Array",
        b: "Stack",
        c: "Tree",
        d: "Queuee",
        correct: "d"
    },
    {
        question: "What is the time complexity of inserting an element at the end of an array?",
        a: "O(1)",
        b: "O(n)",
        c: "O(log n)",
        d: "None of these",
        correct: "a"
    },
    {
        question: "Which data structure uses the Last-In-First-Out (LIFO) order?",
        a: "Queue",
        b: "Stack",
        c: "Array",
        d: "Linked List",
        correct: "b"
    },
    {
        question: "What is the term for a data structure that consists of a collection of elements, each with a reference to the next element in the sequence?",
        a: "Array",
        b: "Queue",
        c: "Linked List",
        d: "Stack",
        correct: "c"
    },
    {
        question: "Which of the following is a searching algorithm?",
        a: "Bubble Sort",
        b: "Merge Sort",
        c: "Binary Search",
        d: "None of these",
        correct: "c"
    },
    {
        question: "What is the main advantage of using a binary search tree (BST) over other data structures?",
        a: "Faster insertion and deletion",
        b: "Faster searching",
        c: "Lower memory usage",
        d: "None of these",
        correct: "b"
    },
    {
        question: "In Java, which keyword is used to declare a variable that does not change its value?",
        a: "static",
        b: "final",
        c: "constant",
        d: "None of these",
        correct: "b"
    },
    {
        question: "What is the Java keyword used for inheritance?",
        a: "extends",
        b: "implements",
        c: "inherits",
        d: "None of these",
        correct: "a"
    },
    {
        question: "Which Java data type is used to store decimal numbers?",
        a: "int",
        b: "float",
        c: "double",
        d: "None of these",
        correct: "c"
    },
    {
        question: "What is the purpose of the 'super' keyword in Java?",
        a: "To access the superclass's members",
        b: "To call a method in the current class",
        c: "To declare a static variable",
        d: "None of these",
        correct: "a"
    },
    {
        question: "Which of the following is NOT a valid access modifier in Java?",
        a: "public",
        b: "protected",
        c: "private",
        d: "package-private",
        correct: "d"
    },
    {
        question: "In Java, which loop is used to iterate over a collection of elements, such as an array or a list?",
        a: "for loop",
        b: "while loop",
        c: "do-while loop",
        d: "None of these",
        correct: "a"
    },
    
];

var quiz = document.getElementById('quiz');
var answer = document.querySelectorAll('.answer');
var question = document.getElementById('question');
var option_a = document.getElementById('a_value');
var option_b = document.getElementById('b_value');
var option_c = document.getElementById('c_value');
var option_d = document.getElementById('d_value');

var submitbtn = document.getElementById('submit');

var index = 0;
var currScore = 0;

loadQuize()

function loadQuize() {
    deSelect();

    question.innerHTML = quizData[index].question;
    option_a.innerText = quizData[index].a;
    option_b.innerText = quizData[index].b;
    option_c.innerText = quizData[index].c;
    option_d.innerText = quizData[index].d;
}

function deSelect() {
    answer.forEach(answer => {
        answer.checked = false;
    });
}


submitbtn.addEventListener('click', () => {
    var selectedOption;

    answer.forEach(answer => {
        if (answer.checked) {
            selectedOption = answer.id;
        }
    })

    if (selectedOption == quizData[index].correct) {
        currScore = currScore + 1;
    }
    index = index + 1;


    if (index == quizData.length) {
        document.getElementById('quizdiv').innerHTML = `<h3>You have answered ${currScore} correctly out of ${quizData.length}`
        document.getElementById('submit').innerHTML="Thank You for Attemting this Quiz";
    } else {
        loadQuize();
    }
});