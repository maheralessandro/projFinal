import { useEffect, useState } from "react"
import { myOrders } from "../api/prodApi"
import Card from 'react-bootstrap/Card';



const MyOrder = ()=>{
  
  const [list , setList] = useState([])

    useEffect(()=>{
      myOrders()
      .then((file)=>{
      console.log(file.doc);
      
        setList(file.doc);
        
      })
      .catch((err)=>{
        console.log(err);
        
      })
    },[])

return (
  <div style={{display : 'flex' , justifyContent : 'center' , margin:"50px"}}>
  

  {/* {list.map((item,index)=>{
  
  return <div key={index}>
     <p>{item.totalPrice}</p>

       <div>{item.products.map((el,indice)=>{

       return <h3>{el.nameProdut}</h3>
       })}</div>
  </div>
  
  
  
  })} */}





  <Card
    bg="Light"
    style={{ width: '50rem' }}
    className="mb-2"
  >
    <Card.Header>My orders</Card.Header>
    {list.length === 0 ? <h3> No orders </h3> :list.map((item,index)=>{
      return <><Card.Body key={index}>
    <div style={{display:"flex" , justifyContent:"space-between" ,alignItems:"center"}}>
      <div>
      <div>{item.products.map((el,indice)=>{

       return <> <Card.Title> {el.nameProdut} </Card.Title>
       <Card.Text>price: {el.price}</Card.Text>
      
    
      <p>{el.count}</p>

      
      </>
       })}  {/*  fin de map products array */}
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
}

export default MyOrder