import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import { useNavigate } from 'react-router-dom';


function ProdCard({prod}) {
    
    
  const navigate = useNavigate();
  
  return (
    <Card style={{ width: '18rem' , marginBottom:"40px"}}>
      <Card.Img variant="top" src={prod?.image[0]} alt = "prod" height={260}/>
      <Card.Body style={{display : 'flex' , flexDirection:"column" , justifyContent : 'end'}}>
        <Card.Title>NAME : {prod.nameProdut}</Card.Title>
        <Card.Text>
          DESCRIPTION : {prod.productDescription}
          <br/>
          PRICE : {prod.price} $
          <br/>
          BY : {prod.postedBy.firstName}
          <br/>
          CATEGORY : {prod.category?.nameCat}
        </Card.Text>
        <Button  onClick={()=>navigate(`/detail/${prod._id}`)} variant="primary">See more</Button>
        
      </Card.Body>
    </Card>
  );
}

  
  export default ProdCard;