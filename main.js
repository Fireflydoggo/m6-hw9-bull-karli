
var locationEl = document.getElementById('location')
var btn = document.querySelector('button')

btn.onclick = function() {
    console.log('clicked')
        fetch('api.openweathermap.org/data/2.5/weather?q={city name},{state code},{country code}&appid=5cb927ca14faaa455e4e62dee4338bf0')
        .then(function(res) {
          return res.json()
        })
        .then(function(res) {
          console.log(res)
        })
}