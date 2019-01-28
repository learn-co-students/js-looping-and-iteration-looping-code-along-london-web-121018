// Code your solutions in this file
function printBadges(employeeNames) {
  for (let i = 0; i < employeeNames.length; i++) {
    console.log(`Welcome ${employeeNames[i]}! You are employee #${i + 1}.`)

  }
    return employeeNames;
}

function maybeTrue() {
    return Math.random() >= 0.5;
}

function tailsNeverFails() {
  let streak = 0
  while (maybeTrue()) {
    streak += 1;
  }
  return `You got ${streak} tails in a row!`
};
