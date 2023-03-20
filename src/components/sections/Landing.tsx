import React from "react";
import scrollToView from "@/utilities/scrollToView";

export default function LandingSection() {
    return (
        <section id={"home"} className={"min-h-screen flex flex-col justify-center items-start"}>
            <p className={"font-semibold text-emerald-400"}>Hello, my name is</p>
            <h1 className={"text-6xl font-bold my-6"}>Christian Pedersen.</h1>
            <h2 className={"text-4xl font-bold"}>I create websites and mobile applications.</h2>

            <p className={"mt-8 lg:w-1/2 mb-12"}>Which I do with quite the enthusiasm, and also a tiny bit of
                absurdity. In a world of highly skilled individuals, I stand out based on my extroverted and
                fun-loving personality, not just my capabilities.</p>

            <p onClick={() => scrollToView("about")}
               className={"py-4 px-6 border-2 rounded font-semibold cursor-pointer border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-slate-900"}>Get
                to know me!</p>
        </section>
    )
}