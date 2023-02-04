import React from "react";

export default function About() {
    return(
        <section id="about" className="text-white bg-gray-800 body-font">
            <div className="container md:flex px-5 py-10 mx-auto">
                <div className="md:w-1/4 py-2">
                    <img className="mx-auto md:w-3/5 w-1/2 border-2 border-purple-400 rounded-lg" src="https://i.imgur.com/tRrN1Uq.png" alt="<blockquote className="></img>
                </div>
                <div className="md:w-3/4 md:text-left text-center  py-2">
                    <div className="">
                        <div className="md:text-8xl text-4xl">
                            Hi, I'm Alex
                        </div>
                        <div className="md:text-5xl text-xl">
                            a software engineer.
                        </div>
                    </div>
                    <div className="md:mt-10 mt-3">
                        <p className="">
                            random random random random random random random
                            random random random random random random random
                            random random random random random random random
                            random random random random random random random
                            random random random random random random random
                            random random random random random random random
                            random random random random random random random
                            random random random random random random random
                            random random random random random random random
                            random random random random random random random
                        </p>
                    </div>
                    <div className="md:mt-10 mt-3">
                        <div >
                            <a href="https://www.linkedin.com/in/alex-fox-996364212"  target="_blank" className="md:mr-4 mr-2 border-2 border-purple-400 rounded-lg px-4 py-2 bg-gray-900 hover:bg-purple-400 hover:border-white focus:bg-purple-400 focus:border-white">
                                Contact Me
                            </a>
                            <button className="border-2 border-purple-400 rounded-lg px-4 py-2 bg-gray-900 hover:bg-purple-400 hover:border-white focus:bg-purple-400 focus:border-white">
                                My Experience
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-5/6 m-auto flex-grow border-t-2 border-purple-400"></div>
        </section>
    );
}