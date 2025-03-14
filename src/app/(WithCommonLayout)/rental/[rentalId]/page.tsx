import RentalHouseDetails from "@/components/modules/details/HomeDetails";
import { getSingleListing } from "@/services/listingService";

const DetailsPage = async ({
  params,
}: {
  params: Promise<{ rentalId: string }>;
}) => {
  const { rentalId } = await params;
  const { data } = await getSingleListing(rentalId);

  return <RentalHouseDetails house={data} />;
};

export default DetailsPage;
