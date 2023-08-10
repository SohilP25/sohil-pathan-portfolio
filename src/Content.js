// import images
import Hero_person from "/assets/images/Hero/person.png";
import figma from "/assets/images/Skills/figma.png";
import reactjs from "/assets/images/Skills/react.png";
import nodejs from "/assets/images/Skills/node.png";
import expressjs from "/assets/images/Skills/expressjs.png";
import cpp from "/assets/images/Skills/cpp.png";
import tailwind from "/assets/images/Skills/tailwind.png"; 
import mongodb from "/assets/images/Skills/mongodb.png";
import mysql from "/assets/images/Skills/mysql.png";
import postman from "/assets/images/Skills/postman.png";
import javascript from "/assets/images/Skills/javascript.png";

import services_logo1 from "/assets/images/Services/logo1.png";
import services_logo2 from "/assets/images/Services/logo2.png";
import services_logo3 from "/assets/images/Services/logo3.png";

import project1 from "/assets/images/projects/img1.png";
import project2 from "/assets/images/projects/img2.png";
import project3 from "/assets/images/projects/img3.png";

import college from "/assets/images/Timeline/college.png";
import school from "/assets/images/Timeline/school.png";
import company from "/assets/images/Timeline/company.png";

// import icons from react-icons
import { GrMail } from "react-icons/gr";
import { MdArrowForward, MdCall } from "react-icons/md";
import { BsInstagram, BsLinkedin, BsGithub, BsTwitter } from "react-icons/bs";
import { TbSmartHome } from "react-icons/tb";
import { BiUser } from "react-icons/bi";
import { RiProjectorLine } from "react-icons/ri";
import { SiSkillshare } from "react-icons/si";
import { MdOutlinePermContactCalendar, MdTimeline } from "react-icons/md";

export const content = {
  nav: [
    {
      link: "#home",
      icon: TbSmartHome,
    },
    {
      link: "#info",
      icon: BiUser,
    },
    {
      link: "#timeline",
      icon: MdTimeline,
    },
    {
      link: "#skills",
      icon: SiSkillshare,
    },
    {
      link: "#projects",
      icon: RiProjectorLine,
    },
    {
      link: "#contact",
      icon: MdOutlinePermContactCalendar,
    },
  ],
  hero: {
    title: "Web Developer",
    firstName: "SOHIL",
    LastName: "PATHAN",
    btnText: "Download CV",
    image: Hero_person,
    hero_content: [
      {
        count: "1.5+",
        text: "Years of experience in Web development",
      },
      {
        count: "5+",
        text: "Projects Worked ",
      },
    ],
  },
  skills: {
    title: "Skills",
    subtitle: "MY TOP SKILLS",
    skills_content: [
      {
        name: "React js",
        para: "JavaScript library for building user interfaces.",
        logo: reactjs,
      },
      {
        name: "Node js",
        para: "Server-side JavaScript platform",
        logo: nodejs,
      },
      {
        name: "Express js",
        para: "Asynchronous server-side scripting",
        logo: expressjs,
      },
      {
        name: "JavaScript",
        para: "High-level scripting language",
        logo: javascript,
      },
      {
        name: "C / C++",
        para: "High-performance languages.",
        logo: cpp,
      },
      {
        name: "Tailwind CSS",
        para: "Class based Rapid UI development",
        logo: tailwind,
      },
      {
        name: "MongoDB",
        para: "Document-oriented NoSQL storage",
        logo: mongodb,
      },
      {
        name: "MySQL",
        para: "SQL-based querying database",
        logo: mysql,
      },
      {
        name: "Postman",
        para: "API testing platform",
        logo: postman,
      },
      {
        name: "Figma",
        para: "Cloud-based collaborative design tool",
        logo: figma,
      },
    ],
    icon: MdArrowForward,
  },
  services: {
    title: "Services",
    subtitle: "WHAT I OFFER",
    service_content: [
      {
        title: "Web Development",
        para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
        logo: services_logo1,
      },
      {
        title: "ui / ux DESIGNING",
        para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
        logo: services_logo2,
      },
      {
        title: "PhotoShop Editing",
        para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
        logo: services_logo3,
      },
    ],
  },
  Projects: {
    title: "Projects",
    subtitle: "MY CREATION",
    // image: person_project,
    project_content: [
      {
        title: "Chit-Chat",
        subtitle: "A Real-Time MERN Stack Chat-App",
        image: project1,
        deploymentUrl: "https://chit-chat-9cgf.onrender.com/chats",
        githubUrl: "https://github.com/SohilP25",
      },
      {
        title: "Parivartan NFT Marketplace",
        image: project2,
        subtitle: "A Platform for artisan to create,sell or buy NFTs",
        deploymentUrl: "https://parivartan-nfts.web.app/",
        githubUrl: "",
      },
      {
        title: "To-DO List",
        image: project3,
        subtitle: "Note your tasks",
        deploymentUrl: "",
        githubUrl: "https://github.com/SohilP25/Web-Dev-Projects",
      },
    ],
  },
  Timeline: {
    title: "Timeline",
    subtitle: "Academics & Experience",
    timeline_content: [
      {
        position: "Web Developer Intern",
        company: "Alluvium IoT Solutions",
        duration: "JUL 2022 - SEP 2022",
        info: "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: company,
      },
      {
        position: "Bachelor's in Information Technology",
        company: "L.D. College of engineering,Ahmedabad",
        duration: "2020-present",
        info: "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: college,
      },
      {
        position: "Higher secondary education ",
        company: "A Success School,Jetpur",
        duration: "2018 - 2020",
        info: "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: school,
      },
    ],
  },
  Info: {
    title: "About",
    subtitle: "WHO AM I?",
    // image1: Hireme_person,
    // image2: Hireme_person2,
    para: "An ambitious and proactive engineering student and software developer,driven by a deep passion for technology and innovation. Seeking opportunities to contribute my skills and creativity in a dynamic work environment focused on cutting- edge developments.Beyond academics, I am deeply fascinated by emerging technologies and their potential to revolutionize various industries.",
    btnText: "Let's stay connected",
  },
  Contact: {
    title: "Contect Me",
    subtitle: "GET IN TOUCH",
    social_media: [
      {
        text: "srpathan254@gmail.com",
        icon: GrMail,
        link: "mailto:codeaprogram@gmail.com",
      },
      {
        text: "sohil_pathan",
        icon: BsLinkedin,
        link: "https://www.linkedin.com/in/sohilpathan254/",
      },
      {
        text: "SohilP25",
        icon: BsGithub,
        link: "https://github.com/SohilP25",
      },
      {
        text: "imsohil4",
        icon: BsTwitter,
        link: "https://twitter.com/imsohil4",
      },
      // {
      //   text: "+91 ",
      //   icon: MdCall,
      //   link: "https://wa.me/",
      // },
      {
        text: "sohil_pathan",
        icon: BsInstagram,
        link: "https://www.instagram.com/sohil._.pathan/",
      },
    ],
  },
  Footer: {
    text: "All © Copy Right Reserved 2022",
  },
};
