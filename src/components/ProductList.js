import { useState } from "react"
import { useNavigate } from "react-router-dom"
const ProductList = ({products}) => {
  // console.log(products)
  const [search,setSearch] = useState('')
  const navigate = useNavigate()
const clickBtn = (product)=>{
  navigate("/ProductDetails",{state:{product}}) 
}
  return (
    <div className=" border-black ">
       <input className='border w-6/12 border-black p-2 m-2 rounded-lg mt-10' type='text' value={search} onChange={(e)=>setSearch(e.target.value)} placeholder='Search for Products'/>
       <div className="p-2 m-2 grid grid-cols-5 gap-8  absolute" >
        {products?.filter(product=>product.title.toLowerCase().includes(search.toLowerCase())).map((product)=>(
          <div key={product.id} className="hover:bg-gray-200 bg-gray-50 cursor-pointer" onClick={()=>clickBtn(product)}>
            <img className="aspect-square object-contain cursor-pointer rounded-lg" alt="img"src={product.images[0]}
             onError={(e) => {
                e.target.onerror = null;
              }} 
            />
            <h1 className="font-bold text-xl">{product.title}</h1>
            <h2 className="text-sm ">{product.description}</h2>
            <h3 className="font-bold"> ₹ {product.price}</h3>
          </div>
        ))}
       </div>
    </div>
  )
}

export default ProductList
