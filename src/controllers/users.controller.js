const users =require("../models/users") ;
const  getAllUsers =( req, res)=>{
  res.status(200).json({success : true, message: "successfull", data:users}) ;
};
;
const getUserById=(req,res)=>{
    const userId=parseInt(req.params.id);
    const user=users.find(a=>a.id===userId);
    if(!user){
        res.status(404).json({success :false, message: "User Not Found "}) ;
    }
  res.status(200).json({success : true, data:user}) ; 
};
const createUser=(req,res)=>{
    const { id,username,fullName,email,bio,avatar,role}=req.body;
    if(!username||email){
        res.status(400).json({success:false,message: "User Name or emaill is not enterred"})
    }
     nothing="";
  const newUser ={
    id :users.length+1 ,
    username,
    fullName:fullName || nothing,
    email,
    bio:bio ||nothing ,
    avatar:avatar||nothing,
    role:role||nothing,
    createdAt:newDate().toString()
  };
  users.push(newUser);
  res.status(201).json({success:true ,data:newUser});
};
const updateUser=(req,res)=>{
    const userId=parseInt(req.params.id);
    const user=users.find(a=>a.id===userId);
    if(!user){
        res.status(404).json({success :false, message: "User Not Found "}) ;
    }
    const { username, fullName, email, bio, avatar, role } = req.body;
       nothing="";
     
    if(username)username=username;
    if(fullName)user.fullName=fullName || nothing;
    if(email)user.email=email;
    if(bio)user.bio=bio ||nothing ;
    if(avatar)user.avatar=avatar||nothing;
    if(role) user.role=role ||nothing;
     
    res.status(200).json({success:true ,data:user})
    };


const deleteUser = (req, res) => {
  const userId = parseInt(req.params.id);
  const user= users.find(a => a.id === userId);

  if (user === false) {
    return res.status(404).json({ success: false, message: 'User not found' });
  }

  const deletedUser = users.splice(user, 1);
  res.status(200).json({ success: true, data: deletedUser });
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser
};