import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <header>
            <h1>Logo</h1>
            <nav>
                <Link to={'/'}>Accueil</Link>
                <Link to={'/survey/1'}>Survey</Link>
                <Link to={'/freelances'}>Freelances</Link>
            </nav>
        </header>
    )
}
