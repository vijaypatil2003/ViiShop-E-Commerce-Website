import React from 'react'

const NewsLetterBox = () => {
    const onSubmitHandler= (event) => {
        event.preventDefault()
        // alert("SUBSCRIBE SUCESSFULLY")
    }
  return (
    <div className='text-center'>
        <p className='text-2xl font-medium text-gray-700'>Subscribe now & get 20% off</p>
        <p className='text-gray-400 mt-3'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>    
        
        <form onSubmit={onSubmitHandler} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3'>
            <input className='w-full sm:flex-1 outline-none' type='text' placeholder='Enter your e-mail' required/>
            <button type='submit' className='bg-black text-white text-xs px-10 py-4'>SUBSCRIBE</button>
        </form>
    </div>
  )
}

export default NewsLetterBox
