import ProjectLayout from "@/layouts/ProjectLayout";
import Image from "next/image";

// Define your project data
const projectData = {
  keno: {
    title: "Web Keno",
    description: "Web app where you can play the fun gambling game of keno",
    image: "/images/game.webp",
  },
  cluster: {
    title: "Pi Cluster",
    description: "Building a raspberry pi cluster",
    image: "/images/pi.webp",
  },
  quest: {
    title: "Code Quest",
    description: "Game that teaches kids how to code",
    image: "/images/quest.webp",
  },
};

// Generate the static paths for your projects
export async function generateStaticParams() {
  return Object.keys(projectData).map((project) => ({ project }));
}

// This component will render based on the `params` passed in from `generateStaticParams`
export default function ProjectPage({ params }: { params: { slug: string } }) {
  const projectInfo = projectData[params.slug as keyof typeof projectData];

  if (!projectInfo) {
    return <p>Project not found</p>;
  }

  return (
    <ProjectLayout>
      <div className="flex flex-col justify-center items-center border-b-2 p-12">
        <h1 className="text-[72px]">{projectInfo.title}</h1>
        <Image
          src={projectInfo.image}
          alt={projectInfo.title}
          width={200}
          height={200}
          className="mt-20 rounded-full"
        />
      </div>
      <div className="flex flex-row mt-16">
        <div className="flex flex-col justify-start items-center mr-20 space-y-8">
          {/* Add project-specific components or content here */}
        </div>
      </div>
    </ProjectLayout>
  );
}
