import { prototype } from 'postcss/lib/previous-map';
import {
  aafc,
  ansible,
  aws,
  azure,
  btstrapLogo,
  cLogo,
  ceed,
  cengn,
  cira,
  close,
  cloud,
  confluence,
  copyright,
  cssLogo,
  data,
  docker,
  email,
  fes,
  figmaLogo,
  flightDelays,
  frameworks,
  git,
  gitLogo,
  github,
  htmlLogo,
  javaLogo,
  jira,
  jsLogo,
  k8s,
  linkedin,
  linkedinScraper,
  logo,
  matlab,
  meteorFC,
  numpy,
  openshift,
  pandas,
  programming,
  project,
  prototyping,
  pythonLogo,
  reactLogo,
  restLogo,
  riskMgmt,
  smrtPark,
  springLogo,
  sqlLogo,
  tableau,
  tempo,
  tensorflow,
  tenzies,
  tsLogo,
  twLogo,
  wrike,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'skills',
    title: 'Skills',
  },
  {
    id: 'experience',
    title: 'Experience',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

export const socials = [
  {
    id: 'social-1',
    icon: email,
    link: 'mailto:omarhossam7@yahoo.com',
  },
  {
    id: 'social-2',
    icon: linkedin,
    link: 'https://www.linkedin.com/in/omar-abotahoon/',
  },
  {
    id: 'social-3',
    icon: github,
    link: 'https://github.com/Omar-abt',
  },
];

export const skills = [
  {
    id: 'skill-1',
    name: 'Programming Languages',
    skills: [
      { name: 'Python', pic: pythonLogo },
      { name: 'JavaScript', pic: jsLogo },
      { name: 'TypeScript', pic: tsLogo },
      { name: 'Java', pic: javaLogo },
      { name: 'C', pic: cLogo },
      { name: 'SQL', pic: sqlLogo },
      { name: 'HTML', pic: htmlLogo },
      { name: 'CSS', pic: cssLogo },
    ],
  },
  {
    id: 'skill-2',
    name: 'Frameworks & Tools',
    skills: [
      { name: 'React', pic: reactLogo },
      { name: 'Spring', pic: springLogo },
      { name: 'Git', pic: gitLogo },
      { name: 'BootStrap', pic: btstrapLogo },
      { name: 'Tailwind CSS', pic: twLogo },
      { name: 'REST APIs', pic: restLogo },
      { name: 'UX/Figma', pic: figmaLogo },
    ],
  },
  {
    id: 'skill-3',
    name: 'Cloud Computing and DevOps',
    skills: [
      { name: 'Azure', pic: azure },
      { name: 'AWS', pic: aws },
      { name: 'Kubernetes', pic: k8s },
      { name: 'Docker', pic: docker },
      { name: 'OpenShift', pic: openshift },
      { name: 'Ansible', pic: ansible },
    ],
  },
  {
    id: 'skill-4',
    name: 'Project Managment',
    skills: [
      { name: 'Wrike', pic: wrike },
      { name: 'JIRA', pic: jira },
      { name: 'Confluence', pic: confluence },
      { name: 'Prototyping', pic: prototyping },
      { name: 'Risk Managment', pic: riskMgmt },
    ],
  },
  {
    id: 'skill-5',
    name: 'Data Analytics',
    skills: [
      { name: 'Numpy', pic: numpy },
      { name: 'Pandas', pic: pandas },
      { name: 'MatLab', pic: matlab },
      { name: 'Tableau', pic: tableau },
      { name: 'Tensorflow', pic: tensorflow },
    ],
  },
];

export const experiences = [
  {
    title: 'Software Developer Intern',
    company_name: 'CIRA',
    icon: cira,
    iconBg: '#E6DEDD',
    date: 'May 2024 - Present',
    points: [
      'Spearheaded the development of an Endpoint Security and Detection service, by developing and testing a Java Spring Boot API microservice, creating GitLab CI/CD pipelines for continuous integration, and deploying the containerized application to AWS ECS using terraform.',
      'Improved the Single sign-on (SSO) feature interfacing with keycloak authentication by mapping and verifying user LDAP information to keycloak.',
      'Wrote server-side and client-side code using typescript, Next.js and PostgreSQL for a Cyber Security DNS SaaS product that is capable of detecting over 100,000 malicious domains per day.',
    ],
  },
  {
    title: 'Software Developer Intern',
    company_name: 'Field Effect Software',
    icon: fes,
    iconBg: '#E6DEDD',
    date: 'Sep 2023 - Dec 2023',
    points: [
      'Architected and built over 6 different fast and efficient REST API endpoints by collaborating with the design team and back-end developers to service a set of reports for courses, exercises and student transcripts on the Cyber Range platform.',
      'Leveraged Java and Spring to construct DTOs (Data Transfer Objects), DAOs (Data Access Objects) and back-end services that queried data from a MySQL database using CRUD operations to create client/server applications.',
      'Developed responsive and interactive full stack applications for the Cyber Range Platform including frontend data visualization components and services for data graphs, charts and tables using React and JavaScript libraries.',
      'Crafted a React state pattern system with custom hooks and wrote unit tests using Jest achieving over 90% code coverage. ',
      'Optimized an endpoint by reducing its response time from 35 seconds to 4 seconds.',
    ],
  },
  {
    title: 'Project Manager',
    company_name: 'Centre for Entrepreneurship and Engineering Design (CEED)',
    icon: ceed,
    iconBg: '#E6DEDD',
    date: 'Sep 2022 - Apr 2023',
    points: [
      'Managed and delivered a 4-month virtual reality padel ball tracking project throughout its entire lifecycle by following an iterative approach.',
      'Facilitated requirements gathering, risk assessment, developing design criteria, producing prototypes, and evaluating project performance.',
      'Utilized agile methodology practices and lead weekly standups with development teams, as well as communicated updates to stakeholders.',
    ],
  },
  {
    title: 'Cloud Infrastructure Engineer Intern',
    company_name:
      'Canada’s Centre of Excellence in Next Generation Networks (CENGN)',
    icon: cengn,
    iconBg: '#E6DEDD',
    date: 'Jan 2022 - Aug 2022',
    points: [
      'Used Python, YAML, Ansible and REST APIs to engineer a Python script that can deploy entire Hybrid Cloud environments in under 5 minutes.',
      'Developed software solutions in a DevOps culture using Scrum Agile methodology including sprints, daily standups, and sprint retrospectives.',
      'Deployed containerized microservice applications using Docker, Kubernetes and Cloud technologies including OpenStack and AWS.',
      'Leveraged the Atlassian tool set (JIRA, Confluence, BitBucket) for managing the work progress and collaborating on projects with co-workers.',
    ],
  },
  {
    title: 'System Administrator Intern',
    company_name: 'Agriculture and Agri-Food Canada',
    icon: aafc,
    iconBg: '#E6DEDD',
    date: 'May 2021 - Aug 2021',
    points: [
      'Created a storage management system using Bash scripting serving over 1000 scientists by allowing them to effectively store research data.',
      'Wrote automation scripts and created complex pipelines to automate repetitive tasks like user creation and resource allocation, reducing the time taken by this process by 1 hour for each user.',
    ],
  },
];

export const projects = [
  {
    id: 'proj-1',
    title: 'LinkedIn Job Scraper',
    position: 'left',
    description:
      'A sophisticated job scraper that can look up hundreds of job postings, scrape the posting details, clean the data and output it to a csv file.',
    img: linkedinScraper,
    github: 'https://github.com/Omar-abt/linkedin_job_scraper',
  },
  {
    id: 'proj-2',
    title: 'METEOR FC',
    position: 'right',
    description:
      'Explore the world of soccer leagues with Meteor FC. Your gateway to diverse leagues and endless play opportunities.',
    img: meteorFC,
    github: 'https://github.com/Omar-abt/meteorFC',
    demo: 'https://meteor-fc.vercel.app/',
  },
  {
    id: 'proj-3',
    title: 'FLIGHT DELAYS DATA WAREHOUSE',
    position: 'left',
    description:
      'Designed and implemented a data mart through the ETL process, performing data analytics, creating OLAP queries and performing data mining.',
    img: flightDelays,
    github: 'https://github.com/Omar-abt/FlightDelays-DataScience',
  },
  {
    id: 'proj-4',
    title: 'TEMPO RENTALS',
    position: 'right',
    description:
      'Experience Luxury, Speed, and Style with Tempo Rentals. Elevate your journey with our exquisite fleet of supercars and luxury vehicles.',
    img: tempo,
    github: 'https://github.com/Omar-abt/tempo',
    demo: 'https://omar-abt.github.io/tempo/',
  },
];
