import Image from "next/image";
import { AchieveIcon, BioIcon, ProjectIcon } from "@/components/svg-assets/icons";

export default function Card({
  title,
  description,
  image,
  href,
}: {
  title: string;
  description: string;
  image: string;
  href: string;
}) {
  const achieve = AchieveIcon;
  const bio = BioIcon;
  const project = ProjectIcon;

  return (
    <div className="group flex flex-col text-center items-center w-[200px] h-[292px] rounded-[10px] outline outline-[2px] outline-[--black] drop-shadow-md">
      <div className="flex bg-[--bg-dark] justify-center items-center w-full h-1/2 rounded-t-[10px]">
        {image && (
          <Image
            src={image}
            alt={title}
            width={130}
            height={130}
            className="transition-transform duration-300 group-hover:bg-[--green]"
          />
        )}
      </div>
      <div className="flex flex-col justify-between gap-y-4">
        <h2 className="text-2xl text-[--text-dark]">{title}</h2>
        <p className="opacity-75">{description}</p>
        <div className="">
          <a
            href={href}
            className="inline-block px-6 py-2 outline outline-2 outline-[--black] font-semibold rounded-lg shadow-md hover:bg-[--green] focus:outline-none focus:ring-4 focus:ring-[--black] focus:ring-opacity-75 transition ease-in-out duration-200"
          >
            View
          </a>
        </div>
      </div>
    </div>
  );
}
