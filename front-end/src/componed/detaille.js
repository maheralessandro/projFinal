import { useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { deleteProduct, singleProd } from '../api/prodApi';
import { useNavigate, useParams } from 'react-router-dom';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Card from 'react-bootstrap/Card';
import { useDispatch } from 'react-redux';
import { addToCart } from '../app/cartSlice';
import { getLocalStorage } from '../helpers/localStorage';
import UpdateIcon from '@mui/icons-material/Update';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { toast } from 'react-toastify';



function Detail() {
 

  const [prod , setProd] = useState({}) ;
  const [images , setImages] = useState([])
  const dispatch = useDispatch() ;
  const user = getLocalStorage('User');

  const navigate = useNavigate();
   let {id} = useParams();



  useEffect(()=>{
    singleProd(id)
    .then ((val)=>{
        setProd(val.doc)
        setImages(val.doc.image)
    })
    .catch((err)=>{
      console.error(err);
    })
  },[]) ;

 
  const handelDelete=()=>{
    
    deleteProduct(id)
    .then((doc)=>{
        
        toast.success(doc.msg);
        navigate("/")
    })
    .catch((err)=>{
        
        console.error(err);
        
        toast.error(err.response.data.msg)
    })
}
  
  

  return (
   <div style={{display : 'flex' , alignItems : "center" , flexDirection:"column" ,marginTop :"50px"}}>
    <div>
    <Carousel data-bs-theme="dark" style={{ width: '50rem' }}>
    {
    images.map((item,index)=>{
      return <Carousel.Item key={index}>
      <img
        className="d-block w-100"
        src={`http://localhost:3000/${item}`}
        alt={`index slide`}
      />
      
    </Carousel.Item>
    })} 
    </Carousel>
    </div>
    <div style={{ width:"60rem", display:"flex" , justifyContent:"space-around" ,alignItems:"flex-end", padding:"20px"}}>
    
      
      <Card
          bg="Light"
          style={{ width: '50rem' }}
          className="mb-2"
        >
          <Card.Header>name: {prod.nameProdut}</Card.Header>
           <Card.Body style={{display:"flex" , justifyContent:"space-around" ,alignItems:"flex-end"}}>
            <div>
            <Card.Title> category: {prod.category?.nameCat} </Card.Title>
            <Card.Text>
            description: {prod.productDescription}
            </Card.Text>
            <hr/>
            <p>price: {prod.price} $</p>
            <p>stock: {prod.quantity} </p>
            </div>
            <div>
              {prod.postedBy?._id === user?._id ?
                <div>
                  <UpdateIcon sx={{fontSize:"60px" , cursor : "pointer"}} onClick={()=>navigate(`/updateprod/${prod._id}`)}/>
                  <DeleteForeverIcon sx={{fontSize:"60px" , cursor : "pointer"}} onClick={()=>handelDelete()}/>
                  <AddShoppingCartIcon sx={{fontSize:"60px" , cursor : "pointer"}} onClick={()=>dispatch(addToCart(prod))}/>
                </div>
            :<div>
              <AddShoppingCartIcon sx={{fontSize:"60px" , cursor : "pointer"}} onClick={()=>dispatch(addToCart(prod))}/>
            </div>
          }
            
            </div>
          </Card.Body>
          
          
        </Card>
     
    
    
    
    </div>
    


   </div>
  );
}

export default Detail;