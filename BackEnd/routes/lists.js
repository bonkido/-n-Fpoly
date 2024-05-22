const express = require('express');
const router = express.Router();
const List = require('../models/list');


router.get('/', function(req, res, next) {
  List.find()
    .then(list => {
      if (list.length === 0) {
        return res.status(404).json({ error: 'Không tìm thấy sản phẩm' });
      }
      res.json(list);
    })
    .catch(next);
});


router.delete('/delete/:id', (req, res, next) => {
  const productId = req.params.id;
  List.findByIdAndDelete(productId)
    .then(() => res.json({ status: 200, message: 'Xóa thành công' }))
    .catch(next);
});


router.get('/list-national', (req, res, next) => {
  const nation = req.query.name;
  List.find({ nation: nation })
    .then(filteredVacines => {
      res.json(filteredVacines);
    })
    .catch(next);
});

module.exports = router;