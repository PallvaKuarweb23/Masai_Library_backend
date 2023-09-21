const {BookModel}=require("../../../Model/Book.model")





async function booksGet(req,res){
    try{
    const books=await BookModel.find();
    res.status(200).send(books)
    }catch(err){
        res.status(200).send({"msg":err.message})
    }
    }

    module.exports={
        booksGet
    }