import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Studentdashboard from './Studentdashboard'
import Internshippageone from './Internshippages/Internshippageone';
import Internshippagetwo from './Internshippages/Internshippagetwo';
import Internshippagethree from './Internshippages/Internshippagethree';
import Internshippagefive from './Internshippages/Internshippagefive';
import Internshippagesix from './Internshippages/Internshippagesix';
import Internshippagefour from './Internshippages/Internshippagefour';
import Internshippageeight from './Internshippages/Internshippageeight';
import Internshippageseven from './Internshippages/Internshippageseven';
const Alltheroutes = () => {
    return (
        <div>
            <Router>
                <Routes>
                    <Route path="/" element={< Studentdashboard />} />
                    <Route path="/internshippage1" element={< Internshippageone />} />
                    <Route path="/internshippage2" element={< Internshippagetwo />} />
                    <Route path="/internshippage3" element={< Internshippagethree />} />
                    <Route path="/internshippage4" element={< Internshippagefour />} />
                    <Route path="/internshippage5" element={< Internshippagefive />} />
                    <Route path="/internshippage6" element={< Internshippagesix />} />
                    <Route path="/internshippage7" element={< Internshippageseven />} />
                    <Route path="/internshippage8" element={< Internshippageeight />} />
                </Routes>
            </Router>
        </div>
    )
}

export default Alltheroutes
