import axios from "axios";
import { getLocalStorage } from "../helpers/localStorage";


// register api call 

export const signUp =async(values)=>{

   let {data}= await axios.post(`${process.env.REACT_APP_URI}/auth/register`,values)
  return data
} ;

export const login = async (values)=>{
    let {data}= await axios.post(`${process.env.REACT_APP_URI}/auth/login`,values)
    return data
  } ;

// update password
  export const updatePwd =async(values)=>{
    let token = getLocalStorage('token')
    let {data}= await axios.put(`${process.env.REACT_APP_URI}/auth/updatePwd`,values, {headers:{
      "Authorization":token}})
  return data
 } ;