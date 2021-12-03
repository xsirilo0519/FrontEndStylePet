import React, {  useState } from 'react';

function CitasView({cortes,estilistas,mascotas,form,setForm,msg,ConfirmarValores,onChangeMascota}) {
    const[turnos,setTurnos]=useState([]);
    
    const AsignarTurno=(cedula)=>{
        setTurnos([])
        console.log(cedula);
        if(cedula!=="0"){
        estilistas.map((estilista)=>{
            if(estilista.cedula===parseInt(cedula)){
                setTurnos(estilista.turnos)
            }
            return null
        })}
    }

    return (
        <div style={{textAlign:"center"}}>
        <div className="Checkbox-Container">
                    <div className="Contenedor-comboBox">
                        <p>Nombre de mascota</p>
                    <select name="select" value={form.codigo_mascotas==null?"":form.codigo_mascotas.codigo} onChange={(e)=>{onChangeMascota(parseInt(e.target.value));setForm({...form,codigo_mascotas:{codigo:e.target.value}})}} >
                        <option key="500" value="0">Seleccione</option>
                           {mascotas.map((mascota)=>{
                            return <option key={mascota.codigo+" "+mascota.name} value={mascota.codigo}>{mascota.name}</option>
                            })}
                   </select>
                   </div>
                   <div className="Contenedor-comboBox">
                   <p>Tipo de corte</p>
                    <select  name="select" value={form.id_corte==null?"":form.id_corte.id} onChange={(e)=>{setForm({...form,id_corte:{id:e.target.value}})}} >
                            <option key="400" value="0">Seleccione</option>
                           {cortes.map((corte)=>{
                            return <option key={corte.name} value={corte.id} >{corte.name}</option>
                            })}
                   </select>
                   </div>  
                   <div className="Contenedor-comboBox">
                   <p>Estilista</p>     
                   <select  name="select" value={form.estilista==null?"":form.estilista.cedula} onChange={(e)=>{AsignarTurno(e.target.value);setForm({...form,estilista:{cedula:e.target.value}})}} >
                            <option key="200" value="0">Seleccione</option>
                           {estilistas.map((estilista)=>{
                            return <option key={estilista.name+" "+estilista.cedula} value={estilista.cedula}>{estilista.name}</option>
                            })}
                   </select>
                   </div>
                   <div className="Contenedor-comboBox">
                   <p>Hora</p> 
                   <select name="select" value={form.hora==null?"":form.hora} onChange={(e)=>{setForm({...form,hora:e.target.value})}} >
                            <option key="300" value="0">Seleccione</option>
                           {turnos.map((turno)=>{
                               if(turno.estado){
                            return <option key={turno.id+" "+turno.turno} value={turno.id+"-"+turno.turno+"-"+turno.estado} >{turno.turno}</option>}
                            return null
                            })}
                   </select>
                   </div>
                   <div className="bnt-views" onClick={()=>{setTurnos([]); ConfirmarValores()}}>Agregar</div>
        </div>
        <span style={{color:"red"}}>{msg}</span>
        </div>
    );
}

export default CitasView;