document.addEventListener('DOMContentLoaded', () => {
    const inputTemp = document.getElementById('input-temp');
    const inputScale = document.getElementById('input-scale');
    const convertBtn = document.getElementById('convert-btn');
    const celsiusOutput = document.getElementById('celsius-output');
    const fahrenheitOutput = document.getElementById('fahrenheit-output');
    const kelvinOutput = document.getElementById('kelvin-output');
  
    function convertTemperature() {
      const temp = parseFloat(inputTemp.value);
      const scale = inputScale.value;
  
      if (isNaN(temp)) {
        alert('Please enter a valid temperature.');
        return;
      }
  
      let celsius, fahrenheit, kelvin;
  
      switch (scale) {
        case 'celsius':
          celsius = temp;
          fahrenheit = (temp * 9/5) + 32;
          kelvin = temp + 273.15;
          break;
        case 'fahrenheit':
          celsius = (temp - 32) * 5/9;
          fahrenheit = temp;
          kelvin = (temp + 459.67) * 5/9;
          break;
        case 'kelvin':
          celsius = temp - 273.15;
          fahrenheit = (temp * 9/5) - 459.67;
          kelvin = temp;
          break;
        default:
          console.error('Invalid scale selected');
          return;
      }
  
      celsiusOutput.textContent = `${celsius.toFixed(2)} °C`;
      fahrenheitOutput.textContent = `${fahrenheit.toFixed(2)} °F`;
      kelvinOutput.textContent = `${kelvin.toFixed(2)} K`;
    }
  
    convertBtn.addEventListener('click', convertTemperature);
  });
  