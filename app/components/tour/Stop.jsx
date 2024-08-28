import { IoIosArrowDown } from "react-icons/io";

const Stop = ({ stop, isLast }) => {
  const { name, time, description } = stop;
  return (
    <>
      <div className="flex flex-col sm:flex-row items-center border border-accent rounded p-8">
        <p className="min-w-fit text-xl font-bold text-accent mb-4">{time}</p>
        <div className="w-full border-b border-accent opacity-30 mb-4 sm:hidden"></div>
        <div className="ml-8">
          <p className="text-2xl font-bold text-primary">{name}</p>
          <p className="mt-2">{description}</p>
        </div>
      </div>
      {isLast ? null : (
        <div className="flex justify-center items-center my-6">
          <IoIosArrowDown className="text-accent" />
        </div>
      )}
    </>
  );
};
export default Stop;
