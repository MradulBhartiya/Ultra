export default function Navbar() {
  return (
    <nav className="flex justify-between h-[60px] p-2 pt-4 pr-[35%]">
      <div className="flex justify-center items-center">
        <h1 className="text-3xl font-semibold text-black">PostureIQ</h1>
        <img src="/Brand Logo.png" className="size-13"/>
      </div>
      <div className="flex gap-2 bg-white rounded-3xl px-4 py-2 shadow-lg shadow-gray-500 justify-between items-center">
        <a className="hover:bg-gray-200 px-3 py-1 rounded-3xl">Workouts</a>
        <a className="hover:bg-gray-200 px-3 py-1 rounded-3xl">History</a>
        <a className="hover:bg-gray-200 px-3 py-1 rounded-3xl" href="/login">Login</a>
        <a className="hover:bg-gray-200 px-3 py-1 rounded-3xl" href="/">Home</a>
        <a className="hover:bg-gray-200 px-3 py-1 rounded-3xl">Feedback</a>
      </div>
    </nav>
  );
}