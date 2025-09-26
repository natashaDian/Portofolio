"use client";
import { useEffect, useState } from "react";

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


  return (
    <div className="flex flex-row space-x-8 p-6">
      {/* Data */}
      <div className="flex flex-col space-y-4">
        <h2 className="text-pink-400 font-bold mb-2 drop-shadow-[0_0_6px_#ff00ff]">
          {type} Projects
        </h2>
        {filteredProjects.map((p) => (
          <a
            key={p.namaprojek}
            href={p.link}
            target="_blank"
            rel="noopener noreferrer"
            className="relative w-64 rounded-xl bg-pink-500 p-4 shadow-[0_0_10px_#ff00ff,0_0_20px_#ff00ff] hover:scale-105 transition-transform"
          >
            <h3 className="text-white font-semibold text-lg">{p.namaprojek}</h3>
            <p className="text-gray-100 text-sm">{p.deskripsi}</p>
            <span className="text-xs text-gray-200 italic">Status: {p.status}</span>
          </a>
        ))}
      </div>
    </div>
  );
}