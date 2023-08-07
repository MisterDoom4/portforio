import { Link } from "react-router-dom";


const profile_links = {
    display: 'inline-block',
    marginLeft: '4.5rem',
    width: '70px',
    height: '70px',
    paddingTop: '2.5px',
    paddingLeft: '5px',
    borderRadius: '50%',
    background: '#fff',
}

const profile_links_img = {
    maxWidth: '50px',
    marginTop: '7px',
    marginLeft: '4px',
    textAlign: 'center',
}
   


function Profilenav() {
  return (
    <div className="position fixed left-0 top-0 m-0 bg-gray-500 max-w-sm h-full">
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
            <ul className="list-none m-2 ">
                <li style={profile_links}>
                <a href="
                    https://www.linkedin.com/in/vinícius-barbosa-mourão-997a4121a/
                ">
                <img
                    src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
                    alt="logo"
                    style ={profile_links_img}
                />
                </a>
                </li>
                <li style={profile_links}>
                <a href="
                    https://github.com/MisterDoom4
                ">
                <img
                    src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                    alt="logo"
                    style={profile_links_img}
                />
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

export default Profilenav;