"use client";
import { Button } from "@/components/ui/button";
import styles from "./HeroSection.module.css";

const HeroSection = () => {
  return (
    <div className={`${styles.banner}  flex justify-center items-center`}>
      <section className="text-center py-16">
        <h1 className="text-4xl font-bold text-white">
          Find Your Perfect Rental House Today!
        </h1>
        <p className="text-slate-200 mt-2 ">
          Browse from a wide range of available properties.
        </p>
        <Button className="mt-4">Post Rental House Info</Button>
      </section>
    </div>
  );
};

export default HeroSection;
