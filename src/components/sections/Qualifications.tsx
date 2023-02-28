import SectionHeading from "@/components/SectionHeading";
import {AnimatePresence, motion} from "framer-motion";
import React, {useState} from "react";
import ProfessionalCertificates from "@/enums/ProfessionalCertificates";
import professionalCertificates from "@/data/professionalCertificates";
import CertificateListItem from "@/components/CertificateListItem";
import CertificateDescription from "@/components/CertificateDescription";

export default function QualificationsSection() {
    const [selectedCertificate, setSelectedCertificate] = useState(ProfessionalCertificates.Android)

    return (
        <motion.section id={"certifications"}>
            <SectionHeading iteration={2} title={"What are my qualifications?"}/>

            <div className={"flex flex-col lg:flex-row"}>
                <div className={"shrink-0 mb-12 lg:mb-0 lg:mr-20"}>
                    <ul className={"flex lg:block overflow-x-auto overflow-y-hidden lg:overflow-visible"}>
                        {Object.entries(professionalCertificates).map(([key, value]) => (
                            <CertificateListItem key={key} clickHandler={() => setSelectedCertificate(key as unknown as ProfessionalCertificates)} text={value.category} active={key === selectedCertificate.toString()}/>
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