import ProfessionalCertificate from "@/types/ProfessionalCertificate";
import {motion} from "framer-motion";
import React from "react";

export default function CertificateDescription(props: {
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
                        {props.certificate.skills.map(value => (
                            <li key={value} className={"flex my-4"}>
                                <p className={"text-emerald-400 mr-2"}>-</p>
                                <p>{value}</p>
                            </li>
                        ))}
                    </ul>
                </motion.div>
            }
        </>
    )
}