let express = require('express');
let router = express.Router();
let {Post} = require("../models/schemas");

/* GET users listing. */
router.get('/', function(req, res, next) {
  Post.find().exec((err, posts) => {
      res.render('index', { title: 'My Blog', posts });
  })
});


router.get('/new', function(req, res, next) {
  Post.find().exec((err, posts) => {
      res.render('new', { title: 'My Blog', posts });
  })
});


router.post('/', function(req, res, next) {
  let post = {posted_at: new Date()};
  Object.assign(post, req.body);
    console.log(post);
    
  new Post(post).save(err => {
      res.render('index', { title: 'My Blog'});
  });
});

router.get('/:id', function(req, res, next) {
  let post = undefined;
  for(let p of posts){
    if(p.id == req.params.id){
      post = p;
      break;
    }
  }
  res.render('index', { title: 'My Blog', post });
});


module.exports = router;
