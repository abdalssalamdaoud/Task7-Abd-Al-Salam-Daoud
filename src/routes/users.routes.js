const express=require('express');
const router=express.Router();
const controller=require('../controllers/users.controller')
 

router.get('/',controller.getAllUsers),
    //getUserById,
    //createUser,
    //updateUser,
    //deleteUser

//}=require('../controllers/users.controller');

//router.route('/')
   //.get(getAllUsers)
   //.post(createUser);

//router.route('/:id')
  //.get(getUserById)
  //.patch(updateUser)
  //.delete(deleteUser);

module.exports=router;   