import React from "react";
import { headerLinks } from "@/utils/navLinks";
import Link from "next/link";
import WalletButton from "./wallet-button";

const Header = () => {
  return (
    <header className="w-full border-b border-slate-500">
      <nav className="wrapper flex-between">
        <h1 className="text-3xl text-white font-bold">.Lands</h1>
        <div className="flex gap-4">
          {headerLinks.map((item) => (
            <Link href={item.href} key={item.href} className="text-white">
              {item.name}
            </Link>
          ))}
        </div>
        <WalletButton />
      </nav>
    </header>
  );
};

export default Header;
