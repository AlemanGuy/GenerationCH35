import'./Button.css'

/**
 * 
 * Propiedad que se pueden asignar a los ocmponentes para modificar el texto, la informacion desde la renderizacion del mismo.
 * se asignan como parametro de la funcion con el nombre del prob y debe ir entre las llaves 
 * se manda allamar en el bloque de codigo que se debe implentar utilizando llaves
 */

// eslint-disable-next-line react/prop-types
const Button = ( { label } ) => {
    return (
        <>
        <button>
            {label}
        </button>
        </>
    )
}

export default Button;