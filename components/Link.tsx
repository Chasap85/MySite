import Card from "./Card";
import AchieveIcon from "public/assets/achieve.svg";
import BioIcon from "public/assets/bio.svg";
import ProjectIcon from "public/assets/project.svg";

export default function Link() {
  const linkData = [
    {
      title: "Projects",
      description: "What I'm working on",
      image: ProjectIcon,
      href: "/projects",
    },
    {
      title: "About Me",
      description: "Who I am",
      image: BioIcon,
      href: "/about",
    },
    {
      title: "Achievements",
      description: "What I'm proud of",
      image: AchieveIcon,
      href: "/achievements",
    },
  ];
  return (
    <div className="w-full flex flex-col items-center mx-12">
      <h1>Extra Bits</h1>
      <div className="flex md:flex-row sm:gap-y-10 md:gap-24 justify-between items-center lg:gap-60 flex-col">
        {linkData.map((data) => (
          <Card
            key={data.title}
            title={data.title}
            description={data.description}
            image={data.image}
            href={data.href || ""}
          />
        ))}
      </div>
    </div>
  );
}
