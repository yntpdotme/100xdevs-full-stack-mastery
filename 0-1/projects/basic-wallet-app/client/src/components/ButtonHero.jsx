const ButtonHero = ({
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
      className={`hover:shadow-primary/60 from-primary to-primary-700 inline-flex items-center justify-center bg-transparent bg-gradient-to-r px-8 py-4 text-lg font-medium text-white shadow-2xl transition-colors hover:to-indigo-600 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-80 lg:text-xl ${roundedCorners && `rounded-${roundedCorners}`} ${fullWidth && 'w-full'}`}
      disabled={isDisabled || false}
    >
      <span className="font-montserrat flex items-center space-x-1">
        <span>{label || 'label Goes Here'}</span>
        {iconURL && (
          <img src={iconURL} alt="arrow right icon" className="h-5 lg:h-6" />
        )}
      </span>
    </button>
  );
};

export default ButtonHero;
