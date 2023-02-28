import React from "react";
import ProjectListItem from "@/components/ProjectListItem";
import {motion} from "framer-motion";
import projects from "@/data/projects";

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
                    <ProjectListItem key={project.title} project={project}/>
                ))}
            </div>
        </motion.section>
    )
}