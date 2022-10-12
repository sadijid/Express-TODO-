var express = require('express');
const todos = require('../resource/todo');
var router = express.Router();

var todo = require("../resource/todo");
console.log(todos)



/* GET home page. */
router.get('/', function(req, res, next) {
 res.render('home', { todosList: todos });
});


router.get('/',function(req,res,next)
{
  res.render('Home')
})

router.get('/add-todo',function(req,res,next){
  res.render('add-todo')
})

module.exports = router;

