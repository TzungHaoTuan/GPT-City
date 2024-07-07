"use client";
import { getAllTours } from "@/app/utils/action";
import ToursList from "./ToursList";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

const Tours = () => {
  const [searchValue, setSearchValue] = useState("");
  const { data, isPending } = useQuery({
    queryKey: ["tours", searchValue],
    queryFn: () => getAllTours(searchValue),
  });

  return (
    <>
      <form className="max-w-lg mb-12">
        <div className="join w-full">
          <input
            type="text"
            placeholder="Search city or country"
            className="join-item input input-bordered p-2"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            required
          />
          <button
            type="submit"
            disabled={isPending}
            className="join-item btn btn-primary"
            onClick={() => setSearchValue("")}
          >
            {isPending ? "please wait..." : "Reset"}
          </button>
        </div>
      </form>
      {isPending ? (
        <span className=" loading"></span>
      ) : (
        <ToursList data={data} />
      )}
    </>
  );
};
export default Tours;
