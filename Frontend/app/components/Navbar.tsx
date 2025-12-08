"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useAuth } from "../context/AuthContext";
import { supabase } from "../../Database/supabase-client";

type NavbarProps = {
  username?: string; // optional prop, but we'll override from Supabase if logged in
};

export default function Navbar({ username: propUsername }: NavbarProps) {
  const pathname = usePathname();
  const router = useRouter();
  const { isLoggedin, setIsLoggedin } = useAuth();

  const [displayName, setDisplayName] = useState<string | null>(
    propUsername ?? null
  );

  // 🔹 Mobile menu open/close state
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const fetchUser = async () => {
      if (!isLoggedin) {
        setDisplayName(null);
        return;
      }

      const {
        data: { user },
        error: userError,
      } = await supabase.auth.getUser();

      if (userError || !user) {
        console.log("No user or error fetching user:", userError);
        setDisplayName(null);
        return;
      }

      const fullName =
        (user.user_metadata as any)?.full_name ??
        user.email?.split("@")[0] ??
        "User";

      setDisplayName(fullName);
    };

    fetchUser();
  }, [isLoggedin]);

  // 🔹 Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  const linkClasses = (path: string) =>
    `group relative px-4 py-1.5 text-xs md:text-sm font-medium rounded-full transition-all duration-200 cursor-pointer hover:scale-110 ${
      pathname === path
        ? "bg-black text-white shadow-lg"
        : "text-gray-700 hover:bg-gray-100"
    }`;

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setIsLoggedin(false);
    setDisplayName(null);
    router.push("/");
  };

  const handleNavClick = (path: string) => {
    router.push(path);
  };

  return (
    <>
      <nav className="sticky top-0 w-full z-30 flex items-center justify-between px-8 pt-4 pb-3 bg-transparent">
        {/* Left: Brand */}
        <div className="flex items-center gap-2">
          <h1 className="text-2xl md:text-3xl font-semibold tracking-tight text-gray-900">
            Posture<span className="text-blue-600">IQ</span>
          </h1>
          <img
            src="/Brand Logo.png"
            alt="PostureIQ logo"
            className="h-10 w-10 object-contain drop-shadow-sm"
          />
        </div>

        {/* Center Nav (Desktop / Tablet) */}
        <div
          className="hidden sm:flex items-center gap-1 bg-white/80 backdrop-blur-xl rounded-full 
                    shadow-lg shadow-gray-400/40 border border-white/70 px-3 py-1.5 absolute 
                    left-1/2 -translate-x-1/2"
        >
          <a href="/workouts" className={linkClasses("/workouts")}>
            Workouts
          </a>
          <a href="/history" className={linkClasses("/history")}>
            History
          </a>
          <a href="/" className={linkClasses("/")}>
            Home
          </a>
          <a href="/Dashboard" className={linkClasses("/Dashboard")}>
            Dashboard
          </a>
          <a href="/feedback" className={linkClasses("/feedback")}>
            Feedback
          </a>
        </div>

        {/* Right Section (Desktop / Tablet) */}
        <div className="hidden sm:flex items-center gap-2">
          {isLoggedin ? (
            <>
              <span className="text-sm font-semibold text-gray-800">
                Welcome,{" "}
                <span className="text-blue-600">
                  {displayName || "User"}
                </span>
              </span>

              <button
                onClick={handleLogout}
                className="px-4 py-1.5 rounded-full text-xs md:text-sm font-medium bg-red-600 text-white 
                           shadow-md hover:bg-red-700 active:scale-95 transition"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <a
                href="/Login"
                className={`px-4 py-1.5 text-xs md:text-sm font-medium rounded-full transition-all duration-200 ${
                  pathname === "/Login"
                    ? "bg-black text-white shadow-lg"
                    : "text-gray-700 bg-white/80 hover:bg-gray-200"
                }`}
              >
                Login
              </a>

              <a
                href="/Signup"
                className="px-4 py-1.5 text-xs md:text-sm font-semibold rounded-full 
                           bg-linear-to-r from-blue-600 to-indigo-600 text-white shadow-md
                           transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0.5"
              >
                Sign Up
              </a>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="sm:hidden">
          <button
            type="button"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="flex items-center gap-2 rounded-full bg-white/80 backdrop-blur-md px-3 py-1 text-xs shadow-md text-gray-700 active:scale-95 transition"
          >
            <span>{isMenuOpen ? "Close" : "Menu"}</span>
            <span className="inline-block">
              {/* simple hamburger / X icon effect */}
              {isMenuOpen ? "✕" : "☰"}
            </span>
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown Panel */}
      {isMenuOpen && (
        <div className="sm:hidden fixed top-16 inset-x-0 z-20 px-4">
          <div className="rounded-2xl bg-white/90 backdrop-blur-xl shadow-2xl shadow-gray-400/60 border border-gray-200 py-3">
            {/* Nav links */}
            <div className="flex flex-col gap-1 px-2">
              <button
                onClick={() => handleNavClick("/")}
                className={`w-full text-left px-3 py-2 rounded-xl text-sm font-medium ${
                  pathname === "/"
                    ? "bg-black text-white"
                    : "text-gray-800 hover:bg-gray-100"
                }`}
              >
                Home
              </button>
              <button
                onClick={() => handleNavClick("/workouts")}
                className={`w-full text-left px-3 py-2 rounded-xl text-sm font-medium ${
                  pathname === "/workouts"
                    ? "bg-black text-white"
                    : "text-gray-800 hover:bg-gray-100"
                }`}
              >
                Workouts
              </button>
              <button
                onClick={() => handleNavClick("/history")}
                className={`w-full text-left px-3 py-2 rounded-xl text-sm font-medium ${
                  pathname === "/history"
                    ? "bg-black text-white"
                    : "text-gray-800 hover:bg-gray-100"
                }`}
              >
                History
              </button>
              <button
                onClick={() => handleNavClick("/Dashboard")}
                className={`w-full text-left px-3 py-2 rounded-xl text-sm font-medium ${
                  pathname === "/Dashboard"
                    ? "bg-black text-white"
                    : "text-gray-800 hover:bg-gray-100"
                }`}
              >
                Dashboard
              </button>
              <button
                onClick={() => handleNavClick("/feedback")}
                className={`w-full text-left px-3 py-2 rounded-xl text-sm font-medium ${
                  pathname === "/feedback"
                    ? "bg-black text-white"
                    : "text-gray-800 hover:bg-gray-100"
                }`}
              >
                Feedback
              </button>
            </div>

            {/* Divider */}
            <div className="my-2 h-px bg-gray-200" />

            {/* Auth area */}
            <div className="px-3 flex flex-col gap-2">
              {isLoggedin ? (
                <>
                  <span className="text-xs text-gray-700">
                    Logged in as{" "}
                    <span className="font-semibold text-blue-600">
                      {displayName || "User"}
                    </span>
                  </span>
                  <button
                    onClick={handleLogout}
                    className="w-full px-3 py-2 rounded-xl text-sm font-medium bg-red-600 text-white shadow hover:bg-red-700 active:scale-95 transition"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <button
                    onClick={() => handleNavClick("/Login")}
                    className="w-full px-3 py-2 rounded-xl text-sm font-medium bg-gray-900 text-white shadow hover:bg-black/90 active:scale-95 transition"
                  >
                    Login
                  </button>
                  <button
                    onClick={() => handleNavClick("/Signup")}
                    className="w-full px-3 py-2 rounded-xl text-sm font-semibold bg-linear-to-r from-blue-600 to-indigo-600 text-white shadow hover:shadow-lg active:scale-95 transition"
                  >
                    Sign Up
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}