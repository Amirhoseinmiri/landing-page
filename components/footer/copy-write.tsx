import React from "react";

const CopyWrite = () => {
  const year = new Date().getFullYear();

  return (
    <div className="border-t border-slate-500">
      <div className="p-5 flex-center">
        Copyright &copy; {year}.Lands - All rights reserved.
      </div>
    </div>
  );
};

export default CopyWrite;
