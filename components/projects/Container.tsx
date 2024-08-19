import Image from "next/image";
import Link from "next/link";

export default function Container({
  title,
  description,
  image,
  url,
}: {
  title: string;
  description: string;
  image: string;
  url: string;
}) {
  return (
    <div className="m-12 w-full flex flex-col md:flex-row justify-between items-center bg-[--black] dark:bg-[--orange] p-8 rounded-lg">
      <div className=" text-[--white] flex flex-col justify-center items-center">
        <h2 className="text-[48px] text-center uppercase">{title}</h2>
        <p className="max-w-[20ch] text-center">{description}</p>
        <Link
          href={url}
          className="mb-8 mt-4 md:mb-0 md:mt-20 inline-block px-6 py-2 outline outline-2 outline-[--white] font-semibold rounded-lg shadow-md hover:bg-[--green] dark:hover:text-[--black2] hover:text-[--black] focus:outline-none focus:ring-4 focus:ring-[--black] focus:ring-opacity-75 transition ease-in-out duration-200"
        >
          View
        </Link>
      </div>
      <div className="">
        <Image src={image} alt={title} width={400} height={400} />
      </div>
    </div>
  );
}
