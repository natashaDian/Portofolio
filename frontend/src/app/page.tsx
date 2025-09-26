"use client";
import { useState } from "react";
import SideNavbar from "../../public/components/sideNavbar";
import Divider  from "../../public/components/divider";
import Projects from "./project";

export default function Home() {
  const [selectedType, setSelectedType] = useState<"Data" | "Software" >("Data");
  return (
    <div className="flex bg-gray-900">
      <aside className="h-screen fixed left-0 top-0 ">
        <SideNavbar />
      </aside>
        
      <main className="flex flex-col ml-24 space-y-4 my-4 w-full  ">
        <div className="flex flex-row  min-h-screen items-center justify-between">
          <div className="flex flex-col flex-1 w-170 min-h-screen justify-center items-start">
            <h2 className="mx-24 my-4 text-white rounded-full">Data Engineer | Software Engineer</h2>
            <h1 className="mx-24 font-semibold text-4xl text-pink-300 drop-shadow-[0_0_10px_#ff00ff]">Natasha Dian Mahardita</h1>
            <h2 className="mx-24 my-4 text-white pt-2">An undergraduate Computer Science student passionate about building data-driven solutions and software applications. Interested in building efficient systems and solving real-world problems through technology. Let&apos;s connect with me!</h2>
          </div>
          <div className="flex flex-1 bg-amber-50 w-170 min-h-screen justify-start items-center">
          </div>
        </div>
        <div className="flex flex-col min-h-screen space-x-4 items-start justify-center w-full">
          <Divider />
          <div className="flex flex-row space-x-8 p-6">
            {["Data", "Software"].map((label) => (
             <button
            key={label}
            onClick={() => setSelectedType(label as "Data" | "Software")}
            className={`relative rounded-full w-24 h-12 flex items-center justify-center 
                        ${selectedType === label ? "bg-pink-500" : "bg-gray-700"}
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
