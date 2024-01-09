import './App.css'
import Navbar from './components/Navbar'
import Main from './components/Main'
import Button from './components/Button'
import Productos from './components/Products'

function App() {
 const imgFashion = "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/82/6142201/1.jpg?2933";
 const imgDark = "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/01/241417/1.jpg?6747";
 const imgCamel = "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/06/4410121/1.jpg?4437";

  return (
    <>
      < Navbar/>
      < Main />
      < Button label = 'Traer Información'/>
      < Button label = 'Enviar Información'/>
      <Productos  
                  img={imgFashion}
                  name = 'Fashion'
                  description = 'Sportware Running Sneakers Purple'
                  price = '$1958'
      />
      <Productos 
                  img={imgDark}
                  name = 'Dark'
                  description = 'Sportware Running Sneakers Dark'
                  price = '$2200' 
      />
    
      <Productos
                       img={imgCamel}
                       name = 'Camel'
                       description = 'Casual Footwear'
                       price = '$3300' 
      />
    </>
  )
}

export default App
