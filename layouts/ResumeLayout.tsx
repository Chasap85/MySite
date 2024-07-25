import Profile from "@/components/Profile";
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
        {children}
      </div>
    </>
  );
}
