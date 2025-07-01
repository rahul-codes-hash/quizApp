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
    const now = JSON.parse(sessionStorage.getItem('currentUser'))

    // switch to quiz screen 
    homeScreen.classList.add('hidden');
    quizScreen.classList.remove('hidden');

                    
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

quizData.forEach( ( question , index ) => {
    
})















