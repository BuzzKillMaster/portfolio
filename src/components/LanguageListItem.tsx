import {motion} from "framer-motion";
import {BsArrowRightShort} from "react-icons/bs";

export default function LanguageListItem(props: {
    technology: string,
    target: string
}) {
    return (
        <a href={props.target} target={"_blank"} rel={"noreferrer"}>
            <motion.li
                whileHover={{scale: 1.05}}
                className={"flex items-center cursor-pointer hover:text-emerald-400 origin-left"}>
                <BsArrowRightShort className={"text-emerald-400 text-2xl mr-2"}/>
                <p className={"text-sm uppercase font-semibold"}>{props.technology}</p>
            </motion.li>
        </a>
    )
}