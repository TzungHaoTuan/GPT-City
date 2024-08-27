import TourCard from "./TourCard";

const ToursList = ({ data }) => {
  if (data.length === 0) return <h4 className="mt-8">No tours found...</h4>;
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
      {data.map((tour) => {
        return <TourCard key={tour.id} tour={tour} />;
      })}
    </div>
  );
};
export default ToursList;
