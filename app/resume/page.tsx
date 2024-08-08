import ResumeLayout from "@/layouts/ResumeLayout";
import resume from "@/data/experience";
import Header from "@/components/Header";

export default function Resume() {
  return (
    <div className="py-4 px-12">
      <ResumeLayout resume={resume}>
        <div>
          Feedback
        </div>
      </ResumeLayout>
      {/*  TODO:  Leave feedback */}
    </div>
  );
}
