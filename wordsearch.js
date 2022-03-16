const transpose = function(matrix) {
    let newMatrix = [];
    const columns = matrix[0].length;
    const rows = matrix.length;
  
      for (let i = 0; i < columns; i++){
        let newArray = [];
        for (let j = 0; j < rows; j++){
          newArray.push(matrix[j][i]);
        }
        newMatrix.push(newArray);
    }
    return newMatrix;
  };

const wordSearch = (letters, word) => { 
    const verticalJoin = transpose(letters).map(ls => ls.join(''));
    const horizontalJoin = letters.map(ls => ls.join(''))
    for (l of horizontalJoin) {
        if (l.includes(word)) return true
    }

    for (l of verticalJoin) {
        if (l.includes(word)) return true
    }
    return false
}

module.exports = wordSearch