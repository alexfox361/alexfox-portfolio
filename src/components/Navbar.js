import { SocialIcon } from 'react-social-icons';
import { Icon } from '@iconify/react';
// import React from "react";

// export default function Navbar() {
//   return (
//     <header className="border-b-2 bg-gray-900 md:sticky top-0 z-10 border-purple-400">
//       <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        // <a className="text-primary title-font font-medium mb-4 md:mb-0">
        //   <a href="#about" className="text-purple-400 sm:text-3xl text-2xl mb-1 font-medium title-font ml-3">
        //     Alex Fox
        //   </a>
        // </a>
//         <nav className="md:mr-auto text-white md:ml-4 md:py-1 md:pl-4 md:border-l md:border-white	flex flex-wrap items-center text-base justify-center">
          // <a href="#exp" className="mr-5 hover:text-purple-400">
          //   Experience
          // </a>
          // <a href="#contact" className="mr-5 hover:text-purple-400">
          //   Contact
          // </a>
//         </nav>
        // <a
        //   href="#contact"
        //   className="inline-flex mt-2">
        //   <SocialIcon url="https://www.linkedin.com/in/alex-fox-996364212"  target="_blank" fgColor="white"/>
        //   <SocialIcon url="https://github.com/alexfox361" className="ml-5"  target="_blank" fgColor="white"/>

        //   {/* <Icon icon="mdi-light:home" /> */}
        // </a>
//       </div>
//     </header>
//   );
// }

import React, { useState } from "react";
import { Transition } from "@headlessui/react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="mb-10">
      <nav  className="border-b-2 bg-gray-900 fixed w-screen top-0 z-50 border-purple-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <a className="text-primary title-font font-medium mb-4 md:mb-0">
                  <a href="#about" className="text-purple-400 sm:text-3xl text-2xl mb-1 font-medium title-font ml-3">
                    Alex Fox
                  </a>
                </a>
              </div>
              <div className="w-screen text-white hidden md:block items-center">
                <div className="mx-10 flex ">
                  <div className="mt-5">
                    <a href="#exp" className="mr-5 hover:text-purple-400">
                      Experience
                    </a>
                    <a href="#contact" className="mr-5 hover:text-purple-400">
                      Contact
                    </a>
                  </div>
                  <div className='pl-47rem'>
                    <a
                      href="#contact"
                      className="inline-flex m-2 justify-self-end ">
                      <SocialIcon url="https://www.linkedin.com/in/alex-fox-996364212"  target="_blank" fgColor="white"/>
                      <SocialIcon url="https://github.com/alexfox361" className="ml-5"  target="_blank" fgColor="white"/>

                      {/* <Icon icon="mdi-light:home" /> */}
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="text-white md:mr-4 mr-2 border-2 border-purple-400 rounded-lg px-4 py-2 bg-gray-900 hover:bg-purple-400 hover:border-white focus:bg-purple-400 focus:border-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
                  </svg>

                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div ref={ref} className="text-white pt-5 pb-3 space-y-1 px-8 flex flex-col">
                <a href="#exp" className="mr-5 hover:text-purple-400">
                  Experience
                </a>
                <a href="#contact" className="mr-5 hover:text-purple-400">
                  Contact
                </a>

                <a
                    href="#contact"
                    className="inline-flex mt-10 mx-auto">
                    <SocialIcon url="https://www.linkedin.com/in/alex-fox-996364212"  target="_blank" fgColor="white"/>
                    <SocialIcon url="https://github.com/alexfox361" className="ml-5"  target="_blank" fgColor="white"/>

                    {/* <Icon icon="mdi-light:home" /> */}
                  </a>
                
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  );
}
export default Navbar;