import React from 'react'
import "./Parent.css"
import PersonImg from './PersonImg'
import Info from './Info'
import AboutNInterests from './AboutNInterests'
import Footer from './Footer'

function Parent() {
  return (
    <div className="container">
        <div className="uppersec">
            <div className="imgWrapper">
                <PersonImg />
            </div>
            <Info />
        </div>

        <div className="lowersec">
            <AboutNInterests />
            <Footer />
        </div>
    </div>
  )
}

export default Parent