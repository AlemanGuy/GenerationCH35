import './Products.css'
/* se comenta esta linea por que fue la que se utilizo para props estructurados
const Products = (props) => */
const Products = ( {img, name, description, price} ) => {

    return (
        <>
        {/* 
            Agregando las propiedades directamente al componente, pero no se modifican las propiedades al importar el Componente en App.jsx, es decir, se repite la misma información
            <div className='cards'>
                <div className='products--card'>
                    <img src="https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/82/6142201/1.jpg?2933"/>
                    <h3>Fashion</h3>
                    <p>Sportware Running Sneakers Purple</p>
                    <h4>$1958</h4>
                </div>
            </div>

        */}
              {/* Props estructuradas: se puede asisgnar diferentes propidades a un div, sin tener qeu generar muchos props como parametro de la funcion 
              quiero modificar varias propiedad, puedo mandar a llamar las probs dentro de cada elemento como sifueran metodo */}
          {/* <div className='cards'>
                <div className='products--card'>
                    <img src={props.img} alt='sneakers' />
                    <h3> {props.name} </h3>
                    <p> {props.description} </p>
                    <h4> {props.price} </h4>
                </div>
            </div> */}


            {/* Props desestrurados: permite aplicar o asignar datos de un objeto a una variable separada para que dicha vairable pueda contener los datos provenientes del objeto.
            no utilizamos 'props' como parametro de la funcion, si no que asignamos parametros a cada elemnento y los llamamos directamente en dichos elementos
            los props desestructurados viven como parametros pero entre llaves y se les asigna un nombre especifico*/}
            <div className='cards'>
                <div className='products--card'>
                    <img src={img} alt='sneakers' />
                    <h3> {name} </h3>
                    <p> {description} </p>
                    <h4> {price} </h4>
                </div>
            </div>
        </>
    )
}

export default Products