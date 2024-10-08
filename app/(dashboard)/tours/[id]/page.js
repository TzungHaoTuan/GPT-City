import TourInfo from "@/app/components/tour/TourInfo";
import { getSingleTour, searchUnsplashPhoto } from "@/app/utils/action";
import { redirect } from "next/navigation";
import Link from "next/link";
import CustomImage from "@/app/components/CustomImage";

const SingleTourPage = async ({ params }) => {
  const { id } = params;
  const tour = await getSingleTour(id);

  if (!tour) {
    redirect("/tours");
  }

  const url = `https://api.unsplash.com/search/photos/?client_id=${process.env.UNSPLASH_API_ACCESS_KEY}&page=1&query=${tour.city}`;

  const { images, photo, blurHash } = await searchUnsplashPhoto(url);

  return (
    <div className="flex flex-col items-center px-16 py-12">
      <div className="w-full flex mb-4">
        <Link href="/tours" className="mr-auto btn btn-secondary normal-case">
          Back to tours
        </Link>
      </div>
      {images.length !== 0 && photo && blurHash ? (
        <CustomImage title={tour.title} photo={photo} hash={blurHash} />
      ) : null}
      {tour ? (
        <TourInfo tour={tour} />
      ) : (
        <span className="loading loading-dots loading-sm"></span>
      )}
    </div>
  );
};
export default SingleTourPage;
