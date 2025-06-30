// 🧱 Screen Sections
const homeScreen = document.getElementById('home-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultScreen = document.getElementById('result-screen');
const reviewScreen = document.getElementById('review-screen');
const pastScoresScreen = document.getElementById('past-scores-screen');


// 🎮 Home Screen Elements

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


startBtn.addEventListener('click' , (e) => {
    const usernameInput = document.getElementById('username');
    const userIp = usernameInput.value.trim();
    if(!userIp){
        errorMsg.classList.remove('hidden');
    
    }

    errorMsg.classList.add('hidden');

    if( userIp == "" || categorySelect.value == "" || difficultySelect.value == "" ){
        e.preventDefault();
        console.log('preventDefault working')
    };

})

categorySelect.addEventListener( 'change' , (e) => {
    if( e.target.value !== ""){
        errorMsgCat.classList.add('hidden');
    }else {
        errorMsgCat.classList.remove('hidden');

    }
})

difficultySelect.addEventListener( 'change' , (e) => {
    if( e.target.value !== ""){
        errorMsgDiff.classList.add('hidden');
    }else {
        errorMsgDiff.classList.remove('hidden');

    }
})