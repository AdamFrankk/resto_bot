const axios = require("axios");
const { URL } = process.env;

module.exports = async () => {
  const result = await axios.get(URL);
  if (!result || result.status !== 200 || !result.data)
    throw new Error("Ошибка при запросе");
  return result.data;
};
