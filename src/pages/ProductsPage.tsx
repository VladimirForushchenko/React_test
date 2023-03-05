
import { CreateProduct } from '../components/CreateProduct';
import { ErrorMessage } from '../components/ErrorMessage';
import { Loader } from '../components/Loader';
import { Product } from '../components/Product'
import { useProducts } from '../hooks/products';
import { Modal } from '../components/Modal';
import React, {useContext, useState} from "react"
import { IProduct } from '../models';
import { ModalContext } from '../context/ModalContext';

export function ProductPage() {
    const {loading, error, products, addProduct} = useProducts()
  // const [modal, setModal] = useState(true) // логика без контекста
  const {modal, openModal, closeModal} = useContext(ModalContext)

  const createHandler = (product: IProduct) => {
    closeModal()
    addProduct(product)  
  }

  return (
    <div className="container mx-auto max-w-2xl pt-5">
    
    { loading && <Loader /> }
    { error && <ErrorMessage error={error}/> }
    { products.map(product => <Product product={product} key={product.id} />) }
    
    {modal && <Modal title='Create New Product' onClose={() => closeModal()}>
      <CreateProduct onCreate={createHandler} onClose={() => closeModal()} /> 
    </Modal>}

    <button className='fixed bottom-3 right-3 rounded-full bg-green-700 text-white text-2xl px-4 py-2'
    onClick={() => openModal()}
    >+</button>

    {/* тоже самое, если продуктов немного=================================== */}
    {/* <Product product={products[0]}/>
    <Product product={products[1]}/> */}

    </div>
  )
}