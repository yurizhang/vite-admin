const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  const t=new Date().getTime();
  res.render('index', { title: 'Express',t: t });
});

module.exports = router;
