let mat = [
    [1, 2, 3, 4],
    [4, 5, 6, 8],
    [7, 8, 9, 0]
];



function sumOfRow(array) {
    let sum = 0;
    for (let col = 0; col < array.length; col++) {
        sum = sum + array[col];
    }
    return sum
}

function sumOfArray(matrix){
    let result = []
    for (let i = 0; i < matrix.length; i++) {
        let sum = sumOfRow(matrix[i])
        result.push(sum)
    }

    return result
}

console.log(sumOfArray(mat))

module.exports = {
    sumOfArray
}