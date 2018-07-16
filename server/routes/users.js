const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  console.log('asdasd');
  res.send('respond with aaa vvv resource');
});

module.exports = router;