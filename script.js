// Question
const questions = [
    {
        category: "JavaScript",
        question: "What is the use of the 'let' keyword in JavaScript?",
        options: ["Declare variables", "Create constants", "Define functions", "Define classes"],
        correctAnswer: "Declare variables"
    },
    {
        category: "JavaScript",
        question: "Which method is used to parse a JSON string into a JavaScript object?",
        options: ["JSON.parse()", "JSON.stringify()", "JSON.toObject()", "JSON.parseObject()"],
        correctAnswer: "JSON.parse()"
    },
    {
        category: "JavaScript",
        question: "What is the output of 'typeof null' in JavaScript?",
        options: ["'object'", "'null'", "'undefined'", "'number'"],
        correctAnswer: "'object'"
    },
    {
        category: "JavaScript",
        question: "Which of the following is NOT a JavaScript data type?",
        options: ["Number", "String", "Boolean", "Character"],
        correctAnswer: "Character"
    },
    {
        category: "JavaScript",
        question: "Which method adds one or more elements to the end of an array and returns the new length?",
        options: ["push()", "pop()", "shift()", "unshift()"],
        correctAnswer: "push()"
    },
    {
        category: "JavaScript",
        question: "What is the correct syntax for referring to an external script called 'app.js'?",
        options: ["<script src='app.js'>", "<script name='app.js'>", "<script href='app.js'>", "<script file='app.js'>"],
        correctAnswer: "<script src='app.js'>"
    },
    {
        category: "JavaScript",
        question: "Which company developed JavaScript?",
        options: ["Netscape", "Microsoft", "Sun Microsystems", "Oracle"],
        correctAnswer: "Netscape"
    },
    {
        category: "JavaScript",
        question: "Which of the following is used to define a class in JavaScript?",
        options: ["class", "def", "function", "object"],
        correctAnswer: "class"
    },
    {
        category: "JavaScript",
        question: "How do you create a function in JavaScript?",
        options: ["function myFunction()", "def myFunction()", "create myFunction()", "function:myFunction()"],
        correctAnswer: "function myFunction()"
    },
    {
        category: "JavaScript",
        question: "How do you write an array in JavaScript?",
        options: ["var colors = ['red', 'green', 'blue']", "var colors = (1:'red', 2:'green', 3:'blue')", "var colors = 'red', 'green', 'blue'", "var colors = {'red', 'green', 'blue'}"],
        correctAnswer: "var colors = ['red', 'green', 'blue']"
    },
    {
        category: "HTML",
        question: "What does HTML stand for?",
        options: ["HyperText Markup Language", "Hyperlinks and Text Markup Language", "Home Tool Markup Language", "HyperTool Markup Language"],
        correctAnswer: "HyperText Markup Language"
    },
    {
        category: "HTML",
        question: "Which HTML element is used to specify a footer for a document or section?",
        options: ["<footer>", "<section>", "<bottom>", "<aside>"],
        correctAnswer: "<footer>"
    },
    {
        category: "HTML",
        question: "Which HTML element is used to define important text?",
        options: ["<strong>", "<important>", "<b>", "<i>"],
        correctAnswer: "<strong>"
    },
    {
        category: "HTML",
        question: "Which HTML attribute specifies an alternate text for an image, if the image cannot be displayed?",
        options: ["alt", "title", "src", "href"],
        correctAnswer: "alt"
    },
    {
        category: "HTML",
        question: "Which HTML element is used to define a navigation link?",
        options: ["<nav>", "<navigate>", "<navigation>", "<navlink>"],
        correctAnswer: "<nav>"
    },
    {
        category: "HTML",
        question: "What is the correct HTML element for inserting a line break?",
        options: ["<br>", "<lb>", "<break>", "<linebreak>"],
        correctAnswer: "<br>"
    },
    {
        category: "HTML",
        question: "Which HTML element is used to specify a header for a document or section?",
        options: ["<header>", "<section>", "<top>", "<head>"],
        correctAnswer: "<header>"
    },
    {
        category: "HTML",
        question: "Which HTML attribute is used to define inline styles?",
        options: ["style", "class", "styles", "font"],
        correctAnswer: "style"
    },
    {
        category: "HTML",
        question: "Which HTML element is used to define a table?",
        options: ["<table>", "<tab>", "<tr>", "<td>"],
        correctAnswer: "<table>"
    },
    {
        category: "HTML",
        question: "Which HTML element is used to define emphasized text?",
        options: ["<em>", "<italic>", "<i>", "<strong>"],
        correctAnswer: "<em>"
    },
    {
        category: "CSS",
        question: "What does CSS stand for?",
        options: ["Cascading Style Sheets", "Colorful Style Sheets", "Creative Style Sheets", "Computer Style Sheets"],
        correctAnswer: "Cascading Style Sheets"
    },
    {
        category: "CSS",
        question: "Which HTML attribute is used to define inline styles?",
        options: ["style", "class", "id", "font"],
        correctAnswer: "style"
    },
    {
        category: "CSS",
        question: "Which is the correct CSS syntax?",
        options: ["body {color: black;}", "{body;color:black;}", "{body:color=black;}", "body:color=black;"],
        correctAnswer: "body {color: black;}"
    },
    {
        category: "CSS",
        question: "Which property is used to change the background color?",
        options: ["background-color", "color", "bgcolor", "background"],
        correctAnswer: "background-color"
    },
    {
        category: "CSS",
        question: "Which CSS property controls the text size?",
        options: ["font-size", "text-style", "text-size", "font-style"],
        correctAnswer: "font-size"
    },
    {
        category: "CSS",
        question: "What is the correct CSS syntax to make all the <p> elements bold?",
        options: ["p {font-weight: bold;}", "p {text-size: bold;}", "p {font-style: bold;}", "p {text-weight: bold;}"],
        correctAnswer: "p {font-weight: bold;}"
    },
    {
        category: "CSS",
        question: "How do you make each word in a text start with a capital letter?",
        options: ["text-transform: capitalize;", "text-style: capitalize;", "transform: capitalize;", "text-capitalize: true;"],
        correctAnswer: "text-transform: capitalize;"
    },
    {
        category: "CSS",
        question: "Which property is used to change the font of an element?",
        options: ["font-family", "font-style", "font-size", "font-weight"],
        correctAnswer: "font-family"
    },
    {
        category: "CSS",
        question: "Which property is used to center text?",
        options: ["text-align", "align-text", "center-text", "text-center"],
        correctAnswer: "text-align"
    },
    {
        category: "CSS",
        question: "How do you select an element with id 'demo'?",
        options: ["#demo", ".demo", "demo", "*demo"],
        correctAnswer: "#demo"
    }
];


