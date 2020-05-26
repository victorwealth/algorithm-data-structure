/** 
* Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions. 
* For numbers divisible by 3, print"Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.
* When you have that working, modify your program to print "FizzBuzz" for numbers that are divisible by both 3 and 5 
* (and still print"Fizz" or "Buzz" for numbers divisible by only one of those).
*/

// SOLUTION - 1
// 1. Start with a loop that logs from 1 - 15, since 15 is divisible by both 3 and 5
// 2. Add if statement to log numbers divisible by both 5 and 3. It should log ONLY 15. Then change 15 to "FizzBuzz"
// 3. With the condition in 2, we can combine it to check for numbers divisible by 5.
      i.e if "i" cannot be divided by 3 and 5 AND "i" is divisible by 5 = print "Buzz"
// 4. Repeat 3 for the number 3.
// 5. Add else to print numbers not divisible by both 3 and 5.
// 6. Finally, increase the loop count from 15 to 100

for(let i = 1; i <= 100; i++){
  
  if (i % 5 === 0 && i % 3 === 0) console.log('FizzBuzz - ' + i);
  else if (!(i % 5 === 0 && i % 3 === 0) && i % 5 === 0) console.log('Buzz - ' + i);
  else if (!(i % 5 === 0 && i % 3 === 0) && i % 3 === 0) console.log('Fizz - ' + i);
  else console.log(i);
}
