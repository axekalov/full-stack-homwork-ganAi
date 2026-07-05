const requireCode = (req, res, next) => {  
    try {  
        if (['A1', 'B2'].includes(req.body.code)) {  
            res.locals.access = 'granted'
            next() // תיקון באג 1: הוספת next()
        } else {  
            res.locals.access = 'denied'  
            res.status(401).send('Access denied')  
        }  
    } catch (error) {  
        res.status(500)  
    }  
}

app.post('/vault', [requireCode], (req, res) => {  
    try {  
        res.send(res.locals)  
        // תיקון באג 2: מחיקת ה- res.send השני, אפשר לשלוח תשובה רק פעם אחת!
    } catch (error) {  
        res.status(500)  
    }  
})
//Bug 1 explanation (Missing next())
// : הלקוח יחווה המתנה אינסופית (הבקשה תיתקע) כי השרת מזהה קוד תקין, אך לעולם לא מעביר את הטיפול לפונקציה הבאה ולא שולח לו שום תשובה. 
//  Bug 2 explanation (Double res.send): השרת יזרוק שגיאה (יקרוס או ידפיס הודעת שגיאה בקונסול) מכיוון שברגע שתשובה אחת נשלחת ללקוח,
//  אי אפשר לשלוח לו תשובה נוספת על אותה הבקשה