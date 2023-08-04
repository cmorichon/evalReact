import React,{useState} from 'react'
import { Link, useNavigate} from 'react-router-dom'
import {AiOutlineFacebook, AiOutlineInstagram, AiOutlineMenu } from 'react-icons/ai'
import logo from '../../logo/logo.png'

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [breakpointMenu, setBreakPointMenu] = useState(false)

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
    
    <div className='flex md:flex-row md:h-10 md:items-center py-4 md:py-12 border-b-2 px-10 shadow'>
    <div className='w-1/6 md:w-1/12 '>
        <img alt='logo' className='rounded-full w-2/4' onClick={()=>navigate('/')} src={logo}/>
    </div>
    <div className='md:hidden grow justify-end flex'>
    <button
        onClick={toggleMenu}
        className="p-2  text-gray-500 focus:outline-none focus:ring "
      >
        <AiOutlineMenu className="w-6 h-6" />
    </button>
    </div>
   
    <div className='md:flex grow items-end justify-end hidden '>
    {
        navigationLink.map(link =>(
            <span key={link.index} className='lg:text-2xl px-3 font-medium hover:text-sky-700'><Link className='font-display' to= {link.link}>{link.name}</Link></span>    
        ))
    }
     <div className='flex text-3xl px-3 items-center text-sky-600'>
    <span className='px-1 '>
    <AiOutlineFacebook/>
    
    </span>
    <span className='px-1 '>
    <AiOutlineInstagram/>
    </span>
    </div>
     </div>

    { isOpen ?
    <div className='flex flex-col absolute  h-screen w-full text-white bg-white pt-10'>
        {navigationLink.map(link =>(
            <span key={link.index} className='px-3 font-medium hover:text-sky-700'><Link className='font-display' to= {link.link}>{link.name}</Link></span>
            
        ))}
        <div className='flex text-3xl px-3 items-center text-sky-600'>
    <span className='px-1 '>
    <AiOutlineFacebook/>
    
    </span>
    <span className='px-1 '>
    <AiOutlineInstagram/>
    </span>
    </div>
    </div>
    :null
    }
   

   
  
    </div>



    </>
  )
}

export default Nav