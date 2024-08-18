const questions = [
    {
        question: "HTML stands for?",
        options: ["HighText Machine Language", "HyperText and links Markup Language","HyperText Markup Language"],
        answer: 2
    },
    {
        question: "What is CSS Stands for?",
        options: ["Casting Sheet Style","Cardinal Style Sheet","Cascading Style Sheet"],
        answer: 2
    },
    {
        question: "Which of the following Paragraph in HTML?",
        options: ["p", "br","a"],
        answer: 0
    },
    {
        question: "Which of the following tag is used to insert a line-break in HTML?",
        options: ["img", "br","b"],
        answer: 1
    },
    {
        question: "Which Tag is Used for Creating a Button in HTML?",
        options: ["li", "Button","ul"],
        answer: 1
    }
];

let currentQuestion = 0;
let answers = new Array(questions.length);

document.getElementById("question").innerHTML = questions[currentQuestion].question;
document.getElementById("option1").nextElementSibling.innerHTML = questions[currentQuestion].options[0];
document.getElementById("option2").nextElementSibling.innerHTML = questions[currentQuestion].options[1];
document.getElementById("option3").nextElementSibling.innerHTML = questions[currentQuestion].options[2];

document.getElementById("submit").addEventListener("click", () => {
    const selectedOption = document.querySelector('input[name="option"]:checked');
    if (selectedOption) {
        const answerIndex = selectedOption.id === "option1" ? 0 : 1;
        answers[currentQuestion] = answerIndex;
    }
});

document.getElementById("next").addEventListener("click", () => {
    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        document.getElementById("question").innerHTML = questions[currentQuestion].question;
        document.getElementById("option1").nextElementSibling.innerHTML = questions[currentQuestion].options[0];
        document.getElementById("option2").nextElementSibling.innerHTML = questions[currentQuestion].options[1];
        document.getElementById("option3").nextElementSibling.innerHTML = questions[currentQuestion].options[2];
        document.getElementById("previous").disabled = false;
        if (currentQuestion === questions.length - 1) {
            document.getElementById("next").disabled = true;
            document.getElementById("submit").disabled = true;
        }
    }
});

document.getElementById("previous").addEventListener("click", () => {
    if (currentQuestion > 0) {
        currentQuestion--;
        document.getElementById("question").innerHTML = questions[currentQuestion].question;
        document.getElementById("option1").nextElementSibling.innerHTML = questions[currentQuestion].options[0];
        document.getElementById("option2").nextElementSibling.innerHTML = questions[currentQuestion].options[1];
        document.getElementById("option3").nextElementSibling.innerHTML = questions[currentQuestion].options[2];
        document.getElementById("next").disabled = false;
        document.getElementById("submit").disabled = false;
        if (currentQuestion === 0) {
            document.getElementById("previous").disabled = true;
        }
    }
});