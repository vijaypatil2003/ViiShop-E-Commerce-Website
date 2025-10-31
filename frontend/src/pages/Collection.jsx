import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets'
import Title from '../components/Title'
import ProductItem from '../components/ProductItem'

const Collection = () => {
  const { products, search , showSearch } = useContext(ShopContext)
  const [showFilter, setShowFilter] = useState(false)
  const [filterProduct, setFilterProduct] = useState([])
  const [category, setCategory] = useState([])
  const [subCategory , setSubCategory] = useState([])
  const [sortType, setSortType] = useState('relavant')

  const toggleCategory = ( (e) => {

    if (category.includes(e.target.value)){
      setCategory(prev=> prev.filter((item) => (item !==e.target.value)))
    } 
    else {
      setCategory(prev =>  [...prev,e.target.value])
    }
  })

  const toggleSubCategores = (e) => {
    if (subCategory.includes(e.target.value)){
      setSubCategory(prev => prev.filter((item) =>item !== e.target.value))
    }
    else{
      setSubCategory(prev => [...prev,e.target.value])
    }
  }

  const applyFilter = () => {
    let productsCopy = products.slice()

    if (showSearch && search) {
      productsCopy = productsCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
    }

    if (category.length > 0) {
      productsCopy = productsCopy.filter ((item) => category.includes(item.category))
    }

    if (subCategory.length > 0) {
      productsCopy = productsCopy.filter ((item) => subCategory.includes(item.subCategory))
    }

    setFilterProduct(productsCopy)
    
  }

  const sortProduct = (  () => {
    let filterProductCopy = filterProduct.slice()

    switch (sortType) {
      case 'low-high':
        setFilterProduct(filterProductCopy.sort((a,b)=>(a.price-b.price)))
        break;
      case 'high-low' :
        setFilterProduct(filterProductCopy.sort((a,b)=>(b.price-a.price)))
        break;
      default:
        applyFilter()
        break;
    }
  })

  useEffect ( () => {
    applyFilter()
  } , [category, subCategory, search, showSearch, products])

  useEffect( () => {
    sortProduct()
  }, [sortType])





  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
{/* Left side filter  */}
{/* Filter option */}
      <div className='w-[15rem]'> 
        <p onClick={()=>setShowFilter(!showFilter)} className='my-2 text-xl flex items-center cursor-pointer gap-2'>FILTERS
          <img src={assets.dropdown_icon} className={`h-3 sm:hidden ${showFilter ? 'rotate-90' : ''}`} alt='dropdown_icon'/>
        </p>

{/* Category Filter  */}
        <div className={`border border-gray-300 pl-5 py-3 mt-6  ${showFilter ? "" : "hidden"} sm:block`}>
          <p className='mb-3 text-sm font-medium'>CATEGORIES</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2'>
              <input type='checkbox' value={'Men'} onChange={toggleCategory} className='w-3' /> Men
            </p>
            <p className='flex gap-2'>
              <input type='checkbox' value={'Women'} onChange={toggleCategory} className='w-3'/> Women
            </p>
            <p className='flex gap-2'>
              <input type='checkbox' value={'Kids'} onChange={toggleCategory} className='w-3'/> Kids
            </p>
          </div>
        </div>
{/* Sub Category Filter  */}
        <div className={`border border-gray-300 pl-5 py-3 my-5 ${showFilter ? "" : "hidden"} sm:block`}>
          <p className='mb-3 text-sm font-medium'>CATEGORIES</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2'>
              <input type='checkbox' value={'Topwear'} onChange={toggleSubCategores} className='w-3'/> Topwear
            </p>
            <p className='flex gap-2'>
              <input type='checkbox' value={'Bottomwear'} onChange={toggleSubCategores} className='w-3'/> Bottomwear
            </p>
            <p className='flex gap-2'>
              <input type='checkbox' value={'Winterwear'} onChange={toggleSubCategores} className='w-3'/> Winterwear
            </p>
          </div>
        </div>
      </div>

{/* Right side   */}
      <div className='flex-1'>
        <div className='flex justify-between text-base sm:text-2xl mb-4'>
          <Title text1={'ALL'} text2={'COLLECTION'}/>
{/* Product Sort */}
          <select onChange={(e)=>setSortType(e.target.value)} className='border border-gray-300 text-sm px-2'>
            <option value="relavant">Sort by: relavant</option>
            <option value="low-high">Sort by: Low to High</option>
            <option value="high-low">Sort by: High to Low</option>
          </select>
        </div>
{/* Show All Products */}
          {/* Map Product */}
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
            {
              filterProduct.map((item , index)=>(
                <ProductItem key={index} name={item.name} id={item._id} price={item.price} image={item.image} />
              ))
            }
          </div>
      </div>

    </div>
  )
}

export default Collection


// continue from relavnt hight to low