import React from 'react'
import Link from 'next/link'

export default function Navbar() {
  return (
      <div className="nav">
        <Link href="/"><span>Home</span></Link>
        <Link href="/agenda"><span>Agenda</span></Link>
        <Link href="/speakers"><span>Speakers</span></Link>
        <Link href="/contact"><span>Contact Us</span></Link>
        <Link href="/conduct"><span>Code of Conduct</span></Link>
      </div>
  )
}
