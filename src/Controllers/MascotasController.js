import React, { useEffect, useState } from 'react'
import { Fragment } from 'react/cjs/react.production.min';
import MisMascotasPage from '../Components/Pages/MisMascotasPage';
import MascotasView from '../Components/Views/MascotasView';
import axios from 'axios';

const HOST_API_MASCOTA="http://localhost:8080/Mascotas"
const HOST_API_TIPO="http://localhost:8080/Tipo"

export const Mascotas=()=>{
    const[mascotas,setMascotas]=useState([]);
    const[User,setUser]=useState([]);
    const[newMascota,setnewMascota]=useState([]);
    const[tipo,setTipo]=useState([]);
    const[msg,setMsg]=useState("");
   
    useEffect(()=>{
        var user=JSON.parse(localStorage.getItem("Data"))
        setUser(user)
        setMascotas(user.mascotasModels)
        getTipos(setTipo)
        setnewMascota(defaulMascota)
    },[setTipo,setUser,setMascotas])

    const ConfirmarValores=()=>{
        console.log(newMascota);
        if(newMascota.name!==""&&newMascota.name[0]!==" "&&newMascota.tipo!=="0"){
            addMascota(setMascotas,mascotas,newMascota,User,setUser)
            setnewMascota(defaulMascota)
            setMsg("")
        }else{
            setMsg("Por favor llene todos los campos")
        }
    }

    const eliminarMascota=(codigo)=>{
        deleteMascota(codigo,setMascotas,mascotas,User)
    }

    return(
    <Fragment>
    <MascotasView tipo={tipo} newMascota={newMascota} setnewMascota={setnewMascota} msg={msg} ConfirmarValores={ConfirmarValores} />
    <MisMascotasPage mascotas={mascotas} eliminarMascota={eliminarMascota}/>
    </Fragment>);
}

export const saveInStorage=(user)=>{
    localStorage.setItem('Data',JSON.stringify(user))
}

export const deleteMascota=async(codigo,setMascotas,mascotas,User)=>{
    await axios.delete(HOST_API_MASCOTA+"/eliminar/"+codigo).then(res=>{ return res.data})
    setMascotas(mascotas.filter(x=>x.codigo!==codigo))
    saveInStorage({...User,mascotasModels:mascotas.filter(x=>x.codigo!==codigo)});
    console.log("deletemascota");
}

export const addMascota=async(setMascotas,mascotas,newMascota,User,setUser)=>{
    const split=newMascota.tipo.split("-");
    const data={
        name:newMascota.name,
    tipo:{
        id:split[0]
    },
    propietario:{
        cedula:User.cedula
    }
}
const aux= await axios.post(HOST_API_MASCOTA+"/agregar",data).then(res=>{ return res.data})
setMascotas([...mascotas,aux])
setUser({...User,mascotasModels:[...mascotas,aux]})
console.log(User);
saveInStorage({...User,mascotasModels:[...mascotas,aux]})
console.log("addMascota");
}

export const getTipos=async(setTipo)=>{
    const aux= await axios.get(HOST_API_TIPO+"/buscar").then(res=>{ return res.data})
    console.log(aux);
    setTipo(aux)
    console.log("gettipos");
}

export const defaulMascota=()=>{
    return {
        name:"",
        tipo:"0",
        propietario:{
            cedula:0
        }
    }
}