import { useState } from 'react'
import {Link} from 'react-router-dom'
import { AiOutlineHome, AiOutlineRead, AiOutlineMail, AiOutlineMenu, AiFillProject } from "react-icons/ai";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import PropTypes from 'prop-types';


function ProfileNav({ isMobile, onDarkModeChange }) {
    ProfileNav.propTypes = {
        isMobile: PropTypes.bool.isRequired,
        onDarkModeChange: PropTypes.func.isRequired,
    };
    
    const darkColor = 'bg-gray-800'

    const [nav, setNav] = useState(false)
    const handleNav = () => {
        setNav(!nav);
    };

    const [darkMode, setDarkMode] = useState(false)
    const darkModeChange = () => {
        onDarkModeChange(true);
        setDarkMode(!darkMode);
    }

    if (isMobile) {
        return (
            <div>
                <AiOutlineMenu onClick={handleNav} className={`absolute top-4 left-3 z-[99] md:hidden ${darkMode ? ' text-white' :''}`} />
                <div className={`w-full  flex flex-col justify-center items-center  
                ${nav ? ' pt-[5px]' : 'h-[45px]'} ${darkMode ? `${darkColor}` : 'bg-blue-500'}`}>
                    <h1 className={`text-center text-3xl text-white select-none ${nav ? 'pb-4 pl-[17px]' : 'fixed '}`}>
                        Vinícius Barbosa Mourão
                    </h1>
                    <div className=" flex justify-center">
                        <img
                            src="https://avatars.githubusercontent.com/u/34627836?s=400&u=18cd785e3f29a626518499bc4442cda74943a370&v=4"
                            alt="logo"
                            className={`max-w-xs rounded-full transition-all select-none duration-0 ${nav ? 'opacity-100' : 'opacity-0'}`}
                        />
                    </div>
                    <div className={`m-1 text-base text-white font-bold font-mono text-center transition-all duration-0 ${nav ? 'opacity-100' : 'opacity-0'}`}>
                        Olá meu nome é Vinicius Barbosa Mourão. Sou um desenvolvedor junior.
                        Bem vindo ao meu site!
                    </div>
                    <ul className={`mt-[15px] list-none flex justify-center transition-all duration-0 ${nav ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                        <li className="inline-block w-[60px] h-[60px] pt-[5px] pl-[5px] rounded-[50%] bg-white hover:bg-blue-800">
                            <a href="
                            https://www.linkedin.com/in/vinícius-barbosa-mourão-997a4121a/
                        ">
                                <FaLinkedin className='cursor-pointer m-[5px]' size={40} />
                            </a>
                        </li>
                        <li className="inline-block w-[60px] h-[60px] ml-[4rem] pt-[3.5px] pl-[5px] rounded-[50%] bg-white hover:bg-blue-800">
                            <a href="
                            https://github.com/MisterDoom4
                        ">
                                <FaGithub className='cursor-pointer m-[5px]' size={40} />
                            </a>
                        </li>
                    </ul>
                    <ul className={`mt-4 list-none flex-col text-center transition-all duration-0 ${nav ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                        <li className='mb-2'>
                            <Link to='/' className='hover:text-blue-800 text-white'>
                                <AiOutlineHome className='mr-[15px]  inline-block' size={25} />
                                <h2 className='mr-3 inline-block font-bold'>Home</h2>
                            </Link>
                        </li>
                        <li className='mb-2'>
                            <Link to='/projects' className='hover:text-blue-800 text-white'>
                                <AiFillProject className='inline-block' size={25} />
                                <h2 className='ml-4 inline-block font-bold'>Projects</h2>
                            </Link>
                        </li>
                        <li className='mb-2'>
                            <Link to='/resume' className='hover:text-blue-800 text-white'>
                                <AiOutlineRead className='inline-block' size={25} />
                                <h2 className='ml-4 inline-block font-bold'>Resume</h2>
                            </Link>
                        </li>
                        <li className='mb-[5px]'>
                            <Link to='/contact' className='hover:text-blue-800 text-white'>
                                <AiOutlineMail className='inline-block' size={25} />
                                <h2 className='ml-4 inline-block font-bold'>Contact</h2>
                            </Link>
                        </li>
                    </ul>
                    <label className={`flex items-center justify-center mt-[30px] mb-[15px] ${nav ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                    <div className="relative">
                        <input type="checkbox" className="sr-only" onClick={darkModeChange} />
                        <div className="block bg-gray-600 w-[40px] h-[20px] rounded-full"></div>
                        <div className={`dot absolute  top-[1px] bg-white w-[18px] h-[18px] rounded-full transition ${darkMode ? 'right-1' : 'left-1'} `}></div>
                    </div>
                    <div className="ml-[10px] text-white font-bold">Dark Mode</div>
                </label>
                </div>

            </div>
        );
    } else {
        if (nav) setNav(false)
        return (
            <div className={`flex-col fixed left-0 top-0 m-0  max-w-[280px] h-full overflow-y-auto 
            scrollbar-thin  ${darkMode ? `${darkColor} scrollbar-thumb-gray-700 hover:scrollbar-thumb-gray-950` : 'bg-blue-500 scrollbar-thumb-blue-400 hover:scrollbar-thumb-blue-800'} `}>
                <h1 className="mt-[12px] text-center text-3xl text-white">Vinícius Barbosa Mourão</h1>
                <div className="mb-4 text-center flex justify-center">
                    <img
                        src="https://avatars.githubusercontent.com/u/34627836?s=400&u=18cd785e3f29a626518499bc4442cda74943a370&v=4"
                        alt="logo"
                        className="max-w-[200px] rounded-full"
                    />
                </div>
                <div className="m-1 text-sm text-white font-light font-mono flex justify-center text-center">

                    Olá meu nome é Vinicius Barbosa Mourão. Sou um desenvolvedor junior.
                    Bem vindo ao meu site!
                </div>
                <ul className="mt-[15px] list-none flex justify-center">
                    <li className="inline-block w-[60px] h-[60px] pt-[5px] pl-[5px] rounded-[50%] bg-white hover:bg-blue-800">
                        <a href="
                            https://www.linkedin.com/in/vinícius-barbosa-mourão-997a4121a/
                        ">
                            <FaLinkedin className='cursor-pointer m-[5px]' size={40} />
                        </a>
                    </li>
                    <li className="inline-block w-[60px] h-[60px] ml-[4rem] pt-[3.5px] pl-[5px] rounded-[50%] bg-white hover:bg-blue-800">
                        <a href="
                            https://github.com/MisterDoom4
                        ">
                            <FaGithub className='cursor-pointer m-[5px]' size={40} />
                        </a>
                    </li>
                </ul>
                <ul className='mt-4 list-none flex-col text-center'>
                    <li className='mb-2'>
                        <Link to ='/' className='hover:text-blue-800 text-white'>
                            <AiOutlineHome className='mr-[15px]  inline-block' size={25} />
                            <h2 className='mr-3 inline-block font-bold'>Home</h2>
                        </Link>
                    </li>
                    <li className='mb-2'>
                        <Link to='/projects' className='hover:text-blue-800 text-white'>
                            <AiFillProject className='inline-block' size={25} />
                            <h2 className='ml-4 inline-block font-bold'>Projects</h2>
                        </Link>
                    </li>
                    <li className='mb-2'>
                        <Link to='/resume' className='hover:text-blue-800 text-white'>
                            <AiOutlineRead className='inline-block' size={25} />
                            <h2 className='ml-4 inline-block font-bold'>Resume</h2>
                        </Link>
                    </li>
                    <li className='mb-[30px]'>
                        <Link to='/contact' className='hover:text-blue-800 text-white'>
                            <AiOutlineMail className='inline-block' size={25} />
                            <h2 className='ml-4 inline-block font-bold'>Contact</h2>
                        </Link>
                    </li>
                </ul>
                <label className="flex items-center justify-center mt-[30px] mb-[15px]">
                    <div className="relative">
                        <input type="checkbox" className="sr-only" onClick={darkModeChange} />
                        <div className="block bg-gray-600 w-[40px] h-[20px] rounded-full"></div>
                        <div className={`dot absolute  top-[1px] bg-white w-[18px] h-[18px] rounded-full transition ${darkMode ? 'right-1' : 'left-1'} `}></div>
                    </div>
                    <div className="ml-[10px] text-white font-bold">Dark Mode</div>
                </label>
            </div>
        );
    }
}

export default ProfileNav;