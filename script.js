// ==========================================
// QUIZ DATA - 5 CATEGORIES, 30 QUESTIONS
// ==========================================

const quizData = {
    gk: {
        name: "GENERAL KNOWLEDGE",
        questions: [
            {
                question: "Which international organisation publishes the Human Development Report?",
                options: ["World Bank", "UNDP", "UNESCO", "IMF"],
                answer: 1
            },
            {
                question: "Which country was the first to grant women the right to vote in national elections?",
                options: ["United States", "United Kingdom", "New Zealand", "France"],
                answer: 2
            },
            {
                question: "The Strait of Malacca connects which two major bodies of water?",
                options: [
                    "Arabian Sea and Red Sea",
                    "Andaman Sea and South China Sea",
                    "Black Sea and Mediterranean Sea",
                    "Persian Gulf and Arabian Sea"
                ],
                answer: 1
            },
            {
                question: "Which Indian mathematician is associated with the Hardy–Ramanujan number 1729?",
                options: [
                    "Aryabhata",
                    "Srinivasa Ramanujan",
                    "Brahmagupta",
                    "C. R. Rao"
                ],
                answer: 1
            },
            {
                question: "Which of these is NOT a permanent member of the UN Security Council?",
                options: ["China", "France", "Germany", "United Kingdom"],
                answer: 2
            },
            {
                question: "What is the primary function of the International Monetary Fund?",
                options: [
                    "Funding international space missions",
                    "Promoting global monetary cooperation and financial stability",
                    "Regulating international sports",
                    "Managing global internet infrastructure"
                ],
                answer: 1
            }
        ]
    },

    science: {
        name: "SCIENCE",
        questions: [
            {
                question: "Which enzyme is primarily responsible for joining Okazaki fragments during DNA replication?",
                options: [
                    "DNA helicase",
                    "DNA ligase",
                    "RNA polymerase",
                    "Topoisomerase"
                ],
                answer: 1
            },
            {
                question: "Which particle mediates the electromagnetic force?",
                options: ["Gluon", "Higgs boson", "Photon", "Neutrino"],
                answer: 2
            },
            {
                question: "What is the approximate escape velocity from Earth's surface?",
                options: [
                    "5.6 km/s",
                    "7.9 km/s",
                    "11.2 km/s",
                    "15.4 km/s"
                ],
                answer: 2
            },
            {
                question: "In CRISPR-Cas9 gene editing, what is the primary role of guide RNA?",
                options: [
                    "Repairing broken DNA",
                    "Directing Cas9 to a specific DNA sequence",
                    "Producing proteins",
                    "Copying the entire genome"
                ],
                answer: 1
            },
            {
                question: "Which law states that the induced current opposes the change in magnetic flux that produces it?",
                options: [
                    "Ohm's Law",
                    "Faraday's Law",
                    "Lenz's Law",
                    "Coulomb's Law"
                ],
                answer: 2
            },
            {
                question: "Which of the following has the highest electronegativity?",
                options: ["Oxygen", "Chlorine", "Nitrogen", "Fluorine"],
                answer: 3
            }
        ]
    },

    computer: {
        name: "COMPUTER SCIENCE",
        questions: [
            {
                question: "What is the average time complexity of searching in a balanced Binary Search Tree?",
                options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
                answer: 1
            },
            {
                question: "Which CPU scheduling algorithm can cause starvation of low-priority processes?",
                options: [
                    "Round Robin",
                    "First Come First Served",
                    "Priority Scheduling",
                    "Shortest Remaining Time"
                ],
                answer: 2
            },
            {
                question: "Which data structure is most suitable for implementing recursion?",
                options: ["Queue", "Stack", "Heap", "Graph"],
                answer: 1
            },
            {
                question: "What does the ACID property 'Isolation' mean in database transactions?",
                options: [
                    "Transactions are permanently stored",
                    "Transactions execute without interfering with each other",
                    "Data is always encrypted",
                    "A transaction cannot be rolled back"
                ],
                answer: 1
            },
            {
                question: "Which algorithm is commonly used to find the shortest path in a graph with non-negative edge weights?",
                options: [
                    "Kruskal's Algorithm",
                    "Dijkstra's Algorithm",
                    "Prim's Algorithm",
                    "Binary Search"
                ],
                answer: 1
            },
            {
                question: "Which of these is NOT a valid property of a relational database table?",
                options: [
                    "Each row should be uniquely identifiable",
                    "Column values should belong to defined domains",
                    "The order of rows determines the meaning of the table",
                    "Each column has a name"
                ],
                answer: 2
            }
        ]
    },

    math: {
        name: "MATHEMATICS",
        questions: [
            {
                question: "If the determinant of a square matrix is zero, what can be concluded?",
                options: [
                    "The matrix is always an identity matrix",
                    "The matrix is singular",
                    "The matrix must be diagonal",
                    "The matrix has only positive eigenvalues"
                ],
                answer: 1
            },
            {
                question: "What is the derivative of ln(x² + 1) with respect to x?",
                options: [
                    "1 / (x² + 1)",
                    "2x / (x² + 1)",
                    "2 / (x² + 1)",
                    "2x ln(x)"
                ],
                answer: 1
            },
            {
                question: "What is the sum of the first n natural numbers?",
                options: [
                    "n²",
                    "n(n - 1) / 2",
                    "n(n + 1) / 2",
                    "2n + 1"
                ],
                answer: 2
            },
            {
                question: "If two eigenvalues of a 2 × 2 matrix are 3 and 5, what is its determinant?",
                options: ["8", "15", "2", "25"],
                answer: 1
            },
            {
                question: "What is the value of the integral of 1/x with respect to x?",
                options: [
                    "x² / 2 + C",
                    "ln|x| + C",
                    "1 / x² + C",
                    "eˣ + C"
                ],
                answer: 1
            },
            {
                question: "A fair coin is tossed three times. What is the probability of getting exactly two heads?",
                options: ["1/8", "3/8", "1/2", "5/8"],
                answer: 1
            }
        ]
    },

    sports: {
        name: "SPORTS",
        questions: [
            {
                question: "Which club won the first-ever UEFA Champions League under its current name in 1992–93?",
                options: [
                    "AC Milan",
                    "Barcelona",
                    "Marseille",
                    "Ajax"
                ],
                answer: 2
            },
            {
                question: "Which country won UEFA Euro 2004, defeating Portugal in the final?",
                options: ["Spain", "Greece", "Czech Republic", "Germany"],
                answer: 1
            },
            {
                question: "In a five-day Test cricket match, what is the maximum number of overs a team can face in one day under standard playing conditions?",
                options: ["75", "80", "90", "100"],
                answer: 2
            },
            {
                question: "Who was the first cricketer to score 10,000 runs in men's One Day Internationals?",
                options: [
                    "Sachin Tendulkar",
                    "Ricky Ponting",
                    "Brian Lara",
                    "Sanath Jayasuriya"
                ],
                answer: 0
            },
            {
                question: "In which year was the 24-second shot clock introduced in the NBA?",
                options: ["1946", "1954", "1960", "1967"],
                answer: 1
            },
            {
                question: "In association football, a player cannot be penalised for offside when receiving the ball directly from which situation?",
                options: [
                    "A direct free kick",
                    "A corner kick",
                    "A teammate's pass",
                    "A throw-in"
                ],
                answer: 1
            }
        ]
    }
};


