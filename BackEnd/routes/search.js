// var express = require('express');
// var router = express.Router();

// /* GET users listing. */
// router.get('/', function(req, res, next) {
//   // console.log('Câu lệnh bạn search là : ' + req.query.q); // search trên routing được gọi là  query parameters 
//   res.send('chào mừng đến với lập trình result serverice nodejs');
// });

// module.exports = router;

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var text = req.query.p;
  res.render('search' , {title : text});
});

// router.post('/', function(req, res, next) { 
//   res.send("xin chào bon kido đẹp trai quá");
// });

module.exports = router;
