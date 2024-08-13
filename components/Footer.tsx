import Image from "next/image";

export default function Footer() {
  return (
    <div className="p-12 bg-[--black] mt-20 w-full dark:border-t-2">
      <div className="p-12">
        <Image
          src="/static/icon.svg"
          alt="Chase's Logo"
          width={32}
          height={32}
        />
      </div>
      <div className="flex justify-center">
        <h1 className="text-[--white] text-[140px]">Contact Me!</h1>
      </div>
      <div>
        <div>

        </div>
        <div className="flex flex-row justify-between text-[--white] mx-12">
          <ul className="flex flex-col gap-y-4">
            <li className="text-lg">Contact</li>
            <li>chase@blitworx.com</li>
          </ul>
          <ul className="flex flex-col ml-12">
            <li className="text-lg">Services</li>
            <li>Software Development</li>
            <li>Full Stack Development</li>
          </ul>
        </div>
      </div>
      <div className="flex justify-center">
        <p className="text-[--white] text-sm">© 2024 Chase Profile</p>
      </div>
    </div>
  );
}
