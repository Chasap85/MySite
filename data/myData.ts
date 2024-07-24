interface MyData {
  title: string;
  description: string;
  image: string;
  href?: string;
}

const myData: MyData[] = [
  {
    title: "Projects",
    description: "What I'm working on",
    image: "/assets/project.svg",
    href: "/projects",
  },
  {
    title: "About Me",
    description: "Who I am",
    image: "/assets/bio.svg",
    href: "/about",
  },
  {
    title: "Achievements",
    description: "What I'm proud of",
    image: "/assets/achieve.svg",
    href: "/achievements",
  },
];

export default myData;
