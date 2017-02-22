const diagonals = function (matrix) {
  let sum = 0;

  if (!matrix.length) return 0;

  for (let i = 0, j = 0, k = matrix[i].length - 1; i < matrix.length; i++) {
    sum += matrix[i][j++] + matrix[i][k--];
  }

  return sum;
}

module.exports = {
  diagonals: diagonals
};
