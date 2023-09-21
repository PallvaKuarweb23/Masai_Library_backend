const {BookModel}=require("../../../Model/Book.model")

async function bookPatch(req,res){
    try{
    const id=req.params.id;
    const updatebook=await BookModel.findByIdAndUpdate(
        id,
        req.body,
        {new:true}
    );
    res.status(200).send(updatebook);
    }catch(err){
        res.status(200).send({"msg":err.message})
    }
    }

    module.exports={
        bookPatch
    }