const Input = ({props, type, placeholder, error, id}) => {
  return (
    <>
      <input
        {...props}
        type={type}
        placeholder={placeholder}
        className="ring-offset-backgroundoutline-none flex h-11 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 dark:border-dark-800 dark:placeholder:text-[#9CA3AF]"
        id={id}
      />
      {error && (
        <p className="pl-1 pt-1 text-xs font-normal leading-tight text-red-400">
          {error}
        </p>
      )}
    </>
  );
};

export default Input;
