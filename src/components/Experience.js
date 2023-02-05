import { AcademicCapIcon } from "@heroicons/react/solid";
import React, { useState } from "react";

{/* <AcademicCapIcon className="w-10 inline-block mb-4" /> */}

export default function Experience() {

  const arr = ["vhTx76G", "wuH1z1S", "CcMH8bH"];
  
  const FIA = {
    'title': "UNLV-Forest Inventory and Analysis",
    'type': "Full Stack Intern",
    'timeframe': "(September 2021 - Present)", 
    'desc': `I am currently an intern for the Forest Inventory and Analysis National Program. 
             I began this role with a primary focus on finding and remediating accessibility violations 
             according to WCAG 2.0 and Section 508 requirements. Over time I have worked on more general issues, 
             such as bug fixes and website enhancements.`,
    'header': "Related Information:",
    'info1': "Stack Used: HTML/CSS, JavaScript, jQuery, and .NET Framework.",
    'info2': "Completed over 50 Pull Requests and 5,000 lines of code.",
    'info3': "Participated in code review and weekly meetings.",
  }

  const UNLV = {
    'title': "University of Nevada, Las Vegas",
    'type':  "Bachelor's of Science in Computer Science",
    'timeframe': "(August 2019 - May 2023)", 
    'desc': `I am currently a senior at UNLV have a 3.4 GPA. During my time at UNLV I have held different on campus jobs, such as
             a Assistive Technology Assistant at the Disability Resource Center and a Student Developer Intern for the Geoscience 
             Department. `,
    'header': "Relevant Courses:",
    'info1': "CS 302 - Data Structures",
    'info2': "MATH 181/182 - Calculus 1 and 2",
    'info3': "ENG 407B - Fundamentals of Technical Writing",
  }

  const RAND = {
    'title': "Accessibility",
    'desc': `Through work experience, I have gained expertise in remediating non-accessible content. 
             I am knowledgeable in WCAG 2.0 and Section 508 web requirements. 
             I have also converted thousands of pages of textbooks and coursework material to work with screen readers. 
             Accessibility is important to me because I believe that everyone should have equal access to information on the internet.`,
    'header': "Related Technology:",
    'info1': "Screen Readers: JAWS, NVDA, Kurzweil.",
    'info2': "ANDI - Accessibility Testing Tool.",
    'info3': "W3C Accessibility Evaluation Tools.",

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
    <section id="exp" className="flex flex-grow text-white bg-gray-800 body-font">
      <div className="container md:px-10 px-2 py-10 mx-auto">
        <div className="mb-10">
          <h2 className="text-center md:text-5xl text-2xl mb-4">
            Experience
          </h2>      
        </div>
          <div className="relative flex justify-center" id="showcase">
            <img value="0" id="slide0" className="self-center absolute opacity-25 left-10 md:w-2/5 w-4/6 md:h-max mx-auto border-2 border-purple-400 rounded-lg my-5" src="https://i.imgur.com/vhTx76G.png"></img>
            
            <button onClick={() => slideRight()} className="z-40 self-center border-2 border-purple-400 rounded-lg bg-gray-900 hover:bg-purple-400 hover:border-white focus:bg-purple-400 focus:border-white">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </button>

            <button className="hover:shadow-3xl z-40 mx-5 md:w-1/2 border-2 border-purple-400 rounded-lg my-5" ><img className="rounded md:h-auto md:w-auto object-cover h-96 w-96" onClick={() => openShowcase()} value="1" id="slide1" src="https://i.imgur.com/wuH1z1S.png"></img></button>

            <button onClick={() => slideLeft()} className="z-40 self-center border-2 border-purple-400 rounded-lg bg-gray-900 hover:bg-purple-400 hover:border-white focus:bg-purple-400 focus:border-white">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </button>

            <img value="2" id="slide2" className="self-center absolute opacity-25 right-10 md:w-2/5  w-4/6 mx-auto border-2 border-purple-400 rounded-lg my-5" src="https://i.imgur.com/CcMH8bH.png"></img>
          </div>    
          <p className="mb-2 text-center leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            
          </p>
          <div className="flex justify-center">
            <div onClick={() => showcaseSelect("0")} id="selection0" tabindex="0" className="mx-2 p-4 shadow-sm bg-purple-400 w-8 h-8 rounded-full opacity-25"></div>
            <div onClick={() => showcaseSelect("1")} id="selection1" tabindex="0" className="mx-2 p-4 shadow-sm bg-purple-400 w-8 h-8 rounded-full"></div>
            <div onClick={() => showcaseSelect("2")} id="selection2" tabindex="0" className="mx-2 p-4 shadow-sm bg-purple-400 w-8 h-8 rounded-full opacity-25"></div>
          </div>
      </div>
      <div className={`justify-center items-center flex fixed inset-0 z-50 ${showcase}`}>
        <div className={`mx-2 p-4 shadow-sm bg-gray-900 overflow-auto border-purple-400 border-4 md:w-3/5 md:h-auto h-5/6 w-11/12 rounded-lg`}>
          <div className="grid content-end">
            <button onClick={() => closeShowcase()} className={`text-lg flex place-self-end text-purple-400`}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="text-5xl p-4 text-purple-400">
            {showcaseInfo[showcaseValue].title}
          </div>
          <div className="text-2xl px-4">
            {showcaseInfo[showcaseValue].type}
          </div>
          <div className="text-xl px-4 pb-8">
            {showcaseInfo[showcaseValue].timeframe}
          </div>
          <div class="w-11/12 m-auto flex-grow border-t-2 border-purple-400"></div>
          <div className="text-xl p-4">
            {showcaseInfo[showcaseValue].desc}
          </div>
          <div className="text-xl p-4">
          {showcaseInfo[showcaseValue].header}
          </div>
          <div className="text-xl px-8">
            <ul>
              <li>
                - {showcaseInfo[showcaseValue].info1}
              </li>
              <li>
                - {showcaseInfo[showcaseValue].info2}
              </li>
              <li>
                - {showcaseInfo[showcaseValue].info3}
              </li>
            </ul>
          </div>
          <div className="grid content-end pt-4">
            <button onClick={() => closeShowcase()} className="flex place-self-end border-2 max-w-min border-purple-400 rounded-lg px-4 py-2 bg-gray-800 hover:bg-purple-400 hover:border-white focus:bg-purple-400 focus:border-white">
              Close
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}