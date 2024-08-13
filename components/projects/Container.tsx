import { Projects } from "@/types/types";
import Image from "next/image";
import Link from "next/link";

export default function Container({
  title,
  description,
  image,
  url,
}: Projects) {
  return (
    <div className="m-12 w-full flex flex-row justify-between items-center bg-[--black] dark:bg-[--orange] p-8">
      <div className=" text-[--white] flex flex-col justify-center items-center">
        <h2 className="text-[48px] text-center uppercase">{title}</h2>
        <p className="max-w-[20ch] text-center">{description}</p>
        {/* <Link href="/projects/[title]" as={`/projects/${title}`}> */}
        <Link
          href={url}
          className="mt-20 inline-block px-6 py-2 outline outline-2 outline-[--black] font-semibold rounded-lg shadow-md group-hover:bg-[--green] dark:group-hover:text-[--black2] focus:outline-none focus:ring-4 focus:ring-[--black] focus:ring-opacity-75 transition ease-in-out duration-200"
        >
          View
        </Link>
      </div>
      <div className="hidden md:block">
        <Image src={image} alt={title} width={400} height={400} />
      </div>
    </div>
  );
}
