import React from 'react'
import Head from 'next/head'
import Navbar from "./navbar/Navbar";
import Footer from "./footer/Footer";

interface LayoutProps {
    children:React.ReactNode
}

export default function Layout({children}:LayoutProps) {
    return (
        <div>
            <Head>
            <title>Flashcard app</title>
            <meta name="description" content="Flashcard using Next.js and GraphQL" />
            <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar />
            <main>
            {children}
            </main>
            <Footer />
            <style jsx>{`
                main {
                    min-height: 70vh;
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                  }
            `}</style>
        </div>
    )
}