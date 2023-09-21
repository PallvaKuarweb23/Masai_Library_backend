const {BookModel}=require("../../../Model/Book.model")

async function bookDelete(req,res){
    try{
    const id=req.params.id;
    await BookModel.findByIdAndDelete(id);
    res.status(200).send({"msg":"Deletes a specific book"})
    
    
    }catch(err){
        res.status(400).send({"msg":err.message})
    
    }
    }

    module.exports={
        bookDelete
    }