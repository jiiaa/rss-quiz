let Parser = require('rss-parser');
let parser = new Parser();

const CORS_PROXY = "https://cors-anywhere.herokuapp.com/"
const feedUrl = "https://feeds.yle.fi/uutiset/v1/mostRead/YLE_UUTISET.rss";
var rssFeed = [];

export default async function getRSSFeed(callback) {
    let feed = await parser.parseURL(CORS_PROXY + feedUrl);
    feed.items.forEach(item => {
        rssFeed.push(item.title)
    })
    console.log("rssFeed: ", rssFeed);
    callback (rssFeed);
};
