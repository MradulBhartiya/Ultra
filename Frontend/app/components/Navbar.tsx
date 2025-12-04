export default function Navbar() {
    return (
      <nav className="w-full py-4 border-b flex justify-between">
        <h1 className="text-xl font-semibold">Exercise Analyzer</h1>
        <ul className="flex gap-6">
          <li>Exercises</li>
          <li>History</li>
          <li>Login</li>
          <li>Developer</li>
          <li>Feedback</li>
        </ul>
      </nav>
    );
  }
  