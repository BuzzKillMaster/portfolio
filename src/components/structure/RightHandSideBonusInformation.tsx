import {motion} from "framer-motion";
import React from "react";

export default function RightHandSideBonusInformation() {
    return (
        <div
            className={"py-6 fixed bottom-0 right-20 hidden 2xl:flex right-24 flex flex-col items-center gap-4 text-xl opacity-75 z-40"}>
            <motion.a whileHover={{scale: 1.1}} style={{writingMode: "vertical-rl"}}
                      href={"mailto:chris@buzzkill.dev"}
                      className={"text-sm uppercase font-semibold tracking-wide hover:text-emerald-400 origin-bottom-left"}>chris@buzzkill.dev
            </motion.a>

            <div className={"w-0.5 h-32 bg-emerald-400 rounded"}></div>
        </div>
    )
}