import React, { useState } from 'react';
import axios from 'axios';
import RegisterPage from '../Components/Pages/RegisterPage';
import { useNavigate } from 'react-router';

const HOST_API_USER = 'http://localhost:8080/Usuario'

export const Register = () => {
    const [usuario, guardarUsuario] = useState({});
    const navigate = useNavigate();

    const save=async()=>{
        if(await saveRegister(usuario)){
            navigate("/Login")
        }
    }

    return <RegisterPage save={save} usuario={usuario} guardarUsuario={guardarUsuario}/>
}

export const saveRegister=async(data)=>{
    try{
    var aux= await axios.post(`${HOST_API_USER}/agregar`, data).then(res=>{ return res.data});
        if(aux!==undefined){
            return true;
        }
    }catch(error){
        alert("La cedula o el correo ya fueron registrados")
    
    }
    return false;
}


