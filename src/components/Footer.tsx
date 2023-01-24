import React from "react";
import {motion} from "framer-motion";

export default function Footer() {
    return (
        <motion.footer layout className={"p-8 text-center text-sm uppercase font-semibold"}>
            <p>Humbly inspired by <a className={"text-emerald-500 hover:text-emerald-400 hover:underline"}
                                     href="https://brittanychiang.com/" target={"_blank"} rel={"noreferrer"}>Brittany
                Chiang</a>, created by Christian Pedersen</p>
        </motion.footer>
    )
}