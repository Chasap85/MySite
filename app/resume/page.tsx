import ResumeLayout from "@/layouts/ResumeLayout";
import resume from "@/data/experience";

export default function Resume() {
  return (
    <>
      <ResumeLayout resume={resume}>
        
      </ResumeLayout>
      {/*  TODO:  Leave feedback */}
    </>
  );
}
