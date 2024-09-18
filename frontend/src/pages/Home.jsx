import React from 'react'

function Home() {
  return (
    <div className='space-y-3'>
      <div className='bg-white p-5 rounded-2xl space-y-3'>
        <h3 className='font-bold text-xl text-orange-400'>How to make a cake?</h3>
        <p>Description</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente quia nam magni molestiae. Eaque adipisci laboriosam dicta? Soluta sed exercitationem deleniti voluptatibus, nam, pariatur quo est nemo aut, unde iure?</p>
        <div className='space-x-2'>
          <span>Ingredients -</span>
          <span className='bg-orange-400 rounded-full px-2 py-1'>3 eggs</span>
          <span className='bg-orange-400 rounded-full px-2 py-1'>Baking soda</span>
        </div>
        <p className='text-gray-500'>Published at - 5mins ago</p>
      </div>

      <div className='bg-white p-5 rounded-2xl space-y-3'>
        <h3 className='font-bold text-xl text-orange-400'>How to make a cake?</h3>
        <p>Description</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente quia nam magni molestiae. Eaque adipisci laboriosam dicta? Soluta sed exercitationem deleniti voluptatibus, nam, pariatur quo est nemo aut, unde iure?</p>
        <div className='space-x-2'>
          <span>Ingredients -</span>
          <span className='bg-orange-400 rounded-full px-2 py-1'>3 eggs</span>
          <span className='bg-orange-400 rounded-full px-2 py-1'>Baking soda</span>
        </div>
        <p className='text-gray-500'>Published at - 5mins ago</p>
      </div>
      
    </div>
  )
}

export default Home
