const GainIndicator = ({gain}) => {
  if (gain < 0) {
    return (
      <div className="inline-flex items-center justify-center rounded-lg bg-red-50 px-2.5 py-1 text-sm font-semibold text-red-600 dark:bg-red-500/10">
        <span>
          <span className="flex items-center space-x-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              aria-hidden="true"
              className="h-4 text-red-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m0 0 6.75-6.75M12 19.5l-6.75-6.75"
              ></path>
            </svg>
            <span>{gain}%</span>
          </span>
        </span>
      </div>
    );
  } else {
    return (
      <div className="inline-flex items-center justify-center rounded-lg bg-green-50 px-2.5 py-1 text-sm font-semibold text-green-600 dark:bg-green-500/10">
        <span className="flex items-center space-x-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            aria-hidden="true"
            className="h-4 text-green-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 19.5v-15m0 0-6.75 6.75M12 4.5l6.75 6.75"
            ></path>
          </svg>
          <span>{gain}%</span>
        </span>
      </div>
    );
  }
};

export default GainIndicator;
