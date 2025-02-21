import Image from "next/image";
import React from "react";
import ValueCard from "./value-card";
import RegisterForm from "./register-form";
import { introCards } from "../../utils/navLinks";
import IntroCards from "./intro-cards";

const IntroSection = () => {
  return (
    <>
      <div className="w-full flex relative justify-start min-h-[400px] items-center">
        <div className="w-1/2 flex flex-col gap-4 items-start text-white justify-center">
          <Image
            src={"/images/background-image.png"}
            width={600}
            height={600}
            alt="bg image"
            className="absolute top-0 left-0 opacity-15 z-10"
          />
          <h1 className="text-5xl font-bold z-20">Your.lands</h1>
          <h2 className="text-3xl z-20">Discover the Power of .lands</h2>
          <p className="max-w-fit">
            Whether you&apos;re a landowner, real estate professional, or
            building the next big metaverse project, .lands is your gateway to
            owning a meaningful and memorable digital address. Secure your
            .lands domain and make your mark in the physical and virtual world.
          </p>
          <ValueCard />
          <RegisterForm />
        </div>
        <div className="w-1/2">
          <Image
            src={"/images/home-page-image.png"}
            alt="home image"
            width={520}
            height={520}
            className="absolute top-0 right-0 opacity-15 z-10"
          />
        </div>
      </div>
      <div className="w-full flex justify-between mt-9 gap-4 items-center !z-20">
        {introCards.map((item) => (
          <IntroCards
            desc={item.desc}
            image={item.image}
            title={item.title}
            key={item.title}
          />
        ))}
      </div>
    </>
  );
};

export default IntroSection;
