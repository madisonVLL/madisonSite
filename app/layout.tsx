"use client"
import Logo from "./public/images/Madison-3.png";
import Link from "next/link";
import Image from "next/image";
import React from 'react';
import { useState } from 'react';
import "./globals.css";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [showMobile, setShowMobile] = useState(false)
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
      <header className="bg-white shadow-xl">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <Link href="/">
                <Image src={Logo} alt="Logo" width="150" height="100"/>
              </Link>
            </div>

            {/* Desktop Links */}
            <div className="hidden md:flex space-x-4 items-center">
              <Link href="/">
                <p className="text-[#15310B]  hover:text-[#E0E5C6]">Home</p>
              </Link>
              <Link href="/portfolio">
                <p className="text-[#15310B]  hover:text-[#E0E5C6]">Portfolio</p>
              </Link>
              <Link href="/services">
                <p className="text-[#15310B]  hover:text-[#E0E5C6]">Services</p>
              </Link>
              <Link href="/contact">
                <p className="text-[#15310B]  hover:text-[#E0E5C6]">Contact Us</p>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center md:hidden item-center">
              <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              fill="#c11c84"
              className="right-0"
              onClick={() => {setShowMobile(!showMobile)}}

            >
              <path d="M 3 7 A 1.0001 1.0001 0 1 0 3 9 L 27 9 A 1.0001 1.0001 0 1 0 27 7 L 3 7 z M 3 14 A 1.0001 1.0001 0 1 0 3 16 L 27 16 A 1.0001 1.0001 0 1 0 27 14 L 3 14 z M 3 21 A 1.0001 1.0001 0 1 0 3 23 L 27 23 A 1.0001 1.0001 0 1 0 27 21 L 3 21 z"  fill="#c11c84"/>
               </svg>
            </div>
            
          </div>

          {/* Mobile Menu */}
          {showMobile && 
            <div className="px-2 pt-2 pb-3 space-y-1">
            <Link href="/" onClick={() => {setShowMobile(!showMobile)}}>
              <p className="text-[#15310B]  hover:text-[#E0E5C6] hover:bg-navyGreen block px-3 py-2 rounded-md text-base font-medium">
                Home
              </p>
            </Link>
            <Link href="/portfolio" onClick={() => {setShowMobile(!showMobile)}}>
              <p className="text-[#15310B]  hover:text-[#E0E5C6] hover:bg-navyGreen block px-3 py-2 rounded-md text-base font-medium">
                Portfolio
              </p>
            </Link>
            <Link href="/services" onClick={() => {setShowMobile(!showMobile)}}>
              <p className="text-[#15310B]  hover:text-[#E0E5C6] hover:bg-navyGreen block px-3 py-2 rounded-md text-base font-medium">
                Services
              </p>
            </Link>
            <Link href="/contact" onClick={() => {setShowMobile(!showMobile)}}>
              <p className="text-[#15310B]  hover:text-[#E0E5C6] hover:bg-navyGreen block px-3 py-2 rounded-md text-base font-medium">
                Contact Us
              </p>
            </Link>
          </div>
          }
        </nav>
      </header>

      <main className="flex-grow bg-cover bg-center bg-no-repeat m-2 p-4">{children}</main>

      <footer className="bg-white shadow-xl py-4">
        <div className='grid  sm-grid-col-1 grid-cols-3 w-full text-center'>
          <Link href="/privacy">
            <p className="text-[#15310B]  hover:text-[#E0E5C6]">Privacy Policy</p>
          </Link>
          <p>© WebAlity 2024</p>
          <Link href="malito: madison@landlocket.com" className='hover:text-[#E0E5C6]'>Email</Link>
        </div>
      </footer>
      </body>
    </html>
  );
}
