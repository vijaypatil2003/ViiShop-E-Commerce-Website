import React from 'react'
import Title from '../components/Title'
import {assets} from '../assets/assets'
import NewsletterBox from '../components/NewsLetterBox'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT '} text2={'US'}/>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]'  src={assets.about_img} alt="about_img" />
        <div className='flex flex-col justify-center gap-6 md:w-1/2 text-gray-600'>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione aut blanditiis eaque autem provident totam voluptatum, nisi nulla maiores incidunt cupiditate cum, veniam voluptatem animi, nihil quae exercitationem doloribus dignissimos.</p>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. At, explicabo repellendus deleniti repellat rerum quibusdam. Ullam eius veritatis aperiam ad voluptate pariatur eum cumque, voluptatum laboriosam iure architecto, nobis labore.</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem velit et accusamus, nemo provident aliquam unde sapiente saepe tempora, corporis reprehenderit optio quaerat earum corrupti quo doloribus in consequuntur magnam!</p>
        </div>
      </div>

      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'WHY '} text2={'CHOOSE US'}/>
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, illum inventore neque quae blanditiis totam aspernatur. Necessitatibus, quia vel, dolor quibusdam tenetur odio laudantium libero temporibus porro ex id praesentium!</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, illum inventore neque quae blanditiis totam aspernatur. Necessitatibus, quia vel, dolor quibusdam tenetur odio laudantium libero temporibus porro ex id praesentium!</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, illum inventore neque quae blanditiis totam aspernatur. Necessitatibus, quia vel, dolor quibusdam tenetur odio laudantium libero temporibus porro ex id praesentium!</p>
        </div>
      </div>

      <NewsletterBox/>

    </div>
  )
}

export default About
