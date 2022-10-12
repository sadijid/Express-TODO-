var express = require('express');
const todos = require('../resource/todo');
var router = express.Router();

var todo = require("../resource/todo");



/* GET home page. */
router.get('/', function(req, res, next) {
 res.render('home', { todosList: todos });
});

router.get('/',function(req,res,next)
{
  res.render('Home')
})

router.get('/add-todo',function(req,res,next){
  res.render('add-todo',{title:'add-todo'});

})
router.post('/save-to-do',function(req,res,next){
   todos.push({...req.body, _id:`00${todos.length}`});
   res.redirect('/');
})

router.get('/delete-todo/:index',function(req,res,next){
  console.log(req.params.index)
  todos.splice(req.params.index,1);
  res.redirect('/');
})//dynamic kura dina lai use index

router.get('/update-todo/:id',function(req,res,next){
  const todotodo = todos.find(todo => todo.id === req.params.id)
  res.render('editTodo',{todo:todotodo});
  res.redirect('/');
})
 router.post('/update-todo/:id',function(req,res,next){
  console.log(req.body,req.params);
  const index = todos.findIndex(todo => todo.id === req.params.id);
  todo.splice(index,1,{...req.body,id: req.params.id});
  res.redirect('/');
})

module.exports = router;
