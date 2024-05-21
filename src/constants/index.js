import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  nwsdb,
  WellnessDiary,
  QuickRec,
  AAAutocare,
  Navigator,
  lua,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "testomonials",
    title: "Testomonials",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export const areasOfDev = ["web applications", "mobile applications"];

export const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Mobile App Developer",
    icon: mobile,
  },
  {
    title: "FiveM Developer",
    icon: backend,
  },
  {
    title: "Gamer",
    icon: creator,
  },
];

export const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Lua",
    icon: lua,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

export const experiences = [
  {
    title: "Trainee Full stack Developer",
    company_name: "National Water Supply & Drainage Board",
    icon: nwsdb,
    iconBg: "#E6DEDD",
    date: "Jul 2023 - Jan 2024",
    points: [
      "Developing and maintaining web applications using React.js and Node.js.",
      "Collaborating with cross-functional teams including designers and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
    ],
  },
];

export const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Chirath proved me wrong.",
    name: "Danithu Amaranayaka",
    designation: null,
    company: "AA Autocare",
    image: "https://i.ibb.co/cvvjNHM/Subject.png",
  },
];

export const projects = [
  {
    name: "Wellness Diary",
    description:
      "WellnessDiary is a modern health monitoring and warning system that enables users to actively control their health through manual data entry.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: WellnessDiary,
    source_code_link: "https://github.com/duesacrifice69/Wellness-Diary",
  },
  {
    name: "QuickRec",
    description:
      "QuickRec modernizes organizational recruitment with streamlined processes, enhanced candidate management, and efficient hiring practices.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "material ui",
        color: "green-text-gradient",
      },
      {
        name: "nodejs",
        color: "pink-text-gradient",
      },
    ],
    image: QuickRec,
    source_code_link: "https://github.com/duesacrifice69/QuickRec-Admin",
  },
  {
    name: "Navigator",
    description:
      "A web application provides access to various internal resources such as employee profile details, attendance records, leave details, loan details, pay sheets, and latest circulars.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "nodejs",
        color: "pink-text-gradient",
      },
    ],
    image: Navigator,
    source_code_link: "https://github.com/duesacrifice69/Navigator",
  },
  {
    name: "AA Autocare",
    description:
      "An innovative e-commerce web application for a tire shop, facilitating seamless browsing, purchase, and delivery of a wide range of tires for various vehicles, complemented by personalized recommendations.",
    tags: [
      {
        name: "wordpress",
        color: "blue-text-gradient",
      },
    ],
    image: AAAutocare,
    source_code_link: "https://www.aaautocare.lk/",
  },
];
