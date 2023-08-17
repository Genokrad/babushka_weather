// import sprite from '../../assets/sprite.svg';
// import { FiArrowRight } from 'react-icons/fi';

const Button = ({
  text,
  className,
  fun,
  icon: Icon,
  type,
  iconClass,
  hideText,
}) => {
  return (
    <button onClick={fun} className={className} type={type || 'non'}>
      <span className={hideText}>{text}</span>
      {Icon && <Icon className={iconClass} />}
    </button>
  );
};

export default Button;