// ==========================================
// QUIZ VARIABLES
// ==========================================

let currentCategory = "";
let currentQuestion = 0;
let selectedAnswers = [];
let timeLeft = 0;
let timerInterval = null;
let quizSubmitted = false;


// General Knowledge and Sports: 20 seconds
// Other categories: 35 seconds

function getQuestionTime() {
    if (currentCategory === "gk" || currentCategory === "sports") {
        return 20;
    }

    return 35;
}


// ==========================================
// HTML ELEMENTS
// ==========================================

const welcomeScreen = document.getElementById("welcome-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");
const reviewScreen = document.getElementById("review-screen");

const categoryName = document.getElementById("category-name");
const questionText = document.getElementById("question-text");
const optionsContainer = document.getElementById("options-container");
const questionCount = document.getElementById("question-count");
const answeredCount = document.getElementById("answered-count");
const progressFill = document.getElementById("progress-fill");
const timerDisplay = document.getElementById("timer");

const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const submitBtn = document.getElementById("submit-btn");


// ==========================================
// SCREEN MANAGEMENT
// ==========================================

function showScreen(screen) {
    document.querySelectorAll(".screen").forEach(item => {
        item.classList.remove("active");
    });

    screen.classList.add("active");
}


// ==========================================
// START QUIZ
// ==========================================

