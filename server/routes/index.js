const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  const a = 1;
  const b = a + 1;
  res.render('index', {title: 'Express'});
});

module.exports = router;