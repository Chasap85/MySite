import Header from "@/components/Header";
import AboutLayout from "@/layouts/AboutLayout";
import Link from "next/link";

export default function About() {
  return (
    <div className="py-8 px-12">
      <AboutLayout>
        <div className="flex flex-col justify-center items-center mt-24 md:mt-48 space-y-8">
          <h1 className="text-center text-4xl md:text-[80px] lg:text-[120px] font-bold leading-tight md:leading-none">
            Thank You!
          </h1>
          <Link
            href="/"
            className="px-8 py-3 text-lg font-semibold rounded-lg border-2 border-[--black] shadow-md hover:bg-[--green] dark:hover:text-[--black2] focus:outline-none focus:ring-4 focus:ring-[--black] focus:ring-opacity-75 transition ease-in-out duration-200"
          >
            Go Back Home
          </Link>
        </div>
      </AboutLayout>
    </div>
  );
}
