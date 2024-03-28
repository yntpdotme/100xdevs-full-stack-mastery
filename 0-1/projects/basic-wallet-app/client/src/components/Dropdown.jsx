import {signOutIcon} from '../assets';
import {navLinks} from '../constants';
import {NavLink} from './index';

const Dropdown = () => {
  return (
    <div className="bg-popover absolute top-[72px] mx-3 w-[calc(100vw-2rem)] overflow-hidden rounded-md border border-dark-800 px-1 py-3 font-light shadow-[0_30px_60px_-16px] shadow-primary/40">
      <div className="flex flex-col space-y-3 overflow-y-auto px-1 font-montserrat">
        {navLinks.map((navLink, index) => (
          <NavLink
            label={navLink.label}
            icon={navLink.icon}
            link={navLink.link}
            key={index}
          />
        ))}

        <div
          role="separator"
          aria-orientation="horizontal"
          className="bg-muted -mx-1 my-1 h-px"
        ></div>

        <button
          className="focus:text-accent-foreground relative flex cursor-pointer select-none items-center rounded-sm px-4 py-2 text-sm outline-none transition-colors hover:bg-accent"
          tabIndex="-1"
        >
          <span className="flex items-center space-x-3">
            <img src={signOutIcon} className="h-6" />
            <span>Sign out</span>
          </span>
        </button>
      </div>
    </div>
  );
};

export default Dropdown;
