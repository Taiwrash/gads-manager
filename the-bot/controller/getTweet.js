require("dotenv").config();
const twit = require("./twitKeys");

const getPostedTweet = (since_id) => {
  return new Promise((resolve, reject) => {
    let parameters = {
      q: "#GADS2021",
      count: 10,
    };

    // check if since_id exist
    if (since_id) {
      parameters.since_id = since_id;
    }
    twit.get("search/tweets", parameters, (err, data) => {
      if (err) {
        return reject(err);
      }
      return resolve(data);
    });
  });
};

module.exports = getPostedTweet;
