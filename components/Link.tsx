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
      title: "Hobbies",
      description: "What I enjoy",
      image: AchieveIcon,
      href: "/hobbies",
    },
  ];
  return (
    <div className="w-full p-24">
      <div className="flex md:flex-row xs:gap-y-10 justify-between items-center flex-col">
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
