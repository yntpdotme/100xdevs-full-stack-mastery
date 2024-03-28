import {NavLink} from 'react-router-dom';

const NavigationLink = ({label, icon, link}) => {
  const active =
    'flex w-full items-center space-x-3 rounded-md border-transparent bg-primary-300/10 px-4 py-2 text-sm font-medium text-white ring-transparent transition-colors duration-100';
  const incative =
    'flex w-full items-center space-x-3 rounded-md border-transparent px-4 py-2 text-sm text-gray-300 ring-transparent transition-colors duration-100 hover:bg-dark-800/40 hover:text-white';

  return (
    <NavLink
      className={({isActive}) => (isActive ? active : incative)}
      to={link}
    >
      <img
        src={icon}
        className="h-5 flex-none transition-colors"
      />
      {label && <span className="truncate hover:text-clip">{label}</span>}
    </NavLink>
  );
};

export default NavigationLink;
