import { Icons } from '@/components/icons';

export const links = [
  {
    name: 'Home',
    hash: '#home',
  },
  {
    name: 'About',
    hash: '#about',
  },
  {
    name: 'Experience',
    hash: '#experience',
  },
  {
    name: 'Projects',
    hash: '#projects',
  },
  {
    name: 'Contact',
    hash: '#contact',
  },
] as const;

export const projectsData = [
  {
    image: '/images/web44.png',
    title: 'ABS Construction',
    description:
      'ABS Construction focuses on providing lasting solutions for the municipal, industrial and commercial markets across the Southeast.',
    technologies: ['Next.js', 'Tailwind', 'Shadcn/ui', 'Next-auth', 'Prisma'],
    links: {
      preview: 'https://abscon-inc.com/',
      github: 'https://abscon-inc.com/',
      githubApi: 'https://abscon-inc.com/',
    },
  },
  {
    image: '/images/web55.png',
    title: 'OlamiTobi Technologies',
    description:
      'OlamiTobi Technologies is a dynamic company specializing in mobile and web application development, project management, and training services',
    technologies: ['Next.js', 'TypeScript', ' Nest.js', 'Tailwind', 'Prisma'],
    links: {
      preview: 'https://royeweb.vercel.app/',
      github: 'https://royeweb.vercel.app/',
      githubApi: 'https://royeweb.vercel.app/',
    },
  },
  {
    image: '/images/web66.png',
    title: 'Innovarie',
    description:
      'Validate and refine your business ideas with Innovarie’s AI-driven insights. Get data-backed market demand analysis, competitive landscape insights, and financial feasibility reports. Empower your entrepreneurial journey today',
    technologies: ['Next.js', 'TypeScript', ' Nest.js', 'Tailwind', 'Prisma'],
    links: {
      preview: 'https://innovarie.com/',
      github: 'https://innovarie.com/',
      githubApi: 'https://innovarie.com/',
    },
  },
  {
    image: '/images/web00.png',
    title: 'TechTactFin',
    description:
      'TechTactFin, cybersecurity, financial institutions, blockchain, Secure Multi-Party Computation, SMPC, quantum-resistant encryption, AI-driven threat detection, data security, compliance, financial transactions',
    technologies: ['Next.js', 'TypeScript', ' Nest.js', 'Tailwind', 'Prisma'],
    links: {
      preview: 'https://techtactfin.com/',
      github: 'https://techtactfin.com/',
      githubApi: 'https://techtactfin.com/',
    },
  },
  {
    image: '/images/web11.png',
    title: 'Fincompitium',
    description:
      'FinCompitium is a cutting-edge financial platform engineered to revolutionize the way individuals and businesses interact with finance. Powered by advanced AI-driven intelligence, FinCompitium offers real-time insights, predictive analytics, and smart automation tools that streamline decision-making, optimize investments, and enhance financial planning.',
    technologies: ['Next.js', 'TypeScript', ' Nest.js', 'Tailwind', 'Prisma'],
    links: {
      preview: 'https://fincompitium.com/',
      github: 'https://fincompitium.com/',
      githubApi: 'https://fincompitium.com/',
    },
  },
  {
    image: '/images/web22.png',
    title: 'CustomDesignX',
    description:
      'At CustomDesignX, we believe that everyday items should reflect your personality, values, and creativity. That’s why we offer beautifully custom-designed mugs, socks, and greeting cards that are perfect for any occasion — from birthdays and weddings to corporate branding and personal keepsakes.',
    technologies: [
      'Next.js',
      'TypeScript',
      ' Nest.js',
      'Tailwind',
      'Wordpress',
    ],
    links: {
      preview: 'https://customdesignx.com/',
      github: 'https://customdesignx.com/',
      githubApi: 'https://customdesignx.com/',
    },
  },
] as const;

export const experiencesData = [
  {
    title: 'Web Developer',
    company: 'Omojowo Technologies',
    description:
      'At Omojowo Technologies, I focused on two key areas: developing WordPress plugins and managing website content, plugins, and settings. In addition to this, I contributed to building dynamic and responsive web applications using React and Next.js, enhancing both user experience and performance., plugins, and settings.',
    period: '2024 - present',
    technologies: ['HTML', 'CSS', 'JavaScript', 'React', 'Nextjs', 'Wordpress'],
  },
  {
    title: 'Website Developer',
    company: 'MacTech Nigeria',
    description:
      'At MacTech Nigeria, I collaborated with an experienced IT team, focusing on tasks in Next.js. This experience provided valuable insights into teamwork and advanced my proficiency in Next.js.',
    period: '2023 - 2024',
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind'],
  },
  {
    title: 'Graphic Designer',
    company: 'KAO Concepts',
    description:
      'As a Graphic Designer, I specialized in creating visually compelling designs using Figma and also contributed to website development projects using Next.js integrated with Sanity CMS. I independently managed projects from concept to completion, ensuring each design met client expectations and effectively communicated their brand identity.',
    period: '2018 - 2019',
    technologies: ['Figma', 'Photoshop', 'Sanity', 'Illustrator'],
  },
] as const;

export const skillsData = [
  { icon: <Icons.html className="size-12" /> },
  { icon: <Icons.css className="size-12" /> },
  { icon: <Icons.sass className="size-12" /> },
  { icon: <Icons.tailwind className="size-12" /> },
  { icon: <Icons.javascript className="size-12" /> },
  { icon: <Icons.typescript className="size-12" /> },
  { icon: <Icons.react className="size-12" /> },
  { icon: <Icons.redux className="size-12" /> },
  { icon: <Icons.nextjs className="size-12" /> },
  { icon: <Icons.nestjs className="size-12" /> },
  { icon: <Icons.prisma className="size-12" /> },
  { icon: <Icons.docker className="size-12" /> },
] as const;
