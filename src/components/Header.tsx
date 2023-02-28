import {AnimatePresence, motion} from "framer-motion";
import {BsArrowRight, BsList} from "react-icons/bs";
import React, {useState} from "react";
import scrollToView from "@/utilities/scrollToView";
import MobileMenuLink from "@/components/MobileMenuLink";

const sectionNames = [
    "Home",
    "About",
    "Certifications",
    "Projects",
    "Contact",
]

export default function Header() {
    const [showMenu, setShowMenu] = useState(false)

    const navigateTo = (target: string) => scrollToView(target, () => setShowMenu(false))

    return (
        <header className={"shadow p-8 bg-slate-900 w-full fixed top-0 flex items-center justify-between z-20"}>
            <motion.p whileHover={{ scale: 1.05 }} onClick={() => navigateTo("home")} className={"uppercase text-lg font-semibold tracking-widest cursor-pointer origin-left z-50"}>Christian<span className={"text-emerald-400"}>Pedersen</span></motion.p>

            <div className={"h-full w-full absolute inset-0 overflow-hidden"}>
                <div className={"h-screen w-full absolute inset-0 custom-background opacity-50 pointer-events-none"}></div>
            </div>

            <BsList onClick={() => setShowMenu(!showMenu)} className={"text-3xl lg:hidden cursor-pointer hover:text-emerald-400 z-10"}/>

            <nav className={"hidden lg:block z-50"}>
                <ul className={"flex items-center gap-8"}>
                    {sectionNames.map(value => (
                        <li key={value} onClick={() => navigateTo(value.toLowerCase())} className={"cursor-pointer hover:text-emerald-400"}>{value}</li>
                    ))}

                    <li onClick={() => alert("Coming Soon")} className={"px-4 py-2 border-2 rounded cursor-pointer border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-slate-900"}>Resume</li>
                </ul>
            </nav>

            <AnimatePresence>
                {showMenu &&
                    <motion.aside
                        initial={{ width: 0 }}
                        animate={{ width: "max-content" }}
                        exit={{ width: 0 }}
                        className={"absolute shadow max-w-full z-50 top-0 right-0 bg-slate-900 h-screen"}>
                        <div className={"h-full w-full absolute inset-0 custom-background opacity-50"}></div>
                        <ul className={"w-96 max-w-full px-8 py-12 flex flex-col items-start relative z-10"}>
                            <li className={"text-2xl w-full flex justify-end"}>
                                <BsArrowRight onClick={() => setShowMenu(!showMenu)} className={"cursor-pointer hover:text-emerald-400"}/>
                            </li>

                            {sectionNames.map(value => (
                                <MobileMenuLink key={value} text={value} target={value.toLowerCase()} handleClick={navigateTo}/>
                            ))}

                            <li onClick={() => alert("Coming Soon")} className={"mt-4 px-4 py-2 border-2 rounded cursor-pointer border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-slate-900"}>Resume</li>
                        </ul>
                    </motion.aside>
                }
            </AnimatePresence>
        </header>
    )
}