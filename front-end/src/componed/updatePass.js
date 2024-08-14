import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { updatePwd } from '../api/authApi';



const UpdatePas = () =>{
      
    const [pass , setPass] = useState({
        password : '' ,
        OldPassword : '' ,
        confirmPassword : '' ,
        
    }) ;

    const navigate = useNavigate()
    
    const errorNotify = (value) => toast.error(value);
    const sucessNotify =(value)=>toast.success(value)
    const handelChange =(e)=>{
        setPass({...pass,[e.target.name]:e.target.value})
    }


    const handelSubmit=(e)=>{
        e.preventDefault();
        updatePwd(pass)
        .then((doc)=>{
            
            sucessNotify(doc.msg);
            navigate("/")
        })
        .catch((err)=>{
            
            console.error(err);
            
            errorNotify(err.response.data.msg)
        })
    }





    return (
        <div style={{
            margin: "10%", 
         display:"flex" , justifyContent:"space-between", alignItems:"center", flexWrap:"wrap"}}>
            <div style={{ width:"50%" , height:"400px" , backgroundColor:"aquamarine", display:"flex", justifyContent:"center",alignItems:"center"}}>
            <h1>Update Password</h1>
            </div>
            <Form>
      
      <Form.Group className="mb-3" controlId="formGridPassword" >
          <Form.Label>Old Password</Form.Label>
          <Form.Control type="password" placeholder="Old Password" name="OldPassword" onChange={handelChange}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGridPassword1" >
          <Form.Label>New Password</Form.Label>
          <Form.Control type="password" placeholder="New Password" name="password" onChange={handelChange}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGridPassword2" >
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control type="password" placeholder="Confirm Password" name="confirmPassword" onChange={handelChange}/>
        </Form.Group>
      

      

      <Button variant="primary" type="submit" onClick={(e)=>handelSubmit(e)}>
        Submit
      </Button>
      
    </Form>

        </div>
    )
} ;

export default UpdatePas ;