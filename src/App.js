import { useState, useEffect } from "react"
import './App.css';
import Formulario from "./components/Formulario"
import PintarDatos from "./components/PintarDatos"

function App() {

	  const [nombrePersonaje, setNombrePersonaje] = useState("")	
		

		return (
				<div className="App">
						<h1>App Rick and Morty</h1>
						<Formulario setNombrePersonaje={setNombrePersonaje}/>
						<PintarDatos nombrePersonaje={nombrePersonaje}/>
				</div>
  );
}

export default App;
