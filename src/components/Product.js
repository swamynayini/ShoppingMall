import React, { useEffect, useState } from 'react'
import ProductList from './ProductList'

const Product = () => {
    const [products,setProducts] = useState([])      
    useEffect(()=>{
        fetchData()
    },[])
    const fetchData =async()=>{
        const data =await fetch("https://api.escuelajs.co/api/v1/products")
        const json =await data.json()
        setProducts(json)
        console.log(json)
    }
  return (
    <div className=''>
      <ProductList products = {products}/>
    </div>
  )
}

export default Product
