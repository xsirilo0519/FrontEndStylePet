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
    const[newMascota,setnewMascota]=useState(defaulMascota);
    const[tipo,setTipo]=useState([]);
    const[msg,setMsg]=useState("");
    const[isEdit,setIsEdit]=useState(false);
   
    useEffect(()=>{
        var user=JSON.parse(localStorage.getItem("Data"))
        setUser(user)
        setMascotas(user.mascotasModels)
        getTipos(setTipo)
    },[setTipo,setUser,setMascotas])

    const ConfirmarValores=()=>{
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

    const editarMascota=()=>{
        if(newMascota.name!==""&&newMascota.name[0]!==" "&&newMascota.tipo!=="0"){
            editMascota(setMascotas,mascotas,newMascota,User,setUser)
            setnewMascota(defaulMascota)
            setMsg("")
            setIsEdit(false)
        }else{
            setMsg("Por favor llene todos los campos")
        }
    }
    const editarMascotaModo=(mascota)=>{
        setnewMascota({
            codigo:mascota.codigo,
            tipo:mascota.tipo.id+"-"+mascota.tipo.name,
            name:mascota.name
        })
        setIsEdit(true)
    }

    return(
    <Fragment>
    <MascotasView tipo={tipo} newMascota={newMascota} setnewMascota={setnewMascota} msg={msg} ConfirmarValores={ConfirmarValores} isEdit={isEdit} editarMascota={editarMascota} />
    <MisMascotasPage mascotas={mascotas} eliminarMascota={eliminarMascota} editarMascotaModo={editarMascotaModo}/>
    </Fragment>);
}


export const editMascota=async(setMascotas,mascotas,newMascota,User,setUser)=>{
    const split=newMascota.tipo.split("-");
    const data={
        codigo:newMascota.codigo,
        name:newMascota.name,
    tipo:{
        id:split[0],
        name:split[1]
    },
    propietario:{
        cedula:User.cedula
    }
}
 await axios.put(HOST_API_MASCOTA+"/editar",data).then(res=>{ return res.data})
let listMascotas=mascotas.filter(x=>x.codigo!==data.codigo)
listMascotas=[...listMascotas,data]
setMascotas(listMascotas.sort((x,y)=>x.codigo-y.codigo));
saveInStorage({...User,mascotasModels:listMascotas.sort((x,y)=>x.codigo-y.codigo)})

}


export const saveInStorage=(user)=>{
    localStorage.setItem('Data',JSON.stringify(user))
}

export const deleteMascota=async(codigo,setMascotas,mascotas,User)=>{
    await axios.delete(HOST_API_MASCOTA+"/eliminar/"+codigo).then(res=>{ return res.data})
    setMascotas(mascotas.filter(x=>x.codigo!==codigo))
    saveInStorage({...User,mascotasModels:mascotas.filter(x=>x.codigo!==codigo)});
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
saveInStorage({...User,mascotasModels:[...mascotas,aux]})
}

export const getTipos=async(setTipo)=>{
    const aux= await axios.get(HOST_API_TIPO+"/buscar").then(res=>{ return res.data})
    setTipo(aux)
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