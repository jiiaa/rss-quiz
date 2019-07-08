let Parser = require('rss-parser');
let parser = new Parser();

const yleUrl = "https://feeds.yle.fi/uutiset/v1/";
const ilUrl = "https://www.iltalehti.fi/rss/";
var rssFeed = [];

async function rssFetchYle(url, callback) {
    let feed = await parser.parseURL(yleUrl+url);
    feed.items.forEach(item => {
        rssFeed.push({title: item.title, link: item.link});
    })
    callback (rssFeed);
};

async function rssFetchIl(url, callback) {
    console.log("url: ", url);
    let feed = await parser.parseURL(ilUrl+url);
    feed.items.forEach(item => {
        rssFeed.push({title: item.title, link: item.link});
    })
    callback (rssFeed);
}

module.exports = { rssFetchYle, rssFetchIl };