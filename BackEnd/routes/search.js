
var express = require('express');
var router = express.Router();
const multer  = require('multer')

//multer 
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
})

const upload = multer({ storage: storage })

/* GET home page. */
router.get('/', function(req, res, next) {
  var text = req.query.p;
  res.render('search' , {title : text});
});

// upload 1 file
router.get('/profile',  upload.array('avatar'),  function(req, res, next) {
  var text = req.query.p;
  res.render('upload' , {title : text});
});

//upload thành công
router.post('/profile', upload.array('avatar'), function (req, res, next) {
  // req.file is the `avatar` file
  // req.body will hold the text fields, if there were any
  res.send('Upload thành công ')
})

module.exports = router;