const TableLoader = () => {
	return (
    <div className="mx-autorounded-md px-5 py-10 shadow">
      <div className="flex animate-pulse">
        <div className="flex-1 space-y-6">
          <div className="h-1.5 rounded bg-slate-700"></div>
          <div className="h-1.5 rounded bg-slate-700"></div>
          <div className="h-1.5 rounded bg-slate-700"></div>
          <div className="h-1.5 rounded bg-slate-700"></div>
          <div className="h-1.5 rounded bg-slate-700"></div>
        </div>
      </div>
      <span className="sr-only">Loading...</span>
    </div>
  );
}

export default TableLoader