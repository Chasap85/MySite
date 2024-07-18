import Image from "next/image";

export default function Hero() {
  return (
    <>
      <div className="animate-fade-left w-full  xs:w-full xs:h-[500px] sm:h-[600px] md:h-[500px] lg:h-[500px] xs:bg-[500px] bg-hero-background bg-cover bg-no-repeat bg-center rounded-[40px]">
        <div className="w-full h-full p-12 grid grid-cols-6 items-center bg-backdrop bg-cover bg-center rounded-[40px]">
            <div className="flex justify-center sm:hidden xs:hidden md:col-start-1 md:col-end-3 drop-shadow-lg">
                <h2 className="absolute text-[--egg] text-2xl mt-16 font-extrabold">Welcom to my page</h2>
                <Image
                    className="rounded-[10px]"
                    src="/images/port.png"
                    alt="hero"
                    width={300}
                    height={399.7437}
                    priority
                />
            </div>
          <div className="sm:ml-14 xs:col-start-1 xs:col-end-4 md:col-start-3 md:col-end-5 flex justify-center items-center">
            <a
              href="/resume"
              className="group rounded-[15px] border-2 border-slate-900 transition-colors hover:border-amber-600 hover:outline-dashed hover:outline-offset-4 hover:outline-2 hover:outline-amber-600 hover:bg-stone-900/80"
            >
              <h2 className="p-4 group-hover:text-[--egg] flex text-2xl justify-center items-center text-slate-900">
                Resume{" "}
                <span className="ml-4 inline-block items-center transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-8 group-hover:text-amber-500 group-hover:size-10"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                </span>
              </h2>
              <p className="m-0 max-w-[30ch] p-4 font-bold text-sm opacity-50 group-hover:opacity-100 group-hover:text-[--egg]">
                You can view my work history here!
              </p>
            </a>
          </div>
          <div className="items-end flex flex-col sm:col-start-4 sm:col-end-7 md:col-start-5 md:col-end-7 lg:col-start-5 lg:col-end-7">
            <h2 className="text-stone-900">Welcome!</h2>
            <h4 className="text-lg">This is my professional page</h4>
          </div>
        </div>
      </div>
    </>
  );
}
