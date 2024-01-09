import './Navbar.css' //Importacion de CSS


//Crear funcion que contengaa el marcado para que vivan nuestro codigo

const Navbar = () => {
    return(
        <> {/*Fragmento*/}
        
        <div className='navbar--container'>
                <div className='navbar--title'>
                    <h1>GenMex-35</h1>
                </div>

                <div className='navbar--links'>
                    <div className='navbar--link'>
                        <a href='#'>Home</a>
                    </div>
                    <div className='navbar--link'>
                    <a href='#'>About</a>
                    </div>
                    <div className='navbar--link'>
                    <a href='#'>Astros Api</a>
                    </div>
                </div>    
        </div>

        </>
    )
}


export default Navbar; //Exportacion a DOM virtual