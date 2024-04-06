const SourceCode = ({link, icon}) => {
  return (
    <a href={link} target="_blank" className="absolute bottom-5 right-5">
      <img
        src={icon}
        alt="SourceCode Icon"
        className="md:h-18 h-12 dark:animate-pulse hover:drop-shadow-[-0.2rem_0_1rem_#f0f0f0] dark:invert dark:filter lg:h-14 xl:h-16"
      />
    </a>
  );
};

export default SourceCode;
