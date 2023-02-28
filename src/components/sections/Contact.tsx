import React from "react";
import {motion} from "framer-motion";

export default function ContactSection() {
    return (
        <motion.section layout id={"contact"}>
            <div className={"text-center"}>
                <p className={"text-sm uppercase font-semibold text-emerald-400"}>What happens next?</p>
                <h2 className={"text-3xl font-bold my-8"}>You get in touch and we get to work!</h2>
                <p className={"mx-auto lg:w-1/2 mb-12"}>I&apos;m always looking for new and exciting opportunities to grow, both as a developer, a designer and a person. If you have a project that needs coding, an idea that needs designing or a position that&apos;s waiting to get filled, don&apos;t hesitate to reach out to me.</p>

                <a href={"mailto:chris@buzzkill.dev"}
                   className={"py-4 px-6 border-2 rounded font-semibold cursor-pointer border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-slate-900"}>Get
                    in touch!</a>
            </div>
        </motion.section>
    )
}