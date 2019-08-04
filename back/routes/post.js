const express = require('express');
const router = express.Router();

const db = require('../models');
const {isLoggedIn} = require('./middleware');


router.post('/', isLoggedIn ,async (req ,res, next)=>{
  try {
    const hashtags = req.body.content.match(/#[^\s]+/g);
    const newPost = await db.Post.create({
      content:req.body.content,
      UserId:req.user.id
    });
    if(hashtags){
    const result = await Promise.all(hashtags.map(tag => db.Hashtag.findOrCreate({
        where:{
          name:tag.slice(1).toLowerCase(),
        }
      })));
      console.log(result);
      await newPost.addHashtags(result.map(r=>r[0]));
    }
    //const User = await newPost.getUser();
    //newPost.User = User;
    //res.json(newPost);
    const fullPost = await db.Post.findOne({
      where:{
        id: newPost.id,
      },
      include:[{
        model:db.User,
        attributes:['nickname']
      }],
    })
    res.json(fullPost);
  } catch (e) {
    console.error(e);
    next(e);
  }
});


router.post('/images', (req, res)=>{

});

router.get(`/:id/comments`, async(req, res, next) => {
  try {
    const post = await db.Post.findOne({
      where:{id:req.params.id}
    });
    if(!post) return res.status(404).send('Post not exist');
    const comments = await db.Comment.findAll({
      where:{
        PostId:req.params.id,
      },
      order:[['createdAt','ASC']],
      include:[{
        model:db.User,
        attributes:['id','nickname']
      }]
    });
    res.json(comments);
  } catch (e) {
    console.error(e);
    next(e);
  }
});

router.post('/:id/comment', isLoggedIn,async(req, res, next) => {
  try {
    const post = await db.Post.findOne({where:{id:req.params.id}});
    if(!post) return res.status(404).send('포스트가 존재하지 않습니다.');
    const newComment = await db.Comment.create({
      PostId:post.id,
      UserId:req.user.id,
      content:req.body.comment
    });
    await post.addComment(newComment.id);
    const comment = await db.Comment.findOne({
      where:{
        id:newComment.id,
      },
      include:[{
        model:db.User,
        attributes:['id','nickname']
      },],
    });
    return res.json(comment);
  } catch (e) {
    console.error(e);
    next(e);
  }
});






























module.exports = router;
