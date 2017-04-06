/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other



window.findNRooksSolution = function(n) {

  var board = new Board ({n: n});
    for (var row = 0; row < n; row++) {  // <- start from row at index 1 since row 1 has already been populated
      for (var column = 0; column < n; column ++) {
        //console.log(board)
        var potArray = board.get(row);
        potArray[column] = 1;
        if ( board.set(row, potArray).hasAnyColConflicts() === false) {
          board.set(row, potArray);
          row++;
        } 
      }
    }
      //if it does index increase index by 1
    // then check row/ coumn conflicts
      //if false add one to that position 

  // we want nested for loops
  // every row, check to see if any conflicts will occur,
    // if no conflict, add 1 to that row/index
  // if conflict, do nothing, 

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(board.rows()));
  return board.rows();
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
