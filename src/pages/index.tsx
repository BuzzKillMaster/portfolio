import Head from 'next/head'

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

const lexend = Lexend({
    subsets: ['latin']
})

export default function Home() {
    const [showCertificatesOverlay, setShowCertificatesOverlay] = useState(false)

    return (
        <div className={lexend.className + " bg-slate-900 text-gray-50 min-h-screen min-w-screen"}>
            <Head>
                <title>Christian Pedersen | Multimedia Designer Extraordinaire</title>
                <meta name="description"
                      content="Christian is a multi media designer with several related certifications, including cross-platform app development, data analysis and social media marketing."/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

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

type CertificateProof = {
    title: string
    organization: string
    date: Date
    credential: string
}
const certificatesList: CertificateProof[] = [
    {
        title: "Create the User Interface with SwiftUI",
        organization: "Meta",
        date: new Date("2023-01-17"),
        credential: "https://www.coursera.org/account/accomplishments/certificate/KPZSKYVA43E4",
    },
    {
        title: "Advanced MySQL Topics",
        organization: "Meta",
        date: new Date("2022-12-22"),
        credential: "https://www.coursera.org/account/accomplishments/certificate/5JWT9DXFKSMV",
    },
    {
        title: "Introduction to Front-End Development",
        organization: "Meta",
        date: new Date("2022-09-21"),
        credential: "https://www.coursera.org/account/accomplishments/certificate/JVKKARBTKE7F",
    },
    {
        title: "Principles of UX/UI Design",
        organization: "Meta",
        date: new Date("2023-01-07"),
        credential: "https://www.coursera.org/account/accomplishments/certificate/BLN57ZVRZLW9",
    },
    {
        title: "Advertising with Meta",
        organization: "Meta",
        date: new Date("2023-01-02"),
        credential: "https://www.coursera.org/account/accomplishments/certificate/E7NG69ZB3Q35",
    },
    {
        title: "Data Analytics Methods for Marketing",
        organization: "Meta",
        date: new Date("2022-12-27"),
        credential: "https://www.coursera.org/account/accomplishments/certificate/NK8N67R98ULC",
    },
    {
        title: "Create the User Interface in Android Studio",
        organization: "Meta",
        date: new Date("2023-01-17"),
        credential: "https://www.coursera.org/account/accomplishments/certificate/9JSC6KRFVHYH",
    },
    {
        title: "React Basics",
        organization: "Meta",
        date: new Date("2023-01-10"),
        credential: "https://www.coursera.org/account/accomplishments/certificate/SSPPB76QMGGN",
    },
    {
        title: "HTML and CSS in depth",
        organization: "Meta",
        date: new Date("2022-12-23"),
        credential: "https://www.coursera.org/account/accomplishments/certificate/A34RD9KSTTFU",
    },
    {
        title: "Fundamentals of Social Media Advertising",
        organization: "Meta",
        date: new Date("2022-12-18"),
        credential: "https://www.coursera.org/account/accomplishments/certificate/A48952LX2SLL",
    },
    {
        title: "Version Control",
        organization: "Meta",
        date: new Date("2022-10-10"),
        credential: "https://www.coursera.org/account/accomplishments/certificate/74STP3VUBYBG",
    },
    {
        title: "Introduction to Social Media Marketing",
        organization: "Meta",
        date: new Date("2022-10-01"),
        credential: "https://www.coursera.org/account/accomplishments/certificate/49LEMHG7NQZY",
    },
    {
        title: "Introduction to Data Analytics",
        organization: "Meta",
        date: new Date("2022-11-06"),
        credential: "https://www.coursera.org/account/accomplishments/certificate/GRCBAE9HT6G2",
    },
    {
        title: "Introduction to Databases",
        organization: "Meta",
        date: new Date("2022-09-30"),
        credential: "https://www.coursera.org/account/accomplishments/certificate/22KCMAYU7CMY",
    },
    {
        title: "Social Media Management ",
        organization: "Meta",
        date: new Date("2022-11-05"),
        credential: "https://www.coursera.org/account/accomplishments/certificate/NHZ3G3DBJVSA",
    },
    {
        title: "Programming with JavaScript",
        organization: "Meta",
        date: new Date("2022-10-26"),
        credential: "https://www.coursera.org/account/accomplishments/certificate/9NJAWMPDZ8XD",
    },
    {
        title: "Programming in Python",
        organization: "Meta",
        date: new Date("2022-10-27"),
        credential: "https://www.coursera.org/account/accomplishments/certificate/589ARCM8SDVK",
    },
    {
        title: "Programming Fundamentals in Swift",
        organization: "Meta",
        date: new Date("2022-12-11"),
        credential: "https://www.coursera.org/account/accomplishments/certificate/M47ZN6XJEQPS",
    },
    {
        title: "Statistics for Marketing",
        organization: "Meta",
        date: new Date("2022-11-08"),
        credential: "https://www.coursera.org/account/accomplishments/certificate/QQUJVTVTBJJT",
    },
    {
        title: "Database Structures and Management with MySQL",
        organization: "Meta",
        date: new Date("2022-11-26"),
        credential: "https://www.coursera.org/account/accomplishments/certificate/5AJGYXDLEN3A",
    },
    {
        title: "Introduction to Databases for Back-End Development",
        organization: "Meta",
        date: new Date("2022-11-28"),
        credential: "https://www.coursera.org/account/accomplishments/certificate/NUF3U8P2PT52",
    },
    {
        title: "Programming Fundamentals in Kotlin",
        organization: "Meta",
        date: new Date("2022-11-07"),
        credential: "https://www.coursera.org/account/accomplishments/certificate/FM3JBUFDG4MH",
    },
    {
        title: "Introduction to Android Mobile Application Development",
        organization: "Meta",
        date: new Date("2022-09-13"),
        credential: "https://www.coursera.org/account/accomplishments/certificate/XET3W7GPRZA2",
    },
    {
        title: "Marketing Analytics Foundation",
        organization: "Meta",
        date: new Date("2022-09-25"),
        credential: "https://www.coursera.org/account/accomplishments/certificate/G3CS54SFH3VG",
    },
    {
        title: "Introduction to Back-End Development",
        organization: "Meta",
        date: new Date("2022-09-21"),
        credential: "https://www.coursera.org/account/accomplishments/certificate/ZGG2YNK9DWBW",
    },
    {
        title: "Introduction to iOS Mobile Application Development",
        organization: "Meta",
        date: new Date("2022-09-14"),
        credential: "https://www.coursera.org/account/accomplishments/certificate/J8W8N9YFMHPY",
    },
    {
        title: "Measure and Optimize Social Media Marketing Campaigns",
        organization: "Meta",
        date: new Date("2023-02-07"),
        credential: "https://www.coursera.org/account/accomplishments/certificate/MSPQCMCJCUGP",
    },
    {
        title: "Marketing Analytics with Meta",
        organization: "Meta",
        date: new Date("2023-02-11"),
        credential: "https://www.coursera.org/account/accomplishments/certificate/YS96KCPB6WB9",
    },
    {
        title: "Django Web Framework",
        organization: "Meta",
        date: new Date("2023-02-12"),
        credential: "https://www.coursera.org/account/accomplishments/certificate/QQ6D5CBD82BU",
    },
    {
        title: "Advanced React",
        organization: "Meta",
        date: new Date("2023-02-14"),
        credential: "https://www.coursera.org/account/accomplishments/certificate/C3UNST8MNHWF",
    },
    {
        title: "Advanced Programming in Swift",
        organization: "Meta",
        date: new Date("2023-02-18"),
        credential: "https://www.coursera.org/account/accomplishments/certificate/JNNLTBN7K6WU",
    },
    {
        title: "Advanced Programming in Kotlin",
        organization: "Meta",
        date: new Date("2023-02-20"),
        credential: "https://www.coursera.org/account/accomplishments/certificate/7YVEHWQJXKBX",
    },
].sort((a, b) => b.date.getTime() - a.date.getTime())

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