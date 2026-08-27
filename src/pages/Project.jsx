import React from 'react'
import { Component } from '../components/Navbar'
import HeaderFooter from '../components/Footer'
import Card from '../components/Card'

export default function Project() {
  return (
    <>
      <div className="min-h-screen bg-[rgb(0,0,0)] px-6 md:px-16 relative overflow-hidden">
        <Component />
        <br /><br />
        <Card />
        <br /><br /><br />
        <HeaderFooter />
      </div>
    </>
  )
}