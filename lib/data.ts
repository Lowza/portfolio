import React from "react";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Codecademy",
    description:
      "I completed a full stack engineer course from Codecademy and gained basic knowledge of a wide variety of web development fundamentals.",
    icon: React.createElement(LuGraduationCap),
    date: "2022",
  },
  {
    title: "Mastering Javascript and learning frameworks",
    description:
      "I continued learning javascript through online resources and started using frameworks. I am currently specializing in Next.js and react.",
    icon: React.createElement(LuGraduationCap),
    date: "2022 - 2023",
  },
] as const;

export const projectsData = [
  {
    title: "CorpComment",
    description:
      "Users can give public feedback to companies.",
    tags: ["HTML", "CSS", "JavaScript", "Node", "Express"],
    imageUrl: corpcommentImg,
    projectUrl: "https://corpcomment.online",
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. It has features like filtering, sorting and pagination.",
    tags: ["HTML", "CSS", "JavaScript", "Node", "Express"],
    imageUrl: rmtdevImg,
    projectUrl: "https://rmtdev.online",
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["HTML", "CSS", "JavaScript"],
    imageUrl: wordanalyticsImg,
    projectUrl: "https://word-analytics.online",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Express",
  "PostgreSQL",
  "Framer Motion",
] as const;