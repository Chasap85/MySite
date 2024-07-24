import Image from "next/image";

export default function Hero() {
  return (
    <>
      <div className="flex flex-col justify-center items-center w-2/5 h-[262.5px] my-20">
        <div className="flex justify-center items-center w-full h-full bg-hero-profile bg-contain bg-center bg-no-repeat">
          <a
            href="/"
            className="group transition-colors pl-24"
          >
            <h2 className="p-4 flex text-2xl justify-center items-center text-slate-900">
              Résumé{" "}
              <span className="ml-4 inline-block items-center transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
              </span>
            </h2>
            <p className="m-0 max-w-[20ch] p-4 font-bold text-sm opacity-50">
              You can view my work history here!
            </p>
          </a>
        </div>
      </div>
    </>
  );
}
