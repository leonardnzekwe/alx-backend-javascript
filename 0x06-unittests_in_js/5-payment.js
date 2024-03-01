const Utils = require('./utils');

/**
 * Sends a payment request to the API.
 * 
 * @param {number} totalAmount - The total amount of the payment.
 * @param {number} totalShipping - The total shipping cost.
 * @returns {undefined}
 */
function sendPaymentRequestToApi(totalAmount, totalShipping) {
    const val = Utils.calculateNumber('SUM', totalAmount, totalShipping)
    console.log(`The total is: ${val}`)
}

module.exports = sendPaymentRequestToApi;
