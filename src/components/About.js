import React from "react";

export default function About() {
    return(
        <section id="about" className="text-white bg-gray-800 body-font">
            <div className="container md:flex px-5 py-16 mx-auto">
                <div className="md:w-1/4">
                    <img className="mx-auto md:w-3/4 w-1/2 border-2 border-purple-400 rounded-lg" src="https://i.imgur.com/tRrN1Uq.png" alt="<blockquote className="></img>
                </div>
                <div className="my-auto md:w-3/4 md:text-left text-center">
                    <div className="">
                        <div className="md:text-8xl text-4xl">
                            Hi, I'm Alex
                        </div>
                        <div className="md:text-5xl text-xl">
                            a software engineer.
                        </div>
                    </div>
                    <div className="md:mt-7 mt-3">
                        <p className="md:text-lg">
                            I've always enjoyed keeping up with the latest technology and problem-solving. 
                            It's what drew me to pursue a career in Computer Science, 
                            but the challenge of constantly solving new issues and the reward of seeing my work pay off 
                            made me fall in love with the field.
                        </p>
                        <p className="md:text-lg mt-3">
                            I am currently a Full Stack Intern. I believe that web development is an interesting and creative field, 
                            but I am not opposed to working in Data Science, Machine Learning, or more general software engineering.
                        </p>
                        <p className="md:text-lg mt-3">
                        In my time off from work, you'll find me gaming with friends or keeping up with the latest sports news.
                        These activities take up most of my spare time, and I would love to find a career involving one of the two.
                        </p>
                    </div>
                    <div className="md:mt-7 mt-3">
                        <div >
                            <button className="md:mr-4 mr-2 border-2 border-purple-400 rounded-lg px-4 py-2 bg-gray-900 hover:bg-purple-400 hover:border-white focus:bg-purple-400 focus:border-white">
                                <a href="https://www.linkedin.com/in/alex-fox-996364212"  target="_blank" >
                                    Contact Me
                                </a>
                            </button>
                            <button className="md:mr-4 mr-2 border-2 border-purple-400 rounded-lg px-4 py-2 bg-gray-900 hover:bg-purple-400 hover:border-white focus:bg-purple-400 focus:border-white">
                                <a href="#exp">
                                    Experience
                                </a>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-5/6 m-auto flex-grow border-t-2 border-purple-400"></div>
        </section>
    );
}