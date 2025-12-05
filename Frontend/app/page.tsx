import Campage from "./components/Campage";
import ModelViewer3D from "./components/ModelViewer3D";
import Navbar from "./components/Navbar";
import Image from "next/image"; // optional if using next/image

export default function Home() {
  return (
    // root must define full viewport height
    <div className="min-h-screen flex flex-col bg-[url('/Background.png')] bg-cover bg-center">
      {/* Navbar: give a fixed height and prevent it from flexing */}
      <header className="flex-none h-16">
        <Navbar />
      </header>

      {/* Main area: fill remaining space; min-h-0 lets children use flex height */}
      <main className="flex-1 flex gap-4 p-4 min-h-0">
        {/* LEFT: 70% column - ensure min-h-0 so inner flex children can stretch */}
        <section className="w-full flex flex-col gap-4 min-h-0">
          <div className="flex gap-4 p-4 h-[60%] w-full">
            {/* <div className="grow bg-white/10 border rounded-xl flex items-center justify-center min-h-[220px]">
              
            </div> */}
            <Campage/>
            <div className="grow bg-white/6 border rounded-xl flex items-center justify-center min-h-[220px]">
              <p>Stick man</p>
            </div>
          </div>

          <div className="flex gap-4 p-4 min-h-0">
            <div className="grow bg-white/8 border rounded-xl flex items-center justify-center min-h-[220px]">
              <p>Output Stickman Placeholder</p>
            </div>

            <div className="h-[200px] w-[200px] rounded-full bg-white/8 border flex items-center justify-center">
              <p>Output Stickman Placeholder</p>
            </div>
          </div>
        </section>

        {/* RIGHT: targeted muscle - full height */}
        <aside className="w-[30%] flex flex-col gap-4 min-h-0">
          <div className="rounded-xl bg-linear-to-tr from-white/6 to-white/4 backdrop-blur-sm bg-[#9C9C9C] flex flex-col h-full">
            <div className="text-center font-semibold pb-2 text-white">Targeted Muscle</div>

            {/* This wrapper must be flex-1 + min-h-0 so the ModelViewer can fill it */}
            <div className="flex-1 min-h-0 rounded-lg overflow-hidden">
              <ModelViewer3D activeMuscles={[]} />
            </div>
          </div>
        </aside>
      </main>
    </div>
  );
}