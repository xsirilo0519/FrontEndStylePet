import React, { useState } from 'react';

function CitasView({cortes,estilistas,mascotas,form,setForm,msg,ConfirmarValores}) {
    const[turnos,setTurnos]=useState([]);

    const AsignarTurno=(cedula)=>{
        if(cedula!=="0"){
        estilistas.map((estilista)=>{
            if(estilista.cedula===parseInt(cedula)){
                setTurnos(estilista.turnos)
            }
        })}else {
            setTurnos([])
        }
    }

    return (
        <div className="Checkbox-Container">
                    <div style={{margin:20}}>
                        <p>Nombre de mascota</p>
                    <select name="select" value={form.codigo_mascotas==null?"":form.codigo_mascotas.codigo} onChange={(e)=>{setForm({...form,codigo_mascotas:{codigo:e.target.value}})}} >
                        <option key="0" value="0">Seleccione</option>
                           {mascotas.map((mascota)=>{
                            return <option key={mascota.codigo} value={mascota.codigo}>{mascota.codigo}</option>
                            })}
                   </select>
                   </div>
                   <div style={{margin:20}}>
                   <p>Tipo de corte</p>
                    <select  name="select" value={form.id_corte==null?"":form.id_corte.id} onChange={(e)=>{setForm({...form,id_corte:{id:e.target.value}})}} >
                            <option key="0" value="0">Seleccione</option>
                           {cortes.map((corte)=>{
                            return <option key={corte.name} value={corte.id} >{corte.name}</option>
                            })}
                   </select>
                   </div>  
                   <div style={{margin:20}}>
                   <p>Estilista</p>     
                   <select  name="select" value={form.estilista==null?"":form.estilista.cedula} onChange={(e)=>{AsignarTurno(e.target.value);setForm({...form,estilista:{cedula:e.target.value}})}} >
                            <option key="0" value="0">Seleccione</option>
                           {estilistas.map((estilista)=>{
                            return <option key={estilista.cedula} value={estilista.cedula}>{estilista.name}</option>
                            })}
                   </select>
                   </div>
                   <div style={{margin:20}}>
                   <p>Hora</p> 
                   <select name="select" value={form.hora==null?"":form.hora} onChange={(e)=>{setForm({...form,hora:e.target.value})}} >
                            <option key="0" value="0">Seleccione</option>
                           {turnos.map((turno,index)=>{
                            return <option value={turno.turno} >{turno.turno}</option>
                            })}
                   </select>
                   </div>
                   <button onClick={()=>{ConfirmarValores()}}>Agregar</button><br/>
                   <span>{msg}</span>
                   
            
    
        </div>
    );
}

export default CitasView;