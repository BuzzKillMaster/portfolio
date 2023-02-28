import {motion} from "framer-motion";
import {BsGithub, BsLinkedin} from "react-icons/bs";
import React from "react";

export default function LeftHandSideBonusInformation() {
    return (
        <div
            className={"py-6 fixed bottom-0 left-20 hidden 2xl:flex flex-col items-center gap-6 text-xl opacity-75 z-40"}>
            <motion.a whileHover={{scale: 1.2}} href="https://github.com/BuzzKillMaster" target={"_blank"}
                      rel={"noreferrer"}>
                <BsGithub className={"cursor-pointer hover:text-emerald-400"}/>
            </motion.a>

            <motion.a whileHover={{scale: 1.2}} href="https://www.linkedin.com/in/chris-mmd/" target={"_blank"}
                      rel={"noreferrer"}>
                <BsLinkedin className={"cursor-pointer hover:text-emerald-400"}/>
            </motion.a>

            <div className={"w-0.5 h-32 bg-emerald-400 rounded"}></div>
        </div>
    )
}