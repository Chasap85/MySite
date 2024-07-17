import Image from "next/image";

export default function Footer() {
  return (
    <div className="flex flex-col justify-center items-center mt-4 min-w-full bg-footer-bg bg-cover bg-[--brown] bg-no-repeat rounded-[40px]">
      <div className="flex flex-row min-w-full justify-between items-center">
        <h1 className="p-24 ml-40 text-[--egg] text-6xl">Contact Me</h1>
        <Image
          className="mr-40"
          src="/profile.png"
          alt="Profile Picture"
          width={400}
          height={400}
        />
      </div>
      <div className="flex flex-row xs:flex-col justify-between items-center p-12">
        <div className="flex justify-center items-center">
          <h1 className="text-[--egg] p-24">Social</h1>
          <div className="text-[--egg]">
            <p>social</p>
            <p>social</p>
            <p>social</p>
            <p>social</p>
          </div>
          d
        </div>
        <div className="flex justify-between">
          <h1 className="text-[--egg] p-24 text-nowrap">Proposition</h1>
          <div>
            <p className="text-[--egg] ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
