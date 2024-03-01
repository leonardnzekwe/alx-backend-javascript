const sinon = require('sinon');
const assert = require('assert');
const Utils = require('./utils');
/**
 * Sends a payment request to the API.
 * @param {Object} paymentData - The payment data.
 * @returns {Promise} A promise that resolves when the payment request is sent.
 */
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', () => {
    it('should spy on the add function', () => {
        const JamesBond = sinon.spy(Utils, 'calculateNumber')

        sendPaymentRequestToApi(100, 20)
        sinon.assert.calledWith(JamesBond, 'SUM', 100, 20)
        sinon.assert.calledOnce(JamesBond)
        JamesBond.restore()
    })
})
