import {
    BsCalculator,
    BsFillPatchCheckFill,
    BsFillShieldLockFill,
    BsGithub,
    BsMap,
    BsPencilSquare
} from "react-icons/bs";
import React from "react";
import ProjectListItem from "@/components/ProjectListItem";
import Project from "@/types/Project";
import {motion} from "framer-motion";

const projects: Project[] = [
    {
        title: "IP Address Tracker",
        description: "Find out where your current IP points, check if your VPN is actually working, or just input some random IP address and see where it takes you on the map - the choice is yours!",
        technologies: ["ipapi", "Next.JS", "TailwindCSS", "Leaflet.JS"],
        icon: <BsMap/>
    },
    {
        title: "Password Generator",
        description: "Simple implementation of a would-be password generator, enabling you to choose the length and overall complexity of your password, with a strength grading scale that goes from pathetic to godlike.",
        technologies: ["Next.JS", "TailwindCSS"],
        icon: <BsFillShieldLockFill/>
    },
    {
        title: "GitHub User Search",
        description: "Search for the username of any GitHub user and get a quick overview of who they are and what they do. It has never been easier to stalk your favourite developers online!",
        technologies: ["GitHub API", "Next.JS", "TailwindCSS", "Framer Motion", "Local Storage"],
        icon: <BsGithub/>
    },
    {
        title: "Markdown Editor",
        description: "See what you're writing, as you're writing it, using this Markdown editor that was designed to be simple and accessible - leveraging the power of Markdown, without overcomplicating what it was meant to do.",
        technologies: ["Remark.JS", "Next.JS", "TailwindCSS"],
        icon: <BsPencilSquare/>
    },
    {
        title: "Tip Calculator",
        description: "The easiest way to calculate how much you should tip, with the option of a custom tipping percentage and even bill-splitting, in case there's more than one member of your party paying.",
        technologies: ["Next.JS", "TailwindCSS"],
        icon: <BsCalculator/>
    },
    {
        title: "Advice Generator",
        description: "Using the Advice Slip API, I created a small service that will fetch a random piece of advice for you. It supports copying a direct link to a particular piece of advice so that you can easily share it with others.",
        technologies: ["Advice Slip API", "Next.JS", "TailwindCSS"],
        icon: <BsFillPatchCheckFill/>
    },
]

export default function BonusProjectsSection(props: {
    showCertificatesSectionCallback: () => void
}) {
    return (
        <motion.section layout className={"-mt-32"}>
            <header className={"mb-16 text-center"}>
                <h3 className={"text-2xl font-bold mb-4"}>More of my stuff</h3>
                <p onClick={props.showCertificatesSectionCallback} className={"text-emerald-500 text-sm uppercase font-semibold cursor-pointer hover:text-emerald-400 hover:underline"}>Check out all of my certificates</p>
            </header>

            <div className={"grid md:grid-cols-2 xl:grid-cols-3 gap-4"}>
                {projects.map(project => (
                    <ProjectListItem key={project.title} title={project.title} description={project.description} technologies={project.technologies} icon={project.icon}/>
                ))}
            </div>
        </motion.section>
    )
}