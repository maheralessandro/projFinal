import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import { useNavigate } from 'react-router-dom';


function ProdCard({prod}) {
    
  const navigate = useNavigate();
  
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={prod?.image[4]} alt = "prod" />
      <Card.Body>
        <Card.Title>{prod.nameProdut}</Card.Title>
        <Card.Text>
          {prod.productDescription}
          <br/>
          {prod.price}
          <br/>
          {prod.postedBy.firstName}
          <br/>
          {prod.category?.nameCat}
        </Card.Text>
        <Button  onClick={()=>navigate(`/detail/${prod._id}`)} variant="primary">See more</Button>
        
      </Card.Body>
    </Card>
  );
}

  
  export default ProdCard;