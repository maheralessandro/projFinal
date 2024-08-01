import REACT , {useEffect, useState} from "react"
import ProdCard from "./prodCard";
import { allProducts } from "../api/prodApi";






const Product =()=>{
   const [product , setProduct] = useState([]) ;

  
  //  const [cart , setCart] = useState([]) ;

  //  console.log(cart);
  //  console.log(product);
   useEffect(()=>{
    allProducts()
    .then((file)=>{
     setProduct(file.doc)
    })
    .catch((err)=>{
        console.log(err);
    })
   },[])


  // //  const addTocart =(produit)=>{

  // //   setCart([...cart , produit])
  //  }
  return(
      <div style={{display:"flex" , justifyContent:"space-around", flexWrap:"wrap", margin:"50px"}}>

        {/* <div>
          {cart.length === 0 ? <h3>empty cart</h3>:
          cart.map((item,index)=>{
            return <div key={index}>
             <h4>{item.nameProdut}</h4>
            </div>
          })}
        </div> */}
        {product.map((element,index)=>{
          return <ProdCard prod={element}  key={index}/>
        })}
        
      </div>
    )
  }
  
  
  export default Product;