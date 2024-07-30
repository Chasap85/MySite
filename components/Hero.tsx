import SvgAsset from "./svg-assets";

export default function Hero() {
  return (
    <>
      <div className="flex flex-col justify-center items-center w-2/5 h-[262.5px] scale-85 my-12">
        <div className="flex justify-center items-center w-full h-full bg-hero-profile bg-contain bg-center bg-no-repeat">
          <div className="group transition-colors pl-24">
            <div className="flex items-center">
              <h2 className="p-4 flex text-2xl justify-center items-center text-slate-900">
                Résumé{" "}
              </h2>
              <span className="ml-4 inline-block items-center transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                <SvgAsset kind="arrow" href="/resume" size={25} />
              </span>
            </div>
            <p className="m-0 max-w-[20ch] p-4 font-bold text-sm opacity-50">
              You can view my work history here!
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
