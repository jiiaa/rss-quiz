const router = require('express').Router();
const rssService = require('./clientservice');


router.post('/yle', async (req, res) => {
    rssService.rssFetchYle(req.body.url, response => {
        res.send(JSON.stringify(response));
    });
});

router.post('/iltalehti', async (req, res) => {
    rssService.rssFetchIl(req.body.url, response => {
        res.send(JSON.stringify(response));
    });
});

module.exports = router;