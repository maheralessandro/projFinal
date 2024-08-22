import axios from "axios";
import { getLocalStorage } from "../helpers/localStorage";



// get all products

export const allProducts = async()=>{

    let {data} = await axios.get(`${process.env.REACT_APP_URI}/auth/allProd`);
    return data
};

// update product

export const updateProd = async(values,ID) =>{
    let token = getLocalStorage('token')
    let {data} = await axios.put(`${process.env.REACT_APP_URI}/auth/updateprod/${ID}`,values, {headers:{
        "Authorization":token
    }});
    return data
}
// delete product 

export const deleteProduct = async(ID) =>{
    let token = getLocalStorage('token')
    let {data} = await axios.delete(`${process.env.REACT_APP_URI}/auth/deleteprod/${ID}`  , {headers:{
        "Authorization" : token
    }})
    return data
}

// get product with _id from params 

export const singleProd = async(ID)=>{
    let {data} = await axios.get(`${process.env.REACT_APP_URI}/auth/prodById/${ID}`)
    return data
}
// add a new product
export const addProds = async (values)=>{

    let token = getLocalStorage('token')
    let {data} = await axios.post(`${process.env.REACT_APP_URI}/auth/addprod` , values,{headers:{
        "Authorization":token,
        'Content-Type': 'multipart/form-data'
    }}) ;
    return data
} ;

export const getCategory = async ()=>{
    let{data} = await axios.get(`${process.env.REACT_APP_URI}/auth/allCatt`)
    return data
} ;

// get card
export const myOrders = async()=>{
    let token = getLocalStorage('token')
    let{data} = await axios.get(`${process.env.REACT_APP_URI}/auth/myOrders`  , {headers:{
        "Authorization":token}})
    return data
}
//create shop cart
export const bagCart = async (values)=>{
    let token = getLocalStorage('token')
    let{data} = await axios.post(`${process.env.REACT_APP_URI}/auth/creeteCart`  , values , {headers:{
        "Authorization":token}})
    return data
} ;

// add categori

export const addCat = async (values)=>{

    let token = getLocalStorage('token')
    let {data} = await axios.post(`${process.env.REACT_APP_URI}/auth/addcat` , values,{headers:{
        "Authorization":token
    }}) ;
    return data
} ;

// get all orders

export const allOrders = async()=>{
    let token = getLocalStorage('token')
    let{data} = await axios.get( `${process.env.REACT_APP_URI}/auth/allOrders`  , {headers:{
        "Authorization":token}})
    return data
} ;



