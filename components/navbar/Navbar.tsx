import React from 'react'
import Link from "next/link"
import styles from "./Navbar.module.css";

export default function Navbar() {
    return (
        <div className={styles.navbarContainer}>
            <nav>
                <div className={styles.navbarBrand}>
                    Flashcards app
                </div>
                <div className={styles.navbarList}>
                    <ul>
                        <li>
                            <Link href="/">
                                <a>Home</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/add-card">
                                <a>Add a card</a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}