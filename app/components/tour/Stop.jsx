import { IoIosArrowDown } from "react-icons/io";

const Stop = ({ stop, isLast }) => {
  const { name, time, description } = stop;
  return (
    <>
      <div className="flex items-center border border-accent rounded p-8">
        <p className="min-w-fit text-xl font-bold text-accent">{time}</p>
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
