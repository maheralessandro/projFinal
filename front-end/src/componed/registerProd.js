import REACT , {useEffect, useState} from "react"
import ProdCard from "./prodCard";
import { allProducts } from "../api/prodApi";






const Product =()=>{
   const [product , setProduct] = useState([]) ;

  
  
   useEffect(()=>{
    allProducts()
    .then((file)=>{
     setProduct(file.doc)
    })
    .catch((err)=>{
        console.log(err);
    })
   },[])


 
  return(
      <div style={{display:"flex" , justifyContent:"space-around", flexWrap:"wrap", margin:"50px"}}>

        
        {product.map((element,index)=>{
          return <ProdCard prod={element}  key={index}/>
        })}
        
      </div>
    )
  }
  
  
  export default Product;