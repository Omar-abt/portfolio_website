import { close, aafc, cengn, ceed, fes, git, programming, frameworks, cloud, project, data, logo, meteorFC, tempo, tenzies, smrtPark, email, linkedin, github, copyright } from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export const socials = [
  {
    id: "social-1",
    icon: email,
    link: "mailto:omarhossam7@yahoo.com",
  },
  {
    id: "social-2",
    icon: linkedin,
    link: "https://www.linkedin.com/in/omar-abotahoon/",
  },
  {
    id: "social-3",
    icon: github,
    link: "https://github.com/Omar-abt",
  },
];


export const skills = [
  {
    id: "skill-1",
    name: "Programming Lang.",
    points : ["JavaScript/TypeScript", "Python", "Java", "SQL", "C", "HTML", "CSS"],
    img : programming
  },
  {
    id: "skill-2",
    name: "Frameworks & Tools",
    points : ["React", "Spring", "BootStrap", "Tailwind CSS", "Figma", "Vite"],
    img : frameworks
  },
  {
    id: "skill-3",
    name: "Cloud Computing",
    points : ["Azure", "AWS", "Kubernetes", "Docker", "OpenShift", "OpenStack"],
    img : cloud
  },
  {
    id: "skill-4",
    name: "Project Managment",
    points : ["Wrike", "Atlassian Tool Set", "JIRA", "Confluence"],
    img : project
  },
  {
    id: "skill-5",
    name: "Data Analytics",
    points : ["NumPy", "Pandas", "MATLAB", "Tableau", "TensorFlow"],
    img : data
  },
  {
    id: "skill-6",
    name: "Version Control",
    points : ["Git", "GitHub", "Bitbucket", "GitLab"],
    img : git
  },
];

export const experiences = [
    {
      title: "Software Developer",
      company_name: "Field Effect Software",
      icon: fes,
      iconBg: "#E6DEDD",
      date: "Sep 2023 - Dec 2023",
      points: [
        "Oversaw and managed a virtual reality padel ball tracking project throughout its entire lifecycle.",
        "Facilitated requirements gathering, risk management and assessment, developing design criteria, producing prototypes, and evaluating project performance.",
        "Created an inclusive and welcoming collaboration environment and coordinated tasks with the project clients.",
      ],
    },
    {
      title: "Project Manager",
      company_name: "Centre for Entrepreneurship and Engineering Design (CEED)",
      icon: ceed,
      iconBg: "#E6DEDD",
      date: "Sep 2022 - Apr 2023",
      points: [
        "Oversaw and managed a virtual reality padel ball tracking project throughout its entire lifecycle.",
        "Facilitated requirements gathering, risk management and assessment, developing design criteria, producing prototypes, and evaluating project performance.",
        "Created an inclusive and welcoming collaboration environment and coordinated tasks with the project clients.",
      ],
    },
    {
      title: "Cloud Infrastructure Engineer COOP",
      company_name: "Canada’s Centre of Excellence in Next Generation Networks (CENGN)",
      icon: cengn,
      iconBg: "#E6DEDD",
      date: "Jan 2022 - Aug 2022",
      points: [
        "Worked with cutting edge technology such as Docker, Kubernetes, Cloud technologies including OpenStack, Azure and AWS.",
        "Leveraged the Atlassian tool set (JIRA, Confluence, BitBucket) for managing the work progress and collaborating on projects with co-workers.",
        "Used Python, YAML, Ansible and REST APIs to develop a proficient script used to automatically deploy Hybrid Cloud environments.",
        "Developed software solutions in a DevOps culture using Scrum Agile methodology including sprints, daily standups, and sprint retrospectives.",
      ],
    },
    {
      title: "System Administrator COOP",
      company_name: "Agriculture and Agri-Food Canada",
      icon: aafc,
      iconBg: "#E6DEDD",
      date: "May 2021 - Aug 2021",
      points: [
        "Created a sophisticated storage management system using bash scripting.",
        "Wrote various automation scripts and created complex pipelines using Bash shell scripting in a Linux environment.",
        "Implemented the Software Development Life Cycle while developing the storage management system.",
      ],
    },
  ];


export const projects = [
  {
    id: "proj-1",
    title: "METEOR FC",
    position: "left",
    description: "Explore the world of soccer leagues with Meteor FC. Your gateway to diverse leagues and endless play opportunities.",
    img: meteorFC,
    github: "https://github.com/Omar-abt/meteorFC",
    demo: "https://meteor-fc.vercel.app/",
  },
  {
    id: "proj-2",
    title: "TENZIES GAME",
    position: "right",
    description: "Roll the Dice and Win Big with Tenzies! Keep rolling for that perfect match and reign supreme in this exciting online dice game.",
    img: tenzies,
    github: "https://github.com/Omar-abt/Tenzies",
    demo: "https://tenzies-omar-abt.vercel.app/",
  },
  {
    id: "proj-3",
    title: "TEMPO RENTALS",
    position: "left",
    description: "Experience Luxury, Speed, and Style with Tempo Rentals. Elevate your journey with our exquisite fleet of supercars and luxury vehicles.",
    img: tempo,
    github: "https://github.com/Omar-abt/tempo",
    demo: "https://omar-abt.github.io/tempo/",
  },
  {
    id: "proj-4",
    title: "SMART PARK",
    position: "right",
    description: "Effortless Parking with SMART PARK. Leave the hassle behind and park smartly with us, every time.",
    img: smrtPark,
    github: "https://github.com/smrtpark/smrtpark.github.io",
    demo: "https://smrtpark.github.io/",
  },
];
