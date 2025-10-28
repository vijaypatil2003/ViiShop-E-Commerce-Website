import React from 'react'

const Hero = () => {
  return (
    <div className='flex flex-col sm:flex-row border border-gray-400'>
{/* Hero Left Side */}
        <div className='w-full ssm:w-1/2 flex items-center justify-center py-10 sm:py-0'>
            <div className='text-[#414141'>
            {/* OUR BESTSELLER */}
                <div className='flex items-center gap-2'>
                    <p className='4-8 md:w-11 h-[2px] bg-[#414141]'></p>
                    <p className='font-medium text-sm md:text-base'>OUR BESTSELLER</p>
                </div>
                <h1  className='prata-regular text-3xl sm:py-3 lg:text-5xl leading-relaxed'>Latest Arrivals</h1>
                {/* SHOP NOW */}
                <div className='flex items-center gap-2'>
                    <p className='font-semibold text-sm md:text-base'>SHOP NOW</p>
                    <p className='4-8 md:w-11 h-[2px] bg-[#414141]'></p>

                </div>

            </div>

        </div>

{/* Hero Right Side */}
        <img src='https://res.cloudinary.com/dc5154n7n/image/upload/v1760176536/hero_img_fpda5b.png' className='w-full sm:w-1/2' alt='Hero img'/>

    </div>
  )
}

export default Hero
