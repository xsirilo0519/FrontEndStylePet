import React, { Fragment } from 'react';
import '../../Style/login.css';

function MascotasView({tipo,newMascota,setnewMascota,msg,ConfirmarValores,isEdit,editarMascota}) {
    return (
        <div style={{textAlign:"center"}}>
        <div className="Checkbox-Container">
        <div className="Contenedor-comboBox">
            <p>Nombre de mascota</p>
            <input value={newMascota.name}  type="text" onChange={(e) => setnewMascota({...newMascota, name: e.target.value })} placeholder="Nombre de su mascota" required></input>
            </div>
            <div className="Contenedor-comboBox">
            <p>Tipo</p>
     
                     <select name="select" value={newMascota.tipo==null?"":newMascota.tipo} onChange={(e)=>{setnewMascota({...newMascota,tipo:e.target.value})}} >
                        <option key="0" value="0">Seleccione</option>
                           {tipo.map((tipo)=>{
                            return <option key={tipo.id} value={tipo.id+"-"+tipo.name}>{tipo.name}</option>
                            })}
                   </select>
     
            </div>
            {isEdit?<div className="bnt-views" onClick={()=>{ editarMascota()}}>Editar</div>:<div className="bnt-views" onClick={()=>{ ConfirmarValores()}}>Agregar</div>}
            <br/>
                      
        </div>
        <span style={{color:"red"}}>{msg}</span>  
        </div>
    );
}

export default MascotasView;