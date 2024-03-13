import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import FacebookIcon from '../components/Icon/FacebookIcon';
import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import heroImage from '../images/header-background.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Vidhya Patel',
  description: "",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Projects: 'projects',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Certificates: 'certificates',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Vidhya Patel.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a <strong className="text-stone-100">Senior Software Development Engineer</strong>, currently working
        at <strong className="text-stone-100">Bridgenext</strong>
      </p>
      {/* <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time time, you can catch me training in <strong className="text-stone-100">Muay Thai</strong>,
        plucking my <strong className="text-stone-100">banjo</strong>, or exploring beautiful{' '}
        <strong className="text-stone-100">Vancouver Island</strong>.
      </p> */}
    </>
  ),
  actions: [
    {
      href: '/assets/vidhyaResume.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `Have a good experience with computers, programs and coding from childhood. Last 2.5 years working at home
  on different web-projects around the world.`,
  aboutItems: [
    {label: 'Location', text: 'Gujarat, IN', Icon: MapIcon},
    // {label: 'Age', text: '29', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Indian / Hindu', Icon: FlagIcon},
    {label: 'Interests', text: 'Drawing, Learning, Travelling', Icon: SparklesIcon},
    {label: 'Study', text: 'University of Uka Tarsadia', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'Bridgenext', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'English',
        level: 9,
      },
      {
        name: 'Gujarati',
        level: 10,
      },
      {
        name: 'Hindi',
        level: 10,
      },
    ],
  },
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'React',
        level: 10,
      },
      {
        name: 'Typescript / Javascript / jQuery',
        level: 10,
      },
      {
        name: 'Bootstrap / CSS / SCSS / MaterialUI',
        level: 10,
      },
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'Node.js',
        level: 8,
      },
      {
        name: 'Serverless api Using Lamda with graphql',
        level: 8,
      },
    ],
  },
  {
    name: 'AWS',
    skills: [
      {
        name: 'S3 Bucket',
        level: 10,
      },
      {
        name: 'Graphql',
        level: 9,
      },
      {
        name: 'Cludformation / Amplify / Cognito / EC2 / Lamda',
        level: 8,
      },
    ],
  },
  {
    name: 'Testing Automation',
    skills: [
      {
        name: 'Cypress',
        level: 10,
      },
    ],
  },
  {
    name: 'Package Manager',
    skills: [
      {
        name: 'NPM / Yarn / Gitlab / Github / Gitbash',
        level: 10,
      },
    ],
  },
  {
    name: 'Database',
    skills: [
      {
        name: 'MongoDB / Mongoose / DynamoDB / SQL',
        level: 10,
      },
    ],
  },
];

/**
 * Projects section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'HCTracker and EuroTech and Seriyeardim',
    description: <p>
      - Web App, SignIn / SignUp Multiple Role<br/>
      - Add devices by manufacturer<br/>
      - Sell devices by one role to another role<br/>
      - Json Parsing<br/>
      - Multiple File Upload/Update<br/>
      - Material Design

    </p>,
    url: 'http://hctracker-app.s3-website-us-east-1.amazonaws.com/#/sign-in',
    image: porfolioImage2,
  },
  
  {
    title: 'Mindcentral',
    description: <p>
    - Multiple Language<br/>
    - Nodejs, Express, Mongodb database, Multer S3<br/>
    - Passport, SignIn/SignUp using social media<br/>
    </p>,
    url: 'https://mindcentral.com/#/',
    image: porfolioImage7,
  },
  {
    title: 'Farm365',
    description: <p>
    - Multiple Language<br/>
    - Multi Step signup<br/>
    - Implement aws amplify for signup, forgot and reset password etc<br/>
    - Implement barcode functionality for add products<br/>
    - Update theme(Light/Dark)<br/>
    - Graph for selling devices details<br/>
    - Create cloudformation<br/>
    - Create serverless apis lamda with graphql, dynamodb<br/>
    - CI/CD setup for run project in multiple aws account<br/>
    </p>,
    url: 'https://app.eyeoe.ch/',
    image: porfolioImage4,
  },
  {
    title: 'Survaybooker',
    description: <p>
    - Manage all surveybooker detail<br/>
    - Email template<br/>
    - Manage all for CRUD operation using stepper flow<br/>
    - Inline editing using view detail
  </p>,
    url: 'https://watsonssurveyors.surveybooker.co.uk/#/',
    image: porfolioImage8,
  },
  {
    title: 'VReality',
    description: <p>
   - Create one shop or tour<br/>
    - Add hotspot for visite next section<br/>
    - When click product hotspot customer easily purchase product<br/>
    Ref links for make functionality:<br/>
    https://www.marzipano.net/demos.html<br/>
    https://kuula.co/help/floor-plan
</p>,
    url: 'https://vreality.ipangram.com/#/',
    image: porfolioImage4,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'Jul 2013 - Jun 2018',
    location: 'Uka Tarsadia University',
    title: 'MSC(IT)',
    content: <p>I have been programmed with a vast amount of knowledge and skills to assist users like you with various tasks. My capabilities include answering questions, providing recommendations, and engaging in conversational interactions based on natural language processing. If you have any specific questions or topics related to the MSC(IT) course, feel free to ask, and I will do my best to provide accurate and helpful information.</p>,
  },
  {
    date: 'Jun 2012 - 2013',
    location: 'Gujarat Secondary and Higher Secondary Education Board',
    title: 'HSC - Science Stream',
    content: <p>Percentage - 65.00%</p>,
  },
  {
    date: 'Jun 2011 - 2012',
    location: 'Gujarat Secondary and Higher Secondary Education Board',
    title: 'SSC',
    content: <p>Percentage: 75.00%</p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'Jun 2022 - Present',
    location: 'Bridgenext - Pune',
    title: 'Senior Software Development Engineer',
    content: (
      <p>
          Full time frontend developer (backend if needed)<br/>
          Working on Reactjs typescript, Graphql, Cypress, NewRelic, Lens<br/>
          Working with external and internal API<br/>
          Coordinate with team members and client
      </p>
    ),
  },
  {
    date: 'Jun 2021 - Jun 2022',
    location: 'Sigma Solve, Inc.',
    title: 'Frontend Developer',
    content: (
      <p>
        Develop webapp<br/>
        Worked on Reactjs , javascript, CSS, Bootstrap<br/>
        Client relations by zoom call and making orders<br/>
        Software installation<br/>
        Technical support of software<br/>
        Writing and supporting web-sites
      </p>
    ),
  },
  {
    date: 'Jun 2019 - Jun 2021',
    location: 'I-Pangram',
    title: 'MERN Stack Developer',
    content: (
      <p>
        Develop webapp individual and with team<br/>
        Coordinate with team members and client<br/>
        Team Lead, Project management<br/>
        Worked on Reactjs, Nodejs, AWS, MaterialUI, SCSS
      </p>
    ),
  },
  {
    date: 'Jun 2018 - Jun 2019',
    location: 'LAMP Technology',
    title: 'Software Developer',
    content: (
      <p>
        Develop webapp individual and with team<br/>
        Do Manual Testing<br/>
        Worked on PHP, HTML, CSS, Javascript, Ajax, Nodejs
      </p>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: '',
      text: 'Certificate of Excellence',
      image: '/assets/certificate1.jpg',
    },
    {
      name: '',
      text: 'Certificate of Bright Begining',
      image: '/assets/certificate2.jpg',
    },
    // {
    //   name: 'Jane Doe',
    //   text: 'Here you should write some nice things that someone has said about you. Encourage them to be specific and include important details (notes about a project you were on together, impressive quality produced, etc).',
    //   image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    // },
    // {
    //   name: 'Someone else',
    //   text: 'Add several of these, and keep them as fresh as possible, but be sure to focus on quality testimonials with strong highlights of your skills/work ethic.',
    //   image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    // },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: '',
  items: [
    {
      type: ContactType.Email,
      text: 'patelvidhyad19@gmail.com',
      href: 'mailto:patelvidhyad19@gmail.com',
    },
    {
      type: ContactType.Phone,
      text: '+91-7984485083',
    },
    {
      type: ContactType.Location,
      text: 'Gujarat, India',
      href: 'https://maps.app.goo.gl/CLNy4fBCuZP6ZcpD9',
    },
    {
      type: ContactType.Instagram,
      text: '@vidhya',
      href: 'https://www.instagram.com/vidhya.05/',
    },
    {
      type: ContactType.LinkedIn,
      text: 'Vidhya Patel',
      href: 'https://in.linkedin.com/in/vidhya-patel-551b549a',
    },
    {
      type: ContactType.Github,
      text: 'Vidhya Patel GitHub',
      href: 'https://github.com/vidhya-patel-9',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'GitHub', Icon: GithubIcon, href: 'https://github.com/vidhya-patel-9'},
  {label: 'Facebook', Icon: FacebookIcon, href: 'https://www.facebook.com/vidhya.patel.315428'},
  // {label: 'Stack Overflow', Icon: StackOverflowIcon, href: 'https://stackoverflow.com/users/8553186/tim-baker'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://in.linkedin.com/in/vidhya-patel-551b549a'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/vidhya.05/'},
];
