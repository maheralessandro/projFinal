import { useEffect, useState } from "react";
import { getCategory, updateProd } from "../api/prodApi";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';






const UpdateProd = () =>{

    const [prod , setProd] = useState({
      
        nameProdut : '' ,
        price : null ,
        quantity : null ,
        productDescription : '' ,
        nameCat : '' ,
        picture:""
    }) ;

    const {id} = useParams();
    const [cat , setCat] = useState([]) ;

    useEffect(()=>{
        getCategory()
        .then ((file)=>{
            setCat(file.doc);
        })
        .catch((err)=>{
            console.error(err);
        })
    },[])

    const navigate = useNavigate()
    
    const errorNotify = (value) => toast.error(value);
    const sucessNotify =(value)=>toast.success(value)
    const handelChange =(e)=>{
        setProd({...prod,[e.target.name]:e.target.value})
    } ;

    const fileChange =(e)=>{
     
        setProd({...prod,[e.target.name]:e.target.files})
      
      }


    const handelSubmit=(e)=>{
        e.preventDefault();
        updateProd(prod,id)
        .then((doc)=>{
            
            sucessNotify(doc.msg);
            navigate("/")
        })
        .catch((err)=>{
            
            console.error(err);
            
            errorNotify(err.response.data.msg)
        })
    }



    return(
        <div style={{
            margin: "10%", 
         display:"flex" , justifyContent:"space-between", alignItems:"center", flexWrap:"wrap"}}>
           <div style={{ width:"50%" , height:"400px" , backgroundColor:"aquamarine", display:"flex", justifyContent:"center",alignItems:"center"}}>
           <h1>UPDATE PRODUCT</h1>
           </div>
            
            <Form>
              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail" >
                  <Form.Label>nameProdut</Form.Label>
                  <Form.Control type="text" placeholder="Enter " name="nameProdut" onChange={handelChange}/>
                </Form.Group>
        
                <Form.Group as={Col} controlId="formGridPassword" >
                  <Form.Label>price</Form.Label>
                  <Form.Control type="text" placeholder="price" name="price" onChange={handelChange} />
                </Form.Group>
              </Row>
        
              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail" >
                  <Form.Label>quantity</Form.Label>
                  <Form.Control type="number" placeholder="Enter quantity" name="quantity" onChange={handelChange}/>
                </Form.Group>
        
                <Form.Group as={Col} controlId="formGridPassword" >
                  <Form.Label>image</Form.Label>
                  <Form.Control type="file" multiple="multiple" placeholder="image" name="picture" onChange={fileChange} />
                </Form.Group>
              </Row>

              <Row className="g-2">
      <Col md>
      <FloatingLabel
        controlId="floatingTextarea"
        label="Comments"
        className="mb-3"
      >
      <Form.Control as="textarea" placeholder="Leave a comment here" name="productDescription" onChange={handelChange} />
      </FloatingLabel>
      </Col>
      <Col md>
        <FloatingLabel
          controlId="floatingSelectGrid"
          label="category"
        >
          <Form.Select aria-label="Floating label select example" name="nameCat" onChange={handelChange} >
            <option>Open this select category</option>
            {cat.map((item,index)=>{
                    return <option key={index}>{item.nameCat}</option>
                })}
            
          </Form.Select>
        </FloatingLabel>
      </Col>
    </Row>
        
              <Button variant="primary" type="submit" onClick={(e)=>handelSubmit(e)}>
                MODIFI
              </Button>
          
            </Form>
             

             
                </div>
    )
} ;

export default UpdateProd ;