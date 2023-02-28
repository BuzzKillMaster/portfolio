import {AnimatePresence, motion} from "framer-motion";
import {BsArrowRight, BsList} from "react-icons/bs";
import React, {useState} from "react";
import scrollToView from "@/utilities/scrollToView";

export default function Header() {
    const [showMenu, setShowMenu] = useState(false)

    const navigateTo = (target: string) => scrollToView(target, () => setShowMenu(false))

    return (
        <header className={"shadow p-8 bg-slate-900 w-full fixed top-0 flex items-center justify-between z-20"}>
            <motion.p whileHover={{ scale: 1.05 }} onClick={() => navigateTo("landing")} className={"uppercase text-lg font-semibold tracking-widest cursor-pointer origin-left z-50"}>Christian<span className={"text-emerald-400"}>Pedersen</span></motion.p>

            <div className={"h-full w-full absolute inset-0 overflow-hidden"}>
                <div className={"h-screen w-full absolute inset-0 custom-background opacity-50 pointer-events-none"}></div>
            </div>

            <BsList onClick={() => setShowMenu(!showMenu)} className={"text-3xl lg:hidden cursor-pointer hover:text-emerald-400 z-10"}/>

            <nav className={"hidden lg:block z-50"}>
                <ul className={"flex items-center gap-8"}>
                    <li onClick={() => navigateTo("landing")} className={"cursor-pointer hover:text-emerald-400"}>Home</li>
                    <li onClick={() => navigateTo("about")} className={"cursor-pointer hover:text-emerald-400"}>About</li>
                    <li onClick={() => navigateTo("certifications")} className={"cursor-pointer hover:text-emerald-400"}>Certifications</li>
                    <li onClick={() => navigateTo("projects")} className={"cursor-pointer hover:text-emerald-400"}>Projects</li>
                    <li onClick={() => navigateTo("contact")} className={"cursor-pointer hover:text-emerald-400"}>Contact</li>

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

                            <MobileMenuLink text={"Home"} target={"landing"} handleClick={navigateTo}/>
                            <MobileMenuLink text={"About"} target={"about"} handleClick={navigateTo}/>
                            <MobileMenuLink text={"Certifications"} target={"certifications"} handleClick={navigateTo}/>
                            <MobileMenuLink text={"Projects"} target={"projects"} handleClick={navigateTo}/>
                            <MobileMenuLink text={"Contact"} target={"contact"} handleClick={navigateTo}/>

                            <li onClick={() => alert("Coming Soon")} className={"mt-4 px-4 py-2 border-2 rounded cursor-pointer border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-slate-900"}>Resume</li>
                        </ul>
                    </motion.aside>
                }
            </AnimatePresence>
        </header>
    )
}

function MobileMenuLink(props: {
    text: string
    target: string
    handleClick: (target: string) => void
}) {
    return (
        <motion.li whileHover={{ scale: 1.05 }} onClick={() => props.handleClick(props.target)} className={"cursor-pointer py-4 w-full hover:text-emerald-400 origin-left"}>{props.text}</motion.li>
    )
}