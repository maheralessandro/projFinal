import {useState} from 'react'
import { addCat } from '../api/prodApi';
import Button from 'react-bootstrap/Button';
// import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
// import Row from 'react-bootstrap/Row';
import { useNavigate } from 'react-router-dom';
import {toast} from "react-toastify"




const RegisterCat = () => {
    const [cat , setCat] = useState({
        nameCat : "" ,
        
    })

    const [sub , setSub] = useState("") ;

    const [subCat , setSubCat]=useState([]);
    const navigate = useNavigate()
   
    const errorNotify = (value) => toast.error(value);
    const sucessNotify =(value)=>toast.success(value)

    const handelChange =(e)=>{
        setCat({...cat , [e.target.name]:e.target.value})
       
    }

    const selectChange =(e)=>{
        // setSubCat([...subCat , e.target.value])
        setSub({...sub , [e.target.name]:e.target.value})
    }
    console.log(sub.sub);

    const handelAdd =(e)=>{
        e.preventDefault();
        setSubCat([...subCat , sub.sub])
    }
    console.log(subCat);
    
    const handelSubmit=(e)=>{
        e.preventDefault();
        addCat({nameCat : cat.nameCat ,
            subCat : subCat
        })
        .then((doc)=>{
            
            sucessNotify(doc.msg);
            navigate("/admin")
        })
        .catch((err)=>{
            
            errorNotify(err.response.data.msg)
        })
    }



    return (
        <div style={{
            margin: "10%", 
         display:"flex" , justifyContent:"space-between", alignItems:"center", flexWrap:"wrap"}}>
           <div style={{ width:"50%" , height:"400px" , backgroundColor:"aquamarine", display:"flex", justifyContent:"center",alignItems:"center"}}>
           <h1>New Category</h1>
           </div>
            
            <Form>
              
        
              <Form.Group className="mb-3" controlId="formGridAddress1" >
                <Form.Label>Name categori</Form.Label>
                <Form.Control placeholder="Name categori" name="nameCat" onChange={handelChange}/>
                <Form.Label>Sub categori</Form.Label>
                <Form.Control placeholder="Sub categori" name="sub" onChange={selectChange}/>
                <Button variant="primary" type="submit" onClick={(e)=>handelAdd(e)}>
                add
              </Button>
                {/* <select multiple  onChange={(e)=>selectChange(e)}>
                    <option value="purfum">purfum</option>
                    <option value="maquillage">maquillage</option>
                    <option value="xbox">xbox</option>
                </select> */}
                {/* <input type='checkbox' value="purfum" onChange={(e)=>selectChange(e)}/> purfum
                <input type='checkbox' value="maquillage" onChange={(e)=>selectChange(e)}/> maquillage
                <input type='checkbox' value="xbox" onChange={(e)=>selectChange(e)}/> xbox */}
              </Form.Group>
        
              
        
              <Button variant="primary" type="submit" onClick={(e)=>handelSubmit(e)}>
                Submit
              </Button>
              
            </Form>
             
                </div>
        
    )
} ;

export default RegisterCat ;