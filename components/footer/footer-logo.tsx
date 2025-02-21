import Image from "next/image";
import React from "react";

const FooterLogo = () => {
  return (
    <div className="flex w-full md:w-1/3 items-center justify-center">
      <p className="text-2xl text-[#CFFF11] -mr-6">.Lands</p>
      <Image
        src={"/images/footer-img.png"}
        width={100}
        height={100}
        className="object-cover opacity-40"
        alt="footer image"
      />
    </div>
  );
};

export default FooterLogo;
