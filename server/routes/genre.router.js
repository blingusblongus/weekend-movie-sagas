const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.get('/', (req, res) => {
  // Add query to get all genres
  const queryText = 'SELECT genres.name FROM genres';

  pool.query(queryText)
    .then(result => {
      console.log('GENRE FETCH');
      res.send(result.rows);
    }).catch(err => {
      console.log('GET genre err');
      res.sendStatus(500);
    })
});

module.exports = router;