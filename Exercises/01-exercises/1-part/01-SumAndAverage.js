function sumAndAvg(){
    let sum = 0
    for(let i = 0 ; i < 3; i++){
        let number = Math.floor(Math.random() * 100);
        console.log("number:", number);
        
        sum += number
    }
    console.log(`sum: ${sum}`);
    console.log(`adv: ${sum / 3}`);
    
    
}
sumAndAvg()