import { Resume } from "@/types/types";

const resume: Resume = {
  experience: [
    {
      title: "Software Engineer",
      company: "Station Casinos",
      location: "Las Vegas, NV",
      date: "2022, 2023-2024",
    },
    {
      title: "Software Engineer Intern",
      company: "Currey Adkins",
      location: "El Paso, TX",
      date: "2021",
    },
    {
      title: "Systems Installation Tech",
      company: "PyroCom Systems",
      location: "El Paso, TX",
      date: "2020",
    },
    {
      title: "Snowboard Instructor",
      company: "Inn of the Mountain Gods",
      location: "Ruidoso, NM",
      date: "2016-2018",
    },
  ],
  education: {
    school: "New Mexico State University",
    location: "Las Cruces, NM",
    date: "2024",
    degree: "Bachelor of Arts in Computer Sciences",
  },
  skills: [
    {
      name: "React",
      icon: "react"
    },
    {
      name: "Next.js",
      icon: "next"
    },
    {
      name: "Nest.js",
      icon: "nestjs"
    },
    {
      name: "TypeScript",
      icon: "typescript"
    },
    {
      name: "Node.js",
      icon: "nodejs"
    },
    {
      name: "Software Dev",
      icon: "software"
    },
    {
      name: "Agile",
      icon: "agile"
    },
    {
      name: "Design",
      icon: "design"
    },
  ],
  contact: {
    email: "chase@blitworx.com",
    phone: "702-324-2272",
    github: "https://github.com/Chasap85",
    linkedin: "https://linkedin.com/in/chase-little",
    location: "Las Vegas, NV",
  },
};

export default resume;