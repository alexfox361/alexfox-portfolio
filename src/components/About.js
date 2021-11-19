import React from "react";

export default function About() {
    return(
        <section id="about" className="text-gray-400 bg-gray-900 body-font">
            <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <img className="" src={"https://i.imgur.com/iytFLQJ.jpeg"} alt="self image" style={{width: 400, height: 400, borderRadius: 400/ 2, borderWidth: 2}} />
                </div>
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                        Hey! I'm Alex
                        <br className="hidden lg:inline-block" />a Software Engineer.
                    </h1>
                    <p className="mb-8 leading-relaxed">
                        I started coding in my Junior year of High School and haven't looked back. 
                        I currently have an internship with UNLV-FIA remidiating accessibilty issues on the DATIM website for the Forest Service. 
                        I've had multiple jobs regarding accessibilty in technology and it is a topic I'm very experienced and passionate about. 
                    </p>
                    <div className="flex justify-center">
                        <a href="#contact" className="inline-flex text-white bg-primary border-0 py-2 px-6 focus:outline-none hover:bg-secondary rounded text-lg">
                            Contact Me
                        </a>
                        <a href="#projects" className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
                            My Projects
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}