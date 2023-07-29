import { Link } from "react-router-dom";
import "../css/profile_nav.css";

function Profile_Nav() {
  return (
    <div className="profile_nav">
        <div className="profile_nav_container">
            <h1>Profile</h1>
            <div className="profile_img">
                <img
                    src="https://static.wixstatic.com/media/94b54e_b7dad22513964731bf8a2a2fabc09890~mv2.png/v1/fill/w_212,h_106,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/AEW-Official-Logo-2021.png"
                    alt="logo"
                    className="logo"
                />
            </div>
            <div className="profile_description">
            Hi, my name is Vinicius Barbosa and Im a senior software engineer. Welcome to my personal website!
            </div>
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