require("dotenv").config();
const twit = require("./twitKeys");

const postPostedTweet = (tweet_id) => {
  return new Promise((resolve, reject) => {
    let parameters = {
      tweet_id,
    };
    twit.post("statuses/retweet/:tweet_id", parameters, (err, data) => {
      if (err) {
        return reject(err);
      }
      return resolve(data);
    });
  });
};

module.exports = postPostedTweet;
