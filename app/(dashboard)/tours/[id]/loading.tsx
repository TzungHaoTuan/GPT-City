const Loading = () => {
  return (
    <div className="flex flex-col items-start px-16 py-12 animate-pulse">
      {/* Back button */}
      <div className="flex w-full mb-4">
        <div className="w-32 h-10 bg-gray-200 rounded-lg dark:bg-neutral-content" />
      </div>

      {/* Image */}
      <div className="w-[400px] h-80 mb-8 bg-gray-200 rounded-xl dark:bg-neutral-content" />
    </div>
  );
};
export default Loading;
