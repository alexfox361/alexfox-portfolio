import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <main className="">
      <div class="flex-1 overflow-auto dark:bg-black">
        <div class="w-[340px] md:w-[864px] lg:w-[960px] m-[50px] overflow-x-clip mx-auto relative">
          <div class="dark:text-white flex flex-col md:items-center text-left md:text-center gap-[32px]">
            <div class="self-center">
              <img src="https://i.imgur.com/MFYr6HF.png" class="object-cover rounded-full h-[180px] md:h-[240px] w-[180px] md:w-[240px]"></img>
            </div>
            <div class="font-main text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-purple-400 leading-[60px] md:leading-[80px] lg:leading-[90px] text-[48px] md:text-[64px] lg:text-[72px]">
              <span>Hello, I'm Alex, </span>
              <span class="text-black dark:text-white">a Software Engineer</span>
            </div>
            <div class="text-black dark:text-white font-secondary leading-[30px] text-[16px] md:text-[18px] leading-[24px] md:leading-[30px] w-[340px] md:w-[674px]">
                            
            </div>
            <div class="flex flex-wrap flex-col md:flex-row gap-[16px]">
              <button class="max-w-[340px] md:max-w-[821px] lg:max-w-[640px] w-max rounded-[50px] px-[40px] py-[20px] break-words font-semibold  font-secondary leading-[22px] text-[18px] text-white dark:text-black bg-black dark:bg-white">
                <a href="https://www.linkedin.com/in/alex-fox-996364212/" target="_blank"> GET IN TOUCH </a>
              </button>
              <button class="max-w-[340px] md:max-w-[821px] lg:max-w-[640px] w-max rounded-[50px] px-[40px] py-[20px] break-words font-semibold font-secondary leading-[22px] text-[18px] text-black dark:text-white bg-transparent border-2">
                <a href="https://github.com/alexfox361" target="_blank"> VIEW ALL WORKS </a>
              </button>
            </div>
          </div>
        </div>
        <div class="mx-auto w-[340px] md:w-[740px] lg:w-[1200px]">
          <div class="mb-[32px] md:w-[560px] lg:w-[1200px] lg:flex lg:flex-row lg:justify-between">
            <div class="text-[32px] md:text-[56px] lg:text-[64px]">
              <p class="dark:text-white font-main">Look at My</p>
              <p class="break-words bg-gradient-to-r from-indigo-300 to-purple-400 inline-block text-transparent bg-clip-text font-main">Projects</p>
            </div>
            <div class="h-[32px]">
          </div>
          <div class="dark:text-white font-secondary text-[16px] md:text-[18px] lg:w-[560px] lg:my-auto">These are projects I have made for school, work, or just for fun. Each of these projects uses React and Tailwind. Click on any of the images to see the Github Repo. </div>
        </div>
        <div class="flex max-w-[1200px] flex-wrap">
          <div class="w-[340px] h-[370px] lg:h-[587px] lg:w-[560px] dark:bg-gray-700 bg-gray-400 rounded-xl mx-auto my-[40px]">
            <a href="" target="_blank">
              <img class="mx-auto h-[242px] lg:h-[400px]" src="https://i.imgur.com/wxUoaBZ.png"></img>
            </a>
            <div class="h-[128px] lg:h-[187px] dark:bg-gray-900 bg-gray-100">
              <div class="dark:text-white font-main p-[19px] lg:p-[42px]">
                <div class="text-[26px] lg:text-[32px]">Portfolio Builder</div>
                <div class="text-[18px]">Create your own portfolio. No web dev experience needed.</div>
              </div>
            </div>
          </div>
          <div class="w-[340px] h-[370px] lg:h-[587px] lg:w-[560px] dark:bg-gray-700 bg-gray-400 rounded-xl mx-auto my-[40px]">
            <a href="" target="_blank">
              <img class="mx-auto h-[242px] lg:h-[400px]" src="https://i.imgur.com/m1B8SFu.png"></img>
            </a>
            <div class="h-[128px] lg:h-[187px] dark:bg-gray-900 bg-gray-100">
              <div class="dark:text-white font-main p-[19px] lg:p-[42px]">
                <div class="text-[26px] lg:text-[32px]">Word Ladder Game</div>
                <div class="text-[18px]">Change one letter at a time to get to the goal word.</div>
              </div>
            </div>
          </div>
          <div class="w-[340px] h-[370px] lg:h-[587px] lg:w-[560px] dark:bg-gray-700 bg-gray-400 rounded-xl mx-auto my-[40px]">
            <a href="" target="_blank">
              <img class="mx-auto h-[242px] lg:h-[400px]" src="https://i.imgur.com/38InHFv.jpg"></img>
            </a>
            <div class="h-[128px] lg:h-[187px] dark:bg-gray-900 bg-gray-100">
              <div class="dark:text-white font-main p-[19px] lg:p-[42px]">
                <div class="text-[26px] lg:text-[32px]">Hotel Landing Page</div>
                <div class="text-[18px]">Hotel information page. Uses simple node server for info.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="w-[338.6px] md:w-[864px] lg:w-[1200px] m-[50px] overflow-x-clip mx-auto relative">
        <div class="mb-5 font-main text-[32px] md:text-[56px] lg:text-[64px] text-black dark:text-white">What I Do.
      </div>
      <div class="flex flex-wrap gap-[24px] md:gap-[25px] justify-center">
        <div class="bg-[#F0F2F5] dark:bg-[#1C1C22] flex w-[157.3px] h-[169.82px] md:w-[220px] md:h-[244px]">
          <div class="m-auto h-[125.28px] md:h-[180px]">
            <div class="h-[50%] flex justify-center">
              <img src="https://i.imgur.com/fgEiNgJ.png" alt=""></img>
            </div>
            <div class="h-[22.27px] md:[32px]"></div>
            <div class="">
              <p class="text-[22.27px] md:text-[32px] leading-[28px] md:leading-[48px] w-[157.3px] md:w-[220px] break-words font-main text-center text-black dark:text-white">React</p>
            </div>
            </div>
          </div>
          <div class="bg-[#F0F2F5] dark:bg-[#1C1C22] flex w-[157.3px] h-[169.82px] md:w-[220px] md:h-[244px]">
            <div class="m-auto h-[125.28px] md:h-[180px]">
              <div class="h-[50%] flex justify-center">
                <img src="https://i.imgur.com/VVAGFQn.png" alt=""></img>
              </div>
              <div class="h-[22.27px] md:[32px]"></div>
              <div class="">
                <p class="text-[22.27px] md:text-[32px] leading-[28px] md:leading-[48px] w-[157.3px] md:w-[220px] break-words font-main text-center text-black dark:text-white">Tailwind</p>
              </div>  
            </div>
          </div>
          <div class="bg-[#F0F2F5] dark:bg-[#1C1C22] flex w-[157.3px] h-[169.82px] md:w-[220px] md:h-[244px]">
            <div class="m-auto h-[125.28px] md:h-[180px]">
              <div class="h-[50%] flex justify-center">
                <img src="https://i.imgur.com/k0jGRzy.png" alt=""></img>
              </div>
              <div class="h-[22.27px] md:[32px]"></div>
              <div class="">
                <p class="text-[22.27px] md:text-[32px] leading-[28px] md:leading-[48px] w-[157.3px] md:w-[220px] break-words font-main text-center text-black dark:text-white">JavaScript</p>
              </div>
            </div>
          </div>
          <div class="bg-[#F0F2F5] dark:bg-[#1C1C22] flex w-[157.3px] h-[169.82px] md:w-[220px] md:h-[244px]">
            <div class="m-auto h-[125.28px] md:h-[180px]">
              <div class="h-[50%] flex justify-center">
                <img src="https://i.imgur.com/30V1hQ3.png" alt=""></img>
              </div>
              <div class="h-[22.27px] md:[32px]">
                </div>
                <div class="">
                  <p class="text-[22.27px] md:text-[32px] leading-[28px] md:leading-[48px] w-[157.3px] md:w-[220px] break-words font-main text-center text-black dark:text-white">HTML/CSS</p>
                  </div>
                  </div>
                  </div>
                  <div class="bg-[#F0F2F5] dark:bg-[#1C1C22] flex w-[157.3px] h-[169.82px] md:w-[220px] md:h-[244px]">
                    <div class="m-auto h-[125.28px] md:h-[180px]">
                      <div class="h-[50%] flex justify-center">
                        <img src="https://i.imgur.com/ZfbslJ9.png" alt=""></img>
                          </div>
                          <div class="h-[22.27px] md:[32px]">
                            </div>
                            <div class="">
                              <p class="text-[22.27px] md:text-[32px] leading-[28px] md:leading-[48px] w-[157.3px] md:w-[220px] break-words font-main text-center text-black dark:text-white">ASP .NET</p>
                              </div>
                              </div>
                              </div>
                              </div>
                              </div>
                              <div class="flex flex-col w-[340px] mx-auto py-10 md:w-[864px] lg:flex-row lg:w-[1200px] bg-white text-black dark:bg-black dark:text-white">
                                <div class="md:w-[560px]">
                                  <div class="pb-6 text-[32px] md:text-[48px] whitespace-nowrap font-main text-transparent bg-clip-text w-[156px] md:w-[234px] bg-gradient-to-r from-indigo-300 to-purple-400">Education</div>
                                  <div>
                                    <div class="font-main text-[24px]"> University of Nevada, Las Vegas </div>
                                    <p class="float-left font-secondary pb-3 text-[16px]"> Bachelor of Science in Computer Science - 3.4 GPA </p>
                                    <p class="float-right font-secondary pb-3 text-[15px] md:text-[16px]"> <span>•</span> 2023 </p>
                                    <hr class="border-black dark:border-white clear-both"></hr>
                                      </div>
                                      </div>
                                      <div class="h-[30px] lg:h-[0px] lg:w-[80px]"></div>
                                      <div class="md:w-[560px]">
                                        <div class="pb-6 text-[32px] md:text-[48px] whitespace-nowrap font-main text-transparent bg-clip-text w-[256px] md:w-[384px] bg-gradient-to-r from-indigo-300 to-purple-400">Work Experience</div>
                                        <div>
                                          <div class="font-main text-[24px]"> UNLV - Forest Inventory and Analysis National Program </div>
                                          <p class="float-left font-secondary pb-3 text-[16px]"> Software Engineer - Intern </p><p class="float-right font-secondary pb-3 text-[15px] md:text-[16px]"> <span>•</span> 09/2021 - 05/2023 </p>
                                          <hr class="border-black dark:border-white clear-both"></hr>
                                            </div>
                                            <div>
                                              <div class="font-main text-[24px]"> UNLV - Forest Inventory and Analysis National Program </div><p class="float-left font-secondary pb-3 text-[16px]"> Software Engineer - Full Stack </p>
                                              <p class="float-right font-secondary pb-3 text-[15px] md:text-[16px]"> <span>•</span> 05/23 - Present </p>
                                              <hr class="border-black dark:border-white clear-both"></hr>
                                                </div>
                                                </div>
                                                </div>
                                                <div class="flex bg-white text-black dark:bg-black dark:text-white lg:max-w-[1036px] md:max-w-[864px] max-w-[340px] mx-auto item-center">
                                                  <div class="py-20 px-[25px] md:px-[80px]">
                                                    <div class="font-bold font-main lg:text-5xl md:text-4xl text-[22px]">
                                                      <h2>See anything that you are interested in?</h2>
                                                      <div class="bg-white dark:bg-black">
                                                        <div class="bg-gradient-to-r from-indigo-300 to-purple-400 text-transparent bg-clip-text flex items-center">
                                                          <a href="https://www.linkedin.com/in/alex-fox-996364212/" class="flex items-center font-bold font-main flex-wrap mt-2 mb-2 lg:text-5xl md:text-4xl text-[26px]">Lets Work Together
                                                          <svg class="w-6 h-6 md:w-14 md:h-14 lg:w-18 lg:h-18" width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 68L66.5845 5.41551M13.9664 4L66.5859 5.41403L67.9999 58.0336" stroke="url(#paint0_linear_228_503)" stroke-width="8" stroke-linecap="round" stroke-linejoin="round">
                                                            </path>
                                                            <defs>
                                                              <linearGradient id="paint0_linear_228_503" x1="4" y1="35.9009" x2="67.9999" y2="35.9009" gradientUnits="userSpaceOnUse">
                                                                <stop offset="0.140625" stop-color="#a5b4fc">
                                                                  </stop>
                                                                  <stop offset="1" stop-color="#c084fc">
                                                                    </stop></linearGradient>
                                                                    </defs></svg></a></div></div></div></div></div></div>
    </main>
    </>
  )
}

export default App
