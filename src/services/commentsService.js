const axios = require("axios");
const baseUrl = "https://jsonplaceholder.typicode.com";

const getComments = async (limit) => {
  try {
    const response = await axios.get(`${baseUrl}/comments`, {
      params: { _limit: limit },
    });
    return response.data;
  } catch (error) {
    throw new Error("Error retrieving comments");
  }
};

module.exports = {
  getComments,
};
