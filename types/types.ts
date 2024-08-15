export interface ContactInfo {
  email: string;
  phone: string;
  github: string;
  linkedin: string;
  location: string;
}

export interface Experience {
  title: string;
  company: string;
  location: string;
  date: string;
}

export interface Education {
  school: string;
  location: string;
  date: string;
  degree: string;
}

export interface Skills {
  name: string;
  icon: string;
}

export interface Resume {
  experience: Experience[];
  education: Education;
  skills: Skills[];
  contact: ContactInfo;
}

export interface ProjectDetails {
  title: string;
  description: string;
  image: string;
  processImage: Array<{
      src: string;
      caption: string;
  }>,
  intro: string;
  about: string;
  process: string;
  progress: string;
  repoUrl: string;
}

export interface ProjectData {
  [key: string]: ProjectDetails;
}
