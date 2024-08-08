import { ContactInfo } from "@/types/types";
import Image from "next/image";
import Linkedin from "../public//in-logo.svg";
import GitLogo from "../public/github-logo.svg";
import SvgAsset from "./svg-assets";
import siteMetadata from "@/data/siteMetadata";

interface Props {
  contact: ContactInfo;
}

export default function Profile({ contact }: Props) {
  const { email, phone, location } = contact;
  return (
    <div className="flex flex-col justify-start items-center mr-20 bg-gray-200 p-4 rounded-xl h-5/6">
      <div className="shadow-md border-[--black] rounded-full">
        <Image
          src="/assets/portrait.webp"
          alt="Portrait Photo"
          width={262}
          height={262}
          className="rounded-full"
        />
      </div>
      <h1 className="text-[25px] my-8">Chase Little</h1>
      {/* Contact info */}
      <div className="justify-center items-start space-y-4">
        <div className="flex space-x-3  border-b-2 p-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
            />
          </svg>
          <p>{email}</p>
        </div>
        <div className="flex space-x-3  border-b-2 p-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
            />
          </svg>
          <p>{phone}</p>
        </div>
        <div className="flex space-x-3 border-b-2 p-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
            />
          </svg>
          <p>{location}</p>
        </div>
      </div>
      {/* download resume */}
      <div className="my-8">
        <a
          href="/"
          className="inline-block px-6 py-3 outline outline-[--black] font-semibold rounded-lg shadow-md hover:bg-[--green] focus:outline-none focus:ring-4 focus:ring-[--black] focus:ring-opacity-75 transition ease-in-out duration-200"
        >
          Download Resume
        </a>
      </div>
      {/* git and linkedin buttons */}
      <div className="flex justify-center space-x-4">
        <SvgAsset kind="github" href={siteMetadata.github} size={48} />
        <SvgAsset kind="linkedin" href={siteMetadata.linkedin} size={48} />
      </div>
    </div>
  );
}
