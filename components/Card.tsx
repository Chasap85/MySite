import Image from "next/image";
import Link from "next/link";

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
  return (
    <div className="flex flex-col text-center items-center w-[200px] h-[292px] rounded-[10px] outline outline-[2px] outline-[--black] drop-shadow-md">
      <div className="flex bg-[--bg-dark] justify-center items-center w-full h-1/2 rounded-t-[10px]">
          {image && (
            <Image
              src={image}
              alt={title}
              width={130}
              height={130}
            />
          )}
      </div>
      <div className="flex flex-col justify-between">
        <h2 className="text-2xl text-[--text-dark]">{title}</h2>
        <p className="opacity-75">{description}</p>
        <Link href={href}>View</Link>
      </div>
    </div>
  );
}
