import {Link} from "react-router-dom"

const Inicio = () => {
  return (
    <>
      <div>
        <h1>Esta es la pagina de inicio</h1>
        <Link to= "/Nosotros">
            Presiona para ir sobre nosotros
        </Link>
        <Link to= "/Contacto">
            Presiona para ir a contacto
        </Link>
      </div>
      
    </>
  )
}

export default Inicio
