import PropTypes from 'prop-types';
import SkillIcon from './SkillIcon';


function MainSkills(props) {
    const { darkMode, tecs } = props;
    MainSkills.propTypes = {
        darkMode: PropTypes.bool.isRequired,
        tecs: PropTypes.array.isRequired
    };

    return (
        <div className=" pt-8 flex flex-wrap pb-6">
            {tecs.map((tec) => (
                <div
                key={tec.id}
                className={`pb-6 w-[200px] pl-7 md:w-[260px] md:pl-4`}>
                <div className="flex">
                    <h1
                        className={`text-2xl ${
                            darkMode ? 'text-white' : 'text-black'
                        }`}>
                        {tec.name}
                    </h1>
                    <SkillIcon icons = {tec.icons} />
                </div>
                <div className={`${darkMode ? 'text-white' : 'text-black'}`}>
                    {tec.description}
                </div>
            </div>
            ))}
        </div>
    );
}

export default MainSkills;
