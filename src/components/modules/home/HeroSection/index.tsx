"use client";
import { Button } from "@/components/ui/button";
import { useUser } from "@/context/UserContext";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import styles from "./HeroSection.module.css";

const HeroSection = () => {
  const router = useRouter();
  const { user } = useUser();
  console.log(user);

  const handleButtonClick = () => {
    // Check if user is logged in
    if (user === null) {
      // Redirect to login page if not logged in
      router.push("/login");
    } else {
      if (user?.role === "landlord") {
        router.push("/landlord/listing/add-listing");
      } else {
        toast.error("You need to be a landlord to access this page.");
      }
    }

    // // Check if user role is 'landlord'
    // if (user?.role !== "landlord") {
    //   // Optionally show an error message or redirect to a different page
    //   alert("You need to be a landlord to access this page.");
    // }
    // Navigate to the "/some-page" route
  };
  return (
    <div className={`${styles.banner}  flex justify-center items-center`}>
      <section className="text-center py-16">
        <h1 className="text-4xl font-bold text-white">
          Find Your Perfect Rental House Today!
        </h1>
        <p className="text-slate-200 mt-2 ">
          Browse from a wide range of available properties.
        </p>
        <Button onClick={handleButtonClick} className="mt-4 cursor-pointer">
          Post Rental House Info
        </Button>
      </section>
    </div>
  );
};

export default HeroSection;
