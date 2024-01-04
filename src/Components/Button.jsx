import React from 'react'

function Button({label}) {
  return (
    <div className='mx-auto'>
        <button className='px-5 py-3 bg-orange-400 rounded text-white font-medium '>
         {label}
        </button>
    </div>
  )
}

export default Button