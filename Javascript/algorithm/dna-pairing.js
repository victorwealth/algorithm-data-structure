/*
  The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.

  Base pairs are a pair of AT and CG. Match the missing element to the provided character.

  Return the provided character as the first element in each array.

  For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]

  The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.
  
  TEST CASES
  1. pairElement("ATCGA") should return [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]].
  2. pairElement("TTGAG") should return [["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]].
  3. pairElement("CTCTA") should return [["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]].
*/

// SOLUTION

function pairElement(str) {
  let arr = [];
  const DNA_pairs = {
    A: ['A', 'T'],
    T: ['T', 'A'],
    C: ['C', 'G'],
    G: ['G', 'C'],
  }
  let strArray = Array.from(str).map((character) => {
    return arr.push(DNA_pairs[character]);
  })
  return arr;
}

console.log(pairElement("GCG"));
