import React from 'react'
import './Footer.css'
import { FaTwitterSquare } from 'react-icons/fa'
import { FaFacebookSquare } from 'react-icons/fa'
import { FaInstagramSquare } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import { FaGithubSquare } from "react-icons/fa"
 
function Footer() {
  return (
    <div className='footer-container'>
        <FaTwitterSquare className='twitter' />
        <FaFacebookSquare className='fb' />
        <FaInstagramSquare className='ig' />
        <FaLinkedin className='linkedin' />
        <FaGithubSquare className='github' />
    </div>
  )
}

export default Footer