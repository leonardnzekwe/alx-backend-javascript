/**
 * Retrieves a payment token from the API.
 * @param {boolean} success - Indicates whether the API call was successful.
 * @returns {Promise} A promise that resolves to an object containing the API response data.
 */
function getPaymentTokenFromAPI(success){
    if (success)
        return Promise.resolve({data: 'Successful response from the API' })
}
module.exports = getPaymentTokenFromAPI;
