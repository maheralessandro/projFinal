import { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux';
import { decreese, increase  } from '../app/cartSlice';
import { bagCart } from '../api/prodApi';

function ShoppingCart() {
  const data = useSelector((state)=>state.shopCart.cart)
  
  const [total , setTotal] = useState(0);
  console.log(data);

  let result = data.filter((item)=> item.count >0)

  const dispatch = useDispatch()

  const handelCart =()=>{
    bagCart({cart:result ,confirm :false})
    .then((doc)=>{
        console.log(doc);
    })
    .catch((err)=>{
        console.log(err);
    })
  }
  
  

   
   useEffect(()=>{
    setTotal(data.map((item)=>{
      return item.count * item.price
    }).reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0,
    ))
   },[data])


  return (
    <>
      
        <Card
          bg="Light"
          style={{ width: '18rem' }}
          className="mb-2"
        >
          <Card.Header>ShopBag</Card.Header>
          {data.length === 0 ? <h3> empty bag </h3> :data.map((item,index)=>{
            return  <Card.Body key={index}>
            <Card.Title> {item.nameProdut} </Card.Title>
            <Card.Text>
              <h5>price: {item.price}</h5>
            </Card.Text>
            {item.count <= item.quantity ? <button onClick={()=>dispatch(increase(item))}>+</button>: <button disabled>+</button> }
            
            <p>{item?.count}</p>
            <button onClick={()=>dispatch(decreese(item))}>-</button>
            <h2>sub total: {item.count * item.price }</h2>
          </Card.Body>
          })}
          <p>TOTAL: $ {total}</p>
          <button onClick={()=>handelCart()}>confirm</button>
        </Card>
        
      
    </>
  );
}

export default ShoppingCart;