


const form = document.querySelector('#form')
const answers = Array.from(document.querySelectorAll('.answer'))
const questions = Array.from(document.querySelectorAll('.question-item'))
const alert = document.querySelector('#alert')

form.addEventListener('submit', e => {
    e.preventDefault()

    questions.forEach(question => {
        question.classList.add('incorrect')
    })

 const checkValue = answers.filter(answer => answer.checked)
 console.log(checkValue)

checkValue.forEach(answer => {
    const check = answer.value === 'true'
    const questionItem = answer.closest('.question-item')
    

    if(check){
        questionItem.classList.add('correct')
        questionItem.classList.remove('incorrect')
    }else{
        questionItem.classList.add('incorrect')
        questionItem.classList.remove('correct')
    }

    
const allCorrect = checkValue.every(answer => answer.value === 'true')
const allTrue = checkValue.length === questions.length

if(allCorrect && allTrue){
alert.classList.add('active')
setTimeout(() => {
    alert.classList.remove('active')
    questionItem.classList.remove("correct")
    
}, 2000);
}
})



})