document.querySelectorAll(".category-card").forEach(card => {
    card.addEventListener("click", () => {
        startQuiz(card.dataset.category);
    });
});

function startQuiz(category) {
    clearInterval(timerInterval);

    currentCategory = category;
    currentQuestion = 0;
    quizSubmitted = false;

    selectedAnswers = new Array(
        quizData[currentCategory].questions.length
    ).fill(null);

    categoryName.textContent = quizData[currentCategory].name;

    timerDisplay.parentElement.classList.remove("warning");

    showScreen(quizScreen);
    displayQuestion();
}


// ==========================================
// DISPLAY QUESTION
// ==========================================

function displayQuestion() {
    clearInterval(timerInterval);

    const questions = quizData[currentCategory].questions;
    const question = questions[currentQuestion];

    questionText.textContent = question.question;

    questionCount.textContent =
        `Question ${currentQuestion + 1} of ${questions.length}`;

    const answered = selectedAnswers.filter(
        answer => answer !== null
    ).length;

    answeredCount.textContent = `${answered} Answered`;

    progressFill.style.width =
        `${((currentQuestion + 1) / questions.length) * 100}%`;

    optionsContainer.innerHTML = "";

    question.options.forEach((option, index) => {
        const button = document.createElement("button");

        button.className = "option";
        button.textContent =
            `${String.fromCharCode(65 + index)}. ${option}`;

        if (selectedAnswers[currentQuestion] === index) {
            button.classList.add("selected");
        }

        button.addEventListener("click", () => {
            if (quizSubmitted) return;

            selectedAnswers[currentQuestion] = index;

            // Update selected option without resetting the timer
            optionsContainer.querySelectorAll(".option").forEach(
                (optionButton, optionIndex) => {
                    optionButton.classList.toggle(
                        "selected",
                        optionIndex === index
                    );
                }
            );

            const answeredNow = selectedAnswers.filter(
                answer => answer !== null
            ).length;

            answeredCount.textContent = `${answeredNow} Answered`;
        });

        optionsContainer.appendChild(button);
    });

    prevBtn.disabled = currentQuestion === 0;

    if (currentQuestion === questions.length - 1) {
        nextBtn.classList.add("hidden");
        submitBtn.classList.remove("hidden");
    } else {
        nextBtn.classList.remove("hidden");
        submitBtn.classList.add("hidden");
    }

    // Reset timer for every new question
    timeLeft = getQuestionTime();
    updateTimerDisplay();
    startTimer();
}


// ==========================================
// NEXT AND PREVIOUS BUTTONS
// ==========================================

prevBtn.addEventListener("click", () => {
    if (currentQuestion > 0 && !quizSubmitted) {
        currentQuestion--;
        displayQuestion();
    }
});

nextBtn.addEventListener("click", () => {
    const totalQuestions = quizData[currentCategory].questions.length;

    if (currentQuestion < totalQuestions - 1 && !quizSubmitted) {
        currentQuestion++;
        displayQuestion();
    }
});


// ==========================================
// TIMER
// ==========================================

function startTimer() {
    timerInterval = setInterval(() => {
        timeLeft--;

        updateTimerDisplay();

        if (timeLeft <= 0) {
            clearInterval(timerInterval);

            const totalQuestions =
                quizData[currentCategory].questions.length;

            if (currentQuestion === totalQuestions - 1) {
                submitQuiz();
            } else {
                currentQuestion++;
                displayQuestion();
            }
        }
    }, 1000);
}

function updateTimerDisplay() {
    timerDisplay.textContent =
        `00:${String(timeLeft).padStart(2, "0")}`;

    timerDisplay.parentElement.classList.toggle(
        "warning",
        timeLeft <= 5
    );
}


