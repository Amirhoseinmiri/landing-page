import Image from "next/image";
import React from "react";
interface IntroCardsProps {
  title: string;
  desc: string;
  image: string;
}
const IntroCards = ({ desc, image, title }: IntroCardsProps) => {
  return (
    <div className="flex items-start justify-between gap-1 flex-col min-w-60 z-20 p-3 text-white border border-[#CFFF111A] rounded-lg bg-footer">
      <Image src={image} alt={title} width={30} height={30} />
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  );
};

export default IntroCards;
