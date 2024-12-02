const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("next-btn");
const scoreContainer = document.getElementById("score-container");
const scoreEl = document.getElementById("score");
const restartBtn = document.getElementById("restart-btn");
const startBtn = document.getElementById("start-btn");
const welcomeContainer = document.getElementById("welcome-container");
const quizContainer = document.getElementById("quiz-container");

let questions = [];
let currentQuestionIndex = 0;
let score = 0;

// Fetch questions from Open Trivia DB API (No API key needed)
async function fetchQuestions() {
  try {
    const response = await fetch(
      "https://opentdb.com/api.php?amount=5&type=multiple"
    );
    const data = await response.json();

    // Check if the response contains questions
    console.log("API Data:", data);

    if (data.results && data.results.length > 0) {
      questions = data.results.map((item) => ({
        question: item.question,
        options: shuffleOptions([
          ...item.incorrect_answers,
          item.correct_answer,
        ]),
        correct: item.correct_answer,
      }));
      loadQuestion(); // Load the first question
    } else {
      console.error("No questions received.");
      questionEl.textContent = "No questions available. Please try again.";
    }
  } catch (error) {
    console.error("Error fetching questions:", error);
    questionEl.textContent = "Failed to load questions. Please try again.";
  }
}

// Shuffle options to randomize answer positions
function shuffleOptions(options) {
  for (let i = options.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [options[i], options[j]] = [options[j], options[i]];
  }
  return options;
}

function loadQuestion() {
  const questionData = questions[currentQuestionIndex];
  questionEl.innerHTML = questionData.question;

  optionsEl.innerHTML = "";
  questionData.options.forEach((option) => {
    const button = document.createElement("button");
    button.innerHTML = option;
    button.onclick = () => handleAnswer(option === questionData.correct);
    optionsEl.appendChild(button);
  });

  nextBtn.disabled = true;
}

function handleAnswer(isCorrect) {
  if (isCorrect) score++;
  nextBtn.disabled = false;
}

nextBtn.onclick = () => {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    loadQuestion();
  } else {
    showScore();
  }
};

restartBtn.onclick = () => {
  score = 0;
  currentQuestionIndex = 0;
  scoreContainer.classList.add("hidden");
  quizContainer.classList.remove("hidden");
  fetchQuestions(); // Fetch new questions on restart
};

function showScore() {
  scoreContainer.classList.remove("hidden");
  scoreEl.textContent = ${score} / ${questions.length};
  quizContainer.classList.add("hidden");
}

startBtn.onclick = () => {
  welcomeContainer.classList.add("hidden");
  quizContainer.classList.remove("hidden");
  fetchQuestions(); // Start the quiz by fetching questions
};

// Initialize quiz by fetching questions
fetchQuestions();
