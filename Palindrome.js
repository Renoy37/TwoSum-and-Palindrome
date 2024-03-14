x = 121;

function palindrome(x) {
  //Converting the number to a string
  let xToSting = x.toString();
  //Reversing the string
  let xToReverse = xToSting.split("").reverse().join("");
  //Checking if the reversed string is equal to the original string
  if (xToSting === xToReverse) {
    //If they are equal,returning true for the palindrome
    return true;
  }
  //else returning false for the palindrome
  return false;
}

console.log(palindrome(x));
