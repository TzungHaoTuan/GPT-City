"use client";
import { getAllTours } from "@/app/utils/action";
import ToursList from "./ToursList";
import { useQuery } from "@tanstack/react-query";
import { useState, useRef, useEffect } from "react";
import { CiSearch } from "react-icons/ci";

const Tours = () => {
  const [searchValue, setSearchValue] = useState("");
  const inputRef = useRef(null);
  const { data, isPending } = useQuery({
    queryKey: ["tours", searchValue],
    queryFn: () => getAllTours(searchValue),
  });
  useEffect(() => {
    if (searchValue) {
      inputRef.current.focus();
    }
  }, [searchValue]);

  return (
    <div className="min-h-screen px-16 py-12">
      <div className="relative">
        <CiSearch className="absolute top-1/2 -translate-y-1/2 left-4 w-6 h-6" />
        <input
          ref={inputRef}
          type="text"
          placeholder="Search city or country"
          className="input input-bordered border-secondary pl-12 py-2 w-2/3 lg:w-full"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          required
        />
      </div>
      {isPending ? (
        <span className="loading mt-8"></span>
      ) : (
        <ToursList data={data} />
      )}
    </div>
  );
};
export default Tours;
