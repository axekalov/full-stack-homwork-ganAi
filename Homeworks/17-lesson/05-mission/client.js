/**
 

 * 1. הוספת headers כדי שהשרת יזהה שמדובר ב-JSON.
 * 2. עטיפת ה-body ב-JSON.stringify כדי להפוך את האובייקט למחרוזת תקינה.
 */

document.getElementById('order-btn').addEventListener('click', async (e) => {
  e.preventDefault()
  const selectedIds = [3, 7, 12]

  const res = await fetch('http://localhost:3000/order', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json' // התיקון הראשון
    },
    body: JSON.stringify({ ids: selectedIds }) // התיקון השני
  })

  const data = await res.json()
  document.getElementById('confirmation').textContent = JSON.stringify(data)
})