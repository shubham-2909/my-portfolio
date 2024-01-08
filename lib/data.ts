import React from 'react'
import { CgWorkAlt } from 'react-icons/cg'
import { FaReact } from 'react-icons/fa'
import { LuGraduationCap } from 'react-icons/lu'
import nexchat from '@/public/nexchat.png'
import blogImage from '@/public/blog-website.png'
import portfolio from '@/public/portfolio.png'

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
    name: 'Projects',
    hash: '#projects',
  },
  {
    name: 'Skills',
    hash: '#skills',
  },
  {
    name: 'Experience',
    hash: '#experience',
  },
  {
    name: 'Contact',
    hash: '#contact',
  },
] as const

export const experiencesData = [
  {
    title: 'Graduated ABV IIITM Gwalior',
    location: 'Gwalior, India',
    description:
      'I graduated after 4 years of studying B Tech Computer Science',
    icon: React.createElement(LuGraduationCap),
    date: '2020 to 2024',
  },
  {
    title: 'Full Stack Web Developer',
    location: 'Remote',
    description:
      'I worked as a backend and some frontend part I also upskilled to the full stack.',
    icon: React.createElement(CgWorkAlt),
    date: 'Jan-2023 to Aug-2023',
  },
] as const

export const projectsData = [
  {
    title: 'NexChat',
    description:
      'Built a chat application through which users can communicate and make friends in real time',
    tags: ['React', 'Next.js', 'Upstash', 'Tailwind', 'Redis'],
    imageUrl: nexchat,
    link: 'https://github.com/shubham-2909/Chat-App',
  },
  {
    title: 'Personal Blog website',
    description:
      'A personal blogging website which reads markdown files into blogs and i write blogs on this website sometimes.',
    tags: ['React', 'Next.js'],
    imageUrl: blogImage,
    link: 'https://github.com/shubham-2909/my-blog-app',
  },
  {
    title: 'Portfolio',
    description:
      'A public web app which displays my current work and what am i doing currently.',
    tags: ['React', 'Next.js', 'Tailwind', 'Framer'],
    imageUrl: portfolio,
    link: 'https://github.com/shubham-2909/my-portfolio',
  },
] as const

export const skillsData = [
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Next.js',
  'Node.js',
  'Git',
  'Tailwind',
  'Prisma',
  'MongoDB',
  'Redux',
  'Express',
  'PostgreSQL',
  'Python',
  'Golang',
  'Docker',
] as const
