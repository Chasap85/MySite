import About from "@/components/About";
import Experience from "@/components/Experience";
import Profile from "@/components/Profile";
import Skills from "@/components/Skills";
import { Resume } from "@/types/types";

interface Props {
  children: React.ReactNode;
  resume: Resume;
}

export default function ResumeLayout({ resume, children }: Props) {
  return (
    <>
      <div className="flex flex-row">
        <Profile contact={resume.contact} />
        <div>
          <About />
          <Skills skills={resume.skills} />
          <Experience experience={resume.experience} />
        </div>
      </div>
      {children}
    </>
  );
}
