/**
 * Performs a mathematical operation on two numbers.
 * @param {string} type - The type of operation to perform.
 * Valid values are 'SUM', 'SUBTRACT', and 'DIVIDE'.
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @returns {number|string} - The result of the operation.
 * If the operation is 'SUM', 'SUBTRACT', or 'DIVIDE', a number is returned.
 * If the operation is 'DIVIDE' and the second number is 0, the string "Error" is returned.
 */
function calculateNumber(type, a, b) {
    if (type === 'SUM') 
        return Math.round(a) + Math.round(b)
    else if (type === 'SUBTRACT')
        return Math.round(a) - Math.round(b)
    else if (Math.round(b) === 0)
        return "Error"
    return Math.round(a) / Math.round(b)
}
module.exports = calculateNumber;
