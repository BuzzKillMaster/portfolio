import SectionHeading from "@/components/SectionHeading";
import {AnimatePresence, motion} from "framer-motion";
import React, {useState} from "react";
import ProfessionalCertificate from "@/types/ProfessionalCertificate";
import ProfessionalCertificates from "@/enums/ProfessionalCertificates";
import professionalCertificates from "@/data/professionalCertificates";

export default function QualificationsSection() {
    const [selectedCertificate, setSelectedCertificate] = useState(ProfessionalCertificates.Android)

    return (
        <motion.section id={"certifications"}>
            <SectionHeading iteration={2} title={"What are my qualifications?"}/>

            <div className={"flex flex-col lg:flex-row"}>
                <div className={"shrink-0 mb-12 lg:mb-0 lg:mr-20"}>
                    <ul className={"flex lg:block overflow-x-auto overflow-y-hidden lg:overflow-visible"}>
                        {Object.entries(professionalCertificates).map(([key, value]) => (
                            // @ts-ignore
                            // TODO: Erh... fix the ignored issue to make sure nothing breaks.
                            <CertificateListItem key={key} clickHandler={() => setSelectedCertificate(key)} text={value.category} active={key === selectedCertificate.toString()}/>
                        ))}
                    </ul>
                </div>

                <motion.div layout className={"flex-grow grid grid-cols-1"}>
                    <AnimatePresence>
                        {Object.entries(professionalCertificates).map(([key, value]) => (
                            <CertificateDescription key={key} certificate={value} showing={key === selectedCertificate.toString()}/>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </motion.section>
    )
}

function CertificateDescription(props: {
    certificate: ProfessionalCertificate,
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