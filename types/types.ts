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
  
  export interface Resume {
    experience: Experience[];
    education: Education;
    skills: string[];
    contact: ContactInfo;
  }