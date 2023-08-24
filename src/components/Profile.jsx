import PropTypes from 'prop-types';

function Profile({isMobile, darkMode}) {
  Profile.propTypes = {
    isMobile: PropTypes.bool.isRequired,
    darkMode: PropTypes.bool.isRequired,
  };

  return (
    <div className={` ${darkMode ? 'bg-black': 'bg-gray-200' } ${isMobile ? 'flex-col':'flex'}`}>
      <div className={`pt-8 ${isMobile ? 'pl-0': ' pl-96'}`}>
        <h1 className={`text-4xl select-none ${darkMode ? ' text-white': 'text-black' } `}>Vinicius Barbosa Mourão</h1>
        <h2 className={` text-2xl font-light  ${darkMode ? 'text-white' : 'text-black'} ${isMobile ? '':'pl-[4px]'}`}>Desenvolvedor Junior</h2>
      </div>
      <div className={`${isMobile ? '':''}`}>imagem aqui</div>
    </div>
  );
}

export default Profile;