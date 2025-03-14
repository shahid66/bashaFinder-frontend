"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Category } from "@/constants";
import { addListing } from "@/services/listingService";
import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";

export default function AddListingForm() {
  const [imageUrls, setImageUrls] = useState<string[]>(["", "", "", ""]);

  const form = useForm({
    defaultValues: {
      location: "",
      details: "",
      rent_amount: "",
      nof_bedroom: "",
      category: "",
    },
  });

  const {
    formState: { isSubmitting },
    reset,
  } = form;

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    // Clean up the image URLs if they contain extra quotes
const cleanImageUrls = imageUrls.map((url) => url.replace(/^['"]+|['"]+$/g, ''));
    const payload = {
      location: data.location,
      details: data.details,
      rent_amount: data.rent_amount,
      nof_bedroom: data.nof_bedroom,
      category: data.category,
      images: cleanImageUrls, // Just send the array of image URLs directly
    };

    try {
      const res = await addListing(payload);
      console.log(res);
      if (res.success) {
        toast.success(res.message);
        reset();
        setImageUrls(["", "", "", ""]);
      } else {
        toast.error(res.message);
      }
    } catch (err: any) {
      console.error(err);
    }
  };

  const handleImageUrlChange = (index: number, value: string) => {
    const newImageUrls = [...imageUrls];
    newImageUrls[index] = value;
    setImageUrls(newImageUrls);
  };

  return (
    <div className="border-2 border-gray-300 rounded-xl flex-grow max-w-2xl p-5 ">
      <div className="flex flex-col justify-center items-center mb-5">
        <span className="text-4xl">🏡</span>
        <h1 className="text-xl font-bold">Add House</h1>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="flex justify-between items-center border-t border-b py-3 my-5">
            <p className="text-primary font-bold text-xl">Basic Information</p>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <FormField
              control={form.control}
              name="location"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Location</FormLabel>
                  <FormControl>
                    <Input {...field} value={field.value || ""} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="nof_bedroom"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Number of Bed</FormLabel>
                  <FormControl>
                    <Input {...field} value={field.value || ""} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="category"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Category</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl className="w-full">
                      <SelectTrigger>
                        <SelectValue placeholder="Select House Category" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {Category.map((item) => (
                        <SelectItem key={item} value={item}>
                          {item}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="rent_amount"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Rent Amount</FormLabel>
                  <FormControl>
                    <Input {...field} value={field.value || ""} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="my-5">
            <FormField
              control={form.control}
              name="details"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
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

          <div>
            <div className="flex justify-between items-center border-t border-b py-3 my-5">
              <p className="text-primary font-bold text-xl">Images (URLs)</p>
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {imageUrls.map((url, index) => (
                <div key={index} className="flex flex-col">
                  <label htmlFor={`imageUrl${index}`} className="mb-2">
                    Image {index + 1} URL
                  </label>
                  <input
                    id={`imageUrl${index}`}
                    type="text"
                    value={url}
                    onChange={(e) =>
                      handleImageUrlChange(index, e.target.value)
                    }
                    className="p-2 border border-gray-300 rounded"
                    placeholder={`Enter image ${index + 1} URL`}
                  />
                </div>
              ))}
            </div>
          </div>

          <Button type="submit" className="mt-5 w-full" disabled={isSubmitting}>
            {isSubmitting ? "Adding Listing....." : "Add Listing"}
          </Button>
        </form>
      </Form>
    </div>
  );
}
