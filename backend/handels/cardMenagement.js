const Cart = require('../models/shoppingCard') ;
const Product = require('../models/productSchema') ;


exports.creeteCart = async(req , res)=>{
    let {products , totalPrice} = req.body ;
    let user = req.user;

    // console.log(user);
    


    // console.log(products);
     let prixTot = 0 ;
    for(let i = 0 ; i < products.length ; i++){
      
        // console.log(products[i].prod);
        // let data = await Product.findById(products[i]._id);
        
        

        prixTot += products[i].price * products[i].count

    }

    console.log(prixTot);
    

    try {
        let newCart = new Cart({products , totalPrice:prixTot, orderBy:user?._id})
        await newCart.save() ;
        res.status(200).json({msg:'cart creeted'})
        
    } catch (error) {
        console.error(error);
        res.status(500).json({msg:'server error in creet cart'})
        
    }

}


exports.getCart = async(req,res)=>{

    let {_id}= req.user;

   await Cart.find({orderBy:_id}).populate('orderBy').populate("products")
   .then((doc)=>{
    res.status(200).json({msg:"my orders" , doc})
   })
   .catch((err)=>{
    res.status(500).json({msg:"server error in get cart"})
    console.log(err);
    
   })

};

exports.getAllOrders = async(req,res)=>{
    await Cart.find().populate("orderBy").populate("products")
    .then((doc)=>{
        res.status(200).json({msg:"all orders" , doc})
    })
    .catch((err)=>{
        res.status(500).json({msg:"server error in get all orders"})
    })
};