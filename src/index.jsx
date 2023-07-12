import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Survey from './pages/Survey/Survey'
import Header from './layouts/Header'
import Error from './pages/Error/Error'
import Results from './pages/Results/Results'
import Freelances from './pages/Freelances/Freelances'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <React.StrictMode>
        <Router>
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
