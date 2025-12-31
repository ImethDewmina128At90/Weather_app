


 const weatherForm = document.querySelector('form')
 const search=document.querySelector('input')
 weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const location = search.value
    fetch('http://localhost:3000/weather?address=' + location).then((response) => {
        response.json().then((data) => {
            if(data.error){
                console.log(data.error)
            }else{
                document.querySelector('#message').textContent=data.location
                document.querySelector('#message2').textContent=data.weather    

            }
        })
    })
})




