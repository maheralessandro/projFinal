const mongoose = require("mongoose");



const shopCart = new mongoose.Schema({

    products:[
       {
        type: mongoose.Types.ObjectId ,
        ref:"Product"
   }],
    totalPrice : Number,
    orderBy:{
        type : mongoose.Types.ObjectId ,
        ref:"User"
    }
})


module.exports = mongoose.model('Cart',shopCart)