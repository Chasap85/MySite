"use client";
import Image from "next/image";
import Link from "next/link";

export default function NavBar() {
  return (
    <div className="flex justify-center my-8">
      <Image
        src="/static/logo.svg"
        alt="Chase's Logo"
        width={207}
        height={53}
      />
    </div>
  );
}
