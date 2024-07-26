import about from "@/data/resume/about";

export default function About() {
    return (
        <div className="flex flex-col justify-center items-start mb-12">
            <h1 className="items-center text-[30px] mb-4">About</h1>
            <p>{about}</p>
        </div>
    )
}