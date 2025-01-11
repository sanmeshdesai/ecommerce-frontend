import React from 'react'

const NewsletterBox = () => {

    const onSubmitHandler = () => {
        event.preventDefault();
    }

  return (
    <div className='text-center'>
        <p className='text-2xl font-medium text-gray-700'> Subscribe now and get 20% off</p>
        <p className='text-gray-400 mt-3'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia, explicabo.
        </p>

        <form onSubmit={onSubmitHandler} action="" className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3'>
            <input className='w-full sm:flex-1 outline-none'  type="email" name="" placeholder='Enter your email' id="" required/>
            <button className='bg-black text-white text-xs px-10 py-4' type='submit'>SUBSCRIBE</button>
        </form>
    </div>
  )
}

export default NewsletterBox