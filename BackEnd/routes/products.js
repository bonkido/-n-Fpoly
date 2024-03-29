var express = require('express');
var router = express.Router();
const Product = require('../models/product');

/* GET product by ID. */
router.get('/id', function(req, res, next) {

  Product.find()
  // Chỉ định trường _id bạn muốn trả về
    .then(product => {
      if (!product) {
        return res.status(404).json({ error: 'Không tìm thấy sản phẩm' });
      }
      res.json(product);
    })
    .catch(next);
  });

router.get('/id=:id', function(req, res, next) {
  const productId = req.params.id;

  Product.findById(productId)
  // Chỉ định trường _id bạn muốn trả về
    .then(product => {
      if (!product) {
        return res.status(404).json({ error: 'Không tìm thấy sản phẩm' });
      }
      res.json(product);
    })
    .catch(next);
  });

  router.get('/edit/:id', (req, res , next) => {
    const productId = req.params.id;
    Product.findById(productId)
    .then(product => {res.render('edit',{product})})
    .catch(next);
  });
  
  router.put('/edit/fix/:id', (req, res , next) => {
    // res.json(req.body);
    Product.findByIdAndUpdate({_id : req.params.id}, req.body)
    .then(()=> res.redirect('/product'))
    .catch(next);
  });

// hiển thị hết sản phẩm có trong mongodb
router.get('/', (req, res , next) => {
  Product.find()
  .then(products => {res.render('products', {products})})
  .catch(next);
});

router.get('/creat', (req, res , next) => {
  res.render('creat');
});

router.delete('/delete/:id', (req, res , next) => {
  const productId = req.params.id;
  Product.findByIdAndDelete(productId)
.then(() => res.redirect('/product'))
.catch(next)
});

router.post('/store', (req, res , next) => {
  // res.json(req.body);
  const product = new Product(req.body);
  product.save()
  .then(()=> res.redirect('/product'))
  .catch(next);
});




module.exports = router;
