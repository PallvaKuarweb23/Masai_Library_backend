const {UserModel}=require("../../Model/User.model")





async function userGet(req,res){
    try{
    const user=await UserModel.find();
    res.status(200).send(user)
    }catch(err){
        res.status(200).send({"msg":err.message})
    }
    }

    module.exports={
        userGet
    }