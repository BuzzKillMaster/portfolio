import React, {useState} from "react";
import {Lexend} from '@next/font/google'
import {
    BsGithub,
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
import CertificatesListOverlay from "@/components/CertificationsOverlay";

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