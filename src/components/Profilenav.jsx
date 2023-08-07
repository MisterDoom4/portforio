import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { FaGithub, FaLinkedin } from "react-icons/fa";


function Profilenav() {
  if (useMediaQuery({ query: "(max-width: 1224px)" })) {
    return (
    <div className="left-0 top-0 m-0 bg-gray-500 max-w-full h-full">
            <h1 className="text-center text-3xl text-white">Vinícius Barbosa Mourão</h1>
            <div className=" flex justify-center">
                <img 
                    src="https://avatars.githubusercontent.com/u/34627836?s=400&u=18cd785e3f29a626518499bc4442cda74943a370&v=4"
                    alt="logo"
                    className="max-w-xs rounded-full"
                />
            </div>
            <div className="m-1 text-base text-white font-bold font-mono text-center">
                
             Olá meu nome é Vinicius Barbosa Mourão. Sou um desenvolvedor junior.
            Bem vindo ao meu site! 
            </div>
            <ul className="list-none flex justify-center">
                <li className="inline-block w-[70px] h-[70px] pt-[2.5px] pl-[5px] rounded-[50%] bg-white">
                <a href="
                    https://www.linkedin.com/in/vinícius-barbosa-mourão-997a4121a/
                ">
                <FaLinkedin className= 'm-[5px]' size={50}/>
                </a>
                </li>
                <li className="inline-block w-[70px] h-[70px] ml-[4.5rem] pt-[2.5px] pl-[5px] rounded-[50%] bg-white">
                <a href="
                    https://github.com/MisterDoom4
                ">
                <FaGithub  className= 'm-[5px]' size={50}/>
                </a>
                </li>
            </ul>
            <div className="profile_nav__container">
                <div className="profile_nav__container__item">
                <Link to="/profile">Profile</Link>
                </div>
                <div className="profile_nav__container__item">
                <Link to="/profile/friends">Projects</Link>
                </div>
                <div className="profile_nav__container__item">
                <Link to="/profile/photos">Resume</Link>
                </div>
                <div className="profile_nav__container__item">
                <Link to="/profile/videos">Contato</Link>
                </div>
            </div>
    </div>
  );
    } else {
        return (
            <div className="fixed left-0 top-0 m-0 bg-gray-500 max-w-sm h-full">
                <div className="profile_nav_container">
                    <h1 className="text-center text-3xl text-white">Vinícius Barbosa Mourão</h1>
                    <div className="ml-12 mb-4 text-center">
                        <img 
                            src="https://avatars.githubusercontent.com/u/34627836?s=400&u=18cd785e3f29a626518499bc4442cda74943a370&v=4"
                            alt="logo"
                            className="max-w-xs rounded-full"
                        />
                    </div>
                    <div className="m-1 text-base text-white font-bold font-mono text-center">
                        
                     Olá meu nome é Vinicius Barbosa Mourão. Sou um desenvolvedor junior.
                    Bem vindo ao meu site! 
                    </div>
                    <ul className="list-none flex justify-center">
                        <li className="inline-block w-[70px] h-[70px] pt-[2.5px] pl-[5px] rounded-[50%] bg-white">
                        <a href="
                            https://www.linkedin.com/in/vinícius-barbosa-mourão-997a4121a/
                        ">
                       <FaLinkedin className= 'm-[5px]' size={50}/>
                        </a>
                        </li>
                        <li className="inline-block w-[70px] h-[70px] ml-[4.5rem] pt-[2.5px] pl-[5px] rounded-[50%] bg-white">
                        <a href="
                            https://github.com/MisterDoom4
                        ">
                        <FaGithub className= 'm-[5px]' size={50}/>
                        </a>
                        </li>
                    </ul>
                    <div className="profile_nav__container">
                        <div className="profile_nav__container__item">
                        <Link to="/profile">Profile</Link>
                        </div>
                        <div className="profile_nav__container__item">
                        <Link to="/profile/friends">Projects</Link>
                        </div>
                        <div className="profile_nav__container__item">
                        <Link to="/profile/photos">Resume</Link>
                        </div>
                        <div className="profile_nav__container__item">
                        <Link to="/profile/videos">Contato</Link>
                        </div>
                    </div>
              </div>
            </div>
          );
    }
}

export default Profilenav;