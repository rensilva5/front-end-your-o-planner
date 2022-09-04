// import React from 'react'
// This page is the Home page that contains main img or video click
// and in main component will have countries' pictures.
import Hero from '../components/Hero'
import Main from '../components/Main'
import Navbar from '../components/common/Navbar'
import Footer from '../components/common/Footer'

export default function HomePage() {
  return (
    <div>
        <Navbar />
        <Hero />
        <Main />
        <Footer />
    </div>
  )
}
