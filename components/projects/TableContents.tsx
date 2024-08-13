import Link from "next/link";
import SvgAsset from "../svg-assets";
import siteMetadata from "@/data/siteMetadata";

export default function TableContents() {
  return (
    <>
      <ul className="space-y-4">
        <li>
          <a href="#intro">• Intro</a>
        </li>
        <li>
          <a href="#intro">• About</a>
        </li>
        <li>
          <a href="#intro">• Process</a>
        </li>
        <li>
          <a href="#intro">• Progress</a>
        </li>
      </ul>
      <Link
        href="/projects"
        className="inline-block px-6 py-2 outline outline-2 outline-[--black] font-semibold rounded-lg shadow-md hover:bg-[--green] dark:hover:text-[--black2] focus:outline-none focus:ring-4 focus:ring-[--black] focus:ring-opacity-75 transition ease-in-out duration-200"
      >
        Repo
      </Link>
      <div className="flex justify-center space-x-4">
        <SvgAsset kind="github" href={siteMetadata.github} size={48} />
        <SvgAsset kind="linkedin" href={siteMetadata.linkedin} size={48} />
      </div>
    </>
  );
}
