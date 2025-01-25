// Function to calculate wind chill
function calculateWindChill(temp, windSpeed) {
    if (temp <= 10 && windSpeed >= 4.8) {
        return Math.round(13.12 + 0.6215 * temp - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temp * Math.pow(windSpeed, 0.16)) + "°C";
    }
    return temp + "°C"; // If conditions for wind chill are not met
}

// Get current year and last modified date dynamically
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("last-modified").textContent = document.lastModified;

// Calculate wind chill and update the wind chill result
const temperature = 5;  // Example temperature in °C
const windSpeed = 15;   // Example wind speed in km/h
const windchillResult = calculateWindChill(temperature, windSpeed);
document.getElementById("windchill-result").textContent = windchillResult;
