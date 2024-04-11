var express = require('express');
var router = express.Router();
const User = require('../models/bills');

/* GET product by ID. */
router.get('/id', function(req, res, next) {

    User.find()
  // Chỉ định trường _id bạn muốn trả về
    .then(user => {
      if (!user) {
        return res.status(404).json({ error: 'Không tìm thấy sản phẩm' });
      }
      res.json(user);
    })
    .catch(next);
  });

  router.post('/store', (req, res , next) => {
    // res.json(req.body);
    const user = new User(req.body);
    user.save()
    .then(()=> res.redirect('/product'))
    .catch(next);
  });

  router.get('/', function(req, res,next){
    res.render('users', {title: 'Thế giới gạch '});
})


module.exports = router;