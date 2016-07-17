var express = require('express');
var router = express.Router();
var ctrlFeedback = require('../controllers/feedback');
var ctrlEvents = require('../controllers/events');
var ctrlClubdata = require('../controllers/clubdata');

router.get('/events',ctrlEvents.eventsList);
router.get('/events/:eventid',ctrlEvents.eventById);

router.get('/clubs/:clubname', ctrlClubdata.clubdataById);

router.post('/feedback',ctrlFeedback.addFeedback);
module.exports = router;