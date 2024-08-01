import resume from "@/data/experience";
import SvgAsset from "./svg-assets";

export default function Skills({ skills }: { skills: string[] }) {
  return (
    <div className="mb-12">
      {/* skill container */}
      <div className="grid grid-cols-4 gap-4 w-full justify-center">
        {skills.map((skill: string, index: number) => (
          <div key={index} className="flex flex-col justify-center items-center">
            <div
              key={index}
              className="flex items-center justify-center outline outline-[--black] outline-4 text-[--black] w-24 h-24 rounded-xl"
            >
              <SvgAsset kind="github" href="#" size={50}/>
            </div>
            <p key={index} className="mt-2">{skill}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
