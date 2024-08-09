import { FunctionComponent } from "react";

type CardProps = {
  title: string;
  description: string;
  image: FunctionComponent<React.SVGProps<SVGSVGElement>>;
  href: string;
};

export default function Card({ title, description, image: ImageComponent, href }: CardProps) {
  return (
    <div className="group flex flex-col text-center items-center w-[200px] h-[292px] rounded-[10px] outline outline-[2px] outline-[--black] drop-shadow-md">
      <div className="flex bg-[--black] justify-center items-center w-full h-1/2 rounded-t-[10px]">
        {ImageComponent && (
          <ImageComponent
            className="w-[130px] h-[130px] transition-transform duration-300 group-hover:fill-[--green] text-[--white]"
          />
        )}
      </div>
      <div className="flex flex-col justify-between gap-y-4">
        <h2 className="text-2xl text-[--text-dark]">{title}</h2>
        <p className="opacity-75">{description}</p>
        <div className="">
          <a
            href={href}
            className="inline-block px-6 py-2 outline outline-2 outline-[--black] font-semibold rounded-lg shadow-md group-hover:bg-[--green] dark:group-hover:text-[--black2] focus:outline-none focus:ring-4 focus:ring-[--black] focus:ring-opacity-75 transition ease-in-out duration-200"
          >
            View
          </a>
        </div>
      </div>
    </div>
  );
}
