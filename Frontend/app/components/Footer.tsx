"use client";

export default function Footer() {
  return (
    <footer className="w-full mt-8 text-black">
      <div className="
        w-full rounded-xl
        bg-white/10 backdrop-blur-md border border-white/20
        shadow-[0_8px_25px_rgba(0,0,0,0.15)]
        px-6 py-4
        flex flex-col md:flex-row justify-between
      ">
        
        {/* Left Section */}
        <div className="text-center md:text-left">
          <h2 className="font-semibold text-lg">Exercise Analyzer</h2>
          <p className="text-sm opacity-80">
            © {new Date().getFullYear()} All Rights Reserved
          </p>
        </div>

        {/* Middle Section */}
        <div className="flex gap-6 mt-3 md:mt-0">
          <a href="#" className="hover:underline opacity-90">Developer</a>
          <a href="#" className="hover:underline opacity-90">Documentation</a>
          <a href="#" className="hover:underline opacity-90">Feedback</a>
        </div>

        {/* Right Section */}
        <div className="mt-3 md:mt-0 flex flex-col gap-2">
            <h1 className="text-lg text-black">Made with ❤️ by :- </h1>
            <div className="flex flex-col gap-2">
                <div className="flex gap-4 justify-between items-center hover:bg-[#9C9C9C] rounded-2xl p-3">
                    <img src="./Vercel.svg" className="h-10 w-10 bg-black rounded-[50%] p-2"/>
                    <h1 className="text-black">MRADUL BHARTIYA</h1>
                </div>
                <div className="flex gap-4 justify-between items-center hover:bg-[#9C9C9C] rounded-2xl p-3">
                    <img src="./Vercel.svg" className="h-10 w-10 bg-black rounded-[50%] p-2"/>
                    <h1 className="text-black">MOKSH KASTURE</h1>
                </div>
            </div>
        </div>
      </div>
    </footer>
  );
}
