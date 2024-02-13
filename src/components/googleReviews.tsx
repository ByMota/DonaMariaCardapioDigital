import { useEffect, useState } from "react";
import { useLoadScript, Libraries } from "@react-google-maps/api";

const libraries: Libraries = ["places"];

interface Review {
  id?: string;
  time?: number;
  author_name: string;
  rating: number;
  text: string;
  profile_photo_url?: string;
}

function GoogleReviews() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_PLACE_API_KEY,
    libraries,
  });

  useEffect(() => {
    if (isLoaded && !loadError) {
      const mapDiv = document.createElement("div");
      mapDiv.style.display = "none";
      document.body.appendChild(mapDiv);

      const service = new google.maps.places.PlacesService(mapDiv);

      service.getDetails(
        {
          placeId: "ChIJOzTbVBBQzpQRP44VAac8tTA",
          fields: ["reviews"],
        },
        (place, status) => {
          if (status === google.maps.places.PlacesServiceStatus.OK && place) {
            const fetchedReviews: Review[] = (place.reviews || []).map((review) => ({
              id: review.author_url,
              time: review.time,
              author_name: review.author_name,
              rating: review.rating || 0,
              text: review.text,
              profile_photo_url: review.profile_photo_url,
            }));
            setReviews(fetchedReviews);
          }
        }
      );

      return () => {
        document.body.removeChild(mapDiv);
      };
    }
  }, [isLoaded, loadError]);

  return (
    <div>
      {reviews?.map((review) => (
        <div key={review.id || review.time} className="space-y-4 space-x-4">
          <div className="flex items-center gap-2 bg-white shadow rounded-full">
            {review.profile_photo_url && (
              <img
                className=" h-12"
                src={review.profile_photo_url}
                alt={`${review.author_name}'s profile`}
              />
            )}
            <p className="">
              {review.author_name}
            </p>
          </div>
          <p>
            <strong>Avaliação: </strong>
            {review.rating} estrelas
          </p>
          <p className="text-sm antialiased text-start">
            {review.text}
          </p>
          <hr className="pb-3" />
        </div>
      ))}
    </div>
  );
}

export default GoogleReviews;
