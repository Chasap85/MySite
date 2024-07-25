"use client";
import myData from "@/data/projects";
import Card from "./Card";

export default function Link() {
  return (
    <div className="w-full flex flex-col items-center">
      <h1>Extra Bits</h1>
      <div className="flex md:flex-row sm:gap-y-10 md:gap-24 justify-between items-center lg:gap-60 flex-col">
        {myData.map((data) => (
          <Card
            key={data.title}
            title={data.title}
            description={data.description}
            image={data.image}
            href={data.href || ''}
          />
        ))}
      </div>
    </div>
  );
}
