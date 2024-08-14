import { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux';
import { decreese, imptiCart, increase, rmvElement  } from '../app/cartSlice';
import { bagCart } from '../api/prodApi';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import PaymentIcon from '@mui/icons-material/Payment';
import BackspaceIcon from '@mui/icons-material/Backspace';
import { pink } from '@mui/material/colors';
import DeleteIcon from '@mui/icons-material/Delete';
import { toast } from 'react-toastify';

function ShoppingCart() {
  const data = useSelector((state)=>state.shopCart.cart)
  
  const [total , setTotal] = useState(0);
  console.log(data);

  let result = data.filter((item)=> item.count >0)

  const dispatch = useDispatch()

  const errorNotify = (value) => toast.error(value);

  const handelCart =()=>{
    bagCart({products:result ,confirm :false})
    .then((doc)=>{
        console.log(doc);
        dispatch(imptiCart())
    })
    .catch((err)=>{
        console.log(err);
        errorNotify("login required !!!!!")
    })
  }
  
  

   
   useEffect(()=>{
    setTotal(data.map((item)=>{
      return item.count * item.price
    }).reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0,
    ))
   },[data]) ;

   

  return (
    <div style={{display : 'flex' , justifyContent : 'center' , margin:"50px"}}>
      
        <Card
          bg="Light"
          style={{ width: '50rem' }}
          className="mb-2"
        >
          <Card.Header>ShopBag</Card.Header>
          {data.length === 0 ? <h3> empty bag </h3> :data.map((item,index)=>{
            return  <Card.Body key={index}>
          <div style={{display:"flex" , justifyContent:"space-between" ,alignItems:"center"}}>
            <div>
            <Card.Title> {item.nameProdut} </Card.Title>
            <Card.Text>
              price: {item.price}
            </Card.Text>
            {item.count <= item.quantity ? <AddCircleIcon onClick={()=>dispatch(increase(item))}/>: <AddCircleIcon disabled/> }
          
            <p>{item?.count}</p>

            {item.count > 0 ? <RemoveCircleIcon onClick={()=>dispatch(decreese(item))}/> : <RemoveCircleIcon disabled/>}
            <p>sub total: {item.count * item.price }</p>
            </div>
            <div>
            <BackspaceIcon onClick={()=>dispatch(rmvElement(item._id))} sx={{fontSize:"40px" , cursor : "pointer" , color : pink[500]}}/>
            </div>
          </div>  
            <hr/>
          </Card.Body>
          })}
          <div style = {{display : "flex" , justifyContent : "space-around" , alignItems : "center"}}>
          <h2>TOTAL: $ {total}</h2>
          {/* <button onClick={()=>handelCart()}>confirm</button> */}
          <PaymentIcon sx={{fontSize:50 , cursor : "pointer"}} onClick={()=>handelCart()}/>
          </div>
          <hr/>
          <div style={{display : "flex" , justifyContent : "space-around"}}>
          <DeleteIcon onClick={()=>dispatch(imptiCart())} sx={{fontSize:"40px" , cursor : "pointer" , color : pink[500]}}/>
          </div>
        </Card>
        
      
    </div>
  );
}

export default ShoppingCart;