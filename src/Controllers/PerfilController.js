import React, { useEffect, useState } from 'react'
import PerfilPage from '../Components/Pages/PerfilPage.jsx'
import { useNavigate } from 'react-router';
import axios from 'axios';

const HOST_API_USER = 'http://localhost:8080/Usuario'

export const Perfil=()=>{

    const [usuario, guardarUsuario] = useState({});
    const navigate = useNavigate();

    useEffect(()=>{
        var user=JSON.parse(localStorage.getItem("Data"))
        guardarUsuario({
            name:user.name,
            cedula:user.cedula,
            email:user.email,
            celular:user.celular,
            contrasena:user.contrasena,
            rol:{
                id:user.rol.id,
                name:user.rol.name
            },
            mascotasModels:user.mascotasModels
        })
    },[])

    const edit=async()=>{
        if(await editRegister(usuario)){
            navigate("/")
        }
    }

    return(
        <PerfilPage edit={edit} usuario={usuario} guardarUsuario={guardarUsuario}></PerfilPage>
    )
    }
    export const editRegister=async(data)=>{
        try{
        var aux= await axios.put(`${HOST_API_USER}/editar`, data).then(res=>{ return res.data});
            if(aux!==undefined){
                localStorage.setItem('Data',JSON.stringify(data))
                return true;
            }
        }catch(error){
            alert("La cedula o el correo ya fueron registrados")
        
        }
        return false;
    }
