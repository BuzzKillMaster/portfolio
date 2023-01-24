import SectionHeading from "@/components/SectionHeading";
import React from "react";
import FeaturedProject from "@/components/FeaturedProject";
import {motion} from "framer-motion";

export default function FeaturedProjectsSection() {
    return (
        <motion.section layout id={"projects"}>
            <SectionHeading iteration={3} title={"What can I do?"}/>

            <FeaturedProject title={"URL Shortener"}
                             description={"Quickly and easily shorten long URLs to a size that is not only more readable, but also looks significicantly more professional. I created this using the Shrtcode API, along with Next.JS, TailwindCSS, Framer Motion and the Local Storage Web API for a simple implementation of persistence."}
                             technologies={["Shrtcode API", "Next.JS", "TailwindCSS", "Framer Motion", "Local Storage"]} reverse={false} image={"/url_shortener.png"} target={"https://url-shortener.buzzkill.app"}/>

            <FeaturedProject title={"Countries Lookup"}
                             description={"Just a basic implementation that helps convey that I am capable of fetching and processing large amounts of complex data, converting JSON data into usable objects that allows filtering. It was built using the REST Countries API, along with Next.JS, TailwindCSS and Framer Motion."}
                             technologies={["REST Countries API", "Next.JS", "TailwindCSS", "Framer Motion"]} reverse={true} image={"/countries_lookup.png"} target={"https://countries-lookup.buzzkill.app"}/>
        </motion.section>
    )
}
