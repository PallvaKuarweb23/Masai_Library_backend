const express=require("express")
// const {ArticlesModel}=require("../model/Articles.model")
const {bookpost}=require("../Controller/User.cont/Books/books.mid")
const {booksGet}=require("../Controller/User.cont/Books/books.get")
const {bookPatch}=require("../Controller/User.cont/Books/books.patch")
const {bookDelete}=require("../Controller/User.cont/Books/books.delete")

const bookRouter=express.Router()

bookRouter.post("/articles/add",bookpost)



bookRouter.get("/articles",booksGet)



bookRouter.patch("/articles/edit/:id",bookPatch)


bookRouter.delete("/articles/rem/:id",bookDelete)


module.exports={
    bookRouter
}