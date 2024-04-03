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


// router.get('/profile' , upload.single('avatar') , (req , res , next) => {
//   res.render('profile', {title: 'Thế giới gạch '});
// })


router.get('/', function(req, res,next){
  res.render('products', {title: 'Thế giới gạch '});
})

router.get('/add-product', function(req, res,next){
  res.render('add-products', {title: 'Thế giới gạch '});
})

router.post('/store', upload.fields([{ name: 'ImageUpload', maxCount: 1 }, { name: 'ImageUpload1', maxCount: 1 }]), (req, res, next) => {
  const image1 = req.files['ImageUpload'][0].originalname; // Lấy đường dẫn của ảnh đầu tiên
  const image2 = req.files['ImageUpload1'][0].originalname; // Lấy đường dẫn của ảnh thứ hai
  const name = req.body.name; // Lấy giá trị của trường dữ liệu 'name' từ req.body
  const price = req.body.price;
  const quantity = req.body.quantity;
  const material = req.body.material;
  const mota = req.body.mota;


  const addProduct = {
    image1: image1,
    image2: image2,
    name: name,
    price: price,
    quantity: quantity,
    material: material,
    title: mota,
  }
  // res.json(addProduct); 
  const product = new Product(addProduct);
  product.save()
  .then(()=> res.redirect('/product'))
  .catch(next);
 
});


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
    .then(()=> res.redirect('/product'))
    .catch(next);
  });

router.delete('/delete/:id', (req, res , next) => {
  const productId = req.params.id;
  Product.findByIdAndDelete(productId)
  .then(() => res.redirect('/product'))
  .catch(next)
});






module.exports = router;
