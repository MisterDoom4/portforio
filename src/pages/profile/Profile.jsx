import PropTypes from 'prop-types';
import MainSkills from './components/MainSkills';

function Profile({ darkMode, tecs }) {
    Profile.propTypes = {
        darkMode: PropTypes.bool.isRequired,
        tecs: PropTypes.array.isRequired
    };

    return (
        <section className={`${darkMode ? ' bg-gray-700' : 'bg-white'}`}>
            <section
                className={` flex-col flex items-center md:items-start md:flex-row ${
                    darkMode ? 'bg-gray-600' : 'bg-gray-200'
                } `}>
                <section className={`pt-8 md:pl-96`}>
                    <h1
                        className={`text-4xl select-none text-center md:text-start ${
                            darkMode ? ' text-white' : 'text-black'
                        }`}>
                        Vinicius Barbosa Mourão
                    </h1>
                    <h2
                        className={` text-2xl font-light text-center md:pl-[4px] md:text-start ${
                            darkMode ? 'text-white' : 'text-black'
                        }`}>
                        Desenvolvedor Junior
                    </h2>
                </section>
                <img
                    src="https://avatars.githubusercontent.com/u/34627836?s=400&u=18cd785e3f29a626518499bc4442cda74943a370&v=4"
                    alt="logo"
                    className={`max-w-xs max-h-64  transition-all select-none duration-0 my-5  md:ml-7`}
                />
            </section>
            <section className={`md:pt-4 md:pl-96`}>
                <h1
                    className={` pt-3 text-4xl text-center md:text-start ${
                        darkMode ? 'text-white' : 'text-black'
                    }  `}>
                    Tecnologias que eu trabalho
                </h1>
                <MainSkills darkMode={darkMode} tecs={tecs} />
            </section>
        </section>
    );
}

export default Profile;
