let express = require('express');
let router = express.Router();
let {Post} = require("../models/schemas");

/* GET /posts/ -> index.ejs */
router.get('/', function(req, res, next) {
  Post.find().exec((err, posts) => {
      res.render('layout', { title: 'My Blog', content: "posts/index", posts });
  })
});


/* GET  /posts/new -> new.ejs */
router.get('/new', function(req, res, next) {
  res.render('layout', { title: 'My Blog', content: "posts/new" });
});


/* GET /posts/:id -> view.ejs */
router.get('/:id', function(req, res, next) {
  Post.findById(req.params.id, (err, post) => {
      res.render('layout', { title: 'My Blog', content: "posts/view", post });
  })
});


/* GET  /posts/create */
router.post('/create', function(req, res, next) {
    
  let post = { posted_at: new Date()};
  Object.assign(post, req.body);

  new Post(post).save((err) =>{
      
      res.redirect(301, "/posts/");
  })
});



/* GET  /posts/:id/edit -> edit.ejs */
router.get('/:id/edit', function(req, res, next) {
  Post.findById(req.params.id, (err, post) => {
      res.render('layout', { title: 'My Blog', content: "posts/edit", post });
  })
});


/* GET  /posts/:id/update */
router.post('/:id/update', function(req, res, next) {
  Post.findById(req.params.id, (err, post) => {
    Object.assign(post, req.body);
    post.save((err) =>{
      res.redirect(301, "/posts/");
    });
  });
});


/* post  /posts/:id/delete */
router.post('/:id/delete', function(req, res, next) {
  Post.findByIdAndRemove(req.params.id, (err) => {
    res.redirect(301, "/posts/");
  });
});



router.post("/:id/comments/create", function(req, res, next){
  Post.findById(req.params.id, (err, post) => {
    post.comments.push(req.body);
    post.save((err) =>{
      res.redirect(301, "/posts/" + post.id);
    });
  });
});
















//router.get('/new', function(req, res, next) {
//  Post.find().exec((err, posts) => {
//      res.render('new', { title: 'My Blog', posts });
//  })
//});
//
//
//router.post('/', function(req, res, next) {
//  let post = {posted_at: new Date()};
//  Object.assign(post, req.body);
//    console.log(post);
//    
//  new Post(post).save(err => {
//      res.render('index', { title: 'My Blog'});
//  });
//});
//
//router.get('/:id', function(req, res, next) {
//  let post = undefined;
//  for(let p of posts){
//    if(p.id == req.params.id){
//      post = p;
//      break;
//    }
//  }
//  res.render('index', { title: 'My Blog', post });
//});


module.exports = router;
