import * as Icons from 'react-icons/fa';
import PropTypes from 'prop-types';
function SkillIcon(props) {
    const icons = props.icons;
    SkillIcon.propTypes = {
        icons: PropTypes.array.isRequired
    };

    return(
        <>
            {icons.map((icon) => {
                const IconComponent = Icons[icon.name];
                return (
                    <IconComponent
                        key={icon.id}
                        className={`pl-2 ${icon.color} text-2xl`}
                        size ={40}
                    />
                );
            })}
        </>
    )
}

export default SkillIcon;
