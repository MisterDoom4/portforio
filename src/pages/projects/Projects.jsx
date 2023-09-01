import { PropTypes } from 'prop-types';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Projects(props) {
    const { darkMode } = props;
    const { projects } = props;
    
    Projects.propTypes = {
        darkMode: PropTypes.bool.isRequired,
        projects: PropTypes.array.isRequired
    };

    const [resume, setResume] = useState(Array(projects.length).fill(false));
    const handleResume = (id) => {
        setResume((prevResume) => {
            const newResume = [...prevResume];
            newResume[id] = !newResume[id];
            return newResume;
        });
    };

    return (
        <section className={`min-h-screen pl-0 ${darkMode ? 'bg-gray-700' : 'bg-white'}`}>
            <div
                className={`pt-8 pb-6 flex-col ${
                    darkMode ? 'bg-gray-600' : 'bg-gray-200'
                } `}>
                <h1
                    className={`text-4xl text-center ${
                        darkMode ? 'text-white' : 'text-black'
                    } `}>
                    Projetos
                </h1>
            </div>
            <ol
                className={`pt-[10%] flex flex-wrap justify-center items-center md:pl-96 md:justify-normal`}>
                {projects.map((project) => (
                    <Link
                        key={project.id}
                        to={`/projeto${project.id}`}
                        onMouseEnter={() => handleResume(project.id)}
                        onMouseLeave={() => handleResume(project.id)}
                        className={`mr-7 mb-7 bg-red-700 relative flex w-48 h-48 items-center justify-center rounded-xl`}>
                        <h2 className={` text-3xl text-center`}>{project.name}</h2>
                        <div
                            className={`bg-blue-300 items-center justify-center absolute top-0 left-0 w-full h-full rounded-xl ${
                                resume[project.id] ? 'flex' : 'hidden'
                            }`}>
                            <p className="text-3xl text-center">{project.description}</p>
                        </div>
                    </Link>
                ))}
            </ol>
        </section>
    );
}

export default Projects;
