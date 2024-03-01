/**
 * Retrieves the payment token from the API.
 * @param {string} endpoint - The API endpoint to retrieve the payment token from.
 * @returns {Promise<string>} - A promise that resolves to the payment token.
 */
const getPaymentTokenFromAPI = require('./6-payment_token');
const assert = require('assert');

describe('getPaymentTokenFromAPI', () => {
    it('testing getPaymentTokenFromAPI', (done) => {
        getPaymentTokenFromAPI(true)
        .then((res) => {
            assert.deepStrictEqual(res, {data: 'Successful response from the API' })
            done()            
        })
    })
})
