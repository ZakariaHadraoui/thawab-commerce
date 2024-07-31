import React from 'react'

function CustomizeProducts() {
  return (
	<div className='flex flex-col gap-6'>
		<h4 className='font-medium'>Choose a color</h4>
		<ul className='flex items-center gap-4'>
		<li
                  className="w-8 h-8 rounded-full ring-1 bg-red-300 relative"
                 
                  
                >
                  
                    <div className="absolute w-10 h-10 rounded-full ring-blue-600 ring-2 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                  
                 
                </li>

		</ul>
		<h4 className='font-medium'>Choose a size</h4>
		<ul className='flex items-center gap-4'>

		</ul>

	</div>
  )
}

export default CustomizeProducts