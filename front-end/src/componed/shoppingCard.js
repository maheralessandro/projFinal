import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux';
import { decreese, increase } from '../app/cartSlice';

function ShoppingCart() {
  const data = useSelector((state)=>state.shopCart.cart)
  
  console.log(data);

  const dispatch = useDispatch()



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
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            {item.count <= item.quantity ? <button onClick={()=>dispatch(increase(item))}>+</button>: <button disabled>+</button> }
            
            <p>{item?.count}</p>
            <button onClick={()=>dispatch(decreese(item))}>-</button>
          </Card.Body>
          })}
         
        </Card>
      
    </>
  );
}

export default ShoppingCart;