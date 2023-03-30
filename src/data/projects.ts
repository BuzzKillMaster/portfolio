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
        description: "Discover the geographic location of your current IP address, verify the functionality of your VPN, or enter a random IP address to visualize its location on the map - the options are limitless!",
        technologies: ["ipapi", "Next.JS", "TailwindCSS", "Leaflet.JS"],
        icon: BsMap,
        target: "https://ip-address-tracker.buzzkill.app"
    },
    {
        title: "Password Generator",
        description: "Effortlessly generate passwords to suit your desired length and complexity with this easy-to-use password generator. The tool includes a strength grading scale that ranges from pathetic to godlike, empowering you to create highly secure passwords with ease.",
        technologies: ["Next.JS", "TailwindCSS"],
        icon: BsFillShieldLockFill,
        target: "https://password-generator.buzzkill.app"
    },
    {
        title: "GitHub User Search",
        description: "Quickly search for any GitHub user by their username and access a short overview of their work and interests. Discover more about your favorite developers online with this user-friendly tool.",
        technologies: ["GitHub API", "Next.JS", "TailwindCSS", "Framer Motion", "Local Storage"],
        icon: BsGithub,
        target: "https://github-user-search.buzzkill.app"
    },
    {
        title: "Markdown Editor",
        description: "Effortlessly craft your content with this user-friendly Markdown editor, which enables you to visualize your text as you write. The tool was purposefully designed to be straightforward and accessible, allowing you to easily leverage the power of Markdown.",
        technologies: ["Remark.JS", "Next.JS", "TailwindCSS"],
        icon: BsPencilSquare,
        target: "https://markdown-editor.buzzkill.app"
    },
    {
        title: "Tip Calculator",
        description: "Easily calculate your tip amount using our Tip Calculator, which offers customizable tipping percentages and a convenient bill-splitting feature for groups. Avoid the hassle of mental math and ensure accuracy in your tipping.",
        technologies: ["Next.JS", "TailwindCSS"],
        icon: BsCalculator,
        target: "https://tip-calculator.buzzkill.app"
    },
    {
        title: "Advice Generator",
        description: "With the Advice Slip API, this tool provides you with a random piece of advice at your fingertips. You can easily share a specific piece of advice by copying its direct link.",
        technologies: ["Advice Slip API", "Next.JS", "TailwindCSS"],
        icon: BsFillPatchCheckFill,
        target: "https://advice-generator.buzzkill.app"
    },
]

export default projects