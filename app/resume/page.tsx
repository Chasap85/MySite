import ResumeLayout from "@/layouts/ResumeLayout";
import resume from "@/data/experience";

export default function Resume() {
  return (
    <div className="py-4 px-12 flex flex-col justify-center items-center">
      <ResumeLayout resume={resume}>
        {/*  TODO:  Leave feedback */}
        <div>Feedback</div>
      </ResumeLayout>
    </div>
  );
}
