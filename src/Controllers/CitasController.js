import { Fragment, useEffect, useState } from "react";
import axios from 'axios';
import CitasPage from "../Components/Pages/CitasPage";
import CitasView from "../Components/Views/CitasView";

const HOST_API_CORTES = "http://localhost:8080/Cortes";
const HOST_API_ESTILISTAS = "http://localhost:8080/Estilista";
const HOST_API_CITAS = "http://localhost:8080/Citas"

export const getCortes=async(setList)=>{
    const aux= await axios.get(HOST_API_CORTES+"/buscar").then(res=>{ return res.data})
    setList(aux)
    console.log("getcortes");
 };
 
export const getEstilista=async(setList)=>{
    const aux= await axios.get(HOST_API_ESTILISTAS+"/buscar").then(res=>{ return res.data})
    setList(aux)
    console.log("getestilistas");
 };

export const addCita=async(form)=>{
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
        hora:form.hora
    }
    const aux= await axios.post(HOST_API_CITAS+"/agregar",data).then(res=>{ return res.data})
    console.log(aux);
    console.log("addlista");
 };

 export function Citas(){
     const [cortes,setCortes]=useState([]);
     const [estilista,setEstilista]=useState([]);
     const [mascota,setMascota]=useState([]);
     const [form,setForm]=useState([]);
    const [msg,setMsg]=useState("");

     useEffect(()=>{

        getEstilista(setEstilista);
        getCortes(setCortes);
        setMascota([{codigo:"1"},{codigo:"2"}])
        console.log(mascota);
   
        setForm({
            codigo_mascotas:{
                codigo:"0"
            },
            id_corte:{
                id:"0"
            },
            estilista:{
                cedula:"0"
            },
            hora:"0"
        })
     },[])

     const ConfirmarValores=()=>{
        console.log(form);
        if(form.codigo_mascotas.codigo===0||form.id_corte.id===0||form.estilista.cedula===0||form.hora==="0"){
            setMsg("Seleccione todos los campos");
        }else{
            setMsg("");
            addCita(form)
        }
    }

    return(
        <Fragment>
            {<CitasView cortes={cortes}  estilistas={estilista} mascotas={mascota} form={form} setForm={setForm} msg={msg} ConfirmarValores={ConfirmarValores}></CitasView>}
            <CitasPage ></CitasPage>
        </Fragment>
    )
 }