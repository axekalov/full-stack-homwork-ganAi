/**
 * תרגיל 2 — תיקון הבאג (Fix the Bug)
 *
 * 1. השרת קורס כאשר מתקבלת בקשת POST מכיוון שחסר לו Middleware שיודע לפענח את גוף הבקשה (JSON body).
 * בלעדיו, המשתנה `req.body` הוא `undefined`. כאשר מנסים לחלץ ממנו את המאפיין `name` (Destructuring), 
 * מתרחשת שגיאה והתוכנה קורסת.
 *
 * 2. התיקון:
 * הוספת השורה `app.use(express.json())` לפני הגדרת הראוטים, כדי ש-Express יידע לפרסס בקשות עם תוכן מסוג JSON.
 */



import express from 'express'
const app = express()

// התיקון: הוספת Middleware לפענוח JSON
app.use(express.json())

app.post('/search', (req, res) => {
  const { name } = req.body
  res.json({ found: name })
})

app.listen(3000)