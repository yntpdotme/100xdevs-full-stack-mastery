import {useState} from 'react';

import {closeEyeIcon, openEyeIcon} from '../assets';

const InputPassword = ({props, type, placeholder, error, id}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <div className="flex rounded-md border border-input bg-background dark:border-dark-800">
        <input
          {...props}
          type={showPassword ? 'text' : type}
          placeholder={placeholder}
          className="flex h-11 w-full rounded-md bg-transparent px-3 py-2 text-sm outline-none ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 dark:placeholder:text-[#9CA3AF]"
          id={id}
        />
        <img
          src={showPassword ? closeEyeIcon : openEyeIcon}
          alt={showPassword ? 'Hide Password' : 'Show Password'}
          className="h-10 p-2 pr-3 dark:invert dark:filter"
          onClick={() => setShowPassword(!showPassword)}
        />
      </div>
      {error && (
        <p className="pl-1 pt-1 text-xs font-normal leading-tight text-red-400">
          {error}
        </p>
      )}
    </>
  );
};

export default InputPassword;
