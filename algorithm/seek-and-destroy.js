/*You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. 
Remove all elements from the initial array that are of the same value as these arguments.

Note
You have to use the arguments object.

TEST CASES
1. destroyer([1, 2, 3, 1, 2, 3], 2, 3) should return [1, 1].

2. destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3) should return [1, 5, 1].

3. destroyer([3, 5, 1, 2, 2], 2, 3, 5) should return [1].

4. destroyer([2, 3, 2, 3], 2, 3) should return [].

5. destroyer(["tree", "hamburger", 53], "tree", 53) should return ["hamburger"].

6. destroyer(["possum", "trollo", 12, "safari", "hotdog", 92, 65, "grandma", "bugati", "trojan", "yacht"], "yacht", "possum", "trollo", "safari", "hotdog", "grandma", "bugati", "trojan") should return [12,92,65].
*/

// SOLUTION
function destroyer(arr) {
  let args = Array.from(arguments).slice(1);
  
  return arr.filter((val) => {
    return !args.includes(val); // returns val not in args
  })
}
destroyer([1, 2, 3, 1, 2, 3], 2, 3);
