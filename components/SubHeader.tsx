"use client";
import { useEffect } from "react";
import SvgAsset from "./svg-assets";
import siteMetadata from "@/data/siteMetadata";
import { useRive, Layout, Fit, Alignment } from "@rive-app/react-canvas";

const socials: ("next" | "github" | "linkedin")[] = [
  "next",
  "github",
  "linkedin",
];

export default function SubHeader() {
  const { rive, RiveComponent } = useRive({
    // load file
    src: "/assets/like.riv",
    // state machine
    stateMachines: ["likeMachine", "themeState"],
    // provide ui layout
    layout: new Layout({ fit: Fit.Contain, alignment: Alignment.Center }),
    // autoplay: true,
  });

  useEffect(() => {
    const updateTheme = () => {
      const darkTheme = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      if (darkTheme) {
        rive?.play("dark");
      } else {
        rive?.play("light");
      }
    };

    updateTheme();

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    mediaQuery.addEventListener("change", updateTheme);

    return () => {
      mediaQuery.removeEventListener("change", updateTheme);
    };
  }, [rive]);

  // TODO: add backend db for future use
  // const handleLike = async () => {
  //   await fetch("/api/likes", {
  //     method: "POST",
  //   });
  // };

  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 sm:grid-rows-none w-full justify-center items-center xs:grid-rows-2 xs:gap-y-4 sm:gap-y-0">
      <div className="flex xs:hidden md:block row-span-1 items-center justify-center ml-12">
        <p className="max-w-[30ch] text-[14px]">
          Welcome to my personal portfolio, here you can find some of my
          projects and learn more about me.
        </p>
      </div>
      <div className="flex row-span-2 gap-5 after:place-items-center justify-center">
        {socials.map((social, index) => (
          <SvgAsset
            key={index}
            kind={social}
            href={siteMetadata[social]}
            size={32}
          />
        ))}
      </div>
      <div className="flex justify-center row-span-3 items-center text-[14px]">
        Leave a like!
        <span>
          <RiveComponent
            className="h-14 w-14"
            onClick={() => rive?.play("clicked")}
          />
        </span>
      </div>
    </div>
  );
}
