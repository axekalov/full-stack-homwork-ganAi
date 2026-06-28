document.getElementById('btn').addEventListener('click', async (e) => {
  try {
    const res = await fetch('http://localhost:3000/houses');
    const houses = await res.json();

    const requests = houses.map(house => 
      fetch('http://localhost:3000/bulk-politicians', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(house.politicians)
      })
    );

    // שימוש ב-allSettled הראשון
    const settledResponses = await Promise.allSettled(requests);
    
    // סינון התשובות המוצלחות בלבד והדפסת אזהרות
    const validResponses = [];
    settledResponses.forEach(result => {
      if (result.status === 'fulfilled') {
        validResponses.push(result.value);
      } else {
        console.warn('Request failed:', result.reason);
      }
    });

    const jsonRequests = validResponses.map(r => r.json());
    
    // שימוש ב-allSettled השני לפרסור ה-JSON
    const settledData = await Promise.allSettled(jsonRequests);
    
    // סינון הנתונים הסופיים
    const finalData = [];
    settledData.forEach(result => {
      if (result.status === 'fulfilled') {
        finalData.push(result.value);
      } else {
        console.warn('JSON parsing failed:', result.reason);
      }
    });

    console.log('Final politicians data:', finalData);

  } catch (err) {
    console.error('A critical error occurred:', err);
  }
});