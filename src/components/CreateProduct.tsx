import React, {useState} from "react"
import { IProduct } from "../models"
import axios from 'axios'
import { ErrorMessage } from "./ErrorMessage"

const productData: IProduct = {
    title: '',
    price: 13.5,
    description: 'lorem ipsum set',
    image: 'https://i.pravatar.cc',
    category: 'electronic',
    rating: {
      rate: 42,
      count: 10
    }
}

interface CreateProductProps {
  onCreate: (product: IProduct) => void
  onClose: () => void
}

export function CreateProduct({ onCreate, onClose }: CreateProductProps) {
  const [value, setValue] = useState('')
  const [modal, setModal] = useState(true)
  const [error, setError] = useState('')
  



  const submitHandler = async (event: React.FormEvent) => {
    event.preventDefault()
    setError('') // обнуляем ошибку

    if (value.trim().length === 0) {
      setError('Please enter valid title')
      return
    }

    productData.title = value

    const response = await axios.post<IProduct>('https://fakestoreapi.com/products', productData) 

    onCreate(response.data) 
  }

  // const changeHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
  //   setValue(event.target.value)
  // }

  return (
    <form onSubmit={ submitHandler }>
      <input 
      type="text"
      className="border py-2 px-4 mb-2 w-full outline-0"
      placeholder="Enter product title..."
      value={value}
      onChange={event => setValue(event.target.value)} //changeHandler =====================
      />

      {error && <ErrorMessage error={error} />}

      <button type="submit" className="py-2 px-4 border bg-emerald-400 hover:text-white">Create</button>
      <button className="absolute bottom-5 right-5 py-2 px-4 border bg-red-400 hover:text-white"
      onClick={ onClose }
        >Cancel</button>
    </form>
  )
}