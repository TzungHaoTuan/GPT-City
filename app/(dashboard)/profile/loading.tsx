const Loading = () => {
  return (
    <div className="flex flex-col items-center pt-12 pb-12 animate-pulse">
      <div className="flex flex-col items-start">
        {/* Token amount: text-lg font-semibold mb-8 */}
        <div className="w-48 mb-8 bg-gray-200 rounded h-7 dark:bg-neutral-content" />

        {/* Clerk UserProfile widget */}
        <div className="h-[700px] w-[880px] rounded-xl bg-gray-200 dark:bg-neutral-content" />
      </div>
    </div>
  );
};
export default Loading;
