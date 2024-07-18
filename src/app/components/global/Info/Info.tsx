"use client";

import Image from "next/image";
import Card from "../Card/Card";
import { useState } from "react";

export default function InfoSection() {
  const [isToggled, setIsToggled] = useState(false);

  const toggleContent = () => {
    setIsToggled(!isToggled);
  };

  return (
    <div className="flex flex-col justify-center mt-4 p-10 items-center min-w-full animate-fade-in bg-project-bg bg-cover bg-center rounded-[40px]">
      <div className="flex flex-col items-center">
        <h3 className="text-4xl text-[--brown]">Info</h3>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-20 mt-4 animate-bounce drop-shadow-md"
          >
            <path
              fill-rule="evenodd"
              d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-.53 14.03a.75.75 0 0 0 1.06 0l3-3a.75.75 0 1 0-1.06-1.06l-1.72 1.72V8.25a.75.75 0 0 0-1.5 0v5.69l-1.72-1.72a.75.75 0 0 0-1.06 1.06l3 3Z"
              clip-rule="evenodd"
            />
          </svg>
      </div>
      <div className="flex flex-row justify-around xs:flex-col w-full xs:justify-center xs:items-center">
        <Card>
          <h3 className="m-4 text-amber-500">Education</h3>
          <p className="sm:text-[10px] md:text-[10px] lg:text-base">
            Bachelors in Computer Science
          </p>
          <p className="sm:text-[10px] md:text-[10px] lg:text-base">
            New Mexico State University
          </p>
          <div className="sm:mt-8 w-full rounded-b-lg bg-bottom">
            <div className="flex flex-col justify-center items-center">
              <Image
                className="sm:hidden"
                src="/images/edu.jpg"
                alt="NMSU"
                width={300}
                height={300}
              />
              <span className="absolute sm:mb-12">
                <button
                  className="bg-[--egg] opacity-75 hover:opacity-100 text-stone-900 px-12 py-2 sm:px-4 sm:py-1 rounded"
                  onClick={toggleContent}
                >
                  View
                </button>
              </span>
            </div>
          </div>
        </Card>
        <Card>
          <h4 className="m-4 text-amber-500">What I&apos;m working on</h4>
          <p className="sm:text-[10px] md:text-[10px] lg:text-base">
            This page shows what I&apos;m up to i.e. projects and hobbies
          </p>
          <div className="w-full rounded-b-lg overflow-hidden bg-bottom">
            <div className="sm:mt-8 flex flex-col justify-center items-center">
              <Image
                className="sm:hidden"
                src="/images/build.jpg"
                alt="My Projects"
                width={300}
                height={300}
              />
              <span className="absolute sm:mb-12">
                <button className="bg-[--egg] opacity-75 hover:opacity-100 text-stone-900 px-12 py-2 sm:px-4 sm:py-1 rounded">
                  View
                </button>
              </span>
            </div>
          </div>
        </Card>
        <Card>
          <h4 className="m-4 text-amber-500">In progress</h4>
          <p className="sm:text-[10px] md:text-[10px] lg:text-base">
            Feature comeing soon...
          </p>
          <div className="w-full rounded-b-lg overflow-hidden bg-bottom">
            <div className="flex flex-col justify-center items-center">
              <Image
                className="w-full h-auto sm:hidden"
                src="/images/404.jpg"
                alt="Page not created yet"
                width={300}
                height={300}
              />
              <span className="absolute sm:mb-12">
                <button className="bg-[--egg] opacity-75 hover:opacity-100 text-stone-900 px-12 py-2 sm:px-4 sm:py-1 rounded">
                  View
                </button>
              </span>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