let currentQuestionIndex = 0;
let currentCategory = '';
let answeredQuestions = {}; 

function displayQuiz(category) {
    currentCategory = category;
    currentQuestionIndex = 0;
    answeredQuestions = {}; 

    showQuestion(); 
}

function showQuestion() {
    const quizContent = document.querySelector('.quizContent');
    quizContent.innerHTML = '';

    const filteredQuestions = questions.filter(q => q.category === currentCategory);

    if (currentQuestionIndex < filteredQuestions.length) {
        const question = filteredQuestions[currentQuestionIndex];
        const questionItem = document.createElement('div');
        questionItem.classList.add('questionItem');

        const questionText = document.createElement('p');
        questionText.innerText = `${currentQuestionIndex + 1}. ${question.question}`;
        questionItem.appendChild(questionText);

        question.options.forEach(option => {
            const label = document.createElement('label');
            const radio = document.createElement('input');
            radio.type = 'radio';
            radio.name = `question${currentQuestionIndex}`;
            radio.value = option;
            label.appendChild(radio);
            label.appendChild(document.createTextNode(option));
            questionItem.appendChild(label);
            questionItem.appendChild(document.createElement('br'));
        });

        const submitButton = document.createElement('button');
        submitButton.classList.add('submit-button');
        submitButton.innerText = 'Submit';
        submitButton.addEventListener('click', submitAnswer);
        questionItem.appendChild(submitButton);

        quizContent.appendChild(questionItem);
    } else {
        quizContent.innerHTML = '<p>You have completed the quiz!</p>';
        clearInterval(timerInterval);
    }
}

function submitAnswer() {
    const filteredQuestions = questions.filter(q => q.category === currentCategory);
    const question = filteredQuestions[currentQuestionIndex];
    const selectedOption = document.querySelector(`input[name='question${currentQuestionIndex}']:checked`);
    
    if (selectedOption) {
        answeredQuestions[question.question] = selectedOption.value === question.correctAnswer;
        currentQuestionIndex++;
        showQuestion();
        displayQuestions(currentCategory);
    } else {
        alert('Please select an answer before submitting.');
    }
}

