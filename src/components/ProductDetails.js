import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

const ProductDetails = () => {

  const [List,setList] = useState()
  const [cartCount,setCartCount] = useState(0)
  const location = useLocation()
  const product = location.state?.product
  
  useEffect(()=>{
    fetchData()
  },[])
  const fetchData=async()=>{
    const data =await fetch("https://api.escuelajs.co/api/v1/products")
    const json = await data.json()
    setList(json)
    // console.log(json)
  }
  if (!List){
    return <div className='p-4 text-center'>Loading........</div>
  }

  const clickBtn=()=>{
    setCartCount(cartCount+1 )
  }
  return (
    <div className=''>
      <div className='md:ml-[90rem] md:mt-[-1.5rem] text-lg'>Cart:{cartCount }</div>
      <img className='md:h-screen md:w-1/3 md:p-4 md:object-contain rounded-lg' alt='img' src={product.images[0]}/>
      <div className='text-left md:ml-[40rem]  md:mt-[-42rem] w-1/4'>
        <h1 className='text-left text-2xl font-bold'>{product.title}</h1>
        <h2>{product.description}</h2>
        <h3 className='font-bold text-2xl'> ₹ {product.price}</h3>
        <button className='bg-orange-500 text-white font-bold md:m-6 text-2xl md:h-12 md:mt-4 md:px-4 md:py-2 rounded hover:bg-blue-700 ' onClick={clickBtn}>Add to Cart</button>
        <button className='bg-orange-500 text-white font-bold md:m-6 text-2xl rounded md:mt-4 md:px-4 md:py-2 md:h-12 hover:bg-blue-700'>Buy Now</button>
      </div>
    </div>
  )
}

export default ProductDetails
