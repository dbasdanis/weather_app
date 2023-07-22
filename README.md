![Weather App](https://github.com/dbasdanis/weather_app/blob/main/weather-app.png)

### Overview:
The Weather App is a web application that provides real-time weather information based on the user's current location. It displays the current temperature, weather condition, and an icon representing the weather. Additionally, the app allows users to toggle between Celsius and Fahrenheit temperature units. Users can also access more detailed weather information by clicking the "More Info" button, which reveals additional data such as minimum temperature, maximum temperature, feels-like temperature, pressure, and humidity.

### User Interface:
- **Header:** The header of the app displays the title "Weather App."
- **Temperature Section:** The main temperature section contains the name of the location and the current temperature. Users can click on the temperature unit icon to toggle between Celsius and Fahrenheit.
- **Weather Icon:** Next to the temperature section, an icon representing the current weather condition is displayed.
- **More Info Button:** The "More Info" button shows a down-chevron icon. Clicking this button reveals additional weather information below it.
- **Additional Weather Information:** When the "More Info" button is clicked, a new section is revealed below, displaying additional weather information such as minimum temperature, maximum temperature, feels-like temperature, pressure, and humidity.

### Features:

#### 1. Real-time Weather Information:
The Weather App uses the Geolocation API to determine the user's current location and fetches real-time weather data from the "https://weather-proxy.freecodecamp.rocks/api/current" API. It retrieves the location name, current temperature, weather condition, and weather icon.

#### 2. Toggle Temperature Units:
Users can switch between Celsius and Fahrenheit temperature units by clicking on the thermometer icon next to the temperature display. The app dynamically converts and displays the temperature in the selected unit.

#### 3. Additional Weather Information:
The "More Info" button allows users to access more detailed weather information. Clicking the button reveals a section displaying additional weather data, including the minimum temperature, maximum temperature, feels-like temperature, pressure, and humidity.

#### 4. Stylish Design:
The Weather App is designed with a modern and attractive layout. It features a dark background color and uses the Bootstrap Icons library to display intuitive weather-related icons for temperature and weather conditions.

### Usage Instructions:
1. **Getting the Weather:** Upon opening the app, the browser will prompt you to share your location. Click "Allow" to get the weather information for your current location.
2. **Temperature Conversion:** To switch between Celsius and Fahrenheit, click on the thermometer icon next to the temperature display. The temperature will be dynamically converted and displayed in the selected unit.
3. **More Weather Information:** Click the "More Info" button to reveal additional weather details such as minimum temperature, maximum temperature, feels-like temperature, pressure, and humidity. Click the button again to hide the additional information.

### Technical Implementation:
- The Weather App is built using HTML, CSS, and JavaScript.
- It utilizes the Fetch API to retrieve real-time weather data from the "https://weather-proxy.freecodecamp.rocks/api/current" API.
- The Geolocation API is used to determine the user's current location.
- The app employs Bootstrap Icons for displaying weather-related icons.
- The app is responsive and optimized for different screen sizes.

### Credits:
- The weather data is provided by the "https://weather-proxy.freecodecamp.rocks/api/current" API.
- The Bootstrap Icons library (https://icons.getbootstrap.com) is used for the temperature and weather condition icons.

### Note:
- This application requires an active internet connection and geolocation permission to fetch weather data based on the user's location.

Overall, the Weather App is a user-friendly and visually appealing application that provides users with essential weather information in a concise and efficient manner.