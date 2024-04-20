const Pagination = ({currentPage, totalPages, setPage}) => {
  return (
    <div className="flex w-full items-center gap-2">
      <button
        className="dark:border-dark-700 dark:active:bg-dark-600 flex size-8 items-center justify-center rounded-full border-gray-100 bg-transparent outline-none ring-primary/70 transition-all hover:border focus:ring-2 active:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-50 dark:focus:ring-primary/70"
        onClick={() => setPage(1)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          aria-hidden="true"
          data-slot="icon"
          className="h-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m18.75 4.5-7.5 7.5 7.5 7.5m-6-15L5.25 12l7.5 7.5"
          ></path>
        </svg>
      </button>

      <button
        className="dark:border-dark-700 dark:active:bg-dark-600 rounded-fullborder-gray-100 flex size-8 items-center justify-center bg-transparent outline-none ring-primary/70 transition-all hover:border focus:ring-2 active:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-50 dark:focus:ring-primary/70"
        onClick={() => setPage(old => Math.max(1, old - 1))}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          aria-hidden="true"
          data-slot="icon"
          className="h-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5 8.25 12l7.5-7.5"
          ></path>
        </svg>
      </button>

      <button
        className="dark:border-dark-700 dark:active:bg-dark-600 flex size-8 items-center justify-center rounded-full border-gray-100 bg-transparent outline-none ring-primary/70 transition-all hover:border focus:ring-2 active:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-50 dark:focus:ring-primary/70"
        onClick={() => setPage(old => Math.min(old + 1, totalPages))}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          aria-hidden="true"
          data-slot="icon"
          className="h-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m8.25 4.5 7.5 7.5-7.5 7.5"
          ></path>
        </svg>
      </button>

      <button
        className="dark:border-dark-700 dark:active:bg-dark-600 flex size-8 items-center justify-center rounded-full border-gray-100 bg-transparent outline-none ring-primary/70 transition-all hover:border focus:ring-2 active:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-50 dark:focus:ring-primary/70"
        onClick={() => setPage(totalPages)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          aria-hidden="true"
          data-slot="icon"
          className="h-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5"
          ></path>
        </svg>
      </button>

      <span className="flex items-center gap-1 text-sm text-foreground">
        <div>Page</div>
        <div>
          {currentPage} of {totalPages}
        </div>
      </span>
    </div>
  );
};

export default Pagination;
