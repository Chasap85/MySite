import About from "@/components/About";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Profile from "@/components/Profile";
import SkillsComponent from "@/components/Skills";
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
          <SkillsComponent skills={resume.skills} />
          <Experience experience={resume.experience} />
          <Education />
        </div>
      </div>
      {children}
    </>
  );
}
