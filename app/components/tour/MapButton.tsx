'use client';

import { FaMapMarkedAlt } from 'react-icons/fa';
import type { TourStop } from '@/app/types';

type MapButtonProps = {
  stops: TourStop[];
  city: string;
};

const MapButton = ({ stops, city }: MapButtonProps) => {
  if (stops.length === 0) return null;

  const encode = (name: string) => encodeURIComponent(`${name} ${city}`);

  const origin = encode(stops[0].name);
  const destination = encode(stops[stops.length - 1].name);
  const middleStops = stops.slice(1, -1);

  const waypointsParam =
    middleStops.length > 0
      ? `&waypoints=${middleStops.map((s) => encode(s.name)).join('|')}`
      : '';

  const url = `https://www.google.com/maps/dir/?api=1&origin=${origin}&destination=${destination}${waypointsParam}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="btn btn-accent mt-6 gap-2 normal-case"
    >
      <FaMapMarkedAlt />
      Open Route in Google Maps
    </a>
  );
};

export default MapButton;
