import PropTypes from 'prop-types';
import MainSkills from './MainSkills';

function Profile({ isMobile, darkMode }) {
  Profile.propTypes = {
    isMobile: PropTypes.bool.isRequired,
    darkMode: PropTypes.bool.isRequired,
  };

  return (
    <div className={`${darkMode ? ' bg-gray-700' : 'bg-white'}`}>
      <div className={` ${darkMode ? 'bg-gray-600' : 'bg-gray-200'} ${isMobile ? 'flex-col' : 'flex'}`}>
        <div className={`pt-8 ${isMobile ? 'pl-0' : ' pl-96'}`}>
          <h1 className={`text-4xl select-none ${darkMode ? ' text-white' : 'text-black'} `}>Vinicius Barbosa Mourão</h1>
          <h2 className={` text-2xl font-light  ${darkMode ? 'text-white' : 'text-black'} ${isMobile ? '' : 'pl-[4px]'}`}>Desenvolvedor Junior</h2>
        </div>
        <div className={`${isMobile ? '' : ' pt-8 pl-10 pb-8'}`}>
          <img
            src="https://avatars.githubusercontent.com/u/34627836?s=400&u=18cd785e3f29a626518499bc4442cda74943a370&v=4"
            alt="logo"
            className={`max-w-xs max-h-64  transition-all select-none duration-0`}
          /></div>
      </div>
      <div className=' pt-4 pl-96'>
        <div className={`text-4xl ${darkMode ? 'text-white' : 'text-black-'}`}>Tecnologias que eu trabalho</div>
        <MainSkills isMobile={isMobile} darkMode={darkMode} />
      </div>
    </div>
  );
}

export default Profile;