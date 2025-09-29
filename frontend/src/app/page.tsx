"use client";
import { useState } from "react";
import { FileText } from "lucide-react";
import SideNavbar from "../../public/components/sideNavbar";
import Divider  from "../../public/components/divider";
import Projects from "./project";
import "animate.css";

export default function Home() {
  const [selectedType, setSelectedType] = useState<"Data" | "Software" >("Data");
  return (
    <div className="flex bg-gray-900">
      <aside className="h-screen fixed left-0 top-0 ">
        <SideNavbar />
      </aside>
        
      <main className="flex flex-col ml-24 space-y-4 my-4 w-full  ">
        <div className="flex flex-row  min-h-screen items-center justify-between">
          <div className="flex flex-col flex-1 w-170 min-h-screen justify-center items-start animate__animated animate__fadeInLeft">
            <h2 className="mx-24 my-4 text-white rounded-full text-m ">Data Engineer | Software Engineer</h2>
            <h1 className="mx-24 font-semibold text-4xl text-pink-400 drop-shadow-[0_0_10px_#ff00ff]">Natasha Dian Mahardita</h1>
            <h2 className="mx-24 my-4 text-white text-m pt-2">An undergraduate Computer Science student passionate about building data-driven solutions and software applications. Interested in building efficient systems and solving real-world problems through technology. Get to know me!</h2>
            <a
              href="https://binusianorg-my.sharepoint.com/personal/natasha_mahardita_binus_ac_id/_layouts/15/guestaccess.aspx?share=EQC7OQAIAkhNqWum2iEQjU4BJKbheZl_1O9hcEg_NBxgQg&e=tYyTXi"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-24 my-4 bg-pink-500 shadow-[0_0_10px_#ff00ff] text-white text-sm px-4 py-4 rounded-2xl hover:scale-105 transition duration-300 "
              >
                <FileText className="inline-block mr-2 size-4"/>
                <span>Resume / CV</span>
            </a>
          </div>
          <div className="flex flex-1 bggray-900w-170 min-h-screen justify-start items-center">
            <div className=" grid grid-cols-9 animate-[bounce-soft_2s_infinite] [animation-duration:2s]  ">
              <div className="w-16 h-16 bg-gray-900"></div>
              <div className="w-16 h-16 bg-gray-900"></div>
              <div className="w-16 h-16 bg-gray-900"></div>
              <div className="w-16 h-16 bg-gray-900"></div>
              <div className="w-16 h-16 bg-gray-900"></div>
              <div className="w-16 h-16 bg-gray-900 "></div>
              <div className="w-16 h-16 bg-gray-900 "></div>
              <div className="w-16 h-16 bg-gray-900 "></div>
              <div className="w-16 h-16 bg-gray-900 "></div>
              <div className="w-16 h-16 bg-gray-900 "></div>
              <div className="w-16 h-16 bg-yellow-500 "></div>
              <div className="w-16 h-16 bg-gray-900 "></div>
              <div className="w-16 h-16 bg-gray-900 "></div>
              <div className="w-16 h-16 bg-gray-900 "></div>
              <div className="w-16 h-16 bg-gray-900 "></div>
              <div className="w-16 h-16 bg-gray-900 "></div>
              <div className="w-16 h-16 bg-yellow-500"></div>
              <div className="w-16 h-16 bg-gray-900 "></div>
              <div className="w-16 h-16 bg-gray-900 "></div>
              <div className="w-16 h-16 bg-yellow-700 "></div>
              <div className="w-16 h-16 bg-yellow-500 "></div>
              <div className="w-16 h-16 bg-gray-900 "></div>
              <div className="w-16 h-16 bg-gray-900 "></div>
              <div className="w-16 h-16 bg-gray-900 "></div>
              <div className="w-16 h-16 bg-yellow-500 "></div>
              <div className="w-16 h-16 bg-yellow-700 "></div>
              <div className="w-16 h-16 bg-gray-900 "></div>
              <div className="w-16 h-16 bg-gray-900 "></div>
              <div className="w-16 h-16 bg-yellow-700 "></div>
              <div className="w-16 h-16 bg-yellow-500 "></div>
              <div className="w-16 h-16 bg-yellow-700 "></div>
              <div className="w-16 h-16 bg-yellow-500 "></div>
              <div className="w-16 h-16 bg-yellow-700 "></div>
              <div className="w-16 h-16 bg-yellow-500 "></div>
              <div className="w-16 h-16 bg-yellow-700 "></div>
              <div className="w-16 h-16 bg-gray-900 "></div>
              <div className="w-16 h-16 bg-gray-900 "></div>
              <div className="w-16 h-16 bg-yellow-500 "></div>
              <div className="w-16 h-16 bg-yellow-500 "></div>
              <div className="w-16 h-16 bg-yellow-500 "></div>
              <div className="w-16 h-16 bg-white "></div>
              <div className="w-16 h-16 bg-yellow-500 "></div>
              <div className="w-16 h-16 bg-yellow-500 "></div>
              <div className="w-16 h-16 bg-yellow-500 "></div>
              <div className="w-16 h-16 bg-gray-900 "></div>
              <div className="w-16 h-16 bg-gray-900 "></div>
              <div className="w-16 h-16 bg-yellow-500 r"></div>
              <div className="w-16 h-16 bg-gray-900 "></div>
              <div className="w-16 h-16 bg-white "></div>
              <div className="w-16 h-16 bg-white "></div>
              <div className="w-16 h-16 bg-white"></div>
              <div className="w-16 h-16 bg-gray-900 "></div>
              <div className="w-16 h-16 bg-yellow-500"></div>
              <div className="w-16 h-16 bg-gray-900 "></div>
              <div className="w-16 h-16 bg-gray-900 "></div>
              <div className="w-16 h-16 bg-yellow-500 "></div>
              <div className="w-16 h-16 bg-white "></div>
              <div className="w-16 h-16 bg-white "></div>
              <div className="w-16 h-16 bg-pink-400 "></div>
              <div className="w-16 h-16 bg-white "></div>
              <div className="w-16 h-16 bg-white "></div>
              <div className="w-16 h-16 bg-yellow-500 "></div>
              <div className="w-16 h-16 bg-gray-900 "></div>
              <div className="w-16 h-16 bg-gray-900 "></div>
              <div className="w-16 h-16 bg-gray-900 "></div>
              <div className="w-16 h-16 bg-white "></div>
              <div className="w-16 h-16 bg-white "></div>
              <div className="w-16 h-16 bg-white "></div>
              <div className="w-16 h-16 bg-white "></div>
              <div className="w-16 h-16 bg-white "></div>
              <div className="w-16 h-16 bg-gray-900 "></div>
              <div className="w-16 h-16 bg-gray-900 "></div>
              <div className="w-16 h-16 bg-gray-900 "></div>
              <div className="w-16 h-16 bg-gray-900 "></div>
              <div className="w-16 h-16 bg-gray-900 "></div>
              <div className="w-16 h-16 bg-gray-900 "></div>
              <div className="w-16 h-16 bg-gray-900 "></div>
              <div className="w-16 h-16 bg-gray-900 "></div>
              <div className="w-16 h-16 bg-gray-900 "></div>
              <div className="w-16 h-16 bg-gray-900 "></div>
              <div className="w-16 h-16 bg-gray-900 "></div>
            </div>
          </div>
        </div>
        <div className="flex flex-col min-h-screen space-x-4 items-start justify-center w-full">
          <Divider />
          <div className="flex flex-row space-x-8 p-6">
            {["Data", "Software"].map((label) => (
             <button
            key={label}
            onClick={() => setSelectedType(label as "Data" | "Software")}
            className={`relative rounded-full w-24 h-10 flex items-center justify-center hover:scale-105 transition duration-300
                        ${selectedType === label ? "bg-pink-500" : "bg-gray-900"}
                        transition`}>
                {/* Layer glow */}
                <div className="absolute inset-0 rounded-full shadow-[0_0_10px_#ff00ff,0_0_15px_#ff00ff]"></div>
                <span className="relative z-10 text-white font-medium">
                  {label}
                </span>
              </button>
            ))}
          </div>
          <Projects type={selectedType}/>
        </div>
        <div className="flex min-h-screen items-center justify-center bg-amber-600"></div>
      </main>
    </div>
  );
}
