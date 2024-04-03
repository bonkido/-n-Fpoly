
var express = require('express');
var router = express.Router();

// Import các mô hình
const Product = require('../models/product');
const Bill = require('../models/bills');
const User = require('../models/users');

// Route để lấy dữ liệu từ nhiều bảng
router.get('/all', function(req, res, next) {
    // Sử dụng Promise.all() để thực hiện các truy vấn song song
    Promise.all([
        Product.find(),
        Bill.find(),
        User.find()
    ])
    .then(([products, bills, users]) => {
        // Gửi kết quả về cho client dưới dạng JSON
        res.json({ products, bills, users });
    })
    .catch(error => {
        console.error('Lỗi khi lấy dữ liệu:', error);
        res.status(500).json({ error: 'Lỗi khi lấy dữ liệu' });
    });
});

router.get('/', function(req, res,next){
    res.render('sign', {title: 'Thế giới gạch '});
})


router.get('/index', function(req, res,next){
    res.render('index', {title: 'Thế giới gạch '});
})


module.exports = router;