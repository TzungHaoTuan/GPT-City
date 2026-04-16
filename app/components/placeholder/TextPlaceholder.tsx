const TextPlaceholder = () => {
  return (
    <div className="space-y-2.5 animate-pulse max-w-lg">
      <div className="flex items-center w-full">
        <div className="h-2.5 bg-gray-200 rounded-full dark:bg-neutral-content w-32"></div>
        <div className="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-secondary w-24"></div>
        <div className="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-secondary w-full"></div>
      </div>
      <div className="flex items-center w-full max-w-[480px]">
        <div className="h-2.5 bg-gray-200 rounded-full dark:bg-neutral-content w-full"></div>
        <div className="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-secondary w-full"></div>
        <div className="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-secondary w-24"></div>
      </div>
      <div className="flex items-center w-full max-w-[400px]">
        <div className="h-2.5 bg-gray-300 rounded-full dark:bg-secondary w-full"></div>
        <div className="h-2.5 ms-2 bg-gray-200 rounded-full dark:bg-neutral-content w-80"></div>
        <div className="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-secondary w-full"></div>
      </div>
      <div className="flex items-center w-full max-w-[480px]">
        <div className="h-2.5 ms-2 bg-gray-200 rounded-full dark:bg-neutral-content w-full"></div>
        <div className="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-secondary w-full"></div>
        <div className="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-secondary w-24"></div>
      </div>
      <div className="flex items-center w-full max-w-[440px]">
        <div className="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-secondary w-32"></div>
        <div className="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-secondary w-24"></div>
        <div className="h-2.5 ms-2 bg-gray-200 rounded-full dark:bg-neutral-content w-full"></div>
      </div>
      <div className="flex items-center w-full max-w-[360px]">
        <div className="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-secondary w-full"></div>
        <div className="h-2.5 ms-2 bg-gray-200 rounded-full dark:bg-neutral-content w-80"></div>
        <div className="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-secondary w-full"></div>
      </div>
    </div>
  );
};
export default TextPlaceholder;
