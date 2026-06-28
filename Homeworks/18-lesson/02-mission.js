document.getElementById('btn').addEventListener('click', (e) => {
  // 1. Fetch all houses
  fetch('http://localhost:3000/houses')
    .then(res => res.json())
    .then(houses => {
      // 2. Build an array of POST fetch requests
      const requests = houses.map(house => 
        fetch('http://localhost:3000/bulk-politicians', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(house.politicians)
        })
      );
      
      // 3. Resolve them all with Promise.all()
      return Promise.all(requests);
    })
    .then(responses => {
      // 4. Resolve all .json() calls with a second Promise.all()
      return Promise.all(responses.map(res => res.json()));
    })
    .then(allPoliticiansData => {
      // 5. Log the final politicians data
      console.log('Final politicians data:', allPoliticiansData);
    })
    .catch(err => {
      // Handle errors
      console.error('An error occurred during fetch:', err);
    });
});