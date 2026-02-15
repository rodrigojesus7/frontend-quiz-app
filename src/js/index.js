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
let answers = document.querySelectorAll('.quizzOption')
let questionIndex = document.querySelector('.quizzSection__questionSection__questionIndex__currentIndex')
let progress = document.querySelector('.quizzSection__questionSection__questionProgress')

let optionA = document.querySelector('.optionA')
let optionB = document.querySelector('.optionB')
let optionC = document.querySelector('.optionC')
let optionD = document.querySelector('.optionD')

const submitButton = document.querySelector('.quizzSection__buttonsContainer__submitButton')

const playAgainButton = document.querySelector('.scoreSection__scoreContainer__playAgainButton')

let scoreSectionIconContainer = document.querySelector('.scoreSection__scoreContainer__scoreItems__quizzInfo__iconContainer')
let scoreSectionIconImg = document.querySelector('.scoreSection__scoreContainer__scoreItems__quizzInfo__img')
let scoreSectionTitle = document.querySelector('.scoreSection__scoreContainer__scoreItems__quizzInfo__text')

async function getData() {
    const file = ('./data.json')
    const response = await fetch(file)
    const data = await response.json()
    console.log(data)
    console.log(data.quizzes[0].questions[0])
    console.log(data.quizzes[0].questions[0].answer)

    return data
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



buttons.forEach(button => {
    button.addEventListener('click', function () {

        questionSectionCounter = 0

        startMenu.classList.add('hidden');
        quizzSection.classList.remove('hidden');

        headerSectionTitle.classList.remove('invisible')

        getData().then(function (data) {

            //HTML QUIZZ
            if (button.classList.contains('htmlQuizz')) {

                questionSectionCounter = 0

                headerSectionTitleText.textContent = data.quizzes[questionSectionCounter].title

                headerSectionSvgIconContainer.classList.add('header__titleContainer__iconContainer--html')

                headerSectionImg.src = data.quizzes[questionSectionCounter].icon

                scoreSectionIconContainer.classList.add('header__titleContainer__iconContainer--html')

                scoreSectionIconImg.src = data.quizzes[questionSectionCounter].icon

                scoreSectionTitle.textContent = data.quizzes[questionSectionCounter].title


                questionIndex.textContent = '1'

                // HTML - QUESTIONS
                questionCounter = 0

                question.textContent = data.quizzes[questionSectionCounter].questions[questionCounter].question

                optionA.textContent = data.quizzes[questionSectionCounter].questions[questionCounter].options[0]
                optionB.textContent = data.quizzes[questionSectionCounter].questions[questionCounter].options[1]
                optionC.textContent = data.quizzes[questionSectionCounter].questions[questionCounter].options[2]
                optionD.textContent = data.quizzes[questionSectionCounter].questions[questionCounter].options[3]

                correctAnswer = data.quizzes[questionSectionCounter].questions[questionCounter].answer

                submitButton.addEventListener('click', function () {

                    if (questionCounter <= 8) {
                        questionCounter++
                    } else {
                        quizzSection.classList.add('hidden')
                        scoreSection.classList.remove('hidden')
                    }

                    question.textContent = data.quizzes[questionSectionCounter].questions[questionCounter].question

                    optionA.textContent = data.quizzes[questionSectionCounter].questions[questionCounter].options[0]
                    optionB.textContent = data.quizzes[questionSectionCounter].questions[questionCounter].options[1]
                    optionC.textContent = data.quizzes[questionSectionCounter].questions[questionCounter].options[2]
                    optionD.textContent = data.quizzes[questionSectionCounter].questions[questionCounter].options[3]


                    correctAnswer = data.quizzes[questionSectionCounter].questions[questionCounter].answer
                    questionIndex.textContent = questionCounter + 1
                    progress.value = questionCounter + 1
                })




                answers.forEach(answer => {
                    if (answer.textContent === correctAnswer) {
                        answer.classList.add('CorrectAnswer')
                    }
                });

            }

            //CSS QUIZZ
            else if (button.classList.contains('cssQuizz')) {

                questionSectionCounter = 1

                headerSectionTitleText.textContent = data.quizzes[questionSectionCounter].title

                headerSectionSvgIconContainer.classList.add('header__titleContainer__iconContainer--css')

                headerSectionImg.src = data.quizzes[questionSectionCounter].icon

                scoreSectionIconContainer.classList.add('header__titleContainer__iconContainer--css')

                scoreSectionIconImg.src = data.quizzes[questionSectionCounter].icon

                scoreSectionTitle.textContent = data.quizzes[questionSectionCounter].title

                questionIndex.textContent = '1'

                // CSS - QUESTIONS
                questionCounter = 0

                question.textContent = data.quizzes[questionSectionCounter].questions[questionCounter].question

                optionA.textContent = data.quizzes[questionSectionCounter].questions[questionCounter].options[0]
                optionB.textContent = data.quizzes[questionSectionCounter].questions[questionCounter].options[1]
                optionC.textContent = data.quizzes[questionSectionCounter].questions[questionCounter].options[2]
                optionD.textContent = data.quizzes[questionSectionCounter].questions[questionCounter].options[3]

                correctAnswer = data.quizzes[questionSectionCounter].questions[questionCounter].answer

                submitButton.addEventListener('click', function () {

                    if (questionCounter <= 8) {
                        questionCounter++
                    } else {
                        quizzSection.classList.add('hidden')
                        scoreSection.classList.remove('hidden')
                    }

                    question.textContent = data.quizzes[questionSectionCounter].questions[questionCounter].question

                    optionA.textContent = data.quizzes[questionSectionCounter].questions[questionCounter].options[0]
                    optionB.textContent = data.quizzes[questionSectionCounter].questions[questionCounter].options[1]
                    optionC.textContent = data.quizzes[questionSectionCounter].questions[questionCounter].options[2]
                    optionD.textContent = data.quizzes[questionSectionCounter].questions[questionCounter].options[3]


                    correctAnswer = data.quizzes[questionSectionCounter].questions[questionCounter].answer
                    questionIndex.textContent = questionCounter + 1
                    progress.value = questionCounter + 1
                })


            }





            // JAVASCRIPT QUIZZ
            else if (button.classList.contains('javascriptQuizz')) {

                questionSectionCounter = 2

                headerSectionTitleText.textContent = data.quizzes[questionSectionCounter].title

                headerSectionSvgIconContainer.classList.add('header__titleContainer__iconContainer--javascript')

                headerSectionImg.src = data.quizzes[questionSectionCounter].icon

                scoreSectionIconContainer.classList.add('header__titleContainer__iconContainer--javascript')

                scoreSectionIconImg.src = data.quizzes[questionSectionCounter].icon

                scoreSectionTitle.textContent = data.quizzes[questionSectionCounter].title

                questionIndex.textContent = '1'

                // JAVASCRIPT - QUESTIONS
                questionCounter = 0

                question.textContent = data.quizzes[questionSectionCounter].questions[questionCounter].question

                optionA.textContent = data.quizzes[questionSectionCounter].questions[questionCounter].options[0]
                optionB.textContent = data.quizzes[questionSectionCounter].questions[questionCounter].options[1]
                optionC.textContent = data.quizzes[questionSectionCounter].questions[questionCounter].options[2]
                optionD.textContent = data.quizzes[questionSectionCounter].questions[questionCounter].options[3]

                correctAnswer = data.quizzes[questionSectionCounter].questions[questionCounter].answer

                submitButton.addEventListener('click', function () {

                    if (questionCounter <= 8) {
                        questionCounter++
                    } else {
                        quizzSection.classList.add('hidden')
                        scoreSection.classList.remove('hidden')
                    }

                    question.textContent = data.quizzes[questionSectionCounter].questions[questionCounter].question

                    optionA.textContent = data.quizzes[questionSectionCounter].questions[questionCounter].options[0]
                    optionB.textContent = data.quizzes[questionSectionCounter].questions[questionCounter].options[1]
                    optionC.textContent = data.quizzes[questionSectionCounter].questions[questionCounter].options[2]
                    optionD.textContent = data.quizzes[questionSectionCounter].questions[questionCounter].options[3]


                    correctAnswer = data.quizzes[questionSectionCounter].questions[questionCounter].answer
                    questionIndex.textContent = questionCounter + 1
                    progress.value = questionCounter + 1
                })
            }



            //ACCESSIBILITY QUIZZ
            else if (button.classList.contains('accessibilityQuizz')) {

                questionCounter = 3

                headerSectionTitleText.textContent = data.quizzes[questionSectionCounter].title

                headerSectionSvgIconContainer.classList.add('header__titleContainer__iconContainer--accessibility')

                headerSectionImg.src = data.quizzes[questionSectionCounter].icon

                scoreSectionIconContainer.classList.add('header__titleContainer__iconContainer--accessibility')

                scoreSectionIconImg.src = data.quizzes[questionSectionCounter].icon

                scoreSectionTitle.textContent = data.quizzes[questionSectionCounter].title

                questionIndex.textContent = '1'

                // ACCESSIBILITY - QUESTIONS
                questionCounter = 0

                question.textContent = data.quizzes[questionSectionCounter].questions[questionCounter].question

                optionA.textContent = data.quizzes[questionSectionCounter].questions[questionCounter].options[0]
                optionB.textContent = data.quizzes[questionSectionCounter].questions[questionCounter].options[1]
                optionC.textContent = data.quizzes[questionSectionCounter].questions[questionCounter].options[2]
                optionD.textContent = data.quizzes[questionSectionCounter].questions[questionCounter].options[3]

                correctAnswer = data.quizzes[questionSectionCounter].questions[questionCounter].answer

                submitButton.addEventListener('click', function () {

                    if (questionCounter <= 8) {
                        questionCounter++
                    } else {
                        quizzSection.classList.add('hidden')
                        scoreSection.classList.remove('hidden')
                    }

                    question.textContent = data.quizzes[questionSectionCounter].questions[questionCounter].question

                    optionA.textContent = data.quizzes[questionSectionCounter].questions[questionCounter].options[0]
                    optionB.textContent = data.quizzes[questionSectionCounter].questions[questionCounter].options[1]
                    optionC.textContent = data.quizzes[questionSectionCounter].questions[questionCounter].options[2]
                    optionD.textContent = data.quizzes[questionSectionCounter].questions[questionCounter].options[3]


                    correctAnswer = data.quizzes[questionSectionCounter].questions[questionCounter].answer
                    questionIndex.textContent = questionCounter + 1
                    progress.value = questionCounter + 1
                })


            }


        })

    })
})



playAgainButton.addEventListener('click', function () {

    window.location.reload()

})