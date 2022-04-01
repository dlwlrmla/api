import { useEffect, useState} from "react"
import Swal from "sweetalert2"
import Personaje from "./Personaje"
import Loading  from "./Loading.jsx"

const PintarDatos = ({nombrePersonaje}) => {
		
		const [personajes, setPersonajes ] = useState([])

		const [loading, setLoading] = useState(false)


		const consumirApi = async(nombrePersonaje) => {

				setLoading(true)
				try {

						const res = await	fetch(`https://rickandmortyapi.com/api/character/?name=${nombrePersonaje}&status=alive`)
				
						if(!res.ok){
								return Swal.fire({
										title:"Error",
										text:"Personaje no encontrado",
										icon:"error"
								})
						}

						const datos = await res.json()	
						console.log(datos.results)
						setPersonajes(datos.results)
				
 				} catch (error) {
					console.log(error)
				}finally{
						setLoading(false)
				}
		}

		
		
		useEffect(() => {
			consumirApi(nombrePersonaje)
		},[nombrePersonaje])
		
		if(loading){	
			return (
						<Loading/>
				)
		}
		
		return (
				<div className="row">
						{
								personajes.map(item => (
										<Personaje key={item.id} personaje = {item}/>
								))
						}
				</div>
		)
}

export default PintarDatos
