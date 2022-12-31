import { SocialIcon } from 'react-social-icons';
// import { Icon } from '@iconify/react';
import React from "react";

export default function Navbar() {
  return (
    <header class="border-b-2 bg-gray-900 md:sticky top-0 z-10 border-purple-400">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="text-primary title-font font-medium mb-4 md:mb-0">
          <a href="#about" className="text-purple-400 sm:text-3xl text-2xl mb-1 font-medium title-font ml-3">
            Alex Fox
          </a>
        </a>
        <nav className="md:mr-auto text-white md:ml-4 md:py-1 md:pl-4 md:border-l md:border-white	flex flex-wrap items-center text-base justify-center">
          <a href="#workexp" className="mr-5 hover:text-purple-400">
            Experience
          </a>
          <a href="#projects" className="mr-5 hover:text-purple-400">
            Projects
          </a>
          <a href="#skills" className="mr-5 hover:text-purple-400">
            Skills
          </a>
          <a href="#contact" className="mr-5 hover:text-purple-400">
            Contact
          </a>
        </nav>
        <a
          href="#contact"
          className="inline-flex mt-2">
          <SocialIcon url="https://www.linkedin.com/in/alex-fox-996364212"  target="_blank" fgColor="white"/>
          <SocialIcon url="https://github.com/alexfox361" className="ml-5"  target="_blank" fgColor="white"/>

          {/* <Icon icon="mdi-light:home" /> */}
        </a>
      </div>
    </header>
  );
}