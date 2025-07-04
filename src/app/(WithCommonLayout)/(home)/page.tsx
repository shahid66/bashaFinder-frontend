import ApartmentCard, {
  House,
} from "@/components/modules/apartment/apartmentCard";
import CounterSection from "@/components/modules/home/CounterSection";
import { demoData } from "@/components/modules/home/demoData";
import HeroSection from "@/components/modules/home/HeroSection/index";
import SearchSection from "@/components/modules/home/SearchSection";
import DemoSlider from "@/components/modules/home/TestimonialSection";
import RentingTips from "@/components/modules/home/TipsSection";
import BFContainer from "@/components/ui/core/BFContainer";
import WhatYouWantSection from "@/components/WhatYouWant";
import { getAllListings } from "@/services/listingService";
import Link from "next/link";
import { Suspense } from "react";

const Home = async () => {
  const { data } = await getAllListings();
  console.log(data);
  return (
    <>
      <HeroSection />
      <Suspense fallback={<>Loading...</>}>
        <SearchSection title="Find your rooms, for your ability" />
      </Suspense>
      <div className="bg-slate-50 py-8 mt-12">
        <BFContainer>
          <h2 className="text-2xl text-center font-bold text-gray-900 mb-2">
            New Rent House
          </h2>
          <div className="h-1 w-12 bg-green-400 mx-auto mb-8 rounded-full" />

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6 my-6">
            {data?.result?.slice(0, 4).map((house: House) => (
              <ApartmentCard key={house?._id} house={house} />
            ))}
          </div>
        </BFContainer>
      </div>

      <BFContainer>
        <WhatYouWantSection />
      </BFContainer>
      <div className="bg-slate-50 py-8 mt-12">
        <BFContainer>
          <h2 className="text-2xl text-center font-bold text-gray-900 mb-2">
            Old Rent House
          </h2>
          <div className="h-1 w-12 bg-green-400 mx-auto mb-8 rounded-full" />

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6 my-6">
            {data?.result?.slice(4, 12).map((house: House) => (
              <ApartmentCard key={house?._id} house={house} />
            ))}
          </div>
          <div className="my-8 flex items-center justify-center">
            <Link
              className="bg-slate-700 rounded-2xl text-white hover:bg-green-400 px-6 py-4"
              href="/rental"
            >
              All Appartment
            </Link>
          </div>
        </BFContainer>
      </div>
      <CounterSection />

      <DemoSlider data={demoData} />
      <RentingTips />
    </>
  );
};

export default Home;
