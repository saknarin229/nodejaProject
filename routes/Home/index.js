var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('Home/Home', { Title: 'DaveToDave : รับทำเว็บไซต์พร้อมใช้งาน ดำเนินการให้ทั้งหมด' });
});

router.get('/contact', function(req, res, next) {
    res.render('Home/Contact', { Title: 'Contact : รับทำเว็บไซต์พร้อมใช้งาน ดำเนินการให้ทั้งหมด' });
})

module.exports = router;