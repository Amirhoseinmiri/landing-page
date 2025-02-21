import React from "react";

const ValueCard = () => {
  return (
    <div className="flex items-start min-w-[480px] mt-5 justify-between gap-5 p-4 bg-[#08183642] border border-gray-500 rounded-lg shadow-lg">
      <div className="flex flex-col items-center justify-center gap-2">
        <h3>Total Value Locked</h3>
        <p className="font-medium text-[#CFFF11]">$500K+</p>
      </div>
      <div className="flex flex-col items-center justify-center gap-2">
        <h3>Domains</h3>
        <p className="font-medium text-lg">2,649,995</p>
      </div>
      <div className="flex flex-col items-center justify-center gap-2">
        <h3>Owners</h3>
        <p className="font-medium text-lg">1,393,058</p>
      </div>
    </div>
  );
};

export default ValueCard;
