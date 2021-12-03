import React, { Fragment } from 'react';

function MascotasView({tipo,newMascota,setnewMascota,msg,ConfirmarValores}) {
    return (
        <Fragment>
        <div className="Checkbox-Container">
            <div style={{margin:20}}>
            <p>Nombre de mascota</p>
            <input value={newMascota.name}  type="text" onChange={(e) => setnewMascota({...newMascota, name: e.target.value })} placeholder="Nombre de Usuario" required></input>
            </div>
            <p>Tipo</p>
            <div style={{margin:20}}>
                     <select name="select" value={newMascota.tipo==null?"":newMascota.tipo} onChange={(e)=>{setnewMascota({...newMascota,tipo:e.target.value})}} >
                        <option key="0" value="0">Seleccione</option>
                           {tipo.map((tipo)=>{
                            return <option key={tipo.id} value={tipo.id+"-"+tipo.name}>{tipo.name}</option>
                            })}
                   </select>
            </div>
            <button onClick={()=>{ ConfirmarValores()}}>Agregar</button><br/>
                      
        </div>
        <span>{msg}</span>  
        </Fragment>
    );
}

export default MascotasView;