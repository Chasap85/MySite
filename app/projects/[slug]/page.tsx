import ProjectLayout from "@/layouts/ProjectLayout";
import Image from "next/image";
import projectData from "@/data/projects";
import TableContents from "@/components/projects/TableContents";

export async function generateStaticParams() {
  return Object.keys(projectData).map((project) => ({ project }));
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const projectInfo = projectData[params.slug as keyof typeof projectData];

  if (!projectInfo) {
    return <p>Project not found</p>;
  }

  return (
    <ProjectLayout>
      <div className="flex flex-col justify-center items-center border-b-2 p-12">
        <h1 className="xs:text-4xl md:text-[72px]">{projectInfo.title}</h1>
        <Image
          src={projectInfo.image}
          alt={projectInfo.title}
          width={200}
          height={200}
          className="mt-20 rounded-full mb-20"
        />
      </div>
      <div className="grid grid-cols-5 gap-8 mt-40">
        <div className="lg:ml-12 md:ml-4 hidden md:block fixed top-1/2">
          <TableContents repoUrl={projectInfo.repoUrl}/>
        </div>
        <div className="md:col-start-3 md:col-end-6 col-start-1 col-end-6">
          <div className="flex flex-col justify-center items-center">
            <h2 id="intro" className="text-[36px] mt-16">
              Intro
            </h2>
            <p className="mt-8">{projectInfo.intro}</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <h2 id="about" className="text-[36px] mt-16">
              About
            </h2>
            <p className="mt-8">{projectInfo.about}</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <h2 id="process" className="text-[36px] mt-16 text-start">
              Process
            </h2>
            <p className="mt-8">{projectInfo.process}</p>
            {projectInfo.processImage.map((image) => (
              <div key={image.src} className="flex flex-col justify-center items-center">
                <Image
                  src={image.src}
                  alt={image.caption}
                  width={600}
                  height={200}
                  className="m-8"
                />
                <p>{image.caption}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-col justify-center items-center">
            <h2 id="progress" className="text-[36px] mt-16">
              Progress
            </h2>
            <p className="mt-8">{projectInfo.progress}</p>
          </div>
        </div>
      </div>
    </ProjectLayout>
  );
}
