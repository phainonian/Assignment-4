let mat1 = [
    [1, 2],
    [3, 4]
];

let mat2 = [
    [0, 6],
    [7, 0]
];

/*
mat1: a1 a2 
      a3 a4
mat2: b1 b2 
      b3 b4
Result: (a1+b1) (a2+b2)
        (a3+b3) (a4+b4)
*/


function sumOfMatrices(mat1, mat2) {
    let matrix = [
        [],
        []
    ]


for (let row = 0; row < mat1.length; row++) {
    for (let col = 0; col < mat1[row].length; col++) {
        matrix[row][col] = mat1[row][col] + mat2[row][col];
        }
    }

return matrix 
}

console.log(sumOfMatrices(mat1, mat2))

module.exports = {
    sumOfMatrices
}