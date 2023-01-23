import SectionHeading from "@/components/SectionHeading";
import {AnimatePresence, motion} from "framer-motion";
import React, {useState} from "react";

enum Certificate {
    Android,
    iOS,
    Frontend,
    Backend,
    Database,
    Marketing,
    Analytics,
    Upcoming
}

type certificate = {
    title: string,
    category: string,
    timeline: string,
    description: string,
    skills: string[]
}

const certificates: {[key: string]: certificate} = {
    [Certificate.Android]: {
        title: "Meta Android Developer",
        category: "Android Development",
        timeline: "September 2022 - Present",
        description: "Capable of developing native mobile applications for Android using Kotlin and Jetpack Compose, as well as cross-platform applications using React Native, I can quickly develop complex functionality and custom implementations, ensuring that I am never limited by the the work done by others.",
        skills: [
            "Programming in Kotlin along with best practices for design and fundamentals of creating user interfaces with Jetpack Compose.",
            "Building native Android applications using Android Studio and managing the lifecycle of a mobile application.",
            "Creating cross-platform mobile applications using React Native."
        ]
    },
    [Certificate.iOS]: {
        title: "Meta iOS Developer",
        category: "iOS Development",
        timeline: "September 2022 - Present",
        description: "Native applications using Swift and Swift UI or cross-platform application using React Native, it doesn't matter as I can do both. My knowledge of the Swift programming language empowers me to create complex applications without having to worry about limitations imposed by existing frameworks.",
        skills: [
            "Programming fundamentals, how to create a user interface (UI) and best practices for designing the UI using Swift UI.",
            "Creating applications for iOS systems and managing their lifecycles.",
            "Publishing, deploying and maintaining iOS apps as well as cross-platform apps using React Native.",
        ]
    },
    [Certificate.Frontend]: {
        title: "Meta Front-End Developer",
        category: "Front-End Development",
        timeline: "September 2022 - Present",
        description: "HTML, CSS and JavaScript are the basis of my arsenal, with React, Next, Tailwind and much more at my fingertips as well. I have some favourite tools but am more than capable of using whatever tool is needed of me, whether that be Vue, Angular or whatever else is needed.",
        skills: [
            "Creating responsive websites using HTML to structure content, CSS to handle visual style, and JavaScript to develop interactive experiences.",
            "Using React in relation to Javascript libraries and frameworks.",
            "Using the Bootstrap CSS Framework to create webpages and worked with GitHub repositories and version control.",
        ]
    },
    [Certificate.Backend]: {
        title: "Meta Back-End Developer",
        category: "Back-End Development",
        timeline: "September 2022 - Present",
        description: "Not satisfied with just being able to build the front-end, I also specialize in planning, implementing and maintaining back-end systems and automation using tools like Django to create APIs or full-stack applications.",
        skills: [
            "Programming systems including Python, Linux commands, Git, SQL, Version Control, Cloud Hosting, APIs, JSON, XML and more.",
            "Developing basic programming skills and confidence in using programming skills to solve problems.",
        ]
    },
    [Certificate.Database]: {
        title: "Meta Database Engineer",
        category: "Database Engineering",
        timeline: "September 2022 - Present",
        description: "I'm not limited by the ORM of a given framework and understand not only how a database works, but also how to directly interact with it, enabling me to create complex queries. I also know how to optimize and normalize data storage, ensuring data integrity.",
        skills: [
            "Gaining familiarity with SQL syntax and how it’s used to interact with databases.",
            "Creating databases from scratch and learned how to add, manage and optimize databases.",
            "Writing database driven applications in Python to connect clients to MySQL databases.",
            "Developing a working knowledge of advanced data modeling concepts.",
        ]
    },
    [Certificate.Marketing]: {
        title: "Meta Social Media Marketing",
        category: "Social Media Marketing",
        timeline: "September 2022 - Present",
        description: "Marketing campaigns, customer segment analysis, persona creation, you name and I probably know how to do it. I'm trained in using Meta Ads Manager to deliver targeted advertising, regardless of its purpose, as well as creating and interacting with an online following.",
        skills: [
            "Establishing an online presence, building a following, and managing social media accounts.",
            "Developing effective social media posts and creating a strong social media brand presence.",
            "Creating Facebook and Instagram ad campaigns in Meta Ads Manager that drive business results.",
            "Learning to evaluate and interpret the results of social posts and advertising campaigns.",
        ]
    },
    [Certificate.Analytics]: {
        title: "Meta Marketing Analytics",
        category: "Marketing Analytics",
        timeline: "September 2022 - Present",
        description: "Data drives results and I know how to gather, analyze and visualize data using tools like Pandas and Tableau, while simultaneously using the collected data to drive business, advertising and marketing decisions that result in improved ROAS, ROI and customer satisfaction.",
        skills: [
            "Collecting, sorting, evaluating, and visualizing marketing data.",
            "Summarizing and analyzing data using marketing analytics methods.",
            "Designing experiments and testing hypotheses to evaluate advertising effectiveness.",
            "Using Meta Ads Manager to test ad effectiveness and evaluate the results.",
        ]
    },
    [Certificate.Upcoming]: {
        title: "Upcoming Certificates",
        category: "Upcoming Certificates",
        timeline: "Coming soon",
        description: "It doesn't matter how much I know or how good I am, there will always be more to learn and I'll be right there to learn it all. My education is a lifelong project and something that I value quite highly. It is with that in mind that I maintain subscriptions to various online learning institutions and have new courses and certifications already lined up. The following are the certificates that I will be completing before the end of the year.",
        skills: [
            "IBM DevOps and Software Engineering Professional Certificate",
            "IBM Cybersecurity Analyst Professional Certificate",
            "IBM Machine Learning Professional Certificate",
            "IBM AI Engineering Professional Certificate",
            "IBM Applied AI Professional Certificate",
        ]
    },
}

