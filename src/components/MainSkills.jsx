import {
    FaJs,
    FaReact,
    FaNodeJs,
    FaDatabase,
    FaHtml5,
    FaCss3Alt,
    FaGitSquare,
    FaJava,
    FaPython,
    FaMobileAlt
} from 'react-icons/fa';
import PropTypes from 'prop-types';

function MainSkills({ isMobile, darkMode }) {
    MainSkills.propTypes = {
        isMobile: PropTypes.bool.isRequired,
        darkMode: PropTypes.bool.isRequired
    };

    return (
        <div className=" pt-8 flex flex-wrap pb-6">
            <div
                className={`pb-6 ${
                    isMobile ? 'w-[200px] pl-7' : 'w-[260px] pl-4'
                }`}>
                <div className="flex">
                    <h1
                        className={`text-2xl ${
                            darkMode ? 'text-white' : 'text-black'
                        }`}>
                        JavaScript
                    </h1>
                    <FaJs
                        className=" pl-2 text-yellow-400 text-2xl"
                        size={40}
                    />
                </div>
                <div className={`${darkMode ? 'text-white' : 'text-black'}`}>
                    Texto sobre essa habilidade
                </div>
            </div>
            <div
                className={`pb-6 ${
                    isMobile ? 'w-[200px] pl-7' : 'w-[260px] pl-4'
                }`}>
                <div className="flex">
                    <h1
                        className={`text-2xl ${
                            darkMode ? 'text-white' : 'text-black'
                        }`}>
                        React
                    </h1>
                    <FaReact
                        className=" pl-2 text-blue-400 text-2xl"
                        size={40}
                    />
                </div>
                <div className={`${darkMode ? 'text-white' : 'text-black'}`}>
                    Texto sobre essa habilidade
                </div>
            </div>
            <div
                className={`pb-6 ${
                    isMobile ? 'w-[200px] pl-7' : 'w-[260px] pl-4'
                }`}>
                <div className="flex">
                    <h1
                        className={`text-2xl ${
                            darkMode ? 'text-white' : 'text-black'
                        }`}>
                        Node
                    </h1>
                    <FaNodeJs
                        className=" pl-2 text-green-400 text-2xl"
                        size={40}
                    />
                </div>
                <div className={`${darkMode ? 'text-white' : 'text-black'}`}>
                    Texto sobre essa habilidade
                </div>
            </div>
            <div
                className={`pb-6 ${
                    isMobile ? 'w-[200px] pl-7' : 'w-[260px] pl-4'
                }`}>
                <div className="flex">
                    <h1
                        className={`text-2xl ${
                            darkMode ? 'text-white' : 'text-black'
                        }`}>
                        Express.js
                    </h1>
                    <FaJs
                        className=" pl-2 text-yellow-400 text-2xl"
                        size={40}
                    />
                </div>
                <div className={`${darkMode ? 'text-white' : 'text-black'}`}>
                    Texto sobre essa habilidade
                </div>
            </div>
            <div
                className={`pb-6 ${
                    isMobile ? 'w-[200px] pl-7' : 'w-[260px] pl-4'
                }`}>
                <div className="flex">
                    <h1
                        className={`text-2xl ${
                            darkMode ? 'text-white' : 'text-black'
                        }`}>
                        MongoDb
                    </h1>
                    <FaDatabase
                        className=" pl-2 text-green-700 text-2xl"
                        size={40}
                    />
                </div>
                <div className={`${darkMode ? 'text-white' : 'text-black'}`}>
                    Texto sobre essa habilidade
                </div>
            </div>
            <div
                className={`pb-6 ${
                    isMobile ? 'w-[200px] pl-7' : 'w-[260px] pl-4'
                }`}>
                <div className="flex">
                    <h1
                        className={`text-2xl ${
                            darkMode ? 'text-white' : 'text-black'
                        }`}>
                        HTML,CSS
                    </h1>
                    <FaHtml5
                        className=" pl-2 text-yellow-400 text-2xl"
                        size={40}
                    />
                    <FaCss3Alt
                        className=" pl-2 text-blue-400 text-2xl"
                        size={40}
                    />
                </div>
                <div className={`${darkMode ? 'text-white' : 'text-black'}`}>
                    Texto sobre essa habilidade
                </div>
            </div>
            <div
                className={`pb-6 ${
                    isMobile ? 'w-[200px] pl-7' : 'w-[260px] pl-4'
                }`}>
                <div className="flex">
                    <h1
                        className={`text-2xl ${
                            darkMode ? 'text-white' : 'text-black'
                        }`}>
                        Tailwind CSS e Bootstrap
                    </h1>
                </div>
                <div className={`${darkMode ? 'text-white' : 'text-black'}`}>
                    Texto sobre essa habilidade
                </div>
            </div>
            <div
                className={`pb-6 ${
                    isMobile ? 'w-[200px] pl-7' : 'w-[260px] pl-4'
                }`}>
                <div className="flex">
                    <h1
                        className={`text-2xl ${
                            darkMode ? 'text-white' : 'text-black'
                        }`}>
                        Git
                    </h1>
                    <FaGitSquare className="pl-2 text-red-700" size={40} />
                </div>
                <div className={`${darkMode ? 'text-white' : 'text-black'}`}>
                    Texto sobre essa habilidade
                </div>
            </div>
            <div
                className={`pb-6 ${
                    isMobile ? 'w-[200px] pl-7' : 'w-[260px] pl-4'
                }`}>
                <div className="flex">
                    <h1
                        className={`text-2xl ${
                            darkMode ? 'text-white' : 'text-black'
                        }`}>
                        Java
                    </h1>
                    <FaJava className="pl-2 text-red-700" size={40} />
                </div>
                <div className={`${darkMode ? 'text-white' : 'text-black'}`}>
                    Texto sobre essa habilidade
                </div>
            </div>
            <div
                className={`pb-6 ${
                    isMobile ? 'w-[200px] pl-7' : 'w-[260px] pl-4'
                }`}>
                <div className="flex">
                    <h1
                        className={`text-2xl ${
                            darkMode ? 'text-white' : 'text-black'
                        }`}>
                        Spring Boot
                    </h1>
                    <FaJava className="pl-2 text-red-700" size={40} />
                </div>
                <div className={`${darkMode ? 'text-white' : 'text-black'}`}>
                    Texto sobre essa habilidade
                </div>
            </div>
            <div
                className={`pb-6 ${
                    isMobile ? 'w-[200px] pl-7' : 'w-[260px] pl-4'
                }`}>
                <div className="flex">
                    <h1
                        className={`text-2xl ${
                            darkMode ? 'text-white' : 'text-black'
                        }`}>
                        MySQL
                    </h1>
                    <FaDatabase
                        className=" pl-2 text-green-700 text-2xl"
                        size={40}
                    />
                </div>
                <div className={`${darkMode ? 'text-white' : 'text-black'}`}>
                    Texto sobre essa habilidade
                </div>
            </div>
            <div
                className={`pb-6 ${
                    isMobile ? 'w-[200px] pl-7' : 'w-[260px] pl-4'
                }`}>
                <div className="flex">
                    <h1
                        className={`text-2xl ${
                            darkMode ? 'text-white' : 'text-black'
                        }`}>
                        Flutter
                    </h1>
                    <FaMobileAlt
                        className=" pl-2 text-blue-400 text-2xl"
                        size={40}
                    />
                </div>
                <div className={`${darkMode ? 'text-white' : 'text-black'}`}>
                    Texto sobre essa habilidade
                </div>
            </div>
            <div
                className={`pb-6 ${
                    isMobile ? 'w-[200px] pl-7' : 'w-[260px] pl-4'
                }`}>
                <div className="flex">
                    <h1
                        className={`text-2xl ${
                            darkMode ? 'text-white' : 'text-black'
                        }`}>
                        Python
                    </h1>
                    <FaPython className="pl-2 text-yellow-400" size={40} />
                </div>
                <div className={`${darkMode ? 'text-white' : 'text-black'}`}>
                    Texto sobre essa habilidade
                </div>
            </div>
        </div>
    );
}

export default MainSkills;
