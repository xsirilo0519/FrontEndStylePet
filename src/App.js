import './App.css';
import {UserContext} from './Context/UserContext'
import Navbar from './Components/NavBar.jsx'
import Rutas from './Components/Rutas';
import Footer from './Components/Footer';
import { useEffect, useState } from 'react';
function App() {
  const [isLogin, setIsLogin] = useState(false)

  useEffect(()=>{
    /*const CheckLogin=()=>{
      try{
        var user=JSON.parse(localStorage.getItem("Data"))
        if(user.id){
        setIsLogin(true)
        }
      }catch{
        setIsLogin(false)
      }
    }
    CheckLogin()*/
    console.log("hola");
  },[])

  return (
    <UserContext.Provider value={{isLogin, setIsLogin}}>
      <Navbar/>
      <div className="App">
      <Rutas/>
      </div>
      <Footer/>
    </UserContext.Provider>

  );
}

export default App;
