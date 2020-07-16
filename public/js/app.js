const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const firstMsg = document.querySelector('#first-message')
const secondMsg = document.querySelector('#second-message')
 

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()
    
    firstMsg.textContent = 'Loading..'
    secondMsg.textContent = ''

    const location = search.value

    fetch('http://localhost:3000/weather?address=' + location).then((response) =>{
        response.json().then((data) =>{
            if(data.error){
                firstMsg.textContent = data.error
            }else{
                firstMsg.textContent = data.location
                secondMsg.textContent = data.forecast
            }
        })
    })

})