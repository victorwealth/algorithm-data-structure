/*
Return true if the given string is a palindrome. Otherwise, return false.
A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

Note
You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything into the same case (lower or upper case) in order to check for palindromes.

We'll pass strings with varying formats, such as "racecar", "RaceCar", and "race CAR" among others.

We'll also pass strings with special symbols, such as "2A3*3a2", "2A3 3a2", and "2_A3*3#A2".


TEST CASES 
1. palindrome("eye") should return true.
2. palindrome("_eye") should return true.
3. palindrome("race car") should return true.
4. palindrome("not a palindrome") should return false.
5. palindrome("A man, a plan, a canal. Panama") should return true.
6. palindrome("never odd or even") should return true.
7. palindrome("nope") should return false.
8. palindrome("almostomla") should return false.
9. palindrome("My age is 0, 0 si ega ym.") should return true.
10. palindrome("1 eye for of 1 eye.") should return false.
11. palindrome("0_0 (: /-\ :) 0-0") should return true.
12. palindrome("five|\_/|four") should return false.

*/

// SOLUTION

function palindrome(str) {
  let regex = /\w/g; // removes special characters
  let formatted =  str.match(regex)       // removes special characters
                      .join('')           // converts to string with no spaces
                      .toLowerCase()      // convert to lower case
                      .replace(/_/g, ''); // removes underscore

  let reversed = formatted.split('').reverse(); 

  return formatted === reversed.join(''); // both string should be exactly the same if it is a PALINDROME
}



console.log(palindrome("_eye"));
