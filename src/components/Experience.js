import { AcademicCapIcon } from "@heroicons/react/solid";
import React from "react";

{/* <AcademicCapIcon className="w-10 inline-block mb-4" /> */}

export default function Experience() {

  let arr = ["vhTx76G", "wuH1z1S", "vhTx76G"];

  function addDisplay() {
    console.log(arr);
  }

  return (
    <section id="exp" className="text-white bg-gray-800 body-font">
      <div className="container px-10 py-10 mx-auto">
        <div className="mb-10">
          <h1 className="text-center md:text-5xl text-2xl mb-4">
            Experience
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            From my education, personal projects, and jobs, I've learned these skills:
          </p>
        </div>
          <div className="relative flex justify-center">
            <img className="self-center absolute opacity-25 left-10 md:w-2/5 w-1/2 mx-auto border-2 border-purple-400 rounded-lg my-5" src="https://i.imgur.com/vhTx76G.png"></img>
            
            <button onClick={() => addDisplay()} className="z-40 self-center absolute left-72 border-2 border-purple-400 rounded-lg bg-gray-900 hover:bg-purple-400 hover:border-white focus:bg-purple-400 focus:border-white">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </button>

            <img className="z-40 md:w-1/2 w-1/2 mx-auto border-2 border-purple-400 rounded-lg my-5" src="https://i.imgur.com/wuH1z1S.png"></img>

            <button onClick={() => addDisplay()} className="z-40 self-center absolute border-2 right-72 border-purple-400 rounded-lg bg-gray-900 hover:bg-purple-400 hover:border-white focus:bg-purple-400 focus:border-white">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </button>

            <img className="self-center absolute opacity-25 right-10 md:w-2/5 w-1/2 mx-auto border-2 border-purple-400 rounded-lg my-5" src="https://i.imgur.com/vhTx76G.png"></img>
          </div>
      </div>
    </section>
  );
}