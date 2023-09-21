const mongoose=require("mongoose")

const OrderSchema=mongoose.Schema({
user:{type:String,required:true},
    book:{type:String,required:true},
    
    totalAmount:{type:Number,required:true},
    
    

    
})

const OrderModel=mongoose.model("order",OrderSchema)

module.exports={
    OrderModel
}