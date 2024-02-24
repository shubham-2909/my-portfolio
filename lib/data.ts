import React from 'react'
import { CgWorkAlt } from 'react-icons/cg'
import { FaReact } from 'react-icons/fa'
import { LuGraduationCap } from 'react-icons/lu'
import nexchat from '@/public/nexchat.png'
import multiImage from '@/public/multi-docker.png'
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
    title: 'Full Stack Web Developer',
    location: 'Remote',
    description:
      'I worked mainly in Backend part and some frontend part using Reactjs. I upskilled myself and learnt advance SQL Queries.',
    icon: React.createElement(LuGraduationCap),
    date: 'Oct-2023 to Present',
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
    title: 'Multi Container App',
    description:
      'A Fibonacci Calculator website.Implemented a CI/CD Pipeline which watches for commits over main branch and publishes all docker images to Docker hub repos',
    tags: ['React', 'PostgreSQL', 'Docker', 'NodeJS', 'Redis', 'Github actions'],
    imageUrl: multiImage,
    link: 'https://github.com/shubham-2909/multi-docker',
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
  'Kubernetes',
  'MySQL',
  'tRPC',
  'Jenkins',
  'Github actions'
] as const
