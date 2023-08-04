import React from 'react'

const Button = ({content, onClick, type, classNames}) => {
  return (
    <button  type={type} className={`text-gray-700 font-medium px-3 py-1 m-3 rounded shadow bg-sky-50 border-sky-700 p-6 ring-2 ring-sky-600 hover:bg-sky-700 hover:text-white ${classNames}`} 
        onClick={onClick}>
        {content}
    </button>
  )
}

export default Button