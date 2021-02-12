var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index',{title:'掛け算',num1:'',num2:''})
});

router.post('/', function(req, res, next) {
  const num1 = req.body.num1;
  const num2 = req.body.num2;
  const result = num1*num2;
  res.render('index', {title: '掛け算', num1: num1, num2: num2, result: result});
});

module.exports = router;
