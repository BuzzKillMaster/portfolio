import {motion} from "framer-motion";
import React from "react";

export default function MobileMenuLink(props: {
    text: string
    target: string
    handleClick: (target: string) => void
}) {
    return (
        <motion.li whileHover={{ scale: 1.05 }} onClick={() => props.handleClick(props.target)} className={"cursor-pointer py-4 w-full hover:text-emerald-400 origin-left"}>{props.text}</motion.li>
    )
}