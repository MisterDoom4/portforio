import { Link } from "react-router-dom";
import "../css/profile_nav.css";

function Profile_Nav() {
  return (
    <div className="profile_nav">
        <div className="profile_nav_container">
            <h1>Vinícius Barbosa Mourão</h1>
            <div className="profile_img">
                <img
                    src="https://avatars.githubusercontent.com/u/34627836?s=400&u=18cd785e3f29a626518499bc4442cda74943a370&v=4"
                    alt="logo"
                    className="logo"
                />
            </div>
            <div className="profile_description">
            Olá meu nome é Vinicius Barbosa Mourão. Sou um desenvolvedor junior.
            Bem vindo ao meu site!
            </div>
            <ul className="profile_links">
                <li>
                <a href="
                    https://www.linkedin.com/in/vinícius-barbosa-mourão-997a4121a/
                ">
                <img
                    src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
                    alt="logo"
                    className="logo"
                />
                </a>
                </li>
                <li>
                <a href="
                    https://github.com/MisterDoom4
                ">
                <img
                    src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                    alt="logo"
                    className="logo"
                />
                </a>
                </li>
            </ul>
            <div className="profile_nav__container">
                <div className="profile_nav__container__item">
                <Link to="/profile">Profile</Link>
                </div>
                <div className="profile_nav__container__item">
                <Link to="/profile/friends">Friends</Link>
                </div>
                <div className="profile_nav__container__item">
                <Link to="/profile/photos">Photos</Link>
                </div>
                <div className="profile_nav__container__item">
                <Link to="/profile/videos">Videos</Link>
                </div>
                <div className="profile_nav__container__item">
                <Link to="/profile/more">More</Link>
                </div>
            </div>
      </div>
    </div>
  );
}

export default Profile_Nav;