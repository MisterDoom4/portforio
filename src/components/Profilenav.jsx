import { useState } from 'react'
import { useMediaQuery } from "react-responsive";
import { AiOutlineHome, AiOutlineRead, AiOutlineMail, AiOutlineMenu, AiFillProject } from "react-icons/ai";
import { FaGithub, FaLinkedin } from "react-icons/fa";


function ProfileNav() {
    const [nav, setNav] = useState(false)
    const handleNav = () => {
        setNav(!nav);
    };
    if (useMediaQuery({ query: "(max-width: 768px)" })) {
        return (
            <div>
                <AiOutlineMenu onClick={handleNav} className='absolute top-4 left-4 z-[99] md:hidden' />
                <div className={`w-full bg-blue-500 flex flex-col justify-center items-center  
                ${nav ? ' pt-[5px] overflow-y-auto scrollbar-thin scrollbar-thumb-blue-400 hover:scrollbar-thumb-blue-800' : 'h-[45px]'}`}>
                    <h1 className={`text-center  text-3xl text-white select-none ${nav ? ' pb-4' : 'fixed'}`}>
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
                    <ul className={`mt-4 list-none flex-col text-center transition-all duration-500 ${nav ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                        <li className='mb-2'>
                            <a href='@main' className='hover:text-blue-800 text-white'>
                                <AiOutlineHome className='mr-[15px]  inline-block' size={25} />
                                <h2 className='mr-3 inline-block font-bold'>Home</h2>
                            </a>
                        </li>
                        <li className='mb-2'>
                            <a href='@projects' className='hover:text-blue-800 text-white'>
                                <AiFillProject className='inline-block' size={25} />
                                <h2 className='ml-4 inline-block font-bold'>Projects</h2>
                            </a>
                        </li>
                        <li className='mb-2'>
                            <a href='@main' className='hover:text-blue-800 text-white'>
                                <AiOutlineRead className='inline-block' size={25} />
                                <h2 className='ml-4 inline-block font-bold'>Resume</h2>
                            </a>
                        </li>
                        <li className='mb-[30px]'>
                            <a href='@contact' className='hover:text-blue-800 text-white'>
                                <AiOutlineMail className='inline-block' size={25} />
                                <h2 className='ml-4 inline-block font-bold'>Contact</h2>
                            </a>
                        </li>
                    </ul>
                    {/* TODO: Botão para Dark Mode */}
                </div>

            </div>
        );
    } else {
        return (
            <div className="flex-col fixed left-0 top-0 m-0 bg-blue-500 max-w-[280px] h-full overflow-y-auto 
            scrollbar-thin scrollbar-thumb-blue-400 hover:scrollbar-thumb-blue-800 ">
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
                        <a href='@main' className='hover:text-blue-800 text-white'>
                            <AiOutlineHome className='mr-[15px]  inline-block' size={25} />
                            <h2 className='mr-3 inline-block font-bold'>Home</h2>
                        </a>
                    </li>
                    <li className='mb-2'>
                        <a href='@projects' className='hover:text-blue-800 text-white'>
                            <AiFillProject className='inline-block' size={25} />
                            <h2 className='ml-4 inline-block font-bold'>Projects</h2>
                        </a>
                    </li>
                    <li className='mb-2'>
                        <a href='@main' className='hover:text-blue-800 text-white'>
                            <AiOutlineRead className='inline-block' size={25} />
                            <h2 className='ml-4 inline-block font-bold'>Resume</h2>
                        </a>
                    </li>
                    <li className='mb-[30px]'>
                        <a href='@contact' className='hover:text-blue-800 text-white'>
                            <AiOutlineMail className='inline-block' size={25} />
                            <h2 className='ml-4 inline-block font-bold'>Contact</h2>
                        </a>
                    </li>
                </ul>
                {/* TODO: Botão para Dark Mode */}

            </div>
        );
    }
}

export default ProfileNav;