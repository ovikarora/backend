var express = require('express');
var router = express.Router();

var URL="mongodb://ovik:tiger@ds045882.mlab.com:45882/project";

const db=require('monk')(URL);

const docs=db.get('project');



/* GET home page. */
router.get('/', function(req, res, next) {
//  res.render('index', { title: 'Express' });

    docs.insert({"name":"akshit","class":"btech","age":"20","dept":"CSE"},function (err,docs) {
        res.json(docs[0]);

    })



});

router.get('/well', function(req, res, next) {
   // res.send('asadasfaf');

    docs.find({},function(err,docs){
        if(err)
            console.log(err)
        else
            res.json(docs);

    })
});

module.exports = router;