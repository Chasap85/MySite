import { Skills } from "@/types/types";
import SvgAsset from "./svg-assets";

interface Props {
    skills: Skills[];
}

export default function SkillsComponent({ skills }: Props) {
  return (
    <div className="mb-12">
      {/* skill container */}
      <div className="grid grid-cols-4 gap-4 w-full justify-center">
        {skills.map((skill: Skills, index: number) => (
          <div key={index} className="flex flex-col justify-center items-center">
            <div
              className="flex items-center justify-center outline outline-[--black] outline-2 text-[--black] w-24 h-24 rounded-xl"
            >
              <SvgAsset kind={skill.icon} size={60} href="#"/>
            </div>
            <p key={index} className="mt-2">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
