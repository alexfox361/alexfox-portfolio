import { AcademicCapIcon } from "@heroicons/react/solid";
import React, { useState } from "react";

{/* <AcademicCapIcon className="w-10 inline-block mb-4" /> */}

export default function Experience() {

  const arr = ["vhTx76G", "wuH1z1S", "hq7sa0f"];
  
  const FIA = {
    'title': "UNLV-FIA",
    'type': "Internship",

  }

  const UNLV = {
    'title': "UNLV",
    'type': "Education",

  }

  const RAND = {
    'title': "Skills and Experience",
    'type': "Skills and Experience",

  }
  
  const showcasePrimaryList = ["fia-green", "unlv-grey", "black"];
  const showcaseSecondaryList = ["fia-yellow", "unlv-red", "white"];
  const showcaseInfo = [FIA, UNLV, RAND];


  const [showcase, setShowcase] = useState("invisible");
  const [showcaseValue, setShowcaseValue] = useState(1);
  const [showcasePrimary, setShowcasePrimary] = useState(showcasePrimaryList[showcaseValue]);
  const [showcaseSecondary, setShowcaseSecondary] = useState(showcaseSecondaryList[showcaseValue]);

  function slideLeft() {

    let valueArr = [];
    for (let i = 0; i < arr.length; i++) {
      valueArr[i] = parseInt(document.getElementById("slide" + i).getAttribute("value")) + 1;

      if (valueArr[i] > arr.length - 1) { 
        valueArr[i] = 0; 
      }
      if (i == 1) {
        document.getElementById("selection" + valueArr[i]).style.opacity = 1;
      } 
      else {
        document.getElementById("selection" + valueArr[i]).style.opacity = 0.25;
      }
      
      document.getElementById("slide" + i).setAttribute("value", valueArr[i]);
      document.getElementById("slide" + i).src="https://i.imgur.com/" + arr[valueArr[i]] + ".png";
    }
    setShowcaseValue(parseInt(document.getElementById("slide1").getAttribute("value")));
  }

  function slideRight() {

    let valueArr = [];
    for (let i = 0; i < arr.length; i++) {
      valueArr[i] = document.getElementById("slide" + i).getAttribute("value") - 1;

      if (valueArr[i] < 0) { 
        valueArr[i] = arr.length - 1; 
      }
      if (i == 1) {
        document.getElementById("selection" + valueArr[i]).style.opacity = 1;
      } 
      else {
        document.getElementById("selection" + valueArr[i]).style.opacity = 0.25;
      }

      document.getElementById("slide" + i).setAttribute("value", valueArr[i]);
      document.getElementById("slide" + i).src="https://i.imgur.com/" + arr[valueArr[i]] + ".png";
    }
    setShowcaseValue(parseInt(document.getElementById("slide1").getAttribute("value")));
  }

  function updateColors() {
    
    setShowcasePrimary(showcasePrimaryList[showcaseValue]);
    setShowcaseSecondary(showcaseSecondaryList[showcaseValue]);

  }

  function showcaseSelect(index) {

    var showcaseSet = false;
    var offsetBefore = 0;
    var offsetOffset = 0;

    for (var i = 0; i < arr.length; i++) {
      if (i == parseInt(index)) {

      } 
      else {
        if (showcaseSet) {
          // set to middle value plus offset
          // increment offset after
        }
        else {
          // set to first item plus offset
          // if first item plus offset does not equal the showcase
          // increment the offset before
        }
      } 
    }

    if (index == "0") {
      document.getElementById("slide0").setAttribute("value", 2);
      document.getElementById("slide0").src="https://i.imgur.com/" + arr[2] + ".png";

      document.getElementById("slide1").setAttribute("value", 0);
      document.getElementById("slide1").src="https://i.imgur.com/" + arr[parseInt(index)] + ".png";
      
      document.getElementById("slide2").setAttribute("value", 1);
      document.getElementById("slide2").src="https://i.imgur.com/" + arr[1] + ".png";
    }
    else if (index == "1") {
      document.getElementById("slide0").setAttribute("value", 0);
      document.getElementById("slide0").src="https://i.imgur.com/" + arr[0] + ".png";

      document.getElementById("slide1").setAttribute("value", 1);
      document.getElementById("slide1").src="https://i.imgur.com/" + arr[parseInt(index)] + ".png";
      
      document.getElementById("slide2").setAttribute("value", 2);
      document.getElementById("slide2").src="https://i.imgur.com/" + arr[2] + ".png";
    }
    else {
      document.getElementById("slide0").setAttribute("value", 1);
      document.getElementById("slide0").src="https://i.imgur.com/" + arr[1] + ".png";

      document.getElementById("slide1").setAttribute("value", 2);
      document.getElementById("slide1").src="https://i.imgur.com/" + arr[parseInt(index)] + ".png";
      
      document.getElementById("slide2").setAttribute("value", 0);
      document.getElementById("slide2").src="https://i.imgur.com/" + arr[0] + ".png";
    }

    for (var i = 0; i < arr.length; i++) {
      if (i == parseInt(index)) {
        document.getElementById("selection" + i).style.opacity = 1;
      }
      else {
        document.getElementById("selection" + i).style.opacity = 0.25;
      }
    }

    setShowcaseValue(parseInt(document.getElementById("slide1").getAttribute("value")));
  }

  function openShowcase() {
    updateColors() 
    setShowcase("visible");
  }

  function closeShowcase() {
    setShowcase("invisible");
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
          <div className="relative flex justify-center" id="showcase">
            <img value="0" id="slide0" className="self-center absolute opacity-25 left-10 md:w-2/5 w-1/4 md:h-max mx-auto border-2 border-purple-400 rounded-lg my-5" src="https://i.imgur.com/vhTx76G.png"></img>
            
            <button onClick={() => slideLeft()} className="z-40 self-center border-2 border-purple-400 rounded-lg bg-gray-900 hover:bg-purple-400 hover:border-white focus:bg-purple-400 focus:border-white">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </button>

            <img onClick={() => openShowcase()} value="1" id="slide1" className="z-40 mx-5 md:w-1/2 w-1/2 border-2 border-purple-400 rounded-lg my-5" src="https://i.imgur.com/wuH1z1S.png"></img>

            <button onClick={() => slideRight()} className="z-40 self-center border-2 border-purple-400 rounded-lg bg-gray-900 hover:bg-purple-400 hover:border-white focus:bg-purple-400 focus:border-white">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </button>

            <img value="2" id="slide2" className="self-center absolute opacity-25 right-10 md:w-2/5 w-1/2 mx-auto border-2 border-purple-400 rounded-lg my-5" src="https://i.imgur.com/hq7sa0f.png"></img>
          </div>
          <div className="flex justify-center">
            <div onClick={() => showcaseSelect("0")} id="selection0" tabindex="0" className="mx-2 p-4 shadow-sm bg-purple-400 w-8 h-8 rounded-full opacity-25"></div>
            <div onClick={() => showcaseSelect("1")} id="selection1" tabindex="0" className="mx-2 p-4 shadow-sm bg-purple-400 w-8 h-8 rounded-full"></div>
            <div onClick={() => showcaseSelect("2")} id="selection2" tabindex="0" className="mx-2 p-4 shadow-sm bg-purple-400 w-8 h-8 rounded-full opacity-25"></div>
          </div>
      </div>
      <div className={`justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 ${showcase}`}>
        <div className={`mx-2 p-4 shadow-sm bg-gray-900 border-purple-400 border-4 w-4/5 h-5/6 rounded-lg`}>
          <div className="grid content-end">
            <button onClick={() => closeShowcase()} className={`text-lg flex place-self-end text-purple-400`}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div>
            {showcaseInfo[showcaseValue].title}
            {showcaseInfo[showcaseValue].info}
          </div>
        </div>
      </div>
    </section>
  );
}