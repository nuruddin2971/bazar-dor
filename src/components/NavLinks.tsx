import Link from "next/link";

interface Navs {
  id: string;
  slug: string;
  nameBn: string;
  icon: string;
}

const NavLinks = async () => {
  let data: Navs[] = [];

  try {
    const res = await fetch(
      "https://openapi.programming-hero.com/api/bazardor/categories",
      {
        cache: "force-cache",
      }
    );

    if (!res.ok) {
      throw new Error(API Error: ${res.status});
    }

    const result = await res.json();


    data = Array.isArray(result)
      ? result
      : Array.isArray(result.data)
      ? result.data
      : [];

  } catch (error) {
    console.error("Category Fetch Error:", error);
  }

  return (
    <nav className="w-full border-b border-default-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex items-center gap-6 sm:gap-10 overflow-x-auto scrollbar-hide">
          {data.length > 0 ? (
            data.map((n) => (
              <Link
                key={n.id}
                href={/${n.slug}}
                className="flex items-center gap-2 text-default-700 hover:text-[#05893E] font-medium whitespace-nowrap transition-colors"
              >
                <span>{n.icon}</span>
                <span>{n.nameBn}</span>
              </Link>
            ))
          ) : (
            <p className="text-sm text-gray-500">
              কোনো ক্যাটাগরি পাওয়া যায়নি।
            </p>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavLinks;