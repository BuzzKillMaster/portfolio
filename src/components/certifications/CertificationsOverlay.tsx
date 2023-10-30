import {motion} from "framer-motion";
import certificatesList from "@/data/certificatesList";
import {BsLink45Deg} from "react-icons/bs";
import React from "react";

export default function CertificatesListOverlay(props: {
    hideCertificatesOverlay: () => void
}) {
    const openCertificate = (target: string) => window.open(target, "_blank")

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