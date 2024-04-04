var express = require('express');
var router = express.Router();
const Bill = require('../models/bills');

/* GET product by ID. */
router.get('/id', function(req, res, next) {

    Bill.find()
  // Chỉ định trường _id bạn muốn trả về
    .then(bill => {
      if (!bill) {
        return res.status(404).json({ error: 'Không tìm thấy sản phẩm' });
      }
      res.json(bill);
    })
    .catch(next);
  });

  router.post('/store', (req, res , next) => {
    // res.json(req.body);
    const bill = new Bill(req.body);
    bill.save()
    .then(()=> res.redirect('/product'))
    .catch(next);
  });

  router.get('/', function(req, res,next){
    res.render('bills', {title: 'Thế giới gạch '});
})

router.delete('/delete/:id', (req, res , next) => {
    const productId = req.params.id;
    Bill.findByIdAndDelete(productId)
    .then(() => res.redirect('/product'))
    .catch(next)
  });

  router.put('/edit/:id', (req, res , next) => {
    // res.json(req.body);
    Product.findByIdAndUpdate({_id : req.params.id}, req.body)
    .then(()=> res.redirect('/product'))
    .catch(next);
  });



module.exports = router;
