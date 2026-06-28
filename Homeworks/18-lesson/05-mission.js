document.getElementById('load-btn').addEventListener('click', (e) => {
  fetch('http://localhost:3000/products', {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  })
    .then(res => {
      return res.json()  // Bug 1 Fixed: הוספנו את המילה return כדי להעביר את הנתונים ל-then הבא
    })
    .then(products => {
      const requests = products.map(product =>
        fetch(`http://localhost:3000/products/${product.id}`)
      )
      return Promise.all(requests)
    })
    .then(responses => {
      return Promise.all(responses.map(r => r.json()))
    })
    .then(details => {
      console.log('All product details:', details)
    })
    .catch(err => {
      // Bug 2 Fixed: אם ל-err אין message, נדפיס את err עצמו או הודעת גיבוי
      console.error(err.message || err)  
    })
})