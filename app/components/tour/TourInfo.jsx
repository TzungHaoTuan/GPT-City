const TourInfo = ({ tour }) => {
  const { title, description, stops } = tour;
  return (
    <div className="max-w-2xl">
      <h1 className="text-4xl font-semibold">{title}</h1>
      <h2 className="text-lg mt-4">{description}</h2>
      <ul className="flex flex-col gap-4 mt-6">
        {stops.map((stop) => (
          <li key={stop} className="p-4 bg-base-200 rounded">
            <p>{stop}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default TourInfo;