// ==========================================
// SUBMIT QUIZ
// ==========================================

submitBtn.addEventListener("click", () => {
    const unanswered = selectedAnswers.filter(
        answer => answer === null
    ).length;

    if (unanswered > 0) {
        const confirmSubmit = confirm(
            `You have ${unanswered} unanswered question(s). Submit anyway?`
        );

        if (!confirmSubmit) return;
    }

    submitQuiz();
});

function submitQuiz() {
    if (quizSubmitted) return;

    quizSubmitted = true;
    clearInterval(timerInterval);

    const questions = quizData[currentCategory].questions;

    let correct = 0;
    let incorrect = 0;
    let unanswered = 0;

    questions.forEach((question, index) => {
        if (selectedAnswers[index] === null) {
            unanswered++;
        } else if (selectedAnswers[index] === question.answer) {
            correct++;
        } else {
            incorrect++;
        }
    });

    const percentage = Math.round(
        (correct / questions.length) * 100
    );

    document.getElementById("percentage").textContent =
        `${percentage}%`;

    document.getElementById("total-questions").textContent =
        questions.length;

    document.getElementById("correct-answers").textContent =
        correct;

    document.getElementById("wrong-answers").textContent =
        incorrect;

    document.getElementById("unanswered").textContent =
        unanswered;

    let message = "";

    if (percentage >= 90) {
        message = "Outstanding! You're a genius! 🏆";
    } else if (percentage >= 70) {
        message = "Excellent work! Keep it up! 🔥";
    } else if (percentage >= 50) {
        message = "Good effort! You're getting there! 👍";
    } else {
        message = "Keep practising. You can do better! 💪";
    }

    document.getElementById("result-message").textContent = message;

    showScreen(resultScreen);
}


// ==========================================
// ANSWER REVIEW
// ==========================================

document.getElementById("review-btn").addEventListener("click", () => {
    const questions = quizData[currentCategory].questions;
    const reviewContainer = document.getElementById("review-container");

    reviewContainer.innerHTML = "";

    questions.forEach((question, index) => {
        const item = document.createElement("div");
        item.className = "review-item";

        const heading = document.createElement("h3");
        heading.textContent = `${index + 1}. ${question.question}`;
        item.appendChild(heading);

        const correctAnswer = document.createElement("p");
        correctAnswer.className = "correct-text";
        correctAnswer.textContent =
            `Correct answer: ${question.options[question.answer]}`;

        item.appendChild(correctAnswer);

        const userAnswer = document.createElement("p");

        if (selectedAnswers[index] === null) {
            userAnswer.className = "wrong-text";
            userAnswer.textContent = "Your answer: Not answered";
        } else if (selectedAnswers[index] === question.answer) {
            userAnswer.className = "correct-text";
            userAnswer.textContent =
                `Your answer: ${question.options[selectedAnswers[index]]} ✓`;
        } else {
            userAnswer.className = "wrong-text";
            userAnswer.textContent =
                `Your answer: ${question.options[selectedAnswers[index]]} ✗`;
        }

        item.appendChild(userAnswer);
        reviewContainer.appendChild(item);
    });

    showScreen(reviewScreen);
});


// ==========================================
// RESTART AND HOME BUTTONS
// ==========================================

document.getElementById("restart-btn").addEventListener("click", () => {
    startQuiz(currentCategory);
});

function goHome() {
    clearInterval(timerInterval);

    quizSubmitted = false;
    timeLeft = 0;

    timerDisplay.parentElement.classList.remove("warning");

    showScreen(welcomeScreen);
}

document.getElementById("home-btn").addEventListener("click", goHome);

document.getElementById("review-home-btn").addEventListener("click", goHome);

document.getElementById("review-back-btn").addEventListener("click", () => {
    showScreen(resultScreen);
});

document.getElementById("exit-btn").addEventListener("click", () => {
    const confirmExit = confirm(
        "Are you sure you want to exit? Your current progress will be lost."
    );

    if (confirmExit) {
        goHome();
    }
});