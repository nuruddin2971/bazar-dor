import { Button } from "@heroui/react";
import Image from "next/image";
import React from "react";
import NavLinks from "./NavLinks";

const Navbar = () => {
  const date = new Date().toLocaleDateString("bn-BD", {
    dateStyle: "full",
  });

  return (
    <nav className="">
      <header className="sticky top-0 z-50 w-full border-b border-default-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div>
              <Image
                className="w-10 h-10 bg-[#05893E] rounded-xl object-contain p-1.5"
                src={"/logo-icon.png"}
                alt="nav-logo"
                height={50}
                width={50}
              />
            </div>
            <div className="flex flex-col">
              <h2 className="text-lg font-bold text-default-900 leading-tight">
                বাজার দর
              </h2>
              <p className="text-xs sm:text-sm text-default-500">{date}</p>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-4">
            <Button className="bg-[#05893E] text-white font-medium shadow-md">
              সাইন ইন
            </Button>
            <Button className="bg-[#05893E] text-white font-medium shadow-md">
              সাইন আপ
            </Button>
          </div>
        </div>
      </header>
      <NavLinks></NavLinks>
    </nav>
  );
};

export default Navbar;
