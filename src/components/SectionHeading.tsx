export default function SectionHeading(props: {
    iteration: number
    title: string
}) {
    return (
        <header className={"mb-12 lg:mb-16 text-3xl font-bold flex items-center"}>
            <p className={"text-emerald-400"}>{props.iteration}.</p>
            <h2 className={"ml-4"}>{props.title}</h2>
        </header>
    )
}