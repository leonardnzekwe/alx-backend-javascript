const sinon = require('sinon');
const Utils = require('./utils');
const { expect } = require('chai');
/**
 * Sends a payment request to the API.
 * @param {Object} paymentData - The payment data.
 * @param {string} paymentData.amount - The amount to be paid.
 * @param {string} paymentData.currency - The currency of the payment.
 * @param {string} paymentData.method - The payment method.
 * @returns {Promise<string>} A promise that resolves with the payment status.
 */
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi', () => {
    it('should spy on the add function', () => {
        const stubtub = sinon.stub(Utils, 'calculateNumber')
        stubtub.returns(10)
        const JB = sinon.spy(console, 'log')

        sendPaymentRequestToApi(100, 20)
        sinon.assert.calledWith(stubtub, 'SUM', 100, 20)
        sinon.assert.calledWith(JB, 'The total is: 10');
        stubtub.restore()
        JB.restore()
    })
})
