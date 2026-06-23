/**
 *
 * 1.הוא מדפיס מערך ריק: []
 *
 * 2.  מערך ה-`ids` מכיל מחרוזות (Strings) כמו "2" ו-"4", 
 * בעוד שהמאפיין `id` בתוך מערך ה-`users` מכיל מספרים (Numbers) כמו 1, 2, ו-4. 
 * הפונקציה `includes()` מבצעת השוואה קפדנית (===) מאחורי הקלעים. 
 * מכיוון שהמחרוזת "2" אינה שווה למספר 2 (מדובר בסוגי נתונים שונים), 
 * תנאי הסינון (filter) לעולם לא מחזיר `true`, ולכן התוצאה נשארת ריקה.
 */




const ids = ["2", "4"]
const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 4, name: "Carol" }
]

// התיקון בשורה אחת: 
// המרנו את u.id למחרוזת (String) בזמן הבדיקה, כדי שסוג הנתונים יתאים לזה שבמערך ids
const result = users.filter(u => ids.includes(u.id.toString()))

console.log(result) // [ { id: 2, name: 'Bob' }, { id: 4, name: 'Carol' } ]