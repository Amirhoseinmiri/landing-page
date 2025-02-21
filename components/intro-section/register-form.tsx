import { Search } from "lucide-react";
import React from "react";

const RegisterForm = () => {
  return (
    <div className="z-20 space-y-1 mt-4">
      <label htmlFor="register">Register your name today</label>
      <form className="flex gap-1 items-center justify-center min-w-[480px] border bg-footer border-slate-300 p-2 rounded-full">
        <Search size={30} />
        <input
          type="text"
          id="register"
          className="p-2 rounded-md ring-0 outline-none bg-transparent z-20 mr-auto"
          placeholder="Enter your email"
        />
        <button className="rounded-r-full text-lg font-semibold px-3 py-2 z-20 text-black bg-[#CFFF11]">
          .Lands
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;
