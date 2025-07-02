const questions = [
    {
      question: "Which bird is a symbol of peace?",
      options: ["Crow", "Eagle", "Dove", "Parrot"],
      answer: 2
    },
    // more...
  ];
  
  let currentQuestionIndex = 0;
  let timer;
  let timeLeft = 10;
  let score = 0;
  let userAnswers = []; // Track user-selected answers
  
  // DOM elements
  const quizQuestion = document.getElementById('quiz-question');
  const quizOptions = document.getElementById('quiz-options');
  const quizTimer = document.getElementById('quiz-timer');
  const nextBtn = document.getElementById('next-btn');
  const resultScreen = document.getElementById('result-screen');
  const finalScoreEl = document.getElementById('final-score');
  const reviewBtn = document.getElementById('review-btn');
  const reviewScreen = document.getElementById('review-screen');
  const reviewContainer = document.getElementById('review-container');
  
  // Render one question
  function renderQuestion() {
    const questionObj = questions[currentQuestionIndex];
    quizQuestion.textContent = `${currentQuestionIndex + 1}. ${questionObj.question}`;
    quizOptions.innerHTML = '';
  
    questionObj.options.forEach((option, index) => {
      const optionId = `option-${index}`;
      const wrapper = document.createElement('div');
      wrapper.className = 'flex items-center space-x-2';
  
      const input = document.createElement('input');
      input.type = 'radio';
      input.name = 'quiz-option';
      input.id = optionId;
      input.value = index;
      input.className = 'w-4 h-4 text-green-600 border-gray-300 focus:ring-green-500';
  
      const label = document.createElement('label');
      label.htmlFor = optionId;
      label.textContent = option;
      label.className = 'text-gray-800';
  
      wrapper.appendChild(input);
      wrapper.appendChild(label);
      quizOptions.appendChild(wrapper);
    });
  
    startTimer();
  }
  
  // Timer logic
  function startTimer() {
    clearInterval(timer);
    timeLeft = 10;
    quizTimer.textContent = `Time Left: ${timeLeft}s`;
  
    timer = setInterval(() => {
      timeLeft--;
      quizTimer.textContent = `Time Left: ${timeLeft}s`;
  
      if (timeLeft <= 0) {
        clearInterval(timer);
        goToNextQuestion();
      }
    }, 1000);
  }
  
  // Next question logic
  function goToNextQuestion() {
    clearInterval(timer);
  
    const selected = document.querySelector('input[name="quiz-option"]:checked');
    const selectedAnswer = selected ? parseInt(selected.value) : null;
    const correctAnswer = questions[currentQuestionIndex].answer;
  
    userAnswers.push({
      questionIndex: currentQuestionIndex,
      selected: selectedAnswer
    });
  
    if (selectedAnswer === correctAnswer) {
      score++;
    }
  
    currentQuestionIndex++;
  
    if (currentQuestionIndex < questions.length) {
      renderQuestion();
    } else {
      showResult();
    }
  }
  
  // Show result
  function showResult() {
    document.getElementById('quiz-question').classList.add('hidden');
    document.getElementById('quiz-options').classList.add('hidden');
    nextBtn.classList.add('hidden');
    quizTimer.classList.add('hidden');
    resultScreen.classList.remove('hidden');
    finalScoreEl.textContent = `You scored ${score} out of ${questions.length}`;
  }
  
  // Review logic
  reviewBtn.addEventListener('click', () => {
    resultScreen.classList.add('hidden');
    reviewScreen.classList.remove('hidden');
    renderReview();
  });
  
  function renderReview() {
    reviewContainer.innerHTML = '';
  
    questions.forEach((q, i) => {
      const userAnswer = userAnswers[i]?.selected;
      const isCorrect = userAnswer === q.answer;
  
      const block = document.createElement('div');
      block.className = 'border p-4 rounded bg-white shadow';
  
      const questionEl = document.createElement('h3');
      questionEl.className = 'font-semibold';
      questionEl.textContent = `${i + 1}. ${q.question}`;
      block.appendChild(questionEl);
  
      q.options.forEach((opt, idx) => {
        const optionText = document.createElement('p');
        optionText.textContent = `${idx + 1}. ${opt}`;
  
        if (idx === q.answer) {
          optionText.classList.add('text-green-600', 'font-bold');
        }
  
        if (idx === userAnswer && idx !== q.answer) {
          optionText.classList.add('text-red-500', 'italic');
        }
  
        block.appendChild(optionText);
      });
  
      reviewContainer.appendChild(block);
    });
  }
  
  // Init
  nextBtn.addEventListener('click', goToNextQuestion);
  renderQuestion();
  