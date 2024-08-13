"use client";
import { useEffect } from "react";
import Logo from "../public/static/logo.svg";
import { useRive, Layout, Fit, Alignment } from "@rive-app/react-canvas";

export default function NavBar() {
  const { rive, RiveComponent } = useRive({
    // load file
    src: "assets/chaselogo.riv",
    // state machine
    stateMachines: ["hoverState", "themeState"],
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
        console.log("dark theme");
        rive?.play("dark");
      } else {
        console.log("light theme");
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

  return (
    <div className="flex justify-center my-8 w-full h-[150px]">
      <a href="/">
        {/* <Logo className="w-52 text-"/> */}
        <RiveComponent
          className="h-full w-[310px]"
          onMouseEnter={() => rive?.play("hoverOn")}
          onMouseLeave={() => rive?.play("hoverOff")}
        />
      </a>
    </div>
  );
}
