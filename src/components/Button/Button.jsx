const Button = ({ text, className, fun }) => {
  return (
    <button onClick={fun} className={className} type="submit">
      {text}
    </button>
  );
};

export default Button;
