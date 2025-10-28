import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';
import ProductItem from './ProductItem';

const BestSeller = () => {

    const {products} = useContext(ShopContext)
    const [bestSeller , setBestSeller] = useState([]);

    useEffect (() => {
        // console.log("Products:", products);
        const bestProduct = products.filter ( (item) => (item.bestseller))
        setBestSeller(bestProduct.slice(0,8))
        // console.log(bestProduct);
        
    } , [])
  return (
    <div className='my-10'>
        <div className='text-center text-3xl py-8'>
            <Title text1={'BEST'} text2={'SELLERS'}/>
            <p className='w-3/4 m-auto text-xs sm:text md:text-base text-gray-600'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto sit accusamus voluptatibus, corporis rerum quas illo excepturi ut quis accusantium magni delectus id mollitia alias fugiat dolorem itaque ab explicabo!
            </p>
        </div>

        <div className="overflow-hidden py-8 relative">
            <div className="flex animate-scroll gap-3">
                {bestSeller.concat(bestSeller).map((item, index) => (
                <div key={index} className="flex-shrink-0 min-w-[120px] sm:min-w-[130px] md:min-w-[140px]">
                    <ProductItem id={item._id} image={item.image} name={item.name} price={item.price}/>
                </div>
                ))}
            </div>
        </div>



      
    </div>
  )
}

export default BestSeller
