import Project from "@/types/Project";
import {
    BsCalculator,
    BsFillPatchCheckFill,
    BsFillShieldLockFill,
    BsGithub,
    BsMap,
    BsPencilSquare
} from "react-icons/bs";

const projects: Project[] = [
    {
        title: "IP Address Tracker",
        description: "Find out where your current IP points, check if your VPN is actually working, or just input some random IP address and see where it takes you on the map - the choice is yours!",
        technologies: ["ipapi", "Next.JS", "TailwindCSS", "Leaflet.JS"],
        icon: BsMap,
        target: "https://ip-address-tracker.buzzkill.app"
    },
    {
        title: "Password Generator",
        description: "Simple implementation of a would-be password generator, enabling you to choose the length and overall complexity of your password, with a strength grading scale that goes from pathetic to godlike.",
        technologies: ["Next.JS", "TailwindCSS"],
        icon: BsFillShieldLockFill,
        target: "https://password-generator.buzzkill.app"
    },
    {
        title: "GitHub User Search",
        description: "Search for the username of any GitHub user and get a quick overview of who they are and what they do. It has never been easier to stalk your favourite developers online!",
        technologies: ["GitHub API", "Next.JS", "TailwindCSS", "Framer Motion", "Local Storage"],
        icon: BsGithub,
        target: "https://github-user-search.buzzkill.app"
    },
    {
        title: "Markdown Editor",
        description: "See what you're writing, as you're writing it, using this Markdown editor that was designed to be simple and accessible - leveraging the power of Markdown, without overcomplicating what it was meant to do.",
        technologies: ["Remark.JS", "Next.JS", "TailwindCSS"],
        icon: BsPencilSquare,
        target: "https://markdown-editor.buzzkill.app"
    },
    {
        title: "Tip Calculator",
        description: "The easiest way to calculate how much you should tip, with the option of a custom tipping percentage and even bill-splitting, in case there's more than one member of your party paying.",
        technologies: ["Next.JS", "TailwindCSS"],
        icon: BsCalculator,
        target: "https://tip-calculator.buzzkill.app"
    },
    {
        title: "Advice Generator",
        description: "Using the Advice Slip API, I created a small service that will fetch a random piece of advice for you. It supports copying a direct link to a particular piece of advice so that you can easily share it with others.",
        technologies: ["Advice Slip API", "Next.JS", "TailwindCSS"],
        icon: BsFillPatchCheckFill,
        target: "https://advice-generator.buzzkill.app"
    },
]

export default projects