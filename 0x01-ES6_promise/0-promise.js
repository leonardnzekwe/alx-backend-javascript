function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    try {
      // Simulating an API call
      resolve({ data: 'Sample API response data' });
    } catch (error) {
    // Simulating an API call failure
      reject(Error('API Request Failed'));
    }
  });
}

export default getResponseFromAPI;
