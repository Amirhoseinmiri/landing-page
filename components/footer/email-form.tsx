import Link from "next/link";
import React from "react";
import { socialLinks } from "@/utils/navLinks";

const EmailForm = () => {
  return (
    <div className="flex w-full md:w-1/3 flex-col gap-2 items-center md:items-start">
      <h2 className="text-2xl font-bold">Get updates</h2>
      <form className="flex items-center border border-slate-300 p-2 rounded-full">
        <input
          type="email"
          placeholder="Enter your email"
          className="p-2 rounded-md ring-0 outline-none bg-transparent"
        />
        <button className="bg-gray-600 text-white p-2 rounded-full">
          Get updates
        </button>
      </form>
      <div className="flex gap-2">
        {socialLinks.map((item) => (
          <Link
            href={item.href}
            key={item.href}
            className="bg-gray-600 text-[#CFFF11] text-lg rounded-full p-1"
          >
            {<item.icon />}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default EmailForm;