export default function QualificationsSection() {
    const [selectedCertificate, setSelectedCertificate] = useState(Certificate.Android)

    return (
        <motion.section id={"certifications"}>
            <SectionHeading iteration={2} title={"What are my qualifications?"}/>

            <div className={"flex flex-col lg:flex-row"}>
                <div className={"shrink-0 mb-12 lg:mb-0 lg:mr-20"}>
                    <ul className={"flex lg:block overflow-x-auto overflow-y-hidden lg:overflow-visible"}>
                        {Object.entries(certificates).map(([key, value]) => (
                            // @ts-ignore
                            // TODO: Erh... fix the ignored issue to make sure nothing breaks.
                            <CertificateListItem key={key} clickHandler={() => setSelectedCertificate(key)} text={value.category} active={key === selectedCertificate.toString()}/>
                        ))}
                    </ul>
                </div>

                <motion.div layout className={"flex-grow grid grid-cols-1"}>
                    <AnimatePresence>
                        {Object.entries(certificates).map(([key, value]) => (
                            <CertificateDescription key={key} certificate={value} showing={key === selectedCertificate.toString()}/>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </motion.section>
    )
}

function CertificateDescription(props: {
    certificate: certificate,
    showing: boolean
}) {
    return (
        <>
            {props.showing &&
                <motion.div layoutId={"certification"} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className={"row-span-full col-start-1 col-end-2"}>
                    <h4 className={"text-xl font-bold"}>{props.certificate.title}</h4>
                    <p className={"text-sm text-emerald-400 my-4"}>{props.certificate.timeline}</p>
                    <p>{props.certificate.description}</p>

                    <div className={"h-1 mr-40 bg-emerald-400 opacity-50 rounded my-8"}></div>

                    <ul>
                        {props.certificate.skills.map(item => (
                            <SkillListItem key={item} text={item}/>
                        ))}
                    </ul>
                </motion.div>
            }
        </>
    )
}

function CertificateListItem(props: {
    text: string,
    clickHandler: () => void
    active: boolean
}) {
    return (
        <div className={"flex items-stretch justify-items-stretch relative"}>
            <div className={"absolute bottom-0 right-1/2 w-full lg:w-min translate-x-1/2 max-w-[50%] lg:right-0 lg:relative lg:mr-4 lg:my-2"}>
                {props.active &&
                    <motion.div
                        layoutId="indicator"
                        className={"bg-emerald-400 absolute bottom-0 rounded h-1 w-full lg:w-1 lg:h-full"}
                    />
                }
            </div>

            <motion.li onClick={props.clickHandler} whileHover={{ scale: 1.1 }} className={"w-full min-w-max py-4 px-4 lg:px-0 cursor-pointer lg:origin-left hover:text-emerald-400"}>
                <h3>{props.text}</h3>
            </motion.li>
        </div>
    )
}

function SkillListItem(props: {
    text: string
}) {
    return (
        <li className={"flex my-4"}>
            <p className={"text-emerald-400 mr-2"}>-</p>
            <p>{props.text}</p>
        </li>
    )
}