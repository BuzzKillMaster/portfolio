import {ReactNode} from "react";

type Project = {
    title: string,
    description: string,
    technologies: string[],
    icon: ReactNode,
    target: string
}

export default Project