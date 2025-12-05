export default function Navbar() {
  return (
    <nav className="flex justify-between h-[50px] p-2 pr-[35%]">
      <div className="flex justify-center items-center">
        <h1 className="text-xl font-semibold text-black">Exercise Analyzer</h1>
      </div>
      <div className="flex gap-2 bg-white rounded-3xl px-4 py-2 shadow-lg shadow-gray-500 justify-between items-center">
        <a className="hover:bg-gray-200 px-3 py-1 rounded-3xl">Exercises</a>
        <a className="hover:bg-gray-200 px-3 py-1 rounded-3xl">History</a>
        <a className="hover:bg-gray-200 px-3 py-1 rounded-3xl">Login</a>
        <a className="hover:bg-gray-200 px-3 py-1 rounded-3xl">Developer</a>
        <a className="hover:bg-gray-200 px-3 py-1 rounded-3xl">Feedback</a>
      </div>
    </nav>
  );
}