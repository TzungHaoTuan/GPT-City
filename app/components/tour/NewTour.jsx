"use client";

import { useAuth } from "@clerk/nextjs";
import TourInfo from "./TourInfo";
import {
  generateTourResponse,
  createNewTour,
  getExistingTour,
  subtractTokens,
  fetchUserTokensById,
} from "@/app/utils/action";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

const NewTour = () => {
  const queryClient = useQueryClient();
  const { userId } = useAuth();
  const { mutate, data: tour } = useMutation({
    mutationFn: async (destination) => {
      try {
        const existingTour = await getExistingTour(destination);
        if (existingTour) return existingTour;

        const currentTokens = await fetchUserTokensById(userId);

        if (currentTokens < 600) {
          toast.error("Token balance too low....");
          return;
        }

        const newTour = await generateTourResponse(destination);
        if (!newTour) {
          toast.error("No matching city found...");
          return null;
        }
        await createNewTour(newTour.tour);
        queryClient.invalidateQueries({ queryKey: ["tours"] });

        const newTokens = await subtractTokens(userId, newTour.tokens);
        toast.success(`${newTokens} tokens remaining...`);
        return newTour.tour;
      } catch (error) {
        toast.error("An error occurred. Please try again.");
        console.error("Error:", error);
      }
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const destination = Object.fromEntries(formData.entries());
    mutate(destination);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="join mb-12">
        <input
          //   id="city"
          name="city"
          type="text"
          placeholder="city"
          className="join-item input input-bordered"
        />
        <input
          //   id="country"
          name="country"
          type="text"
          placeholder="country"
          className="join-item input input-bordered"
        />
        <button type="submit" className="join-item btn btn-primary">
          ask
        </button>
      </form>
      {tour ? <TourInfo tour={tour} /> : null}
    </div>
  );
};
export default NewTour;
