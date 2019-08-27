const express = require('express');
const strava = require('strava-v3');

const router = express.Router();

router.get('/', (req, res) => {

  const opts = {
    before: req.query.before,
    after: req.query.after,
    page: 1,
    per_page: 10
  };

  if(req.query.page) opts.page = req.query.page;

  // Test error here
  strava.athlete.listActivities(opts, (err, payload) => {
    if(!err) {
      res.send(payload);
    }
    else {
      console.log(err);
      res.send(err);
    }
  });
});

router.get('/:id', (req, res) => {

  strava.activities.get({ id: req.params.id }, (err, payload) => {
    if(!err) {
      res.send(payload);
    }
    else {
      console.log(err);
      res.send(err);
    }
  });
});

module.exports = router;