import React from "react";
import MarqueeText from "react-marquee-text";
import "react-marquee-text/dist/styles.css";

interface Marq {
  id: string;
  title: string;
  image: string;
  nameBn: string;
  today: number;
  unit: string;
  change: {
    dir: string;
    pct: number;
  };
}

const Marquee = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/bazardor/products",
  );
  const data: Marq[] = await res.json();
  //   console.log(data);

  return (
    <div className="w-full bg-white border-b border-default-200 py-3 overflow-hidden">
      <div>
        <MarqueeText direction="right" duration={15}>
          <div className="flex items-center gap-6 sm:gap-10">
            {data.map((n) => (
              <div
                key={n.id}
                className="flex items-center gap-2 whitespace-nowrap text-default-800 text-sm sm:text-base font-medium"
              >
                <div className="flex items-center gap-1.5">
                  <span>{n.image}</span>
                  <span>{n.nameBn}</span>
                </div>

                <span className="text-default-600">
                  {n.today} টাকা/{n.unit}
                </span>

                <span
                  className={
                    n.change.dir === "up"
                      ? "text-red-600 flex items-center gap-0.5 font-semibold"
                      : "text-green-600 flex items-center gap-0.5 font-semibold"
                  }
                >
                  <span>{n.change.dir === "up" ? "▲" : "▼"}</span>
                  <span>{Math.abs(n.change.pct)}%</span>
                </span>

                {/* <span className="mx-4 text-default-300">•</span> */}
              </div>
            ))}
          </div>
        </MarqueeText>
      </div>
    </div>
  );
};

export default Marquee;
