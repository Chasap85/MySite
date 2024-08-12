import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <div>
      <div className="flex flex-col justify-center items-center m-24">
        <div>
          <Image
            src="/assets/portrait.webp"
            alt="Chase's Logo"
            width={300}
            height={300}
          />
        </div>
        <div className="group flex flex-row justify-center items-center mt-8">
          <h1 className="text-[40px]">Résumé</h1>
          <Link href="/resume" className="ml-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-16 w-16 grou[:transition-transform group-hover:translate-x-2 dark:group-hover:text-[--green] group:motion-reduce:transform-none"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
