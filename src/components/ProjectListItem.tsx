import React, {ReactNode} from "react";
import {motion} from "framer-motion";
import {BsFolder2} from "react-icons/bs";
import Project from "@/types/Project";

export default function ProjectListItem(props: Project) {
    return (
        <motion.article
            whileHover={{y: "-0.5rem"}}
            className={"bg-slate-800 px-6 py-8 rounded shadow flex flex-col justify-between cursor-pointer hover:text-emerald-400"}>
            <div>
                <div className={"text-5xl text-emerald-400 opacity-75 mb-8"}>
                    {props.icon !== undefined ? props.icon : <BsFolder2/>}
                </div>

                <h4 className={"font-bold text-xl"}>{props.title}</h4>

                <p className={"text-gray-50 my-6"}>{props.description}</p>
            </div>

            <ul className={"text-sm text-gray-50 font-semibold flex flex-wrap gap-4 opacity-75"}>
                {props.technologies.map(item => (
                    <li key={item}>{item}</li>
                ))}
            </ul>
        </motion.article>
    )
}