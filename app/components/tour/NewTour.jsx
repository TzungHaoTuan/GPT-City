"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
  getExistingTour,
  generateTourResponse,
  createNewTour,
  fetchUserTokensById,
  subtractTokens,
} from "@/app/utils/action";
import TourInfo from "./TourInfo";
import toast from "react-hot-toast";
import { useAuth } from "@clerk/nextjs";
import { SiOpenaigym } from "react-icons/si";
import Image from "next/image";
import map from "@/public/map.jpg";

const NewTour = () => {
  const queryClient = useQueryClient();
  const { userId } = useAuth();

  const {
    mutate,
    isPending,
    data: tour,
  } = useMutation({
    mutationFn: async (destination) => {
      const existingTour = await getExistingTour(destination);
      if (existingTour) return existingTour;

      const currentTokens = await fetchUserTokensById(userId);

      if (currentTokens < 300) {
        toast.error("Token balance too low....");
        return;
      }

      const newTour = await generateTourResponse(destination);
      if (!newTour) {
        toast.error("No matching city found...");
        return null;
      }

      await createNewTour({ userId: userId, ...newTour.tour });
      queryClient.invalidateQueries({ queryKey: ["tours"] });
      const newTokens = await subtractTokens(userId, newTour.tokens);
      toast.success(`${newTokens} tokens remaining...`);
      return newTour.tour;
    },
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const destination = Object.fromEntries(formData.entries());
    mutate(destination);
  };

  // if (isPending) {
  //   return <span className="loading loading-lg"></span>;
  // }

  return (
    <div className="relative min-h-screen px-16 py-12">
      <form onSubmit={handleSubmit} className="max-w-2xl">
        <div className="join join-vertical lg:join-horizontal w-3/4 lg:w-full">
          <input
            type="text"
            className="input input-bordered border-secondary join-item w-full"
            placeholder="city"
            name="city"
            required
            disabled={isPending}
          />
          <input
            type="text"
            className="input input-bordered border-secondary join-item w-full"
            placeholder="country"
            name="country"
            required
            disabled={isPending}
          />
          <button
            className="btn btn-secondary join-item normal-case"
            type="submit"
            disabled={isPending}
          >
            {isPending ? "please wait..." : "Generate tour"}
          </button>
        </div>
      </form>
      <div className="mt-16">
        {tour ? (
          <TourInfo tour={tour} />
        ) : (
          <>
            {isPending ? (
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="animate-fade">
                  <SiOpenaigym className="w-12 h-12 text-accent" />
                </div>
              </div>
            ) : null}
          </>
        )}
      </div>
    </div>
  );
};
export default NewTour;
