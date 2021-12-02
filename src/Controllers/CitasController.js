import { Fragment, useEffect, useState } from "react";
import axios from 'axios';
import CitasPage from "../Components/Pages/CitasPage";
import CitasView from "../Components/Views/CitasView";

const HOST_API_CORTES = "http://localhost:8080/Cortes";
const HOST_API_ESTILISTAS = "http://localhost:8080/Estilista";

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


 export function Citas(){
     const [cortes,setCortes]=useState([]);
     const [estilista,setEstilista]=useState([]);
     const [mascota,setMascota]=useState([]);
     const [form,setForm]=useState([]);

     useEffect(()=>{
    
        getEstilista(setEstilista);
        getCortes(setCortes);
        setMascota([{codigo:1},{codigo:2}])
        console.log(mascota);
   
        setForm({
            codigo_mascotas:{
                codigo:0
            },
            id_corte:{
                id:0
            },
            estilista:{
                cedula:0
            },
            hora:""
        })
     },[])

    return(
        <Fragment>
            {<CitasView cortes={cortes}  estilistas={estilista} mascotas={mascota} form={form} setForm={setForm}></CitasView>}
            <CitasPage ></CitasPage>
        </Fragment>
    )
 }