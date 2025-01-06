// apiKeys.js
const apiKey = process.env.REACT_APP_API_KEY;

module.exports = {
  key: apiKey,
  base: "https://api.openweathermap.org/data/2.5/",
};
