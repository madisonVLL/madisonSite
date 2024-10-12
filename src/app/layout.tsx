"use client"
import Logo from "./images/Madison-3.png";
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
                <Image src={Logo} alt="Logo" width="155" height="100" className="p-3"/>
              </Link>
            </div>

            {/* Desktop Links */}
            <div className="hidden md:flex space-x-4 items-center">
              <Link href="/">
                <p className="text-[#15310B]  hover:text-[#c11c84]">Home</p>
              </Link>
              <Link href="/portfolio">
                <p className="text-[#15310B]  hover:text-[#c11c84] hover:text-bold">Portfolio</p>
              </Link>
              <Link href="https://uchicagoedu-my.sharepoint.com/:w:/g/personal/mmv773_uchicago_edu/ES5Gd0QUojFFm-ZWRHYuN44BLERConIRJyt8d6mROAOIvA?e=Al0dCN" target="_blank">
                <p className="text-[#15310B]  hover:text-[#c11c84]">Resume</p>
              </Link>
              <Link href="/contact">
                <p className="text-[#15310B]  hover:text-[#c11c84]">Contact Me</p>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center md:hidden items-center">
              <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              fill="#c11c84"
              className="right-0 py-2"
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
              <p className="text-[#15310B]  hover:text-[#c11c84] hover:bg-navyGreen block px-3 py-2 rounded-md text-base font-medium">
                Home
              </p>
            </Link>
            <Link href="/portfolio" onClick={() => {setShowMobile(!showMobile)}}>
              <p className="text-[#15310B]  hover:text-[#c11c84] hover:bg-navyGreen block px-3 py-2 rounded-md text-base font-medium">
                Portfolio
              </p>
            </Link>
            <Link href="/services" onClick={() => {setShowMobile(!showMobile)}}>
              <p className="text-[#15310B]  hover:text-[#c11c84] hover:bg-navyGreen block px-3 py-2 rounded-md text-base font-medium">
                Services
              </p>
            </Link>
            <Link href="/contact" onClick={() => {setShowMobile(!showMobile)}}>
              <p className="text-[#15310B]  hover:text-[#c11c84] hover:bg-navyGreen block px-3 py-2 rounded-md text-base font-medium">
                Contact Us
              </p>
            </Link>
          </div>
          }
        </nav>
      </header>

      <main className="flex-grow bg-cover bg-center bg-no-repeat">{children}</main>

      <footer className="bg-white shadow-xl py-4">
        <div className='grid  sm-grid-col-1 grid-cols-4 w-full text-center'>
  
          <p>© Madison Vanderbilt</p>
          <Link href="https://www.linkedin.com/in/madison-vanderbilt-180692227/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#c11c84"
                >
                <path d="M20.9716667,33.5527338 L25.001,33.5527338 L25.001,27.1328007 C25.001,25.439485 25.3213333,23.7988354 27.4206667,23.7988354 C29.491,23.7988354 29.517,25.7351486 29.517,27.2404662 L29.517,33.5527338 L33.5506667,33.5527338 L33.5506667,26.4341413 C33.5506667,22.9381777 32.796,20.2505391 28.711,20.2505391 C26.7483333,20.2505391 25.432,21.3265278 24.8943333,22.3471839 L24.839,22.3471839 L24.839,20.5725357 L20.9716667,20.5725357 L20.9716667,33.5527338 Z M16.423,14.1202696 C15.1273333,14.1202696 14.0823333,15.1682587 14.0823333,16.4595785 C14.0823333,17.7508984 15.1273333,18.7992208 16.423,18.7992208 C17.7133333,18.7992208 18.761,17.7508984 18.761,16.4595785 C18.761,15.1682587 17.7133333,14.1202696 16.423,14.1202696 L16.423,14.1202696 Z M14.4026667,33.5527338 L18.4406667,33.5527338 L18.4406667,20.5725357 L14.4026667,20.5725357 L14.4026667,33.5527338 Z M9.76633333,40 C8.79033333,40 8,39.2090082 8,38.2336851 L8,9.76631493 C8,8.79065843 8.79033333,8 9.76633333,8 L38.234,8 C39.2093333,8 40,8.79065843 40,9.76631493 L40,38.2336851 C40,39.2090082 39.2093333,40 38.234,40 L9.76633333,40 Z"></path>
                </svg>
              </Link>
              <Link href="https://www.youtube.com/@forlockets7930" target="_blank">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#c11c84"
                >
                  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"/></svg>
              </Link>
        </div>
      </footer>
      </body>
    </html>
  );
}
