const axios = require("axios");
const URL = "https://leetcode.com/graphql";

const axiosUtil = async (query, variables) => {
  console.log(variables);
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const data = {
    query,
    variables,
  };
  // console.log(data);
  try {
    const response = await axios.post(URL, data, config);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

module.exports = axiosUtil;
