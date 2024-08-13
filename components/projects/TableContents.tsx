import Link from "next/link";
import SvgAsset from "../svg-assets";
import siteMetadata from "@/data/siteMetadata";

export default function TableContents({repoUrl}: {repoUrl: string}) {
  return (
    <>
      <ul className="space-y-4 text-2xl">
        <li>
          <a href="#intro" className="cursor-pointer">
            • Intro
          </a>
        </li>
        <li>
          <a href="#about" className="cursor-pointer">
            • About
          </a>
        </li>
        <li>
          <a href="#process" className="cursor-pointer">
            • Process
          </a>
        </li>
        <li>
          <a href="#progress" className="cursor-pointer">
            • Progress
          </a>
        </li>
      </ul>
      <div className="mt-8 flex flex-col justify-center items-center">
        <Link
          href={repoUrl}
          className="inline-block px-6 py-2 outline outline-2 outline-[--black] font-semibold rounded-lg shadow-md hover:bg-[--green] dark:hover:text-[--black2] focus:outline-none focus:ring-4 focus:ring-[--black] focus:ring-opacity-75 transition ease-in-out duration-200"
        >
          Repo
        </Link>
        <div className="flex justify-center space-x-4 mt-8">
          <SvgAsset kind="github" href={siteMetadata.github} size={48} />
          <SvgAsset kind="linkedin" href={siteMetadata.linkedin} size={48} />
        </div>
      </div>
    </>
  );
}
