import TourCard from "./TourCard";

const ToursList = ({ data }) => {
  if (data.length === 0) return <h4 className="mt-8">No tours found...</h4>;
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8 mt-8">
      {data.map((tour) => {
        return <TourCard key={tour.id} tour={tour} />;
      })}
    </div>
  );
};
export default ToursList;
