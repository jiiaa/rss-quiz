// var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var fetch = require('node-fetch');
var DOMParser = require('xmldom').DOMParser;
var parser = new DOMParser();

let feedUrl = "https://feeds.yle.fi/uutiset/v1/mostRead/YLE_UUTISET.rss";

function rssFeed() {
    fetch(feedUrl).then((res) => {
      res.text().then((xmlTxt) => {
          console.log("xml: ", xmlTxt);
          let doc = parser.parseFromString(xmlTxt, 'text/xml');
          console.log("doc: ", doc);
          })
      })
      .catch((error) => {
      console.error(error);
      })
}

rssFeed();

// rssFeed();

// var xhttp = new XMLHttpRequest();
// xhttp.onreadystatechange = function() {
//     if (this.readyState == 4 && this.status == 200) {
//     myFunction(this);
//     }
// };
// xhttp.open("GET", feedUrl, true);
// xhttp.send();

// function myFunction(xml) {
//     var xmlDoc = xml.responseXML;
//     console.log(xmlDoc.getElementsByTagName("title")[0].childNodes[0].nodeValue);
// }

// let Parser = require('rss-parser');
// let parser = new Parser();
// var rssArr = [];
 
// (async () => {
 
//   let feed = await parser.parseURL(feedUrl);
//   console.log(feed.title);
 
//   feed.items.forEach(item => {
//     rssArr.push(item.title);
//   });
//   console.log(rssArr);
//   console.log(rssArr.length);
// })();