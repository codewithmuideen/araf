'use client';

import { motion } from 'framer-motion';

import { SectionHeading } from '@/components/section-heading';
import { Skills } from '@/components/skills';
import { useSectionInView } from '@/hooks/use-section-in-view';

export const About = () => {
  const { ref } = useSectionInView('About');

  return (
    <motion.section
      ref={ref}
      id="about"
      className="my-10 flex w-full scroll-mt-28 flex-col items-center md:mb-20"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      <SectionHeading heading="About Me" />
      <div style={{ fontFamily: 'Montserrat, sans-serif' }} className="-mt-5 max-w-2xl text-center leading-7">
      <p className="mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
  I&apos;m Moshood Arafat Olawale — a passionate Front-End Developer
   with over three years of hands-on experience in programming. 
   My journey began back in high school when I discovered my love for coding, 
   and I&apos;ve been hooked ever since. What excites me most about programming 
   is the thrill of problem-solving — that satisfying moment when everything finally clicks.  
  <br /><br />
  Throughout my learning journey, I&apos;ve worked on a variety of meaningful projects, 
  from personal builds to collaborative ventures. My core tech stack includes React, Next.js, 
  TypeScript, and Tailwind CSS. I also bring a strong creative edge with experience in Figma,
   Adobe Illustrator, Photoshop, Canva, and CorelDRAW.  
  <br /><br />
  On the backend side, I&apos;m familiar with Nest.js and Prisma. 
  I&apos;m always eager to explore new technologies and challenge myself to 
  grow both as a developer and a designer.
</p>

        <p style={{ fontFamily: 'Montserrat, sans-serif' }}>
          I&apos;m open to Job opportunities where I can contribute, learn and
          grow. If you have a good opportunity that matches my skills and
          experience then don&apos;t hesitate to contact me.
        </p>
      </div>
      <Skills />
    </motion.section>
  );
};
