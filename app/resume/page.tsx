import ResumeLayout from "@/layouts/ResumeLayout";
import resume from "@/data/experience";
import Header from "@/components/Header";

export default function Resume() {
  return (
    <>
      <ResumeLayout resume={resume}>
        <div>
          Feedback
        </div>
      </ResumeLayout>
      {/*  TODO:  Leave feedback */}
    </>
  );
}
