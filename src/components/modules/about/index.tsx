"use client";
import DUser from "@/assets/d_user.jpg";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import NMContainer from "@/components/ui/core/BFContainer";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { FaFacebookF, FaGoogle, FaPinterest, FaTwitter } from "react-icons/fa";

import Image from "next/image";
const members = [
  { name: "Ashiq", image: DUser },
  { name: "Amdad", image: DUser },
  { name: "Arif", image: DUser },
  { name: "Asif", image: DUser },
];

export default function AboutPage() {
  return (
    <>
      {/* Header */}
      <div className="w-full bg-gradient-to-r from-green-700 to-blue-900 text-white text-center py-10">
        <h1 className="text-3xl font-bold">About</h1>
        <p>About our company</p>
      </div>

      {/* Breadcrumb */}
      {/* <div className="w-full max-w-5xl px-4 mt-6">
        <p className="text-gray-500">Home &gt; About</p>
      </div> */}
      <NMContainer>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>About</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className=" text-center my-5">
          <h3 className="text-4xl font-bold bg-gradient-to-r from-green-700 to-blue-900 bg-clip-text text-transparent">
            Our Mission
          </h3>
          <p className="text-gray-500 max-w-5xl mx-auto mt-2">
            {" "}
            BasaFinder aims to connect individuals with the best rental
            solutions. Our vision is to simplify the renting experience by
            providing reliable and user-friendly services. We strive to make
            housing accessible and convenient for everyone by leveraging
            technology and innovative solutions. Our platform bridges the gap
            between property owners and renters, ensuring transparency and
            efficiency in every step of the process.
          </p>
        </div>
        {/* Main Content */}

        <div className="text-center my-5">
          <h2 className="text-5xl uppercase font-bold bg-gradient-to-r from-green-700 to-blue-900 bg-clip-text text-transparent">
            Best Rent Service, enjoy your life
          </h2>
        </div>

        <div className="w-full px-4 mt-12 text-center">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-green-700 to-blue-900 bg-clip-text text-transparent">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            {members.map((member, index) => (
              <Card key={index} className="p-6 text-center">
                <CardContent>
                  <div className="flex justify-center">
                    <Image
                      src={member.image}
                      alt={`Team Member ${index + 1}`}
                      width={120}
                      height={120}
                      className="rounded-full border-4 border-green-500"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-green-700 mt-4">
                    {member.name}
                  </h3>
                  <p className="text-gray-500">Team Role</p>
                  <p className="text-gray-700 mt-4">
                    Passionate team member dedicated to providing the best
                    service.
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Contact Form */}
          <div className="w-full  px-4 mt-12">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-green-700 to-blue-900 bg-clip-text text-transparent text-center">
              Get In Touch
            </h2>
            <form className="mt-6 bg-white shadow-lg p-6 rounded-lg w-full max-w-xl mx-auto">
              <div className="mb-4">
                <Label htmlFor="name">Name</Label>
                <Input type="text" id="name" name="name" value="" required />
              </div>
              <div className="mb-4">
                <Label htmlFor="email">Email</Label>
                <Input type="email" id="email" name="email" value="" required />
              </div>
              <div className="mb-4">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" name="message" value="" required />
              </div>
              <Button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700 text-white"
              >
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="w-full  px-4 my-12 text-center">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-green-700 to-blue-900 bg-clip-text text-transparent">
              Contact Info
            </h2>
            <p className="mt-4 text-gray-700">Email: contact@basafinder.com</p>
            <p className="text-gray-700">Phone: +123 456 7890</p>
            <div className="flex justify-center gap-4 mt-6 text-gray-600">
              <FaFacebookF className="hover:text-blue-600 cursor-pointer" />
              <FaTwitter className="hover:text-blue-400 cursor-pointer" />
              <FaGoogle className="hover:text-red-500 cursor-pointer" />
              <FaPinterest className="hover:text-red-600 cursor-pointer" />
            </div>
          </div>
        </div>
      </NMContainer>
    </>
  );
}
