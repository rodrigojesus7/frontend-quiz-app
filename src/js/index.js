const html = document.documentElement
const themeToggleButton = document.querySelector('.sliderContainer')

themeToggleButton.addEventListener('click', function(){

    if (html.getAttribute('data-theme') === 'dark'){
        html.removeAttribute('data-theme')
        themeToggleButton.classList.remove('sliderContainer--dark')

    } else{
        html.setAttribute('data-theme', 'dark')
        themeToggleButton.classList.add('sliderContainer--dark')
    }

})