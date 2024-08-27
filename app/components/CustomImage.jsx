"use client";
import { BlurhashCanvas } from "react-blurhash";
import Image from "next/image";
import { useState } from "react";

const CustomImage = ({ title, photo, hash }) => {
  const [loading, setLoading] = useState(true);
  return (
    <div className="w-full mt-0">
      {loading && (
        <BlurhashCanvas
          hash={hash}
          width={650}
          height={300}
          punch={1}
          className="rounded-xl shadow-xl mb-16 object-cover"
        />
      )}
      <Image
        src={photo}
        width={1200}
        height={1200}
        alt={title}
        priority
        onLoad={() => setLoading(false)}
        className={`w-[650px] h-[300px] rounded-xl shadow-[0_0_40px_10px_rgba(107,255,102,0.25)] mb-16 object-cover object-bottom ${
          loading ? "hidden" : null
        }`}
      />
    </div>
  );
};
export default CustomImage;
