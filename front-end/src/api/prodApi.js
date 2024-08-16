import axios from "axios";
import { getLocalStorage } from "../helpers/localStorage";



// get all products

export const allProducts = async()=>{

    let {data} = await axios.get("http://localhost:7000/auth/allProd");
    return data
};

// update product

export const updateProd = async(values,ID) =>{
    let token = getLocalStorage('token')
    let {data} = await axios.put(`http://localhost:7000/auth/updateprod/${ID}`,values, {headers:{
        "Authorization":token
    }});
    return data
}
// delete product 

export const deleteProduct = async(ID) =>{
    let token = getLocalStorage('token')
    let {data} = await axios.delete(`http://localhost:7000/auth/deleteprod/${ID}`  , {headers:{
        "Authorization" : token
    }})
    return data
}

// get product with _id from params 

export const singleProd = async(ID)=>{
    let {data} = await axios.get(`http://localhost:7000/auth/prodById/${ID}`)
    return data
}
// add a new product
export const addProds = async (values)=>{

    let token = getLocalStorage('token')
    let {data} = await axios.post("http://localhost:7000/auth/addprod" , values,{headers:{
        "Authorization":token,
        'Content-Type': 'multipart/form-data'
    }}) ;
    return data
} ;

export const getCategory = async ()=>{
    let{data} = await axios.get("http://localhost:7000/auth/allCatt")
    return data
} ;

// get card
export const myOrders = async()=>{
    let token = getLocalStorage('token')
    let{data} = await axios.get("http://localhost:7000/auth/myOrders"  , {headers:{
        "Authorization":token}})
    return data
}
//create shop cart
export const bagCart = async (values)=>{
    let token = getLocalStorage('token')
    let{data} = await axios.post("http://localhost:7000/auth/creeteCart" , values , {headers:{
        "Authorization":token}})
    return data
} ;

// add categori

export const addCat = async (values)=>{

    let token = getLocalStorage('token')
    let {data} = await axios.post("http://localhost:7000/auth/addcat" , values,{headers:{
        "Authorization":token
    }}) ;
    return data
} ;

// get all orders

export const allOrders = async()=>{
    let token = getLocalStorage('token')
    let{data} = await axios.get("http://localhost:7000/auth/allOrders"  , {headers:{
        "Authorization":token}})
    return data
} ;



