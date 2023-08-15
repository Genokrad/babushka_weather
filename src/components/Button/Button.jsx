// import sprite from '../../assets/sprite.svg';
// import { FiArrowRight } from 'react-icons/fi';

const Button = ({ text, className, fun, icon: Icon, type, iconClass }) => {
  return (
    <button onClick={fun} className={className} type={type || 'non'}>
      {text}
      {Icon && <Icon className={iconClass} />}
    </button>
  );
};

export default Button;
