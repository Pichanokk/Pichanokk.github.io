import { RiComputerLine } from "react-icons/ri";
import { FaServer } from "react-icons/fa";
import { AiOutlineAntDesign, AiOutlineApi } from "react-icons/ai";
import { MdDeveloperMode } from "react-icons/md";
import { IProject, Service, Skill } from "./types";

import { BsCircleFill } from "react-icons/bs";


export const languages: Skill[] = [
  {
    Icon: BsCircleFill,
    name: "HTML",
    level: "60",
  },
  {
    Icon: BsCircleFill,
    name: "CSS",
    level: "60",
  },
  {
    Icon: BsCircleFill,
    name: "C",
    level: "40",
  },
  {
    Icon: BsCircleFill,
    name: "Java Script",
    level: "40",
  },
  {
    Icon: BsCircleFill,
    name: "Git",
    level: "25",
  },
];

export const tools: Skill[] = [
  {
    Icon: BsCircleFill,
    name: "Visual Studio",
    level: "60",
  },
  {
    Icon: BsCircleFill,
    name: "Github",
    level: "50",
  },
];

export const projects: IProject[] = [
  { 
    name: "..",
    description: "...",
    image_path: "/images/",
    github_url: "...",
    category: ["work"],
    key_techs: ["1", "2"],
  },
];
