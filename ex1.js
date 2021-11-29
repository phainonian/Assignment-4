/*
(a1*b1 + a2*b3) (a1*b2 + a2*b4) (5 + 14) (6 + 16)   (19) (22)
(a3*b1 + a4*b3) (a3*b2 + a4*b4) (15 + 28) (18 + 32) (43) (50)
*/

function product(mat1, mat2) {
    let result = [];
    for (let i = 0; i < mat1.length; i++) {
        result.push([])
        for (let j = 0; j < mat2[0].length; j++) {
            let val = 0

            for (let k = 0; k < mat1[i].length; k++) {
                val += mat1[i][k] * mat2[k][j];
            }

            result[i].push(val)
        }
    }

    return result
}


module.exports = {
    product
}