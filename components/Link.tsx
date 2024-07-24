"use client";
import myData from "@/data/myData";
import Card from "./Card";

export default function Link() {
  return (
    <div className="w-full flex flex-col items-center">
      <h1>Extra Bits</h1>
      <div className="flex lg:flex-row justify-between items-center gap-60 flex-col">
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
