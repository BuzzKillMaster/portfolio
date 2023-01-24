import React, {ReactNode} from "react";
import {motion} from "framer-motion";
import {BsFolder2} from "react-icons/bs";
import Project from "@/types/Project";

export default function ProjectListItem(props: {
    project: Project
}) {
    return (
        <motion.a href={props.project.target} target={"_blank"} rel={"noreferrer"} whileHover={{y: "-0.5rem"}}
                  className={"bg-slate-800 px-6 py-8 rounded shadow flex flex-col justify-between cursor-pointer hover:text-emerald-400"}>
            <div>
                <div className={"text-5xl text-emerald-400 opacity-75 mb-8"}>
                    {props.project.icon !== undefined ? props.project.icon : <BsFolder2/>}
                </div>

                <h4 className={"font-bold text-xl"}>{props.project.title}</h4>

                <p className={"my-6"}>{props.project.description}</p>
            </div>

            <ul className={"text-sm font-semibold flex flex-wrap gap-4 opacity-75"}>
                {props.project.technologies.map(item => (
                    <li key={item}>{item}</li>
                ))}
            </ul>
        </motion.a>
    )
}