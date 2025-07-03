const questions = [
  {
    question: "Who is the father of Artificial Intelligence?",
    options: ["Alan Turing", "John McCarthy", "Elon Musk", "Jeff Bezos"],
    answer: "John McCarthy"
  },
  {
    question: "Which one is a programming language?",
    options: ["HTML", "Python", "CSS", "Photoshop"],
    answer: "Python"
  },
  {
    question: "Which year did the Apollo 11 land on the Moon?",
    options: ["1969", "1979", "1989", "1999"],
    answer: "1969"
  }
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("next-btn");
const scoreBox = document.getElementById("score-box");

function showQuestion() {
  const q = questions[currentQuestion];
  questionEl.textContent = q.question;
  optionsEl.innerHTML = "";
  nextBtn.style.display = "none";

  q.options.forEach(option => {
    const btn = document.createElement("div");
    btn.classList.add("option");
    btn.textContent = option;
    btn.onclick = () => selectAnswer(btn, option);
    optionsEl.appendChild(btn);
  });
}

function selectAnswer(btn, selected) {
  const correct = questions[currentQuestion].answer;
  const options = document.querySelectorAll(".option");

  options.forEach(option => {
    option.onclick = null;
    if (option.textContent === correct) {
      option.classList.add("correct");
    } else if (option.textContent === selected) {
      option.classList.add("wrong");
    }
  });

  if (selected === correct) {
    score++;
  }

  nextBtn.style.display = "block";
}

nextBtn.onclick = () => {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
};

function showScore() {
  questionEl.textContent = "Quiz Completed!";
  optionsEl.innerHTML = "";
  nextBtn.style.display = "none";
  scoreBox.textContent = `Your score: ${score} / ${questions.length}`;
}

showQuestion();
