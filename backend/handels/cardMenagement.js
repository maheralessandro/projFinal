const Cart = require('../models/shoppingCard') ;
const Product = require('../models/productSchema') ;


exports.creeteCart = async(req , res)=>{
    let {products , totalPrice} = req.body ;


    // console.log(products);
     let prixTot = 0 ;
    for(let i = 0 ; i < products.length ; i++){
      
        // console.log(products[i].prod);
        // let data = await Product.findById(products[i]._id);
        
        

        prixTot += products[i].price * products[i].count

    }

    console.log(prixTot);
    

    try {
        let newCart = new Cart({products , totalPrice:prixTot})
        await newCart.save() ;
        res.status(200).json({msg:'cart creeted'})
        
    } catch (error) {
        console.error(error);
        res.status(500).json({msg:'server error in creet cart'})
        
    }

}