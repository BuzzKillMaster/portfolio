import SectionHeading from "@/components/SectionHeading";
import React from "react";
import FeaturedProject from "@/components/FeaturedProject";
import {motion} from "framer-motion";

export default function FeaturedProjectsSection() {
    return (
        <motion.section layout id={"projects"}>
            <SectionHeading iteration={3} title={"What can I do?"}/>

            <FeaturedProject title={"URL Shortener"}
                                 description={"This tool is a fast and user-friendly URL shortener that simplifies lengthy web addresses into more concise and professional-looking ones. Utilizing the Shrtcode API, I developed it using modern web technologies like Next.JS, TailwindCSS, and Framer Motion. For data persistence, I employed the Local Storage Web API."}
                             technologies={["Shrtcode API", "Next.JS", "TailwindCSS", "Framer Motion", "Local Storage"]} reverse={false} image={"/url_shortener.png"} target={"https://url-shortener.buzzkill.app"}/>

            <FeaturedProject title={"Countries Lookup"}
                             description={"Looking for information about a specific country? With this tool, you can easily search for countries and get information such as their population, currency, language, and more. Built using the REST Countries API and modern web technologies like Next.js and TailwindCSS, it's a fast and intuitive way to learn more about the world around us."}
                             technologies={["REST Countries API", "Next.JS", "TailwindCSS", "Framer Motion"]} reverse={true} image={"/countries_lookup.png"} target={"https://countries-lookup.buzzkill.app"}/>
        </motion.section>
    )
}
