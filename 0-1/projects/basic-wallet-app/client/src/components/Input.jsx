const Input = ({props, type, placeholder, error, id}) => {
  return (
    <>
      <input
        {...props}
        type={type}
        placeholder={placeholder}
        className="bg-background ring-offset-background flex h-10 w-full rounded-md border border-[#1E2931] px-3 py-2 text-sm outline-none file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-[#9CA3AF] focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 "
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
