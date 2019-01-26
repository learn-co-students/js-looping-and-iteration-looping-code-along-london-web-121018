// Code your solutions in this file

function printBadges(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(`Welcome ${arr[i]}! You are employee #${i + 1}.`)
    }
    return arr 
}

function coin() {
    return Math.random() >= 0.5;
}

const tailsNeverFails = () => {
    let count = 0; 
    while(coin()) {
        count++
    }
    return `You got ${count} tails in a row!`
}