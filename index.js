// Code your solutions in this file
let printBadges = (employee) => {
    for (let i = 0; i < employee.length; i++) {
        console.log(`Welcome ${employee[i]}! You are employee #${i+1}.`);
    }
 
    return employee;
}

let tailsNeverFails = () => {
    let isHeads = false;
    let counter = 0;
    while (isHeads === false) {
        if (Math.random() >= 0.5 ) {
            counter++
        } else {
            isHeads = true;
        }
    }
    return `You got ${counter} tails in a row!`
}