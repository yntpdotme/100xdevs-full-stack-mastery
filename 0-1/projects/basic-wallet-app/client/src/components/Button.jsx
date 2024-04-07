const Button = ({
  onClick,
  label,
  iconURL,
  roundedCorners,
  fullWidth,
  isDisabled,
}) => {
  return (
    <button
      onClick={onClick || (() => {})}
      className={`inline-flex items-center justify-center bg-primary bg-gradient-to-r px-6 py-3 text-sm font-medium text-white shadow-2xl transition-colors hover:bg-primary/90 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-80 ${roundedCorners && `rounded-${roundedCorners}`} ${fullWidth && 'w-full'}`}
      disabled={isDisabled || false}
    >
      <span className="flex items-center space-x-1 font-montserrat">
        <span>{label || 'label Goes Here'}</span>
        {iconURL && (
          <img src={iconURL} alt="arrow right icon" className="h-5 lg:h-6" />
        )}
      </span>
    </button>
  );
};

export default Button;
