import { PropTypes } from 'prop-types';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Projects({ isMobile, darkMode }) {
    Projects.propTypes = {
        isMobile: PropTypes.bool.isRequired,
        darkMode: PropTypes.bool.isRequired
    };
    const [resume1, setResume1] = useState(false);
    const [resume2, setResume2] = useState(false);
    const [resume3, setResume3] = useState(false);
    const [resume4, setResume4] = useState(false);
    const [resume5, setResume5] = useState(false);

    const handleResume = (value) => {
        switch (value) {
            case 1:
                setResume1(!resume1);
                break;
            case 2:
                setResume2(!resume2);
                break;
            case 3:
                setResume3(!resume3);
                break;
            case 4:
                setResume4(!resume4);
                break;
            case 5:
                setResume5(!resume5);
                break;
        }
    };

    return (
        <div
            className={`min-h-screen ${isMobile ? 'pl-0' : ''} ${
                darkMode ? 'bg-gray-700' : 'bg-white'
            }`}>
            <div
                className={`pt-8 pb-6 ${darkMode ? 'bg-gray-600' : 'bg-gray-200'} ${
                    isMobile ? 'flex-col' : ''
                } `}>
                <div
                    className={`text-4xl text-center ${
                        darkMode ? 'text-white' : 'text-black'
                    } `}>
                    Projetos
                </div>
            </div>
            <div className={`  pt-[10%] flex flex-wrap ${isMobile ? ' justify-center items-center' : 'pl-96'} `}>
                <Link
                    to="/projeto1"
                    onMouseEnter={() => handleResume(1)}
                    onMouseLeave={() => handleResume(1)}
                    className={`mr-7 mb-7 bg-red-700 relative flex w-48 h-48 items-center justify-center rounded-xl`}>
                    <div className={` text-3xl text-center`}>Projeto 1</div>
                    <div
                        className={`bg-blue-300 items-center justify-center absolute top-0 left-0 w-full h-full rounded-xl ${
                            resume1 ? 'flex' : 'hidden'
                        }`}>
                        <div className="text-3xl text-center">Resumo do projeto</div>
                    </div>
                </Link>
                <Link
                    to="/projeto2"
                    onMouseEnter={() => handleResume(2)}
                    onMouseLeave={() => handleResume(2)}
                    className="mr-7 mb-7 bg-red-700 relative flex w-48 h-48 items-center justify-center rounded-xl">
                    <div className=" text-3xl text-center">Projeto 2</div>
                    <div
                        className={`bg-blue-300 items-center justify-center absolute top-0 left-0 w-full h-full rounded-xl ${
                            resume2 ? 'flex' : 'hidden'
                        }`}>
                        {' '}
                        <div className="text-3xl text-center">Resumo do projeto</div>
                    </div>
                </Link>
                <Link
                    to="/projeto3"
                    onMouseEnter={() => handleResume(3)}
                    onMouseLeave={() => handleResume(3)}
                    className="mr-7 mb-7 bg-red-700 relative flex w-48 h-48 items-center justify-center rounded-xl">
                    <div className=" text-3xl text-center">Projeto 3</div>
                    <div
                        className={`bg-blue-300 items-center justify-center absolute top-0 left-0 w-full h-full rounded-xl ${
                            resume3 ? 'flex' : 'hidden'
                        }`}>
                        {' '}
                        <div className="text-3xl text-center">Resumo do projeto</div>
                    </div>
                </Link>
                <Link
                    to="/projeto4"
                    onMouseEnter={() => handleResume(4)}
                    onMouseLeave={() => handleResume(4)}
                    className="mr-7 mb-7 bg-red-700 relative flex w-48 h-48 items-center justify-center rounded-xl">
                    <div className=" text-3xl text-center">Projeto 4</div>
                    <div
                        className={`bg-blue-300 items-center justify-center absolute top-0 left-0 w-full h-full rounded-xl ${
                            resume4 ? 'flex' : 'hidden'
                        }`}>
                        {' '}
                        <div className="text-3xl text-center">Resumo do projeto</div>
                    </div>
                </Link>
                <Link
                    to="/projeto5"
                    onMouseEnter={() => handleResume(5)}
                    onMouseLeave={() => handleResume(5)}
                    className="mr-7 mb-7 bg-red-700 relative flex w-48 h-48 items-center justify-center rounded-xl">
                    <div className=" text-3xl text-center">Projeto 5</div>
                    <div
                        className={`bg-blue-300 items-center justify-center absolute top-0 left-0 w-full h-full rounded-xl ${
                            resume5 ? 'flex' : 'hidden'
                        }`}>
                        {' '}
                        <div className="text-3xl text-center">Resumo do projeto</div>
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default Projects;
