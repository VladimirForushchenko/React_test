
// import { CreateProduct } from './components/CreateProduct';
// import { ErrorMessage } from './components/ErrorMessage';
// import { Loader } from './components/Loader';
// import { Product } from './components/Product'
// import { useProducts } from './hooks/products';
// import { Modal } from './components/Modal';
// import React, {useContext, useState} from "react"
// import { IProduct } from './models';
// import { ModalContext } from './context/ModalContext';


import { Route, Routes } from "react-router-dom";
import { AboutPage } from "./pages/AboutPage";
import { ProductPage } from "./pages/ProductsPage";
import { Navigation  } from "./components/Navigation";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={ <ProductPage/> } />
        <Route path="/about" element={ <AboutPage/> } />
      </Routes>
    </>
  )
}

// function App() {

//   // ========================ПРИМЕРЫ НАПИСАНИЯ КОМПОНЕНТОВ НА JSX=========================================

//   // return (
//   //   <h1>Hello React!!!</h1>
//   // )

//   // return React.createElement('h1', {}, 'Hello from JS')

//   // const [count, setCount] = useState(0)

//   // return e('div', {className: 'container'}, [
//   //   e('h1', {className: 'font-bold', key: 1}, `Test JSX ${count}`),
//   //   e('button', {
//   //   className: 'py-2 px-4 border', 
//   //   key: 2,
//   //   onClick: () => setCount(count + 1),
//   //   }, 'Click me!'),
//   // ])
// }

export default App;
