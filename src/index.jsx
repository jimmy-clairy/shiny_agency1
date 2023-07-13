import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Survey from './pages/Survey/Survey'
import Header from './layouts/Header'
import Error from './components/Error/Error'
import Results from './pages/Results/Results'
import Freelances from './pages/Freelances/Freelances'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    *{
        box-sizing:border-box;
    }

    html {
        font-size:62.5%
    }

    body {
        font-size:1.6rem;
        font-family: 'Trebuchet MS', Helvetica, sans-serif;
        width:90%;
        max-width:120rem;
        margin: auto;
    }
`

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <React.StrictMode>
        <Router>
            <GlobalStyle />
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/survey/:questionNumber" element={<Survey />} />
                <Route path="/results" element={<Results />} />
                <Route path="/freelances" element={<Freelances />} />
                <Route path="*" element={<Error />} />
            </Routes>
        </Router>
    </React.StrictMode>
)
