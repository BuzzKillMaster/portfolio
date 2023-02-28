import '@/styles/globals.css'
import type {AppProps} from 'next/app'
import Head from "next/head";
import React from "react";

export default function App({Component, pageProps}: AppProps) {
    return (
        <>
            <Head>
                <title>Christian Pedersen | Multimedia Designer Extraordinaire</title>
                <meta name="description"
                      content="Christian is a multi media designer with several related certifications, including cross-platform app development, data analysis and social media marketing."/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <Component {...pageProps} />
        </>
    )
}
