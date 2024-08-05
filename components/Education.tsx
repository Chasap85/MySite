import { Education } from "@/types/types"

interface Props {
    education: Education;
}

export default function EducationComp({education}: Props) {
    return (
        <div className="mt-12 bg-[--black] p-12 rounded-xl text-white">
            <h1 className="text-[30px]">Education</h1>
            <div className="flex flex-col justify-center items-center">
                <h2 className="text-[25px] my-8">{education.school}</h2>
                <p className="text-[20px]">{education.degree}</p>
                <p className="text-[20px]">{education.date}</p>
            </div>
        </div>
    )
}