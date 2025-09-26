import Image from "next/image";
import SideNavbar from "../../public/components/sideNavbar";

export default function Home() {
  return (
    <div className="flex bg-gray-900">
      <aside className="h-screen fixed left-0 top-0 ">
        <SideNavbar />
      </aside>
        
      <main className="flex flex-col ml-24 space-y-4 my-4 w-full  ">
        <div className="flex flex-row  min-h-screen items-center justify-between">
          <div className="flex flex-col flex-1 w-170 min-h-screen justify-center items-start">
            <h2 className="mx-24 text-white">Data Engineer | Software Engineer</h2>
            <h1 className="mx-24 text-4xl text-pink-700 text-shadow-pink-300">Natasha Dian Mahardita</h1>
            <h2 className="mx-24 text-white mt-2 pt-2">An undergraduate Computer Science student passionate about building data-driven solutions and software applications. Interested in building efficient systems and solving real-world problems through technology. Let's connect with me!</h2>
          </div>
          <div className="flex flex-1 bg-amber-50 w-170 min-h-screen justify-start items-center">
          </div>
        </div>
        <div className="flex min-h-screen items-center justify-center bg-amber-600"></div>
        <div className="flex min-h-screen items-center justify-center bg-amber-600"></div>
      </main>
    </div>
  );
}
