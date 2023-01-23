import {motion} from "framer-motion";
import React from "react";

export default function FeaturedProject(props: {
    title: string
    description: string
    technologies: string[]
    reverse: boolean
    image: string
    target: string
}) {
    return (
        <div className={"grid grid-cols-5 my-24" + (props.reverse ? " lg:text-right" : "")}>
            <div
                className={"mb-8 lg:mb-0 col-span-5 lg:col-span-3 lg:row-span-full self-center z-10 pointer-events-none flex flex-col" + (props.reverse ? " lg:col-end-6 justify-end" : " lg:col-start-1")}>
                <p className={"w-max text-emerald-400 text-xs uppercase font-semibold pointer-events-auto" + (props.reverse ? " lg:self-end" : "")}>Featured Project</p>
                <a href={props.target} target={"_blank"} rel={"noreferrer"}><h3 className={"w-max font-bold text-2xl mt-2 pointer-events-auto" + (props.reverse ? " lg:self-end" : "")}>{props.title}</h3></a>

                <div className={"bg-slate-800 p-6 rounded shadow my-6 pointer-events-auto"}>
                    <p>{props.description}</p>
                </div>

                <ul className={"w-max max-w-[60%] text-sm text-gray-50 font-semibold flex flex-wrap gap-4 opacity-75 pointer-events-auto" + (props.reverse ? " lg:self-end" : "")}>
                    {props.technologies.map(item => (
                        <li key={item}>{item}</li>
                    ))}
                </ul>
            </div>


            <motion.div whileHover={{ scale: 1.05 }}
                        className={"lg:row-span-full origin-center col-span-5 lg:col-span-3 self-center relative opacity-80" + (props.reverse ? " lg:col-start-1 lg:origin-left" : " lg:col-end-6 lg:origin-right")}>
                <img className={"h-full w-full rounded shadow"} src={props.image} alt=""/>
                <a href={props.target} target={"_blank"} rel={"noreferrer"} className={"h-full w-full bg-emerald-400 rounded cursor-pointer opacity-0 hover:opacity-50 absolute top-0 left-0"}></a>
            </motion.div>
        </div>
    )
}