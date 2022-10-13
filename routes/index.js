var express = require('express');
const todos = require('../resource/todo');
var router = express.Router();

var todo = require("../resource/todo");
const Todos = require('../models/Todos');



/* GET home page. */
router.get('/',async function(req, res, next) {
 
  const todos = await Todos.find();
  console.log(todos);
 res.render('home', { todosList: todos });
});

router.get('/',function(req,res,next)
{
  res.render('Home')
})

router.get('/add-todo',function(req,res,next){
  res.render('add-todo',{title:'add-todo'});

})
router.post('/save-to-do',async function(req,res,next){
  await Todos.insertMany([{ title:req.body.title , description:req.body.description}])
  // or todo = new Todos({
  //            title: req.body.title,
  //            description: req.body.description
  // })
  // todo.save();
  // todo.save().then(() => console.log('todo inserted')).catch(() =>console.log('Error found'))
 todos.push({...req.body, _id:`00${todos.length}`});
   res.redirect('/');
})

router.get('/delete-todo/:id', async function(req,res,next){
   await Todos.remove({_id :req.params.id})
  //const todotodo = todos.findIndex(todo => todo.id === req.params.id)
   // todo.splice(todotodo,1);
  res.redirect('/');
  
})//dynamic kura dina lai use index

router.get('/update-todo/:id',async function(req,res,next){
  const todo = await Todos.findOne({ _id :req.params.id})
  //const todotodo = todos.find(todo => todo.id === req.params.id)
  res.render('editTodo',{todo:todo});
  // res.redirect('/');
})
 router.post('/update-todo/:id',async function(req,res,next){
  await Todos.updateOne({ _id :req.params.id}, {$set: {title: req.body.title , description: req.body.description} });
//  console.log(req.body,req.params);
 // const index = todos.findIndex(todo => todo.id === req.params.id);
//  todo.splice(index,1,{...req.body,id: req.params.id});
  res.redirect('/');
})

module.exports = router;
