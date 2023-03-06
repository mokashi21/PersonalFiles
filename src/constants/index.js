import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  git,
  dsa,
  figma,
  starbucks,
  carrent,
  jobit,
  tripguide,
  gfg,
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
    id: "contact",
    title: "Contact",
  },
  {
    id: "resume",
    title: "Resume",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React  Developer",
    icon: mobile,
  },
  {
    title: "Javascript Developer",
    icon: backend,
  },
  {
    title: "Video Editor",
    icon: creator,
  },
];

const technologies = [
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
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "TouchMedia Technology",
    icon: starbucks,
    iconBg: "#383E56",
    date: "December 2021 - December 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "DSA Developer",
    company_name: "Data & Strc",
    icon: dsa,
    iconBg: "#E6DEDD",
    date: "Dec 2022 - Feb 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Frond End Developer",
    company_name: "gfg",
    icon: gfg,
    iconBg: "#383E56",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but vinod proved me wrong.",
    name: "Kapil Mayakal",
    designation: "Developer",
    company: "TCS",
    image:
      "https://www.pngitem.com/pimgs/m/4-40070_user-staff-man-profile-user-account-icon-jpg.png",
  },
  {
    testimonial:
      "I've never met a web developer who truly created a 3D website success like vinod does.",
    name: "Aditi Verma",
    designation: "React Js Developer",
    company: "DEF Corp",
    image:
      "https://www.pngitem.com/pimgs/m/4-40070_user-staff-man-profile-user-account-icon-jpg.png",
  },
  {
    testimonial: "Awesome Vinod Very Good Website !",
    name: "T. Naidu",
    designation: "Team Lead",
    company: "Paypal",
    image:
      "https://www.pngitem.com/pimgs/m/4-40070_user-staff-man-profile-user-account-icon-jpg.png",
  },
  {
    testimonial: "Excellent Vinod !",
    name: "M  Hiremath ",
    designation: "Senior Developer",
    company: "Aviation Infotech ",
    image:
      "https://www.pngitem.com/pimgs/m/4-40070_user-staff-man-profile-user-account-icon-jpg.png",
  },
  {
    testimonial: "Nice Project , good job.",
    name: "Dheeraj Kumar",
    designation: "CEO",
    company: "Transition Computing India ",
    image:
      "https://www.pngitem.com/pimgs/m/4-40070_user-staff-man-profile-user-account-icon-jpg.png",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "E comm",
    description:
      "Web application that enables users to search for Online Mart , view estimated product ranges as needs, and locate available products based on their current price.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
