import React, { useState } from 'react';

function CitasView({cortes,estilistas,mascotas,form,setForm}) {
    const[turnos,setTurnos]=useState([]);

    const hola=()=>{
        console.log(form);
    }

    const AsignarTurno=(cedula)=>{
        if(cedula!=="0"){
        estilistas.map((estilista)=>{
            if(estilista.cedula==cedula){
                setTurnos(estilista.turnos)
            }
        })}else {
            setTurnos([])
        }

    }

    return (
        <div>

                    <div>
                        <p>Nombre de mascota</p>
                    <select name="select" value={form.codigo_mascotas==null?"":form.codigo_mascotas.codigo} onChange={(e)=>{setForm({...form,codigo_mascotas:{codigo:e.target.value}})}} >
                        <option key="0" value="0">Seleccione</option>
                           {mascotas.map((mascota)=>{
                            return <option key={mascota.codigo} value={mascota}>{mascota.codigo}</option>
                            })}
                   </select>
                   </div>
                   <div>
                   <p>Tipo de corte</p>
                    <select  name="select" value={form.id_corte==null?"":form.id_corte.id} onChange={(e)=>{setForm({...form,id_corte:{id:e.target.value}})}} >
                            <option key="0" value="0">Seleccione</option>
                           {cortes.map((corte)=>{
                            return <option key={corte.name} value={corte.id} >{corte.name}</option>
                            })}
                   </select>
                   </div>  
                   <div>  
                   <p>Estilista</p>     
                   <select  name="select" value={form.estilista==null?"":form.estilista.cedula} onChange={(e)=>{AsignarTurno(e.target.value);setForm({...form,estilista:{cedula:e.target.value}})}} >
                            <option key="0" value="0">Seleccione</option>
                           {estilistas.map((estilista)=>{
                            return <option key={estilista.cedula} value={estilista.cedula}>{estilista.name}</option>
                            })}
                   </select>
                   </div>
                   <div>
                   <p>Hora</p> 
                   <select name="select" value={form.hora==null?"":form.hora} onChange={(e)=>{setForm({...form,hora:e.target.value})}} >
                            <option key="0" value="0">Seleccione</option>
                           {turnos.map((turno,index)=>{
                            return <option value={turno.turno} >{turno.turno}</option>
                            })}
                   </select>
                   </div>
                   <button onClick={()=>{hola()}}>hola</button>
                   
            
    
        </div>
    );
}

export default CitasView;