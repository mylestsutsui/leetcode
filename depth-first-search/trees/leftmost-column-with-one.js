// A row-sorted binary matrix means that all elements are 0 or 1 and each row of the matrix is sorted in non-decreasing 
// order.

// Given a row-sorted binary matrix binaryMatrix, return the index (0-indexed) of the leftmost column with a 1 in it. 
// If such an index does not exist, return -1.

// You can't access the Binary Matrix directly. You may only access the matrix using a BinaryMatrix interface:

// BinaryMatrix.get(row, col) returns the element of the matrix at index (row, col) (0-indexed).
// BinaryMatrix.dimensions() returns the dimensions of the matrix as a list of 2 elements [rows, cols], which means the 
// matrix is rows x cols.
// Submissions making more than 1000 calls to BinaryMatrix.get will be judged Wrong Answer. Also, any solutions that 
// attempt to circumvent the judge will result in disqualification.

// For custom testing purposes, the input will be the entire binary matrix mat. You will not have access to the binary 
// matrix directly.

// Example 1:

// Input: mat = [[0,0],[1,1]]
// Output: 0

// Example 2:

// Input: mat = [[0,0],[0,1]]
// Output: 1

// Example 3:

// Input: mat = [[0,0],[0,0]]
// Output: -1

/**
 * // This is the BinaryMatrix's API interface.
 * // You should not implement it, or speculate about its implementation
 * function BinaryMatrix() {
 *     @param {integer} row, col
 *     @return {integer}
 *     this.get = function(row, col) {
 *         ...
 *     };
 *
 *     @return {[integer, integer]}
 *     this.dimensions = function() {
 *         ...
 *     };
 * };
 */

/**
 * @param {BinaryMatrix} binaryMatrix
 * @return {number}
 */
 var leftMostColumnWithOne = function(binaryMatrix) {
    let [row, column] = binaryMatrix.dimensions();
    let indexed = -1;
    let left = 0, right = row;
    
    while (left < right) { 
    let mid = Math.floor(left + (right-left)/2);
    for (let i = 0; i < row; i++) { 
      let curCell = binaryMatrix.get(i, mid);
      if (curCell === 1) {
        if (indexed === -1) {
          indexed = mid;
        } else {
          indexed = Math.min(indexed, mid);
        }
        right = mid;
        break;
      }
      if (i === row-1) {
        left = mid+1;
      }
    }
  }
  return indexed;
};