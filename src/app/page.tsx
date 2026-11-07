import { Button } from "@heroui/react";
import Image from "next/image";
import React from "react";

export default async function Home() {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/bazardor/products",
  );
  const data = await res.json();
  console.log(data);

  const date = new Date().toLocaleDateString("bn-BD", {
    dateStyle: "full",
  });

  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <div className="bg-default-50 border border-default-200 rounded-3xl p-6 sm:p-10 lg:p-12 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
        <div className="flex flex-col items-start max-w-xl">
          <div className="inline-block bg-[#E8F5E9] text-[#05893E] font-medium text-xs sm:text-sm px-3.5 py-1.5 rounded-full mb-4">
            {date}
          </div>

          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-default-900 mb-3 leading-snug">
            আজকের বাজারের দাম এক নজরে
          </h1>

          <p className="text-sm sm:text-base text-default-600 mb-6 leading-relaxed">
            চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম — বাজারভিত্তিক
            বিস্তারিত, গড়, সর্বনিম্ন-সর্বাধিক এবং দামের পরিবর্তন এক জায়গায়।
          </p>

          <Button className="bg-[#05893E] text-white font-medium px-6 py-2.5 shadow-md rounded-xl">
            সব পণ্য দেখুন
          </Button>
        </div>

        <div className="flex-shrink-0 w-full max-w-[280px] sm:max-w-[320px] lg:max-w-[380px] flex justify-center">
          <Image
            src={"/bazar-hero.png"}
            alt="banner-logo"
            height={300}
            width={300}
            className="w-full h-auto object-contain"
            priority
          />
        </div>
      </div>
    </section>
  );
}
