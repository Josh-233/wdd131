document.addEventListener("DOMContentLoaded", () => {
  // Footer year + last modified
  const yearSpan = document.getElementById("currentyear");
  const lastModified = document.getElementById("lastModified");

  const today = new Date();
  yearSpan.textContent = today.getFullYear();
  lastModified.textContent = `Last Modified: ${document.lastModified}`;

  // Static weather values
  const temperature = 45; // °F
  const windSpeed = 5;    // mph
  const windChillOutput = document.getElementById("windchill");

  function calculateWindChill(tempF, speedMph) {
    return (
      35.74 +
      0.6215 * tempF -
      35.75 * Math.pow(speedMph, 0.16) +
      0.4275 * tempF * Math.pow(speedMph, 0.16)
    ).toFixed(1);
  }

  // Check conditions before calling
  if (temperature <= 50 && windSpeed > 3) {
    windChillOutput.textContent = calculateWindChill(temperature, windSpeed) + " °F";
  } else {
    windChillOutput.textContent = "N/A";
  }
});
