let Parser = require('rss-parser');
let parser = new Parser();

const CORS_PROXY = "https://cors-anywhere.herokuapp.com/"
const yleMostReadUrl = "https://feeds.yle.fi/uutiset/v1/mostRead/YLE_UUTISET.rss";
const yleMajorNewsUrl = "https://feeds.yle.fi/uutiset/v1/majorHeadlines/YLE_UUTISET.rss";
const yleFinancialUrl = "https://feeds.yle.fi/uutiset/v1/recent.rss?publisherIds=YLE_UUTISET&concepts=18-19274";
const yleInEngishUrl = "https://feeds.yle.fi/uutiset/v1/recent.rss?publisherIds=YLE_NEWS";

var rssFeed = [];

export async function yleMostRead(callback) {
    let feed = await parser.parseURL(CORS_PROXY + yleMostReadUrl);
    feed.items.forEach(item => {
        rssFeed.push(item.title)
    })
    callback (rssFeed);
};

export async function yleMajorNews(callback) {
    let feed = await parser.parseURL(CORS_PROXY + yleMajorNewsUrl);
    feed.items.forEach(item => {
        rssFeed.push(item.title)
    })
    callback (rssFeed);
};

export async function yleFinancial(callback) {
    let feed = await parser.parseURL(CORS_PROXY + yleFinancialUrl);
    feed.items.forEach(item => {
        rssFeed.push(item.title)
    })
    callback (rssFeed);
};

export async function yleNewsInEnglish(callback) {
    let feed = await parser.parseURL(CORS_PROXY + yleInEngishUrl);
    feed.items.forEach(item => {
        rssFeed.push(item.title)
    })
    callback (rssFeed);
};