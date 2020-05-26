/** 
* Write a program that creates a string that represents an 8×8 grid, using newlinecharacters to separate lines. 
* At each position of the grid there is either a space or a "#" character. The characters should form a chessboard.
* Passing this string to console.log should show something like this:
*  # # # #
* # # # #
*  # # # #
* # # # #
*  # # # #
* # # # #
*  # # # #
* # # # #
*/

// SOLUTION
/**Cheeseboard - dynamic size*/

function generateChessBoard(size){
  let oddRow = '# # # #'; //odd row
  let evenRow = ' # # # #'; //even row

  for (let i = 1; i <= size; i++){
    if (i > 1 && i % 2 === 0) console.log(oddRow);
    else console.log(evenRow);
  }
}

generateChessBoard(6);
