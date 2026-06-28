
function fetchJSON(url, options, callback) {
  fetch(url, options)
    .then(res => res.json())
    .then(data => callback(null, data))
    .catch(err => callback(err, null));
}

document.getElementById('btn').addEventListener('click', (e) => {
  // 1. 
  fetchJSON('http://localhost:3000/houses', { method: 'GET' }, (err, houses) => {
    if (err) {
      console.error('Error fetching houses:', err);
      return;
    }

    // 2. 
    houses.forEach(house => {
      
      const postOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(house.politicians)
      };

      // 3. 
      fetchJSON('http://localhost:3000/bulk-politicians', postOptions, (err, politiciansData) => {
        if (err) {
          console.error('Error posting politicians:', err);
          return;
        }
        
        
        console.log('Politicians data:', politiciansData);
      });
    });
  });
});