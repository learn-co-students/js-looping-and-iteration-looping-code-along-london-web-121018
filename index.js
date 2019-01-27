// Code your solutions in this file


function printBadges(bs) {
    for (let i = 0; i < bs.length; i++) {
        console.log(`Welcome ${bs[i]}! You are employee #${i + 1}.`);
    }
    return bs;
}


function tailsNeverFails() {
  let countdown = 10;
  let k = 0; 
  let play = 1;
 
while (countdown > 0 && play >= 0.5) {
  play = Math.random();

  if (play >= 0.5) {
    k++;
  }
  --countdown;
 }
      
return `You got ${k} tails in a row!`
}


