const {comments}= require ('../models/comments') ;
 const getAllComments=(req,res)=>{
    const {postId}=req.query;
    let commentsOnThePost=comments;
    if(postId){
        commentsOnThePost=comments.fillter(a=>a.postId===parse.comments(postId));
    }
   res.status(200).json({success : true, message: "successfull", data:commentsOnThePost}) ;
 };
 
 
 const getCommentsById=(req,res)=>{
   const commentId=parseInt(req.params.id);
    const comment=comments.find(a=>a.id===commentId);
    if(!comment){
        res.status(404).json({success :false, message: "comment Not Found "}) ;
    }
  res.status(200).json({success : true, data:comment}) ; 
};

const createcomment=(req,res)=>{
    const { id ,postId,userId,text}=req.body;
    
     nothing="";
  const newComment ={
    id :comments.length+1 ,
    postId,
    userId,
    text,
    createdAt:newDate().toString(),
    
};
  posts.push(newComment);
  res.status(201).json({success:true ,data:newComment});
};
const updateComment=(req,res)=>{
    const commentId=parseInt(req.params.id);
    const comment=users.find(a=>a.id===commentId);
    if(!comment){
        res.status(404).json({success :false, message: "Comment Not Found "}) ;
    }
        const { id,userId,title,content,tag}=req.body;
           nothing="";
     
     nothing="";
    //id :posts.length+1 ,
    if(userId)userId=userId;
    if(title)title=title || nothing;
    if(content)content=content;
    if(tag)tag=tag ||nothing ;
    if(createdAt)createdAt=newDate().toString(); 

    res.status(200).json({success:true ,data:post})
    };


const deleteComment = (req, res) => {
  const commentId= parseInt(req.params.id);
  const comment= comments.find(a => a.id === commentId);

  if (comment === false) {
    return res.status(404).json({ success: false, message: 'comment not found' });
  }

  const deletedComment = comments.splice(comment, 1);
  res.status(200).json({ success: true, data: deletedComment});
};

module.exports = { 
    getAllComments,
  getCommentsById,
   createcomment,
  updateComment,
  deleteComment
};