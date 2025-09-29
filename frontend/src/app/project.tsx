"use client";
import { useEffect, useState } from "react";
import "animate.css";

type ProjectsProps = {
  type: "Data" | "Software";
};

type Project= {
  namaprojek: string;
  deskripsi: string;
  type: "Data" | "Software";
  status: string;
  link: string;
  startingAt: Date;
}


export default function Projects({type}: ProjectsProps) {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    fetch("http://localhost:5050/projects") // port backend
      .then((res) => res.json())
      .then((data) =>
        setProjects(
          data.sort(
            (a: Project, b: Project) =>
              new Date(b.startingAt).getTime() - new Date(a.startingAt).getTime()
          )
        )
      );
  }, []);

  const filteredProjects = projects.filter((p) => p.type === type);

  const formatdate = (date: Date) => {
    return new Date(date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long"
    });
  };


  return (
    <div className="flex flex-row space-x-8 p-6">
      {/* Data */}
      <div className="flex flex-col space-y-4">
        <div>
            <h2 className="text-pink-400 font-bold mb-2 drop-shadow-[0_0_6px_#ff00ff]">
          {type} Projects
        </h2>
        </div>
        <div className=" flex flex-col space-y-4">
            {filteredProjects.map((p) => (
              <a
                key={p.namaprojek}
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                className="relative w-full rounded-xl bg-gray-900 p-4 shadow-[0_0_05px_#ff00ff,0_0_05px_#ff00ff] hover:scale-101 transition-transform duration-300 animate__animated animate__fadeInLeft"
              >
                <div className=" flex flex-row space-x-4 items-center">
                    <h3 className="text-white font-semibold text-lg">{p.namaprojek}</h3>
                    {/* butuh switch status: complete green, on progress yellow*/}
                    <span className="text-xs text-white italic px-2 w-20 rounded-full h-4 bg-gray-900 shadow-[0_0_5px_theme('colors.green.500'),0_0_5px_theme('colors.green.500')]">{p.status}</span>
                </div>

                <p className="text-gray-100 text-sm">{formatdate(p.startingAt)}</p>
                <p className="text-gray-100 text-sm">{p.deskripsi}</p>

                <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-50 text-sm underline hover:text-pink-400"
                > click here to see my project!</a>
              </a>
            ))}
        </div>
      </div>
    </div>
  );
}