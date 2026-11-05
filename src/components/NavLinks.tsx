import Link from "next/link";
import React from "react";

interface Navs {
  id: string;
  slug: string;
  nameBn: string;
  icon: string;
}

const NavLinks = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/bazardor/categories",
  );
  const data: Navs[] = await res.json();
  console.log(data);

  return (
    <nav className="w-full border-b border-default-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center gap-6 sm:gap-10 overflow-x-auto scrollbar-hide">
        {data.map((n, i) => (
          <Link
            key={i}
            href={n.slug}
            className="flex items-center gap-2 text-default-700 hover:text-[#05893E] font-medium whitespace-nowrap transition-colors"
          >
            <span className="text-lg">{n.icon}</span>
            <span>{n.nameBn}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default NavLinks;
