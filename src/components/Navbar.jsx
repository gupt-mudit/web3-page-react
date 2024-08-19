import React, {useState} from 'react'
import viteLogo from '/vite.svg'
import Logo from '../assets/thunder2.png'
import '../index.css'

export const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] =useState(false)
  return (
      <header className='flex text-white items-center justify-between py-6 px-12 md:px-32 drop-shadow-md'>

          <a href="#" className="flex flex-col items-center hover:scale-125 transition-all">
              <img src={Logo} className=" bg-blue-500w-30 h-20 " alt="Vite"/>
              <p className="tracking-tighter">WEB3.BOLT</p>
          </a>

          <ul className="hidden xl:flex items-center text-base gap-12">
              <li className="p-3 hover:bg-gradient-to-r from-blue-500 to-blue-800 rounded-md transition-all cursor-pointer">FEATURES</li>
              <li className="p-3 hover:bg-gradient-to-r from-blue-500 to-blue-800 rounded-md transition-all cursor-pointer">WORKFLOW</li>
              <li className="p-3 hover:bg-gradient-to-r from-blue-500 to-blue-800 rounded-md transition-all cursor-pointer">PRICING</li>
              <li className="p-3 hover:bg-gradient-to-r from-blue-500 to-blue-800 rounded-md transition-all cursor-pointer">TESTIMONIALS</li>
          </ul>
          <div className="hidden xl:flex space-x-6 py-3 items-center">
              <a href="#" className=" text-white py-2 px-3 border rounded-md">
                  Sign In
              </a>
              <a href="#" className=" text-white py-2 px-3 rounded-md bg-gradient-to-r from-blue-950 to-red-800 ">
                  Create an account
              </a>
          </div>


          { isMenuOpen?  (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                          stroke="currentColor" className="size-6" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                  <path strokeLinecap="round" strokeLinejoin="round"
                        d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
              </svg>
          ) :
              (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                    stroke="currentColor" className="size-6 xl:hidden container" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/>
              </svg>)

          }
          {
              isMenuOpen && (<div
                      className="fixed right-0 z-20 top-2 bg-neutral-900 w-full p-12 my-24 flex flex-col text-white justify-center items-center xl:hidden">
                      <ul>
                      <li className="py-2">FEATURES</li>
                          <li className="py-2">WORKFLOW</li>
                          <li className="py-2">PRICING</li>
                          <li className="py-2">TESTIMONIALS</li>
                      </ul>
                      <div className="flex space-x-6 py-3">
                          <a href="#" className=" text-white py-2 px-3 border rounded-md">
                              Sign In
                          </a>
                          <a href="#"
                             className=" text-white py-2 px-3 rounded-md bg-gradient-to-r from-blue-500 to-red-800 ">
                              Create an account
                          </a>
                      </div>
                  </div>
              )
          }


      </header>
  )
}
