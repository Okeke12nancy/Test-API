const axios = require("axios");
const baseUrl = "https://jsonplaceholder.typicode.com";

const getPosts = async (limit) => {
  try {
    const response = await axios.get(`${baseUrl}/posts`, {
      params: { _limit: limit },
    });
    return response.data;
  } catch (error) {
    throw new Error("Error retrieving posts");
  }
};

module.exports = {
  getPosts,
};
