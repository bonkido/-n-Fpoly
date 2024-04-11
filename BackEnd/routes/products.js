var express = require('express');
var router = express.Router();
const Product = require('../models/product');
const multer  = require('multer')

//multer 
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/images')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
})

const upload = multer({ storage: storage })

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


  
router.put('/edit/fix/:id', (req, res , next) => {
  // res.json(req.body);
  Product.findByIdAndUpdate({_id : req.params.id}, req.body)
  .then(()=> res.json({status : 200, message: 'success'}))
  .catch(next);
});


router.delete('/delete/:id', (req, res , next) => {
  const productId = req.params.id;
  Product.findByIdAndDelete(productId)
  .then(() => res.json({status : 200, message: 'success'}))
  .catch(next)
});


router.post('/store', upload.fields([{ name: 'avatar', maxCount: 1 }, { name: 'avatar1', maxCount: 1 }]),   (req, res , next) => {
  // res.json(req.body);
  const product = new Product(req.body);
  product.save()
  .then(()=> res.json({status : 200, message: 'success'}))
  .catch(next);
});




module.exports = router;
