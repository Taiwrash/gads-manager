const twit = require("twit");

const T = new twit({
  consumer_key: process.env.TWITTER_PUBLIC_API_KEY,
  consumer_secret: process.env.TWITTER_SECRET_API_KEY,
  access_token: process.env.TWITTER_ACCESS_TOKEN_KEY,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET_KEY,
});

module.exports = T;
