import {motion} from "framer-motion";
import React from "react";

export default function CertificateListItem(props: {
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