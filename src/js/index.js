const html = document.documentElement
const themeToggleButton = document.querySelector('.sliderContainer')

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
let options = document.querySelector('.quizzOption')
let questionIndex = document.querySelector('.quizzSection__questionSection__questionIndex__currentIndex')
let progress = document.querySelector('.quizzSection__questionSection__questionProgress')

let optionA = document.querySelector('.optionA')
let optionB = document.querySelector('.optionB')
let optionC = document.querySelector('.optionC')
let optionD = document.querySelector('.optionD')

async function getData() {
    const file = ('./data.json')
    const response = await fetch(file)
    const data = await response.json()
    console.log(data)
    console.log(data.quizzes[0].questions[0])

    return data
}

getData()



themeToggleButton.addEventListener('click', function () {

    if (html.getAttribute('data-theme') === 'dark') {
        html.removeAttribute('data-theme')
        themeToggleButton.classList.remove('sliderContainer--dark')

    } else {
        html.setAttribute('data-theme', 'dark')
        themeToggleButton.classList.add('sliderContainer--dark')
    }

})



buttons.forEach(button => {
    button.addEventListener('click', function () {

        startMenu.classList.add('hidden');
        quizzSection.classList.remove('hidden');

        headerSectionTitle.classList.remove('invisible')

        getData().then(function (data) {

            //HTML QUIZZ
            if (button.classList.contains('htmlQuizz')) {

                headerSectionTitleText.textContent = `${data.quizzes[0].title}`

                headerSectionSvgIconContainer.classList.add('header__titleContainer__iconContainer--html')

                headerSectionImg.src = data.quizzes[0].icon

                questionIndex.textContent = '1'
                progress.value = 0

                question.textContent = data.quizzes[0].questions[0].question

                optionA.textContent = data.quizzes[0].questions[0].options[0]
                optionB.textContent = data.quizzes[0].questions[0].options[1]
                optionC.textContent = data.quizzes[0].questions[0].options[2]
                optionD.textContent = data.quizzes[0].questions[0].options[3]

            }

            //CSS QUIZZ
            else if (button.classList.contains('cssQuizz')) {

                headerSectionTitleText.textContent = data.quizzes[1].title

                headerSectionSvgIconContainer.classList.add('header__titleContainer__iconContainer--css')

                headerSectionImg.src = `${data.quizzes[1].icon}`

                questionIndex.textContent = '1'
                progress.value = 0

                question.textContent = data.quizzes[1].questions[0].question

                optionA.textContent = data.quizzes[1].questions[0].options[0]
                optionB.textContent = data.quizzes[1].questions[0].options[1]
                optionC.textContent = data.quizzes[1].questions[0].options[2]
                optionD.textContent = data.quizzes[1].questions[0].options[3]

            }

            // JAVASCRIPT QUIZZ
            else if (button.classList.contains('javascriptQuizz')) {

                headerSectionTitleText.textContent = data.quizzes[2].title

                headerSectionSvgIconContainer.classList.add('header__titleContainer__iconContainer--javascript')

                headerSectionImg.src = `${data.quizzes[2].icon}`
                
                questionIndex.textContent = '1'
                progress.value = 0

                question.textContent = data.quizzes[2].questions[0].question

                optionA.textContent = data.quizzes[2].questions[0].options[0]
                optionB.textContent = data.quizzes[2].questions[0].options[1]
                optionC.textContent = data.quizzes[2].questions[0].options[2]
                optionD.textContent = data.quizzes[2].questions[0].options[3]

            }

            //ACCESSIBILITY QUIZZ
            else if (button.classList.contains('accessibilityQuizz')) {

                headerSectionTitleText.textContent = data.quizzes[3].title

                headerSectionSvgIconContainer.classList.add('header__titleContainer__iconContainer--accessibility')

                headerSectionImg.src = `${data.quizzes[3].icon}`

                questionIndex.textContent = '1'
                progress.value = 0

                question.textContent = data.quizzes[3].questions[0].question

                optionA.textContent = data.quizzes[3].questions[0].options[0]
                optionB.textContent = data.quizzes[3].questions[0].options[1]
                optionC.textContent = data.quizzes[3].questions[0].options[2]
                optionD.textContent = data.quizzes[3].questions[0].options[3]

            }


        })

    })
})



