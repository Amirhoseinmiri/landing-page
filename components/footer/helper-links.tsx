import Link from "next/link";
import React from "react";

const HelperLink = () => {
  return (
    <div className="flex w-full md:w-1/3 justify-between mx-20 items-center md:items-start">
      <div className="flex flex-col gap-2 items-start">
        <h2 className="text-lg font-bold">Company</h2>
        <Link href={"/"}>About us</Link>
        <Link href={"/"}>Contact us</Link>
      </div>
      <div className="flex flex-col gap-2 items-start">
        <h2 className="text-lg font-bold">Quick Links</h2>
        <Link href={"/"}>Blog</Link>
        <Link href={"/"}>Help center</Link>
        <Link href={"/"}>About Us</Link>
      </div>
    </div>
  );
};

export default HelperLink;
