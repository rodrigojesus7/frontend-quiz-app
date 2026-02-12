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

                headerSectionTitleText.textContent = data.quizzes[0].title

                headerSectionSvgIconContainer.classList.add('header__titleContainer__iconContainer--html')

                headerSectionImg.src = data.quizzes[0].icon

                scoreSectionIconContainer.classList.add('header__titleContainer__iconContainer--html')

                scoreSectionIconImg.src = data.quizzes[0].icon

                scoreSectionTitle.textContent = data.quizzes[0].title



                questionIndex.textContent = '1'
                progress.value = 0

                // HTML - QUESTION 1
                question.textContent = data.quizzes[0].questions[0].question

                optionA.textContent = data.quizzes[0].questions[0].options[0]
                optionB.textContent = data.quizzes[0].questions[0].options[1]
                optionC.textContent = data.quizzes[0].questions[0].options[2]
                optionD.textContent = data.quizzes[0].questions[0].options[3]


                // HTML - QUESTION 2
                submitButton.addEventListener('click', function () {

                    questionIndex.textContent = '2'
                    progress.value = 1

                    question.textContent = data.quizzes[0].questions[1].question

                    optionA.textContent = data.quizzes[0].questions[1].options[0]
                    optionB.textContent = data.quizzes[0].questions[1].options[1]
                    optionC.textContent = data.quizzes[0].questions[1].options[2]
                    optionD.textContent = data.quizzes[0].questions[1].options[3]


                    // HTML - QUESTION 3
                    submitButton.addEventListener('click', function () {

                        questionIndex.textContent = '3'
                        progress.value = 2

                        question.textContent = data.quizzes[0].questions[2].question

                        optionA.textContent = data.quizzes[0].questions[2].options[0]
                        optionB.textContent = data.quizzes[0].questions[2].options[1]
                        optionC.textContent = data.quizzes[0].questions[2].options[2]
                        optionD.textContent = data.quizzes[0].questions[2].options[3]



                        // HTML - QUESTION 4
                        submitButton.addEventListener('click', function () {

                            questionIndex.textContent = '4'
                            progress.value = 3

                            question.textContent = data.quizzes[0].questions[3].question

                            optionA.textContent = data.quizzes[0].questions[3].options[0]
                            optionB.textContent = data.quizzes[0].questions[3].options[1]
                            optionC.textContent = data.quizzes[0].questions[3].options[2]
                            optionD.textContent = data.quizzes[0].questions[3].options[3]


                            // HTML - QUESTION 5
                            submitButton.addEventListener('click', function () {

                                questionIndex.textContent = '5'
                                progress.value = 4

                                question.textContent = data.quizzes[0].questions[4].question

                                optionA.textContent = data.quizzes[0].questions[4].options[0]
                                optionB.textContent = data.quizzes[0].questions[4].options[1]
                                optionC.textContent = data.quizzes[0].questions[4].options[2]
                                optionD.textContent = data.quizzes[0].questions[4].options[3]


                                // HTML - QUESTION 6
                                submitButton.addEventListener('click', function () {
                                    questionIndex.textContent = '6'
                                    progress.value = 5

                                    question.textContent = data.quizzes[0].questions[5].question

                                    optionA.textContent = data.quizzes[0].questions[5].options[0]
                                    optionB.textContent = data.quizzes[0].questions[5].options[1]
                                    optionC.textContent = data.quizzes[0].questions[5].options[2]
                                    optionD.textContent = data.quizzes[0].questions[5].options[3]


                                    // HTML - QUESTION 7
                                    submitButton.addEventListener('click', function () {
                                        questionIndex.textContent = '7'
                                        progress.value = 6

                                        question.textContent = data.quizzes[0].questions[6].question

                                        optionA.textContent = data.quizzes[0].questions[6].options[0]
                                        optionB.textContent = data.quizzes[0].questions[6].options[1]
                                        optionC.textContent = data.quizzes[0].questions[6].options[2]
                                        optionD.textContent = data.quizzes[0].questions[6].options[3]


                                        // HTML - QUESTION 8
                                        submitButton.addEventListener('click', function () {
                                            questionIndex.textContent = '8'
                                            progress.value = 7

                                            question.textContent = data.quizzes[0].questions[7].question

                                            optionA.textContent = data.quizzes[0].questions[7].options[0]
                                            optionB.textContent = data.quizzes[0].questions[7].options[1]
                                            optionC.textContent = data.quizzes[0].questions[7].options[2]
                                            optionD.textContent = data.quizzes[0].questions[7].options[3]



                                            // HTML - QUESTION 9
                                            submitButton.addEventListener('click', function () {
                                                questionIndex.textContent = '9'
                                                progress.value = 8

                                                question.textContent = data.quizzes[0].questions[8].question

                                                optionA.textContent = data.quizzes[0].questions[8].options[0]
                                                optionB.textContent = data.quizzes[0].questions[8].options[1]
                                                optionC.textContent = data.quizzes[0].questions[8].options[2]
                                                optionD.textContent = data.quizzes[0].questions[8].options[3]



                                                // HTML - QUESTION 10
                                                submitButton.addEventListener('click', function () {
                                                    questionIndex.textContent = '10'
                                                    progress.value = 9

                                                    question.textContent = data.quizzes[0].questions[9].question

                                                    optionA.textContent = data.quizzes[0].questions[9].options[0]
                                                    optionB.textContent = data.quizzes[0].questions[9].options[1]
                                                    optionC.textContent = data.quizzes[0].questions[9].options[2]
                                                    optionD.textContent = data.quizzes[0].questions[9].options[3]




                                                    //GO TO SCORE SECTION
                                                    submitButton.addEventListener('click', function () {
                                                        quizzSection.classList.add('hidden')
                                                        scoreSection.classList.remove('hidden')


                                                        playAgainButton.addEventListener('click', function () {

                                                            window.location.reload()

                                                        })

                                                    })


                                                })

                                            })
                                        })
                                    })
                                })

                            })



                        })




                    })


                })

            }

            //CSS QUIZZ
            else if (button.classList.contains('cssQuizz')) {

                headerSectionTitleText.textContent = data.quizzes[1].title

                headerSectionSvgIconContainer.classList.add('header__titleContainer__iconContainer--css')

                headerSectionImg.src = data.quizzes[1].icon

                scoreSectionIconContainer.classList.add('header__titleContainer__iconContainer--css')

                scoreSectionIconImg.src = data.quizzes[1].icon

                scoreSectionTitle.textContent = data.quizzes[1].title

                questionIndex.textContent = '1'
                progress.value = 0

                question.textContent = data.quizzes[1].questions[0].question

                optionA.textContent = data.quizzes[1].questions[0].options[0]
                optionB.textContent = data.quizzes[1].questions[0].options[1]
                optionC.textContent = data.quizzes[1].questions[0].options[2]
                optionD.textContent = data.quizzes[1].questions[0].options[3]




                // CSS - QUESTION 2

                submitButton.addEventListener('click', function () {

                    questionIndex.textContent = '2'
                    progress.value = 1

                    question.textContent = data.quizzes[1].questions[1].question

                    optionA.textContent = data.quizzes[1].questions[1].options[0]
                    optionB.textContent = data.quizzes[1].questions[1].options[1]
                    optionC.textContent = data.quizzes[1].questions[1].options[2]
                    optionD.textContent = data.quizzes[1].questions[1].options[3]


                    // CSS - QUESTION 3
                    submitButton.addEventListener('click', function () {

                        questionIndex.textContent = '3'
                        progress.value = 2

                        question.textContent = data.quizzes[1].questions[2].question

                        optionA.textContent = data.quizzes[1].questions[2].options[0]
                        optionB.textContent = data.quizzes[1].questions[2].options[1]
                        optionC.textContent = data.quizzes[1].questions[2].options[2]
                        optionD.textContent = data.quizzes[1].questions[2].options[3]



                        // CSS - QUESTION 4
                        submitButton.addEventListener('click', function () {

                            questionIndex.textContent = '4'
                            progress.value = 3

                            question.textContent = data.quizzes[1].questions[3].question

                            optionA.textContent = data.quizzes[1].questions[3].options[0]
                            optionB.textContent = data.quizzes[1].questions[3].options[1]
                            optionC.textContent = data.quizzes[1].questions[3].options[2]
                            optionD.textContent = data.quizzes[1].questions[3].options[3]


                            // CSS - QUESTION 5
                            submitButton.addEventListener('click', function () {

                                questionIndex.textContent = '5'
                                progress.value = 4

                                question.textContent = data.quizzes[1].questions[4].question

                                optionA.textContent = data.quizzes[1].questions[4].options[0]
                                optionB.textContent = data.quizzes[1].questions[4].options[1]
                                optionC.textContent = data.quizzes[1].questions[4].options[2]
                                optionD.textContent = data.quizzes[1].questions[4].options[3]


                                // CSS - QUESTION 6
                                submitButton.addEventListener('click', function () {
                                    questionIndex.textContent = '6'
                                    progress.value = 5

                                    question.textContent = data.quizzes[1].questions[5].question

                                    optionA.textContent = data.quizzes[1].questions[5].options[0]
                                    optionB.textContent = data.quizzes[1].questions[5].options[1]
                                    optionC.textContent = data.quizzes[1].questions[5].options[2]
                                    optionD.textContent = data.quizzes[1].questions[5].options[3]


                                    // CSS - QUESTION 7
                                    submitButton.addEventListener('click', function () {
                                        questionIndex.textContent = '7'
                                        progress.value = 6

                                        question.textContent = data.quizzes[1].questions[6].question

                                        optionA.textContent = data.quizzes[1].questions[6].options[0]
                                        optionB.textContent = data.quizzes[1].questions[6].options[1]
                                        optionC.textContent = data.quizzes[1].questions[6].options[2]
                                        optionD.textContent = data.quizzes[1].questions[6].options[3]


                                        // CSS - QUESTION 8
                                        submitButton.addEventListener('click', function () {
                                            questionIndex.textContent = '8'
                                            progress.value = 7

                                            question.textContent = data.quizzes[1].questions[7].question

                                            optionA.textContent = data.quizzes[1].questions[7].options[0]
                                            optionB.textContent = data.quizzes[1].questions[7].options[1]
                                            optionC.textContent = data.quizzes[1].questions[7].options[2]
                                            optionD.textContent = data.quizzes[1].questions[7].options[3]



                                            // CSS - QUESTION 9
                                            submitButton.addEventListener('click', function () {
                                                questionIndex.textContent = '9'
                                                progress.value = 8

                                                question.textContent = data.quizzes[1].questions[8].question

                                                optionA.textContent = data.quizzes[1].questions[8].options[0]
                                                optionB.textContent = data.quizzes[1].questions[8].options[1]
                                                optionC.textContent = data.quizzes[1].questions[8].options[2]
                                                optionD.textContent = data.quizzes[1].questions[8].options[3]



                                                // CSS - QUESTION 10
                                                submitButton.addEventListener('click', function () {
                                                    questionIndex.textContent = '10'
                                                    progress.value = 9

                                                    question.textContent = data.quizzes[1].questions[9].question

                                                    optionA.textContent = data.quizzes[1].questions[9].options[0]
                                                    optionB.textContent = data.quizzes[1].questions[9].options[1]
                                                    optionC.textContent = data.quizzes[1].questions[9].options[2]
                                                    optionD.textContent = data.quizzes[1].questions[9].options[3]



                                                    //GO TO SCORE SECTION
                                                    submitButton.addEventListener('click', function () {
                                                        quizzSection.classList.add('hidden')
                                                        scoreSection.classList.remove('hidden')


                                                        playAgainButton.addEventListener('click', function () {

                                                            window.location.reload()

                                                        })
                                                    })


                                                })
                                            })
                                        })
                                    })

                                })



                            })




                        })


                    })

                })
            }





            // JAVASCRIPT QUIZZ
            else if (button.classList.contains('javascriptQuizz')) {

                headerSectionTitleText.textContent = data.quizzes[2].title

                headerSectionSvgIconContainer.classList.add('header__titleContainer__iconContainer--javascript')

                headerSectionImg.src = data.quizzes[2].icon

                scoreSectionIconContainer.classList.add('header__titleContainer__iconContainer--javascript')

                scoreSectionIconImg.src = data.quizzes[2].icon

                scoreSectionTitle.textContent = data.quizzes[2].title

                questionIndex.textContent = '1'
                progress.value = 0

                question.textContent = data.quizzes[2].questions[0].question

                optionA.textContent = data.quizzes[2].questions[0].options[0]
                optionB.textContent = data.quizzes[2].questions[0].options[1]
                optionC.textContent = data.quizzes[2].questions[0].options[2]
                optionD.textContent = data.quizzes[2].questions[0].options[3]


                // JAVASCRIPT - QUESTION 2

                submitButton.addEventListener('click', function () {

                    questionIndex.textContent = '2'
                    progress.value = 1

                    question.textContent = data.quizzes[2].questions[1].question

                    optionA.textContent = data.quizzes[2].questions[1].options[0]
                    optionB.textContent = data.quizzes[2].questions[1].options[1]
                    optionC.textContent = data.quizzes[2].questions[1].options[2]
                    optionD.textContent = data.quizzes[2].questions[1].options[3]


                    // JAVASCRIPT - QUESTION 3
                    submitButton.addEventListener('click', function () {

                        questionIndex.textContent = '3'
                        progress.value = 2

                        question.textContent = data.quizzes[2].questions[2].question

                        optionA.textContent = data.quizzes[2].questions[2].options[0]
                        optionB.textContent = data.quizzes[2].questions[2].options[1]
                        optionC.textContent = data.quizzes[2].questions[2].options[2]
                        optionD.textContent = data.quizzes[2].questions[2].options[3]



                        // JAVASCRIPT - QUESTION 4
                        submitButton.addEventListener('click', function () {

                            questionIndex.textContent = '4'
                            progress.value = 3

                            question.textContent = data.quizzes[2].questions[3].question

                            optionA.textContent = data.quizzes[2].questions[3].options[0]
                            optionB.textContent = data.quizzes[2].questions[3].options[1]
                            optionC.textContent = data.quizzes[2].questions[3].options[2]
                            optionD.textContent = data.quizzes[2].questions[3].options[3]


                            // JAVASCRIPT - QUESTION 5
                            submitButton.addEventListener('click', function () {

                                questionIndex.textContent = '5'
                                progress.value = 4

                                question.textContent = data.quizzes[2].questions[4].question

                                optionA.textContent = data.quizzes[2].questions[4].options[0]
                                optionB.textContent = data.quizzes[2].questions[4].options[1]
                                optionC.textContent = data.quizzes[2].questions[4].options[2]
                                optionD.textContent = data.quizzes[2].questions[4].options[3]


                                // JAVASCRIPT - QUESTION 6
                                submitButton.addEventListener('click', function () {
                                    questionIndex.textContent = '6'
                                    progress.value = 5

                                    question.textContent = data.quizzes[2].questions[5].question

                                    optionA.textContent = data.quizzes[2].questions[5].options[0]
                                    optionB.textContent = data.quizzes[2].questions[5].options[1]
                                    optionC.textContent = data.quizzes[2].questions[5].options[2]
                                    optionD.textContent = data.quizzes[2].questions[5].options[3]


                                    // JAVASCRIPT - QUESTION 7
                                    submitButton.addEventListener('click', function () {
                                        questionIndex.textContent = '7'
                                        progress.value = 6

                                        question.textContent = data.quizzes[2].questions[6].question

                                        optionA.textContent = data.quizzes[2].questions[6].options[0]
                                        optionB.textContent = data.quizzes[2].questions[6].options[1]
                                        optionC.textContent = data.quizzes[2].questions[6].options[2]
                                        optionD.textContent = data.quizzes[2].questions[6].options[3]


                                        // JAVASCRIPT - QUESTION 8
                                        submitButton.addEventListener('click', function () {
                                            questionIndex.textContent = '8'
                                            progress.value = 7

                                            question.textContent = data.quizzes[2].questions[7].question

                                            optionA.textContent = data.quizzes[2].questions[7].options[0]
                                            optionB.textContent = data.quizzes[2].questions[7].options[1]
                                            optionC.textContent = data.quizzes[2].questions[7].options[2]
                                            optionD.textContent = data.quizzes[2].questions[7].options[3]



                                            // JAVASCRIPT - QUESTION 9
                                            submitButton.addEventListener('click', function () {
                                                questionIndex.textContent = '9'
                                                progress.value = 8

                                                question.textContent = data.quizzes[2].questions[8].question

                                                optionA.textContent = data.quizzes[2].questions[8].options[0]
                                                optionB.textContent = data.quizzes[2].questions[8].options[1]
                                                optionC.textContent = data.quizzes[2].questions[8].options[2]
                                                optionD.textContent = data.quizzes[2].questions[8].options[3]



                                                // JAVASCRIPT - QUESTION 10
                                                submitButton.addEventListener('click', function () {
                                                    questionIndex.textContent = '10'
                                                    progress.value = 9

                                                    question.textContent = data.quizzes[2].questions[9].question

                                                    optionA.textContent = data.quizzes[2].questions[9].options[0]
                                                    optionB.textContent = data.quizzes[2].questions[9].options[1]
                                                    optionC.textContent = data.quizzes[2].questions[9].options[2]
                                                    optionD.textContent = data.quizzes[2].questions[9].options[3]



                                                    //GO TO SCORE SECTION
                                                    submitButton.addEventListener('click', function () {
                                                        quizzSection.classList.add('hidden')
                                                        scoreSection.classList.remove('hidden')


                                                        playAgainButton.addEventListener('click', function () {

                                                            window.location.reload()

                                                        })
                                                    })


                                                })
                                            })
                                        })
                                    })

                                })



                            })




                        })


                    })

                })
            }



            //ACCESSIBILITY QUIZZ
            else if (button.classList.contains('accessibilityQuizz')) {

                headerSectionTitleText.textContent = data.quizzes[3].title

                headerSectionSvgIconContainer.classList.add('header__titleContainer__iconContainer--accessibility')

                headerSectionImg.src = data.quizzes[3].icon

                scoreSectionIconContainer.classList.add('header__titleContainer__iconContainer--accessibility')

                scoreSectionIconImg.src = data.quizzes[3].icon

                scoreSectionTitle.textContent = data.quizzes[3].title

                questionIndex.textContent = '1'
                progress.value = 0

                question.textContent = data.quizzes[3].questions[0].question

                optionA.textContent = data.quizzes[3].questions[0].options[0]
                optionB.textContent = data.quizzes[3].questions[0].options[1]
                optionC.textContent = data.quizzes[3].questions[0].options[2]
                optionD.textContent = data.quizzes[3].questions[0].options[3]


                // ACCESSIBILITY - QUESTION 2
                submitButton.addEventListener('click', function () {

                    questionIndex.textContent = '2'
                    progress.value = 1

                    question.textContent = data.quizzes[3].questions[1].question

                    optionA.textContent = data.quizzes[3].questions[1].options[0]
                    optionB.textContent = data.quizzes[3].questions[1].options[1]
                    optionC.textContent = data.quizzes[3].questions[1].options[2]
                    optionD.textContent = data.quizzes[3].questions[1].options[3]


                    // ACCESSIBILITY - QUESTION 3
                    submitButton.addEventListener('click', function () {

                        questionIndex.textContent = '3'
                        progress.value = 2

                        question.textContent = data.quizzes[3].questions[2].question

                        optionA.textContent = data.quizzes[3].questions[2].options[0]
                        optionB.textContent = data.quizzes[3].questions[2].options[1]
                        optionC.textContent = data.quizzes[3].questions[2].options[2]
                        optionD.textContent = data.quizzes[3].questions[2].options[3]



                        // ACCESSIBILITY - QUESTION 4
                        submitButton.addEventListener('click', function () {

                            questionIndex.textContent = '4'
                            progress.value = 3

                            question.textContent = data.quizzes[3].questions[3].question

                            optionA.textContent = data.quizzes[3].questions[3].options[0]
                            optionB.textContent = data.quizzes[3].questions[3].options[1]
                            optionC.textContent = data.quizzes[3].questions[3].options[2]
                            optionD.textContent = data.quizzes[3].questions[3].options[3]


                            // ACCESSIBILITY - QUESTION 5
                            submitButton.addEventListener('click', function () {

                                questionIndex.textContent = '5'
                                progress.value = 4

                                question.textContent = data.quizzes[3].questions[4].question

                                optionA.textContent = data.quizzes[3].questions[4].options[0]
                                optionB.textContent = data.quizzes[3].questions[4].options[1]
                                optionC.textContent = data.quizzes[3].questions[4].options[2]
                                optionD.textContent = data.quizzes[3].questions[4].options[3]


                                // ACCESSIBILITY - QUESTION 6
                                submitButton.addEventListener('click', function () {
                                    questionIndex.textContent = '6'
                                    progress.value = 5

                                    question.textContent = data.quizzes[3].questions[5].question

                                    optionA.textContent = data.quizzes[3].questions[5].options[0]
                                    optionB.textContent = data.quizzes[3].questions[5].options[1]
                                    optionC.textContent = data.quizzes[3].questions[5].options[2]
                                    optionD.textContent = data.quizzes[3].questions[5].options[3]


                                    // ACCESSIBILITY - QUESTION 7
                                    submitButton.addEventListener('click', function () {
                                        questionIndex.textContent = '7'
                                        progress.value = 6

                                        question.textContent = data.quizzes[3].questions[6].question

                                        optionA.textContent = data.quizzes[3].questions[6].options[0]
                                        optionB.textContent = data.quizzes[3].questions[6].options[1]
                                        optionC.textContent = data.quizzes[3].questions[6].options[2]
                                        optionD.textContent = data.quizzes[3].questions[6].options[3]


                                        // ACCESSIBILITY - QUESTION 8
                                        submitButton.addEventListener('click', function () {
                                            questionIndex.textContent = '8'
                                            progress.value = 7

                                            question.textContent = data.quizzes[3].questions[7].question

                                            optionA.textContent = data.quizzes[3].questions[7].options[0]
                                            optionB.textContent = data.quizzes[3].questions[7].options[1]
                                            optionC.textContent = data.quizzes[3].questions[7].options[2]
                                            optionD.textContent = data.quizzes[3].questions[7].options[3]



                                            // ACCESSIBILITY - QUESTION 9
                                            submitButton.addEventListener('click', function () {
                                                questionIndex.textContent = '9'
                                                progress.value = 8

                                                question.textContent = data.quizzes[3].questions[8].question

                                                optionA.textContent = data.quizzes[3].questions[8].options[0]
                                                optionB.textContent = data.quizzes[3].questions[8].options[1]
                                                optionC.textContent = data.quizzes[3].questions[8].options[2]
                                                optionD.textContent = data.quizzes[3].questions[8].options[3]



                                                // ACCESSIBILITY - QUESTION 10
                                                submitButton.addEventListener('click', function () {
                                                    questionIndex.textContent = '10'
                                                    progress.value = 9

                                                    question.textContent = data.quizzes[3].questions[9].question

                                                    optionA.textContent = data.quizzes[3].questions[9].options[0]
                                                    optionB.textContent = data.quizzes[3].questions[9].options[1]
                                                    optionC.textContent = data.quizzes[3].questions[9].options[2]
                                                    optionD.textContent = data.quizzes[3].questions[9].options[3]



                                                    //GO TO SCORE SECTION
                                                    submitButton.addEventListener('click', function () {
                                                        quizzSection.classList.add('hidden')
                                                        scoreSection.classList.remove('hidden')


                                                        playAgainButton.addEventListener('click', function () {

                                                            window.location.reload()

                                                        })
                                                    })


                                                })
                                            })
                                        })
                                    })

                                })



                            })




                        })


                    })

                })
            }


        })

    })
})



