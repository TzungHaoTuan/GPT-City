"use client";
import { BlurhashCanvas } from "react-blurhash";
import Image from "next/image";
import { useState } from "react";

const CustomImage = ({ title, photo, hash }) => {
  const [loading, setLoading] = useState(true);
  return (
    <div className="w-full">
      {loading && (
        <BlurhashCanvas
          hash={hash}
          width={400}
          height={320}
          punch={1}
          className="rounded-xl shadow-xl mb-16 object-cover"
        />
      )}
      <Image
        src={photo}
        width={800}
        height={640}
        alt={title}
        priority
        onLoad={() => setLoading(false)}
        className={`w-[400px] h-[320px] rounded-xl shadow-[0_0_40px_10px_rgba(107,255,102,0.25)] mb-16 object-cover object-center ${
          loading ? "hidden" : null
        }`}
      />
    </div>
  );
};
export default CustomImage;
