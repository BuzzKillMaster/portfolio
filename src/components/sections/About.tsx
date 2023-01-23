import {motion} from "framer-motion";
import React from "react";
import SectionHeading from "@/components/SectionHeading";
import LanguageListItem from "@/components/LanguageListItem";

const technologies = {
    "Next.js": "https://nextjs.org/",
    "TypeScript": "https://www.typescriptlang.org/",
    "TailwindCSS": "https://tailwindcss.com/",
    "Framer Motion": "https://www.framer.com/motion/",
    "Django": "https://www.djangoproject.com/",
    "Heroku": "https://www.heroku.com/",
    "React Native": "https://reactnative.dev/",
    "PostgreSQL": "https://www.postgresql.org/",
}

const profileImageVariants = {
    untouched: {
        scale: 1,
        rotate: 0
    },
    touched: {
        scale: 1.1,
        rotate: 360
    }
}

const profileImageBorderVariants = {
    untouched: {
        scale: 1,
    },
    touched: {
        scale: 1.1,
    }
}

export default function AboutSection() {
    return (
        <section id={"about"}>
            <SectionHeading iteration={1} title={"Who am I?"}/>

            <div className={"grid lg:grid-cols-2 gap-20"}>
                <article>
                    <p className={"mb-8"}>It depends a lot on who you ask! If you ask me, I'm a designer, developer and straight up nerd that loves a challenge and tends to see opportunity where others see "too much work".</p>

                    <p className={"mb-8"}>However, if you ask my friends and family, they'll most likely provide you with one of the following answers:</p>

                    <ul className={"mb-8 ml-4 lg:ml-6"}>
                        <li className={"mb-4"}><span className={"text-emerald-400 mr-2"}>a.</span> <i>"He does something with computers."</i></li>
                        <li><span className={"text-emerald-400 mr-2"}>b.</span> <i>"He is some kind of tech wizard."</i></li>
                    </ul>

                    <p className={"mb-8"}>I'm capable of designing and developing applications for web and mobile, as well as structuring and building out both back-end systems and databases.</p>

                    <p className={"mb-8"}>Furthermore, I know how to do social media marketing, marketing analytics and data visualization, and I'm always looking to expand my domain of knowledge.</p>

                    <p className={"mb-8"}>Some of my favourite tools and technologies include:</p>

                    <ul className={"grid grid-cols-2 gap-4"}>
                        {Object.entries(technologies).map(([key, value]) => (
                            <LanguageListItem key={key} technology={key} target={value}/>
                        ))}
                    </ul>
                </article>

                <div className={"px-4"}>
                    <motion.div initial={"untouched"} whileHover={"touched"} animate={"untouched"} className={"max-w-sm mx-auto relative h-min origin-right"}>
                        <a
                            href={"https://www.linkedin.com/in/chris-mmd/"}
                            target={"_blank"}
                            rel={"noreferrer"}>
                            <motion.img variants={profileImageVariants}
                                        className={"rounded shadow relative z-10"} src="/profile.jpeg"
                                        alt="My handsome face and crazy hair"/>
                        </a>
                        <motion.div variants={profileImageBorderVariants}
                                    className={"border-4 border-emerald-400 absolute h-full w-full rounded top-4 left-4 z-0"}></motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}