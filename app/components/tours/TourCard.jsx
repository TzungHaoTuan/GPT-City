import Link from "next/link";

const TourCard = ({ tour }) => {
  const { city, id, country } = tour;
  return (
    <Link
      href={`/tours/${id}`}
      className="card card-compact rounded-xl bg-secondary hover:bg-primary 
      text-primary hover:text-secondary"
    >
      <div className="card-body items-center text-center ">
        <h1 className="text-2xl font-bold text-center capitalize">{city}</h1>
        <p className="font-semibold text-center capitalize">{country}</p>
      </div>
    </Link>
  );
};
export default TourCard;
