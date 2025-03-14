"use client";
import { Button } from "@/components/ui/button";
import NMContainer from "@/components/ui/core/BFContainer";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useUser } from "@/context/UserContext";
import { addRequest } from "@/services/RequestService";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";
interface House {
  _id: string;
  location: string;
  images: string[];
  details: string;
  rent_amount: number;
  nof_bedroom: number;
  user: {
    name: string;
    phone: string;
    _id: string;
  };
}

const RentalHouseDetails = ({ house }: { house: House }) => {
  const router = useRouter();
  const pathname = usePathname();
  const { user } = useUser();
  const [showImg, setShowImg] = useState(house?.images[0]);
  const form = useForm({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const {
    formState: { isSubmitting },

    reset,
  } = form;

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const formData = new FormData();
    const modifiData = {
      rentalHouse: house?._id,
      landlord: house?.user?._id,
      phone: data.phone,
      message: data.message,
    };
    formData.append("rentalHouse", house?._id);
    formData.append("landlord", house?.user?._id);

    formData.append("phone", data.phone);
    formData.append("message", data.message);
    if (!user) {
      router.push(`/login?redirectPath=${pathname}`);
    } else {
      try {
        const res = await addRequest(modifiData);

        if (res.success) {
          toast.success(res.message);

          reset();
        } else {
          toast.error(res.message);
        }
      } catch (err: unknown) {
        console.error(err);
      }
    }
  };
  return (
    <NMContainer>
      <div className=" mx-auto p-6 grid md:grid-cols-3 gap-6">
        <div className="col-1 md:col-span-2">
          <Image
            src={showImg}
            alt={house?.location}
            width={100}
            height={100}
            className="w-full"
          />
          <div className="flex gap-2 mt-2">
            {house?.images.map((item, index) => (
              <div onClick={() => setShowImg(item)} key={index}>
                {" "}
                <Image src={item} alt="" width={200} height={200} />{" "}
              </div>
            ))}
          </div>
        </div>

        <div className="p-4 border rounded-xl shadow-lg max-h-5/6">
          <h3 className="text-xl font-bold mb-4">Book This Apartment</h3>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input {...field} value={field.value || ""} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input {...field} value={field.value || ""} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone</FormLabel>
                    <FormControl>
                      <Input {...field} value={field.value || ""} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="my-5">
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Messages</FormLabel>
                      <FormControl>
                        <Textarea
                          className="h-36 resize-none"
                          {...field}
                          value={field.value || ""}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <Button
                type="submit"
                className="mt-5 w-full"
                disabled={isSubmitting}
              >
                {user
                  ? isSubmitting
                    ? "Requesting..."
                    : "Send Request"
                  : "Login First"}
              </Button>
            </form>
          </Form>
        </div>
      </div>

      <h2 className="text-2xl font-bold mt-4">{house?.location}</h2>

      <div className="mt-4">
        <h3 className="text-lg font-semibold">Price Details:</h3>
        <p>Rent/Month: ${house?.rent_amount}</p>
        <p>Service Charge: $100</p>
        <p>Security Deposit: 2</p>
      </div>
      <div className="my-4">
        <h3 className="text-lg font-semibold">Property Details:</h3>

        <p>Size: {house?.nof_bedroom} square feet</p>
        <p>Bedrooms: {house?.nof_bedroom}</p>
        <p>Address: {house?.details}</p>
      </div>
    </NMContainer>
  );
};

export default RentalHouseDetails;
