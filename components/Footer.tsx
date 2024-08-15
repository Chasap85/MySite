import Image from "next/image";

export default function Footer() {
  return (
    <div className="p-4 bg-[--black] mt-20 w-full dark:border-t-2">
      <div className="flex md:flex-none px-12 xs:justify-center md:justify-start">
        <Image
          src="/static/icon.svg"
          alt="Chase's Logo"
          width={32}
          height={32}
        />
      </div>
      <div className="flex justify-center">
        <h1 className="text-[--white] xs:text-[75px] md:text-[140px] text-center">
          Contact Me!
        </h1>
      </div>
      <div>
        <div className="flex xs:flex-col xs:justify-center md:flex-row md:justify-between text-[--white] mx-12">
          <ul className="flex flex-col gap-y-4 xs:mb-12 md:mb-0 xs:justify-center xs:items-center">
            <li className="text-lg">Contact</li>
            <li>chase@blitworx.com</li>
          </ul>
          <ul className="flex flex-col gap-y-4 xs:ml-0 md:ml-12 xs:justify-center xs:items-center">
            <li className="text-lg">Services</li>
            <li>Software Development</li>
            <li>Full Stack Development</li>
          </ul>
        </div>
      </div>
      <div className="flex justify-center my-8">
        <p className="text-[--white] text-sm">© 2024 Chase Profile</p>
      </div>
    </div>
  );
}
