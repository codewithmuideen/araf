import { Icons } from '@/components/icons';

const tech = {
  nextjs: 'Next.js',
  tailwind: 'Tailwind',
  typescript: 'TypeScript',
  nestjs: 'Nest.js',
  prisma: 'Prisma',
  wordpress: 'WordPress',
};

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
    technologies: [tech.nextjs, tech.tailwind, 'Shadcn/ui', 'Next-auth', tech.prisma],
    links: {
      preview: 'https://abscon-inc.com/',
      github: 'https://github.com/abscon-inc',
    },
  },
  {
    image: '/images/web55.png',
    title: 'OlamiTobi Technologies',
    description:
      'OlamiTobi Technologies is a dynamic company specializing in mobile and web application development, project management, and training services.',
    technologies: [tech.nextjs, tech.typescript, tech.nestjs, tech.tailwind, tech.prisma],
    links: {
      preview: 'https://royeweb.vercel.app/',
      github: 'https://github.com/royeweb',
    },
  },
  {
    image: '/images/web66.png',
    title: 'Innovarie',
    description:
      'Validate and refine your business ideas with Innovarie’s AI-driven insights. Get data-backed market demand analysis, competitive landscape insights, and financial feasibility reports.',
    technologies: [tech.nextjs, tech.typescript, tech.nestjs, tech.tailwind, tech.prisma],
    links: {
      preview: 'https://innovarie.com/',
      github: 'https://github.com/innovarie',
    },
  },
  {
    image: '/images/web00.png',
    title: 'TechTactFin',
    description:
      'TechTactFin, cybersecurity, financial institutions, blockchain, Secure Multi-Party Computation, SMPC, quantum-resistant encryption, AI-driven threat detection, data security, compliance, financial transactions',
    technologies: [tech.nextjs, tech.typescript, tech.nestjs, tech.tailwind, tech.prisma],
    links: {
      preview: 'https://techtactfin.com/',
      github: 'https://github.com/techtactfin',
    },
  },
  {
    image: '/images/web11.png',
    title: 'Fincompitium',
    description:
      'FinCompitium is a cutting-edge financial platform engineered to revolutionize the way individuals and businesses interact with finance. Powered by advanced AI-driven intelligence, FinCompitium offers real-time insights, predictive analytics, and smart automation tools.',
    technologies: [tech.nextjs, tech.typescript, tech.nestjs, tech.tailwind, tech.prisma],
    links: {
      preview: 'https://fincompitium.com/',
      github: 'https://github.com/fincompitium',
    },
  },
  {
    image: '/images/web22.png',
    title: 'CustomDesignX',
    description:
      'At CustomDesignX, we believe that everyday items should reflect your personality, values, and creativity. We offer beautifully custom-designed mugs, socks, and greeting cards perfect for any occasion.',
    technologies: [tech.nextjs, tech.typescript, tech.nestjs, tech.tailwind, tech.wordpress],
    links: {
      preview: 'https://customdesignx.com/',
      github: 'https://github.com/customdesignx',
    },
  },
] as const;

export const experiencesData = [
  {
    title: 'Web Developer',
    company: 'Omojowo Technologies',
    description:
      'At Omojowo Technologies, I focused on developing WordPress plugins and managing website content and settings. I also contributed to building dynamic and responsive web applications using React and Next.js.',
    period: '2024 - present',
    technologies: [
      'HTML',
      'CSS',
      'JavaScript',
      'React',
      tech.nextjs,
      'WordPress',
    ],
  },
  {
    title: 'Website Developer',
    company: 'MacTech Nigeria',
    description:
      'At MacTech Nigeria, I collaborated with an experienced IT team, focusing on tasks in Next.js. This experience advanced my proficiency in Next.js and teamwork.',
    period: '2023 - 2024',
    technologies: [tech.nextjs, 'React', tech.typescript, tech.tailwind],
  },
  {
    title: 'Graphic Designer',
    company: 'KAO Concepts',
    description:
      'As a Graphic Designer, I created compelling designs using Figma and contributed to website development using Next.js integrated with Sanity CMS.',
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
