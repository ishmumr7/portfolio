"use client"

import Button from '@/components/Button';
import Logo from '@/components/Logo'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const Navbar = () => {
  const sectionLinks = [
    { name: "About", link: "/#about" },
    { name: "Experience", link: "/#experience" },
    { name: "Work", link: "/#work" },
    {
      name: "Contact",
      link: "/#contact",
    },
  ];

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 100 ? setVisible(true) : setVisible(false);
    })
  })

  return (
    <nav>
      <div className={`wrapper ${visible && "blur-nav"}`}>
        <div className="brand">
          <Link href="/">
            <Logo />
          </Link>
        </div>
        <div className="nav-items">
          <ul className="nav-items-list">
            {
              sectionLinks.map((item, index) => (
                <li key={index} className='nav-items-list-item'>
                  <Link href={item.link} className='nav-items-list-item-link'>{item.name}</Link>
                </li>
              ))
            }
          </ul>
          <div className="nav-items-button">
            <Button text="Resume" link="http://localhost:3000/Resume.pdf" />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar