import Header from "@/components/Header";
import Container from "@/components/projects/Container";
import Link from "next/link";

const projects = [
  {
    title: "keno game",
    description: "Web app where you can play the fun gambling game of keno",
    image: "/images/game.webp",
    url: "/projects/keno",
  },
  {
    title: "pi cluster",
    description: "Building a raspbery pi cluster",
    image: "/images/pi.webp",
    url: "/projects/cluster",
  },
  {
    title: "Code Quest",
    description: "Game that teaches kids how to code",
    image: "/images/quest.webp",
    url: "/projects/quest",
  },
];

export default function ProjectPage() {
  return (
    <div className="p-12 flex flex-col justify-between items-center">
      <Header />
      <h1 className="text-4xl mt-48 mb-24">Projects</h1>
      <div className="flex flex-col justify-center items-center">
        {projects.map((project, index) => (
          <Container
            key={index}
            title={project.title}
            description={project.description}
            image={project.image}
            url={project.url}
          />
        ))}
      </div>
      <div className="inline-block px-6 py-2 outline outline-2 outline-[--black] font-semibold rounded-lg shadow-md hover:bg-[--green] dark:hover:text-[--black2] focus:outline-none focus:ring-4 focus:ring-[--black] focus:ring-opacity-75 transition ease-in-out duration-200">
        <Link href="/">Go Back Home</Link>
      </div>
    </div>
  );
}
