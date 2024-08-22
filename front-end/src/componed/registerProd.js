import  {useEffect, useState} from "react"
import ProdCard from "./prodCard";
import { allProducts, getCategory } from "../api/prodApi";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import FilterAltIcon from '@mui/icons-material/FilterAlt';







const Product =()=>{
   const [product , setProduct] = useState([]) ;
   const [cat , setCat] = useState([]) ;
   const [category , setCategory] = useState("category");
   const [filtred , setFiltred] = useState([]);
   const [subList , setSubList] = useState([]);
   const [sub , setSub] = useState("sub category")
   const [show, setShow] = useState(false);

   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);

  //  console.log(product);
   
  



  
  
   
  
  


   const handelChange = (e)=>{
    setCategory(e.target.value)
    
   }

   const subChange = (e) =>{
    setSub(e.target.value)
   }
  
   useEffect(()=>{
    allProducts()
    .then((file)=>{
     setProduct(file.doc)
     setFiltred(file.doc)
     
     getCategory()
     .then ((file)=>{
         setCat(file.doc);
        
     })
     .catch((err)=>{
         console.error(err);
     })
    })
    .catch((err)=>{
        console.log(err);
    })
   
   },[])
   
   
   
  

   useEffect(()=>{

    setSubList(cat.find((item)=>item.nameCat === category))
    setFiltred(product.filter((item)=>{
    
     
      if(category === "category"){
        return item
      }
      if(item.category?.nameCat === category && sub === "sub category" ){
        return item.category?.nameCat
      }

       
      
        
        if(item.category?.nameCat === category && item.subCat=== sub ){
          
          
          return item
           
        }
          
          
        
      
      
      
      
    }))
   },[category,sub])

   
  //  console.log(filtred[0].category.subCat);

 
  return(
      <div>

        <div>
            <Button variant="primary" onClick={handleShow}>
            <FilterAltIcon/>
            </Button>

      <Offcanvas show={show} onHide={handleClose} backdrop="static">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
           <Form.Select  aria-label="Default select example" onChange={handelChange}>
           <option >category</option>
            {cat.map((item,index)=>{
                    return  <option value={item.nameCat} key={index}>{item.nameCat}</option>
                            
                           
                })}
            </Form.Select>
            <Form.Select  aria-label="Default select example" onChange={subChange}>
           <option disabled>sub category</option>
            {/* {filtred.length >0 && filtred.map((item,index)=>{
                    return  <option value={item.subCat} key={index}>{item.subCat}</option>
                           
                })} */}
                {category === "category" ? <option disabled> No sub category existing ..</option> :subList?.subCat.map((el,index)=>{
                  return <option  key={index} >{el}</option>
                })}
            </Form.Select>
        </Offcanvas.Body>
      </Offcanvas>
           
            
          
        </div>
        <div style={{display:"flex" , justifyContent:"space-around", flexWrap:"wrap", marginTop:"100px"}}>
        {filtred.length=== 0 ? <h3>No product found</h3> : filtred.map((element,index)=>{
          return <ProdCard prod={element}  key={index}/>
        })}
        </div>
      </div>
    )
  }
  
  
  export default Product;