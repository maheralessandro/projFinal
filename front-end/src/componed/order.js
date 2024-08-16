import { useEffect, useState } from "react";
import { allOrders } from "../api/prodApi";
import Card from 'react-bootstrap/Card';




const AllOrders = () =>{

    const[order , setOrder] = useState([]) ;

    useEffect(()=>{
        allOrders()
        .then((file)=>{
            console.log(file.doc);
            setOrder(file.doc)
            
        })
        .catch((err)=>{
            console.error(err);
            
        })
    } , [])





    return(
        <div style={{display : 'flex' , justifyContent : 'center' , margin:"50px"}}>
  
  <Card
    bg="Light"
    style={{ width: '50rem' }}
    className="mb-2"
  >
    <Card.Header>{`All orders : ${order.length} orders`}</Card.Header>
    {order.length === 0 ? <h3> No orders </h3> :order.map((item,index)=>{
      return <><Card.Body key={index}>
    <div style={{display:"flex" , justifyContent:"space-between" ,alignItems:"center"}}>
      <div>
      <p>{`Order by : ${item.orderBy.firstName} ${item.orderBy.lastName}`}</p>
      <div>{item.products.map((el,indice)=>{

       return <div key = {indice}> <Card.Title> {el.nameProdut} </Card.Title>
       <Card.Text>price: {el.price}</Card.Text>
       <p>quantity: {el.count}</p>
       
       

      
      </div>
       })}  
       </div>
      
      
      </div>
      
    </div>  
      
    </Card.Body>
    <div style = {{display : "flex" , justifyContent : "space-around" , alignItems : "center"}}>
    <h2>TOTAL: $ {item.totalPrice}</h2>
    
    </div>
    <hr/>
    
    </> 
    })}
    
    
    
  </Card>
  

</div>
    )
};

export default AllOrders ;