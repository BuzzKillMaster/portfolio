import SectionHeading from "@/components/SectionHeading";
import React from "react";
import FeaturedProject from "@/components/FeaturedProject";
import {motion} from "framer-motion";

export default function FeaturedProjectsSection() {
    return (
        <motion.section layout id={"projects"}>
            <SectionHeading iteration={3} title={"What can I do?"}/>

            {/*<FeaturedProject title={"Countries Lookup"}*/}
            {/*                 description={"Aliquam blanditiis culpa dolor dolores est excepturi expedita impedit ipsa iusto nostrum odio optio quos repudiandae, rerum ullam. Corporis quibusdam totam voluptatibus!"}*/}
            {/*                 technologies={["API", "Framer Motion"]} reverse={false} image={"/ip_address_tracker.png"}/>*/}

            <FeaturedProject title={"URL Shortener"}
                             description={"Quickly and easily shorten long URLs to a size that is not only more readable, but also looks significicantly more professional. I created this using the Shrtcode API, along with Next.JS, TailwindCSS, Framer Motion and the Local Storage Web API for a simple implementation of persistence."}
                             technologies={["Shrtcode API", "Next.JS", "TailwindCSS", "Framer Motion", "Local Storage"]} reverse={false} image={"/url_shortener.png"}/>
        </motion.section>
    )
}
