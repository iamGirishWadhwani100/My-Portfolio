
import {
  logo,
  backend,
  creator,
  mobile,
  web,
  github,
  menu,
  close,
  css,
  gearXpert,
  project2,
  project3,
  mysql,
  express,
  aws,
  mui,
  
  gsap,
  framer,
  figma,
  git,
  html,
  javascript,
  mongodb,
  nodejs,
  reactjs,
  redux,
  tailwind,
  threejs,
  firstTestimonial,
  secondTestimonial,
  thirdTestimonial,
} from '../assets'


// Import Tekisky separately
import grras from "../assets/company/grras.png";
import nasio from "../assets/company/nasio.png";

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
];

const services = [
  {
    title: "Security Analyst",
    icon: web,
  },
  {
    title: "Penetration Tester",
    icon: mobile,
  },
  {
    title: "CTF & Red Team Learner",
    icon: backend,
  },
  {
    title: "Security Tools Enthusiast",
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
    name: "gsap",
    icon: gsap,
  },
  {
    name: "framer",
    icon: framer,
  },

 
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "figma",
    icon: figma,
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
    name: "Material Ui",
    icon: mui,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Express Js",
    icon: express,
  },
  {
    name: "AWS",
    icon: aws,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "MySql",
    icon: mysql,
  },

  {
    name: "git",
    icon: git,
  },
 

];

const experiences = [
  {
    title: "Cybersecurity Trainee",
    company_name: "Grras Solutions pvt. ltd.",
    icon: grras,
    iconBg: "#383E56",
    date: "Oct 2024 - Dec 2024",
    points: [
      "Completed instructor-led training in ethical hacking, network security, and Linux hardening." ,

      "Gained hands-on experience with tools like Wireshark, Nmap, Hydra, and Burp Suite."  ,

      "Practiced exploiting real-world vulnerabilities based on the OWASP Top 10." ,

      "Built a strong foundation in cybersecurity concepts, attack vectors, and system defense."
    ],
  },

  {
    title: "Cybersecurity Training Program",
    company_name: "nas.io",
    icon: nasio,
    iconBg: "#383E56",
    date: "Oct 2024 - Dec 2024",
    points: [
      "Participated in a 3-month immersive learning program focused on cyber defense, threat analysis, and security labs." ,

      "Completed multiple modules and projects involving real-world scenarios and vulnerability assessment."  ,

      "Collaborated with a community of learners, mentors, and experts to develop offensive and defensive skills." ,

      "Final assessment included practical tasks simulating live attack environments"
    ],
  }
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a security scanning so beautiful, but Girish proved me wrong.",
    name: "Hussain Amet",
    designation: "AI Crypto IDS",
    image: firstTestimonial,
  },
  {
    testimonial:
      "I've never met a cybersecurity anthusiast who truly cares about their clients' security like Girish does.",
    name: "Shivani Chauhan",
    designation: "AI Crypto IDS",
    image: secondTestimonial,
  },
  {
    testimonial:
      "After Girish optimized our website, our security increased by 50%. We can't thank them enough!",
    name: "Jaideep Vyas",
    designation: "AI Crypto IDS",
    image: thirdTestimonial,
  },
];

const projects = [
  {
    name: "AI Crypto Intrusion Detection System",
    description:
      "A machine learning-based intrusion detection system designed to monitor and detect potential cyber threats in cryptocurrency transaction networks. It leverages supervised learning models to analyze traffic patterns and flag anomalies in real time.",
    tags: [
      { name: "python", color: "blue-text-gradient" },
      { name: "machine learning", color: "green-text-gradient" },
      { name: "cybersecurity", color: "pink-text-gradient" },
      { name: "streamlit", color: "white-text-gradient" },
    ],
    image: project2,
    source_code_link: "https://github.com/iamgirishwadhwani100/AI-Crypto-Intrusion-Detection-System",
  },
  {
    name: "Network Traffic Analyzer",
    description:
      "A real-time web-based tool to analyze and visualize network packet data using Scapy. Built to help detect suspicious patterns and monitor traffic flow for potential threats within local or simulated networks.",
    tags: [
      { name: "python", color: "blue-text-gradient" },
      { name: "scapy", color: "green-text-gradient" },
      { name: "network security", color: "pink-text-gradient" },
      { name: "streamlit", color: "white-text-gradient" },
    ],
    image: project3,
    source_code_link: "https://github.com/iamgirishwadhwani100/Network-Traffic-Analyzer",
  },
];


export { services, technologies, experiences, testimonials, projects };
