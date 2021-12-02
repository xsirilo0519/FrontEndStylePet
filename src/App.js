import './App.css';
import {UserContext} from './Context/UserContext'
import Navbar from './Components/NavBar.jsx'
import Rutas from './Components/Rutas';
import Footer from './Components/Footer';
function App() {
  return (
    
    <UserContext.Provider>
      <Navbar/>
      <div className="App">
      <Rutas/>
      </div>
      <Footer/>
    </UserContext.Provider>

  );
}

export default App;
