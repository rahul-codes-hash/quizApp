import {quizData} from './questions.js'

// 🧱 Screen Sections
const homeScreen = document.getElementById('home-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultScreen = document.getElementById('result-screen');
const reviewScreen = document.getElementById('review-screen');
const pastScoresScreen = document.getElementById('past-scores-screen');

// 🎮 Home Screen Elements

const quizForm = document.getElementById('quiz-form');
const usernameInput = document.getElementById('username');
const categorySelect = document.getElementById('category');
const difficultySelect = document.getElementById('difficulty');
const startBtn = document.getElementById('start-btn');
const errorMsg = document.getElementById('error-msg');
const errorMsgCat = document.getElementById('error-msg-cat');
const errorMsgDiff = document.getElementById('error-msg-diff');




// 📖 Quiz Screen Elements
const quizUsername = document.getElementById('quiz-username');
const quizTimer = document.getElementById('quiz-timer');
const quizScore = document.getElementById('quiz-score');
const progressBar = document.getElementById('progress-bar');
const quizQuestion = document.getElementById('quiz-question');
const quizOptions = document.getElementById('quiz-options');
const nextBtn = document.getElementById('next-btn');

// 🏁 Result Screen Elements
const resultScore = document.getElementById('result-score');
const resultFeedback = document.getElementById('result-feedback');
const reviewBtn = document.getElementById('review-btn');
const restartBtn = document.getElementById('restart-btn');
const pastScoresBtn = document.getElementById('past-scores-btn');

// 🔍 Review Screen Elements
const reviewList = document.getElementById('review-list');
const backToHomeBtn = document.getElementById('back-to-home-btn');

// 📜 Past Scores Screen Elements
const scoreHistory = document.getElementById('score-history');
const clearScoresBtn = document.getElementById('clear-scores-btn');
const backFromScoresBtn = document.getElementById('back-from-scores-btn');

// 🧠 Quiz State Variables

let currentQuestionIndex = 0;      // Tracks which question is currently being shown
let score = 0;                     // Tracks the user's score
let countdown = 10;                // 10-second countdown for each question
let timerId = null;                // To store the setInterval ID so it can be cleared
let totalQuestions = 0;           // Will be set after filtering questions based on user selection



quizForm.addEventListener( 'submit' , (e) => {

    e.preventDefault();

        // Remove all previous error states
        errorMsg.classList.add('hidden');
        errorMsgCat.classList.add('hidden');
        errorMsgDiff.classList.add('hidden');

        let isValid = true;

    if( usernameInput.value.trim() == "" ){
        errorMsg.classList.remove('hidden');
        isValid = false;
    }

    if( categorySelect.value == "" ){
        errorMsgCat.classList.remove('hidden');
        isValid = false;
    }

    if( difficultySelect.value == "" ){
        errorMsgDiff.classList.remove('hidden');
        isValid = false;
    }

    if(!isValid){
        alert('all fields are required');
        return
    }

    // get values from form inputs
    let currentUser = {username: usernameInput.value.trim(),
                        category: categorySelect.value,
                        difficulty: difficultySelect.value
                       };
                       
    // store them in local storage
    sessionStorage.setItem('currentUser' , JSON.stringify(currentUser) );

    // switch to quiz screen 
    homeScreen.classList.add('hidden');
    quizScreen.classList.remove('hidden');
    QuizScreenRender();
                    
})

usernameInput.addEventListener( 'input' , () => {
    if( usernameInput.value.trim() == "" ){
        errorMsg.classList.remove('hidden');
    } else if( usernameInput.value.trim() !== "" ){
        errorMsg.classList.add('hidden');
    }
})

categorySelect.addEventListener( 'change' , () => {
    if( categorySelect.value == "" ){
        errorMsgCat.classList.remove('hidden');
    } else if( categorySelect.value !== "" ){
        errorMsgCat.classList.add('hidden');
    }
})

difficultySelect.addEventListener( 'change' , () => {
    if( difficultySelect.value == "" ){
        errorMsgDiff.classList.remove('hidden');
    } else if( difficultySelect.value !== "" ){
        errorMsgDiff.classList.add('hidden');
    }
})

const QuizScreenRender = () => {

    const sessionUser = JSON.parse(sessionStorage.getItem('currentUser'));
    console.log("sessionUser", sessionUser);

    const chosenQuestionsArray = quizData.filter( question => question.category.toLowerCase() == sessionUser.category.toLowerCase() && question.difficulty.toLowerCase() == sessionUser.difficulty.toLowerCase() );

    console.log("user choices" , chosenQuestionsArray);

    totalQuestions = chosenQuestionsArray.length;

    quizUsername.textContent = sessionUser.username ;

    quizScore.textContent = score;

    quizTimer.textContent = countdown ;

    renderQuestions(chosenQuestionsArray);

}


// Function to render a single question and its options
function renderQuestions(arr) {
    const current = arr[currentQuestionIndex];
    console.log(current);
    quizQuestion.textContent = current.question;

    current.options.forEach((option, index) => {
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
  
    nextBtn.addEventListener('click' , () => {
        const selectedOption = document.querySelector('input[name="quiz-option"]:checked');
        console.log(selectedOption);
        if (!selectedOption) {
            alert('Please select an option!');
            return;
          }
          
    })

  }

  














