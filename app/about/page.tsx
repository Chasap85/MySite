import Header from "@/components/Header";
import AboutLayout from "@/layouts/AboutLayout";
import Link from "next/link";

export default function About() {
  return (
    <div className="py-8 px-12">
      <AboutLayout>
        <div className="flex flex-col justify-center items-center m-24 mt-80 space-y-48">
          <h1 className="text-[150px]">Thank You!</h1>
          <div className="inline-block px-6 py-2 outline outline-2 outline-[--black] font-semibold rounded-lg shadow-md hover:bg-[--green] dark:hover:text-[--black2] focus:outline-none focus:ring-4 focus:ring-[--black] focus:ring-opacity-75 transition ease-in-out duration-200">
            <Link href="/">
              Go Back Home
            </Link>
          </div>
        </div>
      </AboutLayout>
    </div>
  );
}
