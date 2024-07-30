import Image from "next/image";
import SvgAsset from "./svg-assets";
import siteMetadata from "@/data/siteMetadata";

const socials: ("next" | "github" | "linkedin")[] = ["next", "github", "linkedin"];

export default function SubHeader() {
  return (
    <div className="grid grid-cols-3 w-full justify-center items-center">
      <div className="flex row-span-1 items-center justify-center">
        <p className="max-w-[30ch] text-[14px]">
          Welcome to my personal portfolio, here you can find some of my
          projects and learn more about me.
        </p>
      </div>
      <div className="flex row-span-2 gap-5 after:place-items-center justify-center">
        {socials.map((social, index) => (
          <SvgAsset key={index} kind={social} href={siteMetadata[social]} size={32} />
        ))}
      </div>
      <div className="flex justify-center row-span-3 items-center text-[14px]">
        Leave a like!
        <span className="ml-8">
          <SvgAsset kind="like" href="#" size={20} />
        </span>
      </div>
    </div>
  );
}
