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

        if(button.classList.contains = 'HTML'){
        }
    })
})



