import logo from './logo.svg';
import React, { createContext } from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

import Cabecera from './components/Header';
import Listado from './components/Listado';
import Categorias from './components/Categorias';

let nombre = "El Lucho Resto";
let direccion ="Mi Casa 876 - Victoria, Entre Rios";
let wsp = "34567890";
let insta = "@MiResto_MiCiudad";
let mesa
let mesaControl = true

export const AppContext = createContext({ 
  categoria: 1,
});

function dameMEsa(){
  mesa = window.location.pathname.split( '/' );
  
  if ((mesa[1].length === 0)){
    mesaControl=false
  } 

}


function App() {
  dameMEsa();
  console.log("Soy mesa control: " + mesaControl)
  return (
    <AppContext.Provider>
      <div className="container-sm justify-content-center"style={{
        maxWidth:"750px"
      }}>
          <div className="mt-1">
            <Cabecera 
              nombre={nombre}
              direccion={direccion}
              wsp={wsp} 
              instagram={insta} 
              mesa={mesa}
              />
          </div>
      
          <div className="mt-1">
            <Categorias />
          </div>
          <div className="mt-1">
            
            <Listado mesa={mesaControl}/>
          </div>
        </div>
      </AppContext.Provider>
  );
}

export default App;
