arrayNumbers = [2, 7, 11, 15];
targetNumber = 9;

function findPairInArray(arrayNumbers, targetNumber) {
  // looping through the array
  for (let i = 0; i < arrayNumbers.length; i++) {
    // storing the first number in a variable
    let firstNumber = arrayNumbers[i];
    // looping through the array again
    for (let j = i + 1; j < arrayNumbers.length; j++) {
      // storing the second number number in a variable
      let secondNumber = arrayNumbers[j];

      // checking if the sum of the two numbers is equal to the target number
      if (firstNumber + secondNumber === targetNumber) {
        // if the sum of the two numbers is equal returning an array containing the indices of the two numbers
        return [i, j];
      }
    }
  }
}

console.log(findPairInArray(arrayNumbers, targetNumber));
