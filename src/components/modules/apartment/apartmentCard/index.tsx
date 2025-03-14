import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

export interface House {
  _id: number;
  location: string;
  images: string[];
  details: string;
  category: string;
  rent_amount: number;
  nof_bedroom: number;
}

export default function ApartmentCard({ house }: { house: House }) {
  
  return (
    <Card className="w-full max-w-sm shadow-lg rounded-none overflow-hidden py-0 pb-6">
      <div className="relative w-full h-48">
        <Image
          src={house?.images[0]}
          alt={house?.location}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <CardHeader>
        <CardTitle className="text-lg font-semibold">
          {house?.location}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600 text-sm mb-2">{house?.category}</p>
        <p className="text-gray-600 text-sm mb-2">{house?.details}</p>
        <p className="text-gray-800 font-bold">
          Rent: ${house?.rent_amount} / month
        </p>
        <p className="text-gray-700">Bedrooms: {house?.nof_bedroom}</p>
        <Link href={`/rental/${house?._id}`} passHref>
          <Button className="mt-4 w-full">View Details</Button>
        </Link>
      </CardContent>
    </Card>
  );
}
