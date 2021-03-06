import { Fragment, useEffect, useState } from "react";
import axios from 'axios';
import CitasPage from "../Components/Pages/CitasPage";
import CitasView from "../Components/Views/CitasView";

const HOST_API_CORTES = "http://localhost:8080/Cortes";
const HOST_API_ESTILISTAS = "http://localhost:8080/Estilista";
const HOST_API_CITAS = "http://localhost:8080/Citas"
const HOST_API_TURNO = "http://localhost:8080/Turno/editar"


export const getCortes=async(setList)=>{
    const aux= await axios.get(HOST_API_CORTES+"/buscar").then(res=>{ return res.data})
    setList(aux)

 };
 
export const getEstilista=async(setestile)=>{
    const aux= await axios.get(HOST_API_ESTILISTAS+"/buscar").then(res=>{ return res.data})
    setestile(aux)
 };

export const addCita=async(form,setList,list,split,setEstilista)=>{
    const data={
        codigo_mascota:{
            codigo:parseInt(form.codigo_mascotas.codigo)
        },
        id_corte:{
            id:parseInt(form.id_corte.id)
        },
        estilista:{
            cedula:parseInt(form.estilista.cedula)
        },
        hora:split[1]
    }
    try{
    const aux= await axios.post(HOST_API_CITAS+"/agregar",data).then(res=>{ return res.data})
    if(aux.codigo!==undefined){
    setList([...list,aux])
    editTurno(form,split,setEstilista)
    console.log("dentro");
    return true
    }
    }catch(error){
    }
    return false
 };

 export const editTurno=async(form,split,setEstilista)=>{
     var booleano;
     if(split[3]==="true"){
        booleano=true;
     }else{
        booleano=false;
     }
 
    const data={
        id:parseInt(split[0]),
        turno:split[1],
        ced_estilista:{
            cedula:parseInt(form.estilista.cedula)
        },
        estado:booleano
    }
     await axios.put(HOST_API_TURNO,data).then(res=>{ return res.data})
    getEstilista(setEstilista)
 }

 export const getByMascota=async(setList,mascota)=>{ 
 const aux= await axios.get(HOST_API_CITAS+"/buscar/"+mascota).then(res=>{ return res.data})
 setList(aux)
 };

 export const eliminarCita=async(codigo,data,setList,list,setEstilista)=>{
    await axios.delete(HOST_API_CITAS+"/eliminar/"+codigo).then(res=>{ return res.data})
     await axios.put(HOST_API_TURNO,data).then(res=>{ return res.data})
    getEstilista(setEstilista);
    setList(list.filter(x=>x.codigo!==codigo))
}


 export function Citas(){
     const resetForm={
        codigo_mascotas:{
            codigo:"0"
        },
        id_corte:{
            id:"0"
        },
        estilista:{
            cedula:"0"
        },
        hora:{
            turno:"0",
            todo:{}
        }
    }
     const [cortes,setCortes]=useState([]);
     const [estilista,setEstilista]=useState([{}]);
     const [mascota,setMascota]=useState([]);
     const [form,setForm]=useState(resetForm);
    const [msg,setMsg]=useState("");
    const [list,setList]=useState([]);

     useEffect(()=>{
        var user=JSON.parse(localStorage.getItem("Data"))
        getEstilista(setEstilista);
        getCortes(setCortes);
        setMascota(user.mascotasModels)
        getByMascota(setList,0)
     },[setCortes,setList])

     const ConfirmarValores=async()=>{
        if(form.codigo_mascotas.codigo==="0"||form.id_corte.id==="0"||form.estilista.cedula==="0"||form.hora.turno==="0"){
            setMsg("Seleccione todos los campos");
        }else{
            const split=form.hora.split("-")
            setMsg("");
            if(await addCita(form, setList,list,split,setEstilista)){
            setForm(resetForm)
            }
        }
    }

    const onChangeMascota=(selectMascota)=>{
        getByMascota(setList,selectMascota)
    }

    const cancelarCita=async(codigo,cedula,hora)=>{
        let aux=estilista.filter(item=>item.cedula===cedula)
        aux=aux[0].turnos.filter(item=>item.turno===hora);
        aux[0].ced_estilista={
            cedula:cedula
        }
        aux[0].estado= !aux[0].estado
        await eliminarCita(codigo,aux[0],setList,list,setEstilista,estilista)
        setForm(resetForm)
    }
    return(
        <Fragment>
            {<CitasView cortes={cortes}  estilistas={estilista} mascotas={mascota} form={form} setForm={setForm} msg={msg}  ConfirmarValores={ConfirmarValores} onChangeMascota={onChangeMascota}></CitasView>}
            <CitasPage list={list} cancelarCita={cancelarCita}></CitasPage>
        </Fragment>
    )
 }