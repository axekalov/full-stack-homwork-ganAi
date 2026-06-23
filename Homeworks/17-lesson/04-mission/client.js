/**
 */

document.getElementById('weather-btn').addEventListener('click', async (e) => {
  e.preventDefault(); 

  try {
    const cityValue = document.getElementById('city-input').value; 

    const response = await fetch('http://localhost:3000/weather', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ city: cityValue })
    });

    
    const data = await response.json();
    document.getElementById('weather-result').textContent = JSON.stringify(data);

  } catch (error) {
    console.error('Error fetching weather:', error);
  }
});