import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlineMenu,
} from 'react-icons/ai';
import logo from '../../logo/logo.png';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [breakpointMenu, setBreakPointMenu] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navigate = useNavigate();
  const navigationLink = [
    {
      link: '/',
      name: 'Accueil',
    },
    {
      link: '/galerie',
      name: 'Galerie',
    },
    {
      link: '/tarifs',
      name: 'Tarifs et prestation',
    },
    {
      link: '/contact',
      name: 'Contact',
    },
  ];
  return (
    <>
      <div className="flex md:flex-row md:h-10 md:items-center py-4 md:py-12 border-b-2 px-10 shadow">
        <div className="w-1/6 md:w-1/12 ">
          <img
            alt="logo"
            className="rounded-full w-2/4"
            onClick={() => navigate('/')}
            src={logo}
          />
        </div>
        <div className="md:hidden grow justify-end flex">
          <button
            onClick={toggleMenu}
            className="p-2  text-gray-500 focus:outline-none focus:ring flex "
          >
            <AiOutlineMenu className="w-6 h-6" />
          </button>
        </div>

        <div className="md:flex grow items-end justify-end hidden ">
          {navigationLink.map((link) => (
            <span
              key={link.index}
              className="lg:text-2xl px-3 font-medium hover:text-sky-700"
            >
              <Link className="font-display" to={link.link}>
                {link.name}
              </Link>
            </span>
          ))}
          <div className="flex text-3xl px-3 items-center text-sky-600">
            <span className="px-1 ">
              <a href="https://facebook.com" target="_blank" rel="noreferrer">
                <AiOutlineFacebook />
              </a>
            </span>
            <span className="px-1 ">
              <a href="https://instagram.com" target="_blank" rel="noreferrer">
                <AiOutlineInstagram />
              </a>
            </span>
          </div>
        </div>
      </div>
      {isOpen ? (
        <div className="fixed grow justify-end shadow w-full flex py-5 flex-col bg-white t-10 md:hidden">
          {navigationLink.map((link) => (
            <span
              key={link.index}
              className=" flex mr-10 justify-end px-3 font-medium hover:text-sky-700"
            >
              <Link className="font-display" to={link.link}>
                {link.name}
              </Link>
            </span>
          ))}
          <div className="flex text-3xl px-3 items-center mr-5 mt-5 justify-end text-sky-600">
            <span className="px-1 ">
              <a href="https://facebook.com" target="_blank" rel="noreferrer">
                <AiOutlineFacebook />
              </a>
            </span>
            <span className="px-1">
              <a href="https://instagram.com" target="_blank" rel="noreferrer">
                <AiOutlineInstagram />
              </a>
            </span>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Nav;
