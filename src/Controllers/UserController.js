import axios from 'axios';
import LoginPage from '../Components/Pages/LoginPage';
import { Fragment, useContext, useState } from 'react';
import { UserContext } from '../Context/UserContext';

const HOST_API_USER = "http://localhost:8080/Usuario";

export const getLogin=async(data,setMsg,setIsLogin)=>{
    try{
    const aux= await axios.post(HOST_API_USER+"/login",data).then(res=>{ return res.data})
    setMsg("")
    setIsLogin(true)
    localStorage.setItem('Data',JSON.stringify(aux))
    }catch(error){
        setMsg("Correo o contraseña incorrectas")
    }
}

export const Cerrar=()=>{
    const {setIsLogin}=useContext(UserContext);
    localStorage.removeItem("Data")
    setIsLogin(false)
    return(<Fragment></Fragment>)
}


export const Login =()=>{
    const {setIsLogin}=useContext(UserContext);
    const [usuario,guardarUsuario]=useState(
        {
            email:"",
            contrasena:""
        }
    );
    const [msg,setMsg]=useState("")
    const loguear =(e)=>{
        e.preventDefault();
        getLogin(usuario,setMsg,setIsLogin)
    }

    return(<LoginPage usuario={usuario} guardarUsuario={guardarUsuario} loguear={loguear} msg={msg}/>)
}


