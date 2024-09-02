import Tours from "@/app/components/tours/Tours";
import { getAllTours } from "@/app/utils/action";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { auth } from "@clerk/nextjs/server";

const ToursPage = async () => {
  const { userId } = auth();
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["tours", ""],
    queryFn: () => getAllTours(userId, ""),
  });
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Tours />
    </HydrationBoundary>
  );
};
export default ToursPage;
