import Stop from "./Stop";
import type { TourStop } from "@/app/types";

type TourInfoProps = {
  tour: {
    title: string;
    description: string;
    stops: TourStop[] | unknown;
  };
};

const TourInfo = ({ tour }: TourInfoProps) => {
  const { title, description, stops } = tour;
  const tourStops = stops as TourStop[];
  return (
    <div>
      <h1 className="text-5xl font-semibold text-primary">{title}</h1>
      <h2 className="text-lg indent-8 mt-8">{description}</h2>
      <ul className="flex flex-col mt-8">
        {tourStops.map((stop, index) => (
          <li key={stop.name}>
            <Stop stop={stop} isLast={index === tourStops.length - 1} />
          </li>
        ))}
      </ul>
    </div>
  );
};
export default TourInfo;
