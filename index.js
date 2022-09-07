function isPalindrome(word) {
  // Write your algorithm here
  for(i = 0; i < word.length / 2; i++){
    const j = word.length - 1 - i
const startingLetter = word[i]
const lastLetter = word[j]
if(startingLetter !== lastLetter) return false
}
return true
}

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
