const Button = ({
  onClick,
  lable,
  iconURL,
  roundedCorners,
  fullWidth,
  isDisabled,
}) => {
  return (
    <button
      onClick={onClick || (() => {})}
      className={`hover:bg-primary/90 bg-primary inline-flex items-center justify-center bg-gradient-to-r px-6 py-3 text-sm font-medium text-white shadow-2xl transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-80 ${roundedCorners && `rounded-${roundedCorners}`} ${fullWidth && 'w-full'}`}
      disabled={isDisabled || false}
    >
      <span className="font-montserrat flex items-center space-x-1">
        <span>{lable || 'lable Goes Here'}</span>
        {iconURL && (
          <img src={iconURL} alt="arrow right icon" className="h-5 lg:h-6" />
        )}
      </span>
    </button>
  );
};

export default Button;
