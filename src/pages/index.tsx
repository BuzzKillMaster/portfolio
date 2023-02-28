import React, {useState} from "react";
import {Lexend} from '@next/font/google'
import {
    BsGithub, BsLink45Deg,
    BsLinkedin,
} from "react-icons/bs";

import Header from "@/components/Header";
import FeaturedProjectsSection from "@/components/sections/FeaturedProjects";
import ContactSection from "@/components/sections/Contact";
import Footer from "@/components/Footer";
import BonusProjectsSection from "@/components/sections/BonusProjects";
import QualificationsSection from "@/components/sections/Qualifications";
import LandingSection from "@/components/sections/Landing";
import AboutSection from "@/components/sections/About";

import {AnimatePresence, LayoutGroup, motion} from "framer-motion";
import certificatesList from "@/data/CertificatesList";

const lexend = Lexend({
    subsets: ['latin']
})

export default function Home() {
    const [showCertificatesOverlay, setShowCertificatesOverlay] = useState(false)

    return (
        <div className={lexend.className + " bg-slate-900 text-gray-50 min-h-screen min-w-screen"}>
            <AnimatePresence>
                {showCertificatesOverlay && <CertificatesListOverlay
                    hideCertificatesOverlay={() => setShowCertificatesOverlay(!showCertificatesOverlay)}/>}
            </AnimatePresence>

            <LeftHandSideBonusInformation/>
            <RightHandSideBonusInformation/>

            <div className={"custom-background fixed h-screen w-screen opacity-50"}></div>

            <Header/>

            <main className={"max-w-6xl mx-auto relative z-10"}>
                <LandingSection/>
                <AboutSection/>
                <LayoutGroup>
                    <QualificationsSection/>
                    <FeaturedProjectsSection/>
                    <BonusProjectsSection
                        showCertificatesSectionCallback={() => setShowCertificatesOverlay(!showCertificatesOverlay)}/>
                    <ContactSection/>
                    <Footer/>
                </LayoutGroup>
            </main>
        </div>
    )
}

function CertificatesListOverlay(props: {
    hideCertificatesOverlay: () => void
}) {
    const openCertificate = (target: string) => {
        // @ts-ignore
        if (window !== null) window.open(target, '_blank').focus()
    }

    return (
        <motion.div initial={{top: "100%"}} animate={{top: 0}} exit={{top: "100%"}} transition={{type: "tween"}}
                    className={"bg-slate-900 fixed w-screen h-screen overflow-y-scroll overscroll-contain z-50"}>

            <div className={"h-screen w-full fixed pointer-events-none custom-background bg-red-500 opacity-50"}></div>

            <p onClick={props.hideCertificatesOverlay} className={"text-sm uppercase font-semibold absolute top-12 right-12 cursor-pointer hover:text-emerald-400 z-50"}>Close</p>

            <section className={"max-w-6xl mx-auto relative z-10 min-h-full"}>
                <header className={"mb-16 lg:mb-24 lg:text-center"}>
                    <h2 className={"text-3xl font-bold mb-6"}>Courses Archive</h2>
                    <p className={"text-sm uppercase font-semibold text-emerald-400"}>The unnecessarily long list of
                        courses I&apos;ve completed</p>
                </header>

                <table className={"table-auto w-full"}>
                    <thead className={"text-left"}>
                    <tr>
                        <th className={"p-4"}>Year</th>
                        <th className={"p-4"}>Title</th>
                        <th className={"p-4 hidden lg:table-cell"}>Organization</th>
                        <th className={"p-4 hidden lg:table-cell"}>Completion</th>
                        <th className={"p-4 text-right hidden lg:table-cell"}>Credential</th>
                    </tr>
                    </thead>

                    <tbody className={"font-mono"}>
                    {certificatesList.map(certificate => (
                        <motion.tr whileHover={{scale: 1.05}} key={certificate.title}
                                   onClick={() => openCertificate(certificate.credential)}
                                   className={"cursor-pointer group hover:bg-slate-800"}>
                            <td className={"p-4 text-emerald-400"}>{certificate.date.getFullYear()}</td>
                            <td className={"p-4 group-hover:text-emerald-400"}>{certificate.title}</td>
                            <td className={"p-4 hidden lg:table-cell"}>{certificate.organization}</td>
                            <td className={"p-4 hidden lg:table-cell"}>{certificate.date.toLocaleDateString()}</td>
                            <td className={"p-4 justify-end text-2xl text-emerald-400 hidden lg:flex"}><BsLink45Deg/></td>
                        </motion.tr>
                    ))}
                    </tbody>
                </table>

                <p onClick={props.hideCertificatesOverlay}
                   className={"py-4 px-6 border-2 w-max mx-auto mt-24 rounded font-semibold cursor-pointer border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-slate-900"}>Go back to the awesome portfolio</p>
            </section>
        </motion.div>
    )
}

function LeftHandSideBonusInformation() {
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

function RightHandSideBonusInformation() {
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