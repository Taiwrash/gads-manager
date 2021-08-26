require("dotenv").config();
const fs = require("fs");
const path = require("path");
const getPostedTweet = require("./controller/getTweet");
const postPostedTweet = require("./controller/postTweet");
const twit = require("./controller/twitKeys");
const paramsFile = path.join(__dirname, "params.json");

// Write Tweet Id to params file
const writeParam = (data) => {
  return fs.writeFileSync(paramsFile, JSON.stringify(data));
};
// Read from the file

const readParams = () => {
  const data = fs.readFileSync(paramsFile);
  return JSON.parse(data.toString());
};
const main = async () => {
  try {
    const params = readParams();
    const data = await getPostedTweet(params.since_id);
    const tweetList = await data.statuses;
    console.log("This is the list:" + tweetList);
    for await (let tweet of tweetList) {
      try {
        await postPostedTweet(tweet.id_str);
      } catch (error) {
        console.log("Unsucessful Retweet");
      }
      params.since_id = tweet.id_str;
    }
    writeParam(params);
  } catch (error) {
    console.log("No tweet to process" + error);
  }
};

setInterval(main, 10000);
