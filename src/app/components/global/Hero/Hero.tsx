import Image from "next/image";

export default function Hero() {
  return (
    <>
      <div className="animate-fade-left p-7 w-full  xs:w-full xs:h-[500px] sm:h-[600px] md:h-[500px] lg:h-[500px] xs:bg-[500px] bg-hero-background bg-cover bg-no-repeat bg-center rounded-[40px]">
        <div className="w-full h-full grid grid-cols-6 items-center bg-backdrop bg-cover bg-center rounded-[40px]">
          <div className="sm:ml-14 xs:col-start-1 xs:col-end-4 md:col-start-3 md:col-end-5 flex justify-center items-center">
            <a
              href="/resume"
              className="group rounded-[40px] border-4 border-[--brown] transition-colors hover:bg-stone-900/80 hover:text-"
            >
              <h2 className="p-4 group-hover:text-[--egg] flex text-2xl justify-center items-center text-[--brown]">
                Resume{" "}
                <span className="ml-4 inline-block items-center transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-8 group-hover:text-[--egg] group-hover:size-10"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                </span>
              </h2>
              <p className="m-0 max-w-[30ch] p-4 text-sm opacity-50 group-hover:opacity-100 group-hover:text-[--egg]">
                You can view my work history here!
              </p>
            </a>
          </div>
          <div className="sm:col-start-4 sm:col-end-7 md:col-start-5 md:col-end-7">
            <h2 className="text-[--brown]">Welcome! I&apos;m Chase</h2>
            <p>Web Developer</p>
          </div>
        </div>
      </div>
    </>
  );
}