function displayQuestions(category) {
    const questionList = document.querySelector('.questionList');
    questionList.innerHTML = '';

    const filteredQuestions = questions.filter(q => q.category === category);

    filteredQuestions.forEach((question, index) => {
        const questionItem = document.createElement('div');
        questionItem.classList.add('questionItem');

        questionItem.style.border = '1px solid #ccc';
        questionItem.style.borderRadius = '5px';
        questionItem.style.padding = '10px';
        questionItem.style.marginBottom = '5px';

        const answeredCorrectly = answeredQuestions[question.question];
        if (answeredCorrectly !== undefined) {
            questionItem.style.background = answeredCorrectly ? '#87db84' : '#db8484';
        } else {
            questionItem.style.background = '#e5e4e2';
        }

        const heading = document.createElement('h3');
        heading.innerText = `Quiz Question ${index + 1}`;
        questionItem.appendChild(heading);

        questionList.appendChild(questionItem);
    });
}


document.getElementById('HTML').addEventListener('click', () => {
    displayQuiz('HTML');
    displayQuestions('HTML');
});

document.getElementById('CSS').addEventListener('click', () => {
    displayQuiz('CSS');
    displayQuestions('CSS');
});

document.getElementById('JavaScript').addEventListener('click', () => {
    displayQuiz('JavaScript');
    displayQuestions('JavaScript');
});

displayQuiz('JavaScript');
displayQuestions('JavaScript');

const FULL_DASH_ARRAY = 283;
const WARNING_THRESHOLD = 10;
const ALERT_THRESHOLD = 5;

const COLOR_CODES = {
    info: {
        color: "green"
    },
    warning: {
        color: "orange",
        threshold: WARNING_THRESHOLD
    },
    alert: {
        color: "red",
        threshold: ALERT_THRESHOLD
    }
};

const TIME_LIMIT = 20;
let timePassed = 0;
let timeLeft = TIME_LIMIT;
let timerInterval = null;
let remainingPathColor = COLOR_CODES.info.color;

document.getElementById("app").innerHTML = `
<div class="base-timer">
  <svg class="base-timer__svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <g class="base-timer__circle">
      <circle class="base-timer__path-elapsed" cx="50" cy="50" r="45"></circle>
      <path
        id="base-timer-path-remaining"
        stroke-dasharray="283"
        class="base-timer__path-remaining ${remainingPathColor}"
        d="
          M 50, 50
          m -45, 0
          a 45,45 0 1,0 90,0
          a 45,45 0 1,0 -90,0
        "
      ></path>
    </g>
  </svg>
  <span id="base-timer-label" class="base-timer__label">${formatTime(
    timeLeft
)}</span>
</div>
`;

startTimer();

function onTimesUp() {
    clearInterval(timerInterval);
    currentQuestionIndex++;
    showQuestion();
    startTimer();
}

function startTimer() {
    timePassed = 0;
    timeLeft = TIME_LIMIT;
    clearInterval(timerInterval);

    timerInterval = setInterval(() => {
        timePassed++;
        timeLeft = TIME_LIMIT - timePassed;
        document.getElementById("base-timer-label").innerHTML = formatTime(timeLeft);
        setCircleDasharray();
        setRemainingPathColor(timeLeft);

        if (timeLeft === 0) {
            onTimesUp();
        }
    }, 1000);
}

function formatTime(time) {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;

    if (seconds < 10) {
        seconds = `0${seconds}`;
    }

    return `${minutes}:${seconds}`;
}

function setRemainingPathColor(timeLeft) {
    const { alert, warning, info } = COLOR_CODES;
    const baseTimerPathRemaining = document.getElementById("base-timer-path-remaining");

    if (timeLeft <= alert.threshold) {
        baseTimerPathRemaining.classList.remove(warning.color);
        baseTimerPathRemaining.classList.remove(info.color);
        baseTimerPathRemaining.classList.add(alert.color);
    } else if (timeLeft <= warning.threshold) {
        baseTimerPathRemaining.classList.remove(alert.color);
        baseTimerPathRemaining.classList.remove(info.color);
        baseTimerPathRemaining.classList.add(warning.color);
    } else {
        baseTimerPathRemaining.classList.remove(alert.color);
        baseTimerPathRemaining.classList.remove(warning.color);
        baseTimerPathRemaining.classList.add(info.color);
    }
}

function calculateTimeFraction() {
    const rawTimeFraction = timeLeft / TIME_LIMIT;
    return rawTimeFraction - (1 / TIME_LIMIT) * (1 - rawTimeFraction);
}

function setCircleDasharray() {
    const circleDasharray = `${(
        calculateTimeFraction() * FULL_DASH_ARRAY
    ).toFixed(0)} 283`;
    document
        .getElementById("base-timer-path-remaining")
        .setAttribute("stroke-dasharray", circleDasharray);
}


