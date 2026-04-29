const Loading = () => {
  return (
    <div className="min-h-screen px-16 py-12 animate-pulse">
      {/* Search input: w-2/3 xl:w-full, py-2 border */}
      <div className="w-2/3 h-10 bg-gray-200 rounded-lg xl:w-full dark:bg-neutral-content" />

      {/* TourCard grid: same grid layout */}
      <div className="grid grid-cols-1 gap-8 mt-8 sm:grid-cols-2 xl:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="flex flex-col items-center h-[92px] gap-2 p-4 bg-gray-200 rounded-xl dark:bg-neutral-content"
          ></div>
        ))}
      </div>
    </div>
  );
};
export default Loading;
