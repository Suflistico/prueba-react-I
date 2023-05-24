
import "bootstrap/dist/css/bootstrap.min.css"

import React, { useState, useEffect} from "react";
import MiApi from "./components/MiApi";
import Barra from "./components/Barra"

 //extraer informacion de API
function App() {
  const [feriados, setferiados] = useState([]);
  const [search, setSearch] = useState ('');

  useEffect(() => {
    const fetchferiados = async () => {
      try{
        const response = await fetch('https://api.victorsanmartin.com/feriados/en.json');
        const feriados = await response.json();
        console.log('feriados', feriados);
        setferiados(feriados);        
      } catch(error) {
        console.log(error);
      }
    }
    fetchferiados();
  },[]);
  const handleSearchChange = (value) => {
    setSearch(value);
  }

  return (
    <>
      <Barra onSearchChange={handleSearchChange}/> 
      <div className='container'>        
        <MiApi feriadosData={feriados} searchTerm={search}/>
      </div>
    </>
  );
}

export default App;