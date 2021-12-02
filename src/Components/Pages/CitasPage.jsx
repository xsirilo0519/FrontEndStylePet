import React, { useContext } from 'react';
import { Navigate } from 'react-router';
import { UserContext } from '../../Context/UserContext';

function CitasPage() {
    const {isLogin, setIsLogin}=useContext(UserContext);
    if(isLogin){
    return (
        <div className="NormalPage">
           citas 
        </div>
    );
}else{
    return <Navigate to="/"></Navigate>
}
}

export default CitasPage;