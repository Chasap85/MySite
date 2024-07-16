import Image from "next/image";

export default function Hero() {
  return (
    <div className="animate-fade-left p-7 my-2 w-full grid grid-cols-6 items-center justify-between xs:w-full flex-shrink-0 bg-hero-background bg-cover bg-no-repeat">
      <Image
        className="col-span-2 drop-shadow-md flex-shrink-0 hidden md:block"
        src="/welcome.svg"
        alt="Welcome Photo"
        width={421}
        height={202}
        priority
      />
      <div className="md:col-span-2 sm:col-start-2 sm:col-end-3 flex items-center md:gap-24 sm:gap-4 relative">
        <a
          href="/resume"
          className="group rounded-lg px-5 py-4 transition-colors hover:bg-slate-900/10"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Resume{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            You can view my work history here!
          </p>
        </a>
      </div>
      <div className="md:col-span-2 sm:col-start-4 sm:col-end-6">
        <h2>Welcome! I&apos;m Chase</h2>
        <p>Web Developer</p>
      </div>
    </div>
  );
}
