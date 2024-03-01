const sinon = require('sinon');
const Utils = require('./utils');
const { expect } = require('chai');
/**
 * Sends a payment request to the API.
 * @param {Object} paymentData - The payment data.
 * @param {string} paymentData.amount - The amount to be paid.
 * @param {string} paymentData.to - The recipient of the payment.
 * @returns {Promise<string>} A promise that resolves with the payment status.
 */
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi', () => {
    let JB
    beforeEach(() => {
        JB = sinon.spy(console, 'log');
      });
    
      afterEach(() => {
        JB.restore();
      });

      it('should log 120', () => {
        sendPaymentRequestToApi(100, 20)
        sinon.assert.calledWith(JB, 'The total is: 120');
        sinon.assert.calledOnce(JB)
      })
      
      it('should log 20', () => {
        sendPaymentRequestToApi(10, 10)
        sinon.assert.calledWith(JB, 'The total is: 20');
        sinon.assert.calledOnce(JB)
      })
})
