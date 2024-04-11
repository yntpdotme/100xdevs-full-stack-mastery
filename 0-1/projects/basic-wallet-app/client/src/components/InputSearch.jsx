const InputSearch = ({props, type, placeholder, error, id}) => {
  return (
    <>
      <div className="relative flex items-center rounded-md border border-input bg-background dark:border-dark-800">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="absolute h-10 py-3 pl-3 pr-2 text-gray-500 dark:text-gray-400"
          viewBox="0 0 20 20"
          fill="none"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
          />
        </svg>
        <input
          {...props}
          type={type || 'search'}
          placeholder={placeholder}
          className="flex h-11 w-full rounded-md bg-transparent py-2 pl-10 pr-3 text-sm outline-none ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 dark:placeholder:text-[#9CA3AF]"
          id={id}
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

export default InputSearch;
