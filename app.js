let isCelsius = true;

function toggleTemperature() {
    const temperatureElement = document.querySelector('#temp');
    const currentTemperature = parseFloat(temperatureElement.textContent);

    if (!isNaN(currentTemperature)) {
        if (isCelsius) {
            const temperatureFahrenheit = (currentTemperature * 9/5) + 32;
            temperatureElement.innerHTML = `${temperatureFahrenheit.toFixed(1)} °F`;
            isCelsius = false;
        } else {
            const temperatureCelsius = (currentTemperature -32)*(5/9);
            temperatureElement.innerHTML = `${temperatureCelsius.toFixed(1)} °C`;
            isCelsius = true;
        }
    }
    
}

document.addEventListener('DOMContentLoaded', function() {
    
    const container = document.querySelector('.container');

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition( function(position) {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
            fetch(`https://weather-proxy.freecodecamp.rocks/api/current?lat=${latitude}&lon=${longitude}`)
            .then(response => response.json())
            .then(data => {
                document.querySelector('#place').innerHTML = `${data.name}, ${data.sys['country']}`;
                document.querySelector('#temp').innerHTML = `${data.main['temp'].toFixed(1)} °C`;
                document.querySelector('#weather').innerHTML = data.weather[0]['main'];
                document.querySelector('#weath_img').src = data.weather[0]['icon'];

                document.querySelector('#toggleButton').onclick = toggleTemperature;
                container.style.display = 'block';
            })
            .catch(error => {
                console.log('Error:', error);
            });
        });
    } else {
        console.log("Geolocation is not supported by this browser.")
    }

});