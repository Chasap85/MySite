import Header from "@/components/Header";
import Link from "next/link";

export default function ProjectLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="mx-12">
      <Header />
      <div className="flex justify-center mt-12 mb-12">
        <Link
          href="/projects"
          className="inline-block px-6 py-2 outline outline-2 outline-[--black] font-semibold rounded-lg shadow-md hover:bg-[--green] dark:hover:text-[--black2] focus:outline-none focus:ring-4 focus:ring-[--black] focus:ring-opacity-75 transition ease-in-out duration-200"
        >
          Back
        </Link>
        
      </div>
      {children}
    </div>
  );
}
