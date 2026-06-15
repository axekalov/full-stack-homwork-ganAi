let person1 = {
name: "david" ,
age :33,
id:204457145

}
const person2 = person1
person2.age = 100
console.log(person1.age)
console.log(person2.age)
let score1 = 60
let score2 = score1
 score2 = 80
 console.log(score1)
 console.log(score2)

//  person1 and person2 =100 
 // בגלל ששניתי את האוביקט ל100 שיניתי את האובייקט המקורי
// לעומת זה במספרים זה לפי ערך ולכן הראשון נשאר 60
// לעומת זה במספרים זה לפי ערך ולכן הראשון נשאר 60
console.log("mission2")

let a = 10
let b = "20"
let c = "15"
console.log(a+b)
console.log(b*c)
// כפל לא קיים על טקסק ולכן אוטומטית זה מומר לפעולה מתמטית
console.log("mission3")

let word = "Hello"
if(true){
    let word = "wow"
    var lorem = "I am inside"
    console.log(word)
}
console.log(word)
console.log(lorem)
//let מודפס לפי הבלוק בנפרד 
//varמקבל פקודה גם מחוץ לבלוק 
//אם לא היה var  הייתה שגיאה כי לא היה יודע מה להדפיס

console.log("mission4")
const itemsLits = [0,"Hi","",null,40,undefined,NaN,"false",[],{} ]
for(let i = 0;i<itemsLits.length;i++){
    let currentItem = itemsLits[i]
    if(currentItem){
        console.log(currentItem,"is Truthy")
    }else{
        console.log(currentItem,"is Falsy")

    }
}
//כל דבר שאין לו ערך הוא Falsy
//שיש ערך גם אם רשום false=אמת 
//באובייקט גם ללא ערך הקופסה נוצרה ולכן זה אמת