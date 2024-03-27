var express = require('express');
var router = express.Router();
// const Order = require('../models/order');

/* GET home page. */
router.get('/', function(req, res, next) {
  // Order.find()
  //   .then(orders => {
  //     // Lặp qua mảng đơn hàng và trả về một mảng chứa các tên đơn hàng
  //     const orderNames = orders.map(order => order.name);
  //     console.log(orderNames);
  //     res.render('orders', { names: orderNames }); // Trả về mảng tên đơn hàng
  //   })
  //   .catch(error => {
  //     // Xử lý lỗi
  //     res.status(400).json({ error: 'lỗi kết nối rồi bồ ơi!!!' });
  //   });
  res.render('index' , {title: "Thế Giới Gạch"});
});

module.exports = router;
