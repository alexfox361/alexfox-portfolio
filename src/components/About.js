import React from "react";

export default function About() {
    return(
        <section id="about" className="text-white bg-gray-800 body-font">
            <div class="md:flex px-10 py-10">
                <div class="md:w-1/4">
                    <img class="md:w-3/5 w-1/2 mx-auto border-2 border-purple-400 rounded-lg object-cover my-5" src="https://i.imgur.com/tRrN1Uq.png" alt="<blockquote class="></img>
                </div>
                <div class="md:w-3/4 md:m-10 md:text-left text-center">
                    <div class="">
                        <div class="md:text-8xl text-4xl">
                            Hi, I'm Alex
                        </div>
                        <div class="md:text-5xl text-xl">
                            a software engineer.
                        </div>
                    </div>
                    <div class="md:mt-10 mt-3">
                        <p class="">
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
                            random random random random random random random
                            random random random random random random random
                            random random random random random random random
                            random random random random random random random
                            random random random random random random random
                            random random random random random random random
                        </p>
                    </div>
                    <div class="md:mt-10 mt-3">
                        <div >
                            <a href="https://www.linkedin.com/in/alex-fox-996364212"  target="_blank" class="md:mr-4 mr-2 border-2 border-purple-400 rounded-lg px-4 py-2 bg-gray-900 hover:bg-purple-400 hover:border-white focus:bg-purple-400 focus:border-white">
                                Contact Me
                            </a>
                            <button class="border-2 border-purple-400 rounded-lg px-4 py-2 bg-gray-900 hover:bg-purple-400 hover:border-white focus:bg-purple-400 focus:border-white">
                                My Experience
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="w-5/6 m-auto flex-grow border-t-2 border-purple-400"></div>
        </section>
    );
}