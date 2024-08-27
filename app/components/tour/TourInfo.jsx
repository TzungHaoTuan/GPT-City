import Stop from "./Stop";

const TourInfo = ({ tour }) => {
  const { title, description, stops } = tour;
  return (
    <div className="max-w-2xl">
      <h1 className="text-5xl font-semibold text-primary">{title}</h1>
      <h2 className="text-lg mt-8">{description}</h2>
      <ul className="flex flex-col mt-8">
        {stops.map((stop, index) => (
          <li key={stop.name}>
            <Stop stop={stop} isLast={index === stops.length - 1} />
          </li>
        ))}
      </ul>
    </div>
  );
};
export default TourInfo;
