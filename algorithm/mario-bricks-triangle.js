/** 
  Write a loop that makes seven calls to console.logto output the following triangle:
  #
  ##
  ###
  ####
  #####
  ######
  #######
*/

// SOLUTION 1 - static size

let hash = '';

for (let i = 1; i <= 7; i++){
    for (let x = 1; x <= i; x++){
      hash += '#';
    }
    console.log(hash);
    hash = '';
}

// SOLUTION 2 - dynamic size
function drawTriangle(row){
  let hash = '';

  for (let i = 1; i <= row; i++){
      for (let x = 1; x <= i; x++){
        hash += '#';
      }
      console.log(hash);
      hash = '';
  }
}

drawTriangle(10);
