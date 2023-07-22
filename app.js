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

function createWeatherField(title, value) {
    const moreInfoContainer = document.getElementById('moreInfoContainer');

    const newField = document.createElement('div');
    newField.classList.add('moreInfoField');

    const titleElement = document.createElement('h4');
    titleElement.textContent = title;

    const valueElement = document.createElement('h4');
    valueElement.textContent = value;

    newField.appendChild(titleElement);
    newField.appendChild(valueElement);
    moreInfoContainer.appendChild(newField);
}

document.addEventListener('DOMContentLoaded', function() {
    
    const container = document.querySelector('.container');
    const additionalData = {};

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

                document.querySelector('#tempButton').onclick = toggleTemperature;
                container.style.display = 'block';

                additionalData['Min Temperature:'] = `${data.main['temp_min'].toFixed(1)} °C`;
                additionalData['Max Temperature:'] = `${data.main['temp_max'].toFixed(1)} °C`;
                additionalData['Feels Like:'] = `${data.main['feels_like'].toFixed(1)} °C`;
                additionalData['Pressure:'] = `${data.main['pressure']} hPa`;
                additionalData['Humidity:'] = `${data.main['humidity']}%`;

                document.querySelector('#moreInfoButton').onclick = function() {
                    const moreInfoContainer = document.querySelector('#moreInfoContainer');
                    moreInfoContainer.style.display = moreInfoContainer.style.display === 'none' ? 'block' : 'none';
                    if (moreInfoContainer.style.display === 'block'){
                        moreInfoContainer.innerHTML = '';

                        for (const title in additionalData) {
                            createWeatherField(title, additionalData[title]);
                        }
                    } 
                };
                
            })
            .catch(error => {
                console.log('Error:', error);
            });
        });
    } else {
        console.log("Geolocation is not supported by this browser.")
    }

});