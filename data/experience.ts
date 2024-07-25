interface Resume {
  experience: Array<{
    title: string;
    company: string;
    location: string;
    date: string;
  }>;
  eduction: {
    school: string;
    location: string;
    date: string;
    degree: string;
  };
  skills: Array<string>;
  contact: {
    email: string;
    phone: string;
    github: string;
    linkedin: string;
    location: string;
  };
}

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
  eduction: {
    school: "New Mexico State University",
    location: "Las Cruces, NM",
    date: "2023",
    degree: "Bachelor of Arts in Computer Sciences",
  },
  skills: [
    "React",
    "Next.js",
    "Nest.js",
    "TypeScript",
    "Node.js",
    "Software Development",
    "Agile",
    "Design",
  ],
  contact: {
    email: "chase@blitworx.com",
    phone: "702-324-2272",
    github: "github.com/Chasap85",
    linkedin: "linkedin.com/in/chase-little",
    location: "Las Vegas, NV",
  },
};

export default Resume;
