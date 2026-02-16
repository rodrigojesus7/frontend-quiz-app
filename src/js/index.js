const html = document.documentElement
const themeToggleButton = document.querySelector('.sliderContainer')
const savedTheme = localStorage.getItem('theme')

const htmlQuizzButton = document.querySelector('#htmlQuizz')
const cssQuizzButton = document.querySelector('#cssQuizz')
const javascriptQuizzButton = document.querySelector('#javascriptQuizz')
const accessibilityQuizzButton = document.querySelector('#accessibilityQuizz')

const buttons = [htmlQuizzButton, cssQuizzButton, javascriptQuizzButton, accessibilityQuizzButton]


const startMenu = document.querySelector('.startMenu')
const quizzSection = document.querySelector('.quizzSection')
const scoreSection = document.querySelector('.scoreSection')

const headerSectionTitle = document.querySelector('.header__titleContainer')
let headerSectionTitleText = document.querySelector('.header__titleContainer__text')
let headerSectionSvgIconContainer = document.querySelector('.header__titleContainer__iconContainer')
let headerSectionSvgIcon = document.querySelector('.header__titleContainer__iconContainer__svgIcon')
let headerSectionImg = document.querySelector('.header__titleContainer__iconContainer__img')

let question = document.querySelector('.quizzSection__questionSection__question')
let options = document.querySelectorAll('.quizzSection__buttonsContainer__button')
let inputs = document.querySelectorAll('.input')
let answers = document.querySelectorAll('.quizzOption')
let questionIndex = document.querySelector('.quizzSection__questionSection__questionIndex__currentIndex')
let progress = document.querySelector('.quizzSection__questionSection__questionProgress')
let optionsContainer = document.querySelectorAll('.quizzSection__buttonsContainer__button__answerOption__container')

let optionA = document.querySelector('.optionA')
let optionB = document.querySelector('.optionB')
let optionC = document.querySelector('.optionC')
let optionD = document.querySelector('.optionD')

let correctIcons = document.querySelectorAll('.correctIcon')
let incorrectIcons = document.querySelectorAll('.incorrectIcon')

const submitButton = document.querySelector('.quizzSection__buttonsContainer__submitButton')

const playAgainButton = document.querySelector('.scoreSection__scoreContainer__playAgainButton')

let scoreSectionIconContainer = document.querySelector('.scoreSection__scoreContainer__scoreItems__quizzInfo__iconContainer')
let scoreSectionIconImg = document.querySelector('.scoreSection__scoreContainer__scoreItems__quizzInfo__img')
let scoreSectionTitle = document.querySelector('.scoreSection__scoreContainer__scoreItems__quizzInfo__text')

let data
let questionSectionCounter = 0
let questionCounter = 0
let correctAnswer = ''
let selectedAnswerIndex = null
let isAnswerSubmitted = false

let score = 0
let finalScore = document.querySelector('.scoreSection__scoreContainer__scoreItems__finalScore')


async function getData() {
    const file = ('./data.json')
    const response = await fetch(file)
    data = await response.json()
}

getData()


if (savedTheme === 'dark') {
    html.setAttribute('data-theme', 'dark')
    themeToggleButton.classList.add('sliderContainer--dark')
}

themeToggleButton.addEventListener('click', function () {

    if (html.getAttribute('data-theme') === 'dark') {
        html.removeAttribute('data-theme')
        themeToggleButton.classList.remove('sliderContainer--dark')

        localStorage.setItem('theme', 'light')

    } else {
        html.setAttribute('data-theme', 'dark')
        themeToggleButton.classList.add('sliderContainer--dark')

        localStorage.setItem('theme', 'dark')
    }

})



options.forEach((option, selectedAnswer) => {

    option.addEventListener('click', function () {

        // options[selectedAnswer].classList.add('selectedAnswer')
        console.log(`A alternativa escolhida é: ${selectedAnswer + 1}`)
        selectedAnswerIndex = selectedAnswer


    })
})


buttons.forEach((button, index) => {
    button.addEventListener('click', function () {
        startMenu.classList.add('hidden')
        quizzSection.classList.remove('hidden')

        questionSectionCounter = index
        questionCounter = 0

        switch (questionSectionCounter) {
            case 0:
                headerSectionSvgIconContainer.classList.add('header__titleContainer__iconContainer--html')
                scoreSectionIconContainer.classList.add('header__titleContainer__iconContainer--html')
                break


            case 1:
                headerSectionSvgIconContainer.classList.add('header__titleContainer__iconContainer--css')
                scoreSectionIconContainer.classList.add('header__titleContainer__iconContainer--css')
                break


            case 2:
                headerSectionSvgIconContainer.classList.add('header__titleContainer__iconContainer--javascript')

                scoreSectionIconContainer.classList.add('header__titleContainer__iconContainer--javascript')
                break


            case 3:
                headerSectionSvgIconContainer.classList.add('header__titleContainer__iconContainer--accessibility')

                scoreSectionIconContainer.classList.add('header__titleContainer__iconContainer--accessibility')
                break
        }

        headerSectionTitle.classList.remove('invisible')

        headerSectionTitleText.textContent = data.quizzes[questionSectionCounter].title

        headerSectionImg.src = data.quizzes[questionSectionCounter].icon

        scoreSectionIconImg.src = data.quizzes[questionSectionCounter].icon

        scoreSectionTitle.textContent = data.quizzes[questionSectionCounter].title

        loadQuestions()
    })
})





function loadQuestions() {

    const currentQuestion = data.quizzes[questionSectionCounter].questions[questionCounter]

    question.textContent = currentQuestion.question

    optionA.textContent = currentQuestion.options[0]
    optionB.textContent = currentQuestion.options[1]
    optionC.textContent = currentQuestion.options[2]
    optionD.textContent = currentQuestion.options[3]

    correctAnswer = currentQuestion.answer


    answers.forEach((answer, index) => {

        if (answer.textContent === correctAnswer) {
            correctAnswerIndex = index
        }

    })

    questionIndex.textContent = questionCounter + 1
    progress.value = questionCounter + 1
}

submitButton.addEventListener('click', function () {

    if (!isAnswerSubmitted) {

        if (selectedAnswerIndex === null) {
            return
        }

        if (selectedAnswerIndex !== correctAnswerIndex) {
            showIncorrectAnswer()
        } else {
            showCorrectAnswer()
            score++
        }

        submitButton.textContent = 'Next question'
        isAnswerSubmitted = true
        return
    }

    goToNextQuestion()

})

function showIncorrectAnswer() {
    options[selectedAnswerIndex].classList.add('quizzSection__buttonsContainer__button--wrongAnswer')
    optionsContainer[selectedAnswerIndex].classList.add('quizzSection__buttonsContainer__button__answerOption__container--wrongAnswer')

    incorrectIcons[selectedAnswerIndex].classList.remove('hidden')
    correctIcons[correctAnswerIndex].classList.remove('hidden')
}

function showCorrectAnswer(){
    options[correctAnswerIndex].classList.add('correctAnswer')
    correctIcons[correctAnswerIndex].classList.remove('hidden')
}

function goToNextQuestion() {

    clearAnswers()

    questionCounter++
    selectedAnswerIndex = null
    isAnswerSubmitted = false
    submitButton.textContent = 'Submit Answer'

    if (questionCounter < data.quizzes[questionSectionCounter].questions.length) {
        loadQuestions()
    } else {
        quizzSection.classList.add('hidden')
        scoreSection.classList.remove('hidden')

        finalScore.textContent = score
    }
}


function clearAnswers() {
    options.forEach(option => {
        option.classList.remove('quizzSection__buttonsContainer__button--wrongAnswer')
        option.classList.remove('correctAnswer')
    })

    optionsContainer.forEach(container => {
        container.classList.remove('quizzSection__buttonsContainer__button__answerOption__container--wrongAnswer')
        container.classList.remove('correctAnswerContainer')
    })

    incorrectIcons.forEach(icon => {
        icon.classList.add('hidden')
    })

    correctIcons.forEach(icon => {
        icon.classList.add('hidden')
    })

}



playAgainButton.addEventListener('click', function () {

    window.location.reload()

})

