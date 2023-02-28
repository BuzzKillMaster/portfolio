import React, {useState} from "react";
import {Lexend} from '@next/font/google'

import Header from "@/components/Header";
import FeaturedProjectsSection from "@/components/sections/FeaturedProjects";
import ContactSection from "@/components/sections/Contact";
import Footer from "@/components/Footer";
import BonusProjectsSection from "@/components/sections/BonusProjects";
import QualificationsSection from "@/components/sections/Qualifications";
import LandingSection from "@/components/sections/Landing";
import AboutSection from "@/components/sections/About";

import {AnimatePresence, LayoutGroup} from "framer-motion";
import CertificatesListOverlay from "@/components/CertificationsOverlay";
import LeftHandSideBonusInformation from "@/components/LeftHandSideBonusInformation";
import RightHandSideBonusInformation from "@/components/RightHandSideBonusInformation";

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