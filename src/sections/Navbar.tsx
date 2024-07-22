import Logo from '@/components/Logo'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav>
      <div className="wrapper">
        <div className="brand">
          <Link href="/">
            <Logo />
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar