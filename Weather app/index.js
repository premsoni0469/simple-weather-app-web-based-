var inputValue = document.querySelector('#cityinput')
var btn = document.querySelector('#add');
var city = document.querySelector('#cityoutput')
var descrip = document.querySelector('#description')
var temp = document.querySelector('#temp')
var wind = document.querySelector('#wind')
apik = "3c82070c0f46cf99d3ea4b53fe4311b7"

function conversion(val){
    return (val - 273).toFixed(2)
}

btn.addEventListener('click', function(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid='+apik)
    .then(res => res.json())

    .then(data=>{
        var nameval = data['name']
        var descrip = data['weather']['0']['description']
        var temperature = data['main']['temp']
        var windspeed = data['wind']['speed']

        city.innerHTML=`Weather of <span>${nameval}<span>`
        temp.innerHTML=`Temperature: <span>${conversion(temperature)}°C<span>`
        description.innerHTML=`Sky conditions: <span>${descrip}<span>`
        wind.innerHTML=`Wind Speed: <span>${windspeed} km/hr<span>`
    })

    .catch(err => alert('You have entered a wrong city name!!'))
})