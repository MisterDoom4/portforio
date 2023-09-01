import * as Icons from 'react-icons/fa';
import PropTypes from 'prop-types';
function SkillIcon(props) {
    const icons = props.icons;
    SkillIcon.propTypes = {
        icons: PropTypes.array.isRequired
    };
    const colors = [
        'text-yellow-400',
        'text-blue-400',
        'text-green-400',
        'text-green-700',
        'text-orange-400',
        'text-purple-700',
        'text-red-700'
    ];
    return (
        <>
            {icons.map((icon) => {
                const IconComponent = Icons[icon.name];
                let color = '';
                for (const c in colors) {
                    if (icon.color == colors[c]) {
                        color = colors[c];
                        break;
                    }
                }
                return <IconComponent key={icon.id} className={`${color}`} size={40} />;
            })}
        </>
    );
}

export default SkillIcon;
