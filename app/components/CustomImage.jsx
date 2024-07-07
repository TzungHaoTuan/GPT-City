"use client";
import { BlurhashCanvas } from "react-blurhash";
import Image from "next/image";
import { useState } from "react";

const CustomImage = ({ title, photo, hash }) => {
  const [loading, setLoading] = useState(true);
  return (
    <div>
      {loading && (
        <BlurhashCanvas
          hash={hash}
          width={384}
          height={256}
          punch={1}
          className="rounded-xl shadow-xl mb-16 object-cover"
        />
      )}
      <Image
        src={photo}
        width={800}
        height={800}
        alt={title}
        priority
        onLoad={() => setLoading(false)}
        className={`w-96 h-64 rounded-xl shadow-xl mb-16 object-cover ${
          loading ? "hidden" : null
        }`}
      />
    </div>
  );
};
export default CustomImage;
