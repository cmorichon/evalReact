import React,{useState} from 'react'
import { Link, useNavigate} from 'react-router-dom'
import {AiOutlineFacebook, AiOutlineInstagram, AiOutlineMenu } from 'react-icons/ai'
import logo from '../../logo/logo.png'

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };

    const navigate = useNavigate();
    const navigationLink = [
        {
            link:'/',
            name:'Accueil'
        },
        {
            link:'/galerie',
            name:'Galerie'
        },
        {
            link:'/tarifs',
            name:'Tarifs et prestation'
        },
        {
            link:'/contact',
            name:'Contact'
        },
    ]
  return (
    <>
    
    <div className='flex flex-row h-10 items-center py-12 border-b-2 border- px-10 shadow'>
    <div className='w-1/12 '>
        <img alt='logo' className='rounded-full w-2/4' onClick={()=>navigate('/')} src={logo}/>
    </div>
    <button
        onClick={toggleMenu}
        className="p-2 text-gray-500 focus:outline-none focus:ring sm:hidden"
      >
        <AiOutlineMenu className="w-6 h-6" />
      </button>
      {isOpen && (
    <div className='flex grow items-end justify-end '>
    {
        navigationLink.map(link =>(
            <span key={link.index} className='lg:text-2xl px-3 font-medium hover:text-sky-700'><Link className='font-display' to= {link.link}>{link.name}</Link></span>
            
        ))
     

    }
    </div>
    )}
    <div className='flex text-3xl px-3 text-sky-600'>
    <span className='px-1 '>
    <AiOutlineFacebook/>
    
    </span>
    <span className='px-1 '>
    <AiOutlineInstagram/>
    </span>
    </div>
  
    </div>



    </>
  )
}

export default Nav