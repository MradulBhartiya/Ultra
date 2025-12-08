"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/login", {
        method: "POST",
      });

      if (!res.ok) throw new Error("Login failed");

      router.push("/Dashboard");
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex flex-col bg-[url('/Background.png')] bg-cover bg-center">
      {/* center login card */}
      <main className="flex-1 flex items-center justify-center p-4">
        <div className="w-full max-w-3xl bg-white/80 backdrop-blur-md rounded-4xl shadow-2xl shadow-gray-400/60 border border-white/60 px-8 py-10 md:px-12 md:py-12 flex flex-col md:flex-row gap-10">
          {/* left side – title / description */}
          <div className="md:w-1/2 flex flex-col justify-center gap-4">
            <h1 className="text-3xl font-semibold text-gray-800">
              Exercise Analyzer
            </h1>
            <p className="text-sm text-gray-600 leading-relaxed">
              Login to access your{" "}
              <span className="font-semibold text-blue-600">
                workout analyzer dashboard
              </span>{" "}
              and track your form, accuracy and targeted muscles in real time.
            </p>

            {/* little “Accuracy pill” to match theme */}
            <div className="mt-4 inline-flex items-center gap-3">
              <div className="h-16 w-16 rounded-full bg-white shadow-md flex items-center justify-center border border-gray-300">
                <div className="text-center text-xs">
                  <div className="font-semibold text-gray-800">Avg</div>
                  <div className="text-green-500 font-bold text-sm">84%</div>
                </div>
              </div>
              <span className="text-xs text-gray-500">
                Sample accuracy from your previous workouts.
              </span>
            </div>
          </div>

          {/* right side – form */}
          <div className="md:w-1/2 flex flex-col justify-center">
            <h2 className="text-xl font-semibold text-gray-800 mb-1">
              Login
            </h2>
            <p className="text-sm text-gray-500 mb-5">
              Enter your credentials to continue.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-1">
                <label
                  htmlFor="email"
                  className="text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  className="w-full rounded-xl border border-gray-300 bg-white/80 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
                  placeholder="you@example.com"
                  autoComplete="email"
                />
              </div>

              <div className="space-y-1">
                <label
                  htmlFor="password"
                  className="text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  required
                  className="w-full rounded-xl border border-gray-300 bg-white/80 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
                  placeholder="••••••••"
                  autoComplete="current-password"
                />
              </div>

              {error && (
                <p className="text-xs text-red-500 mt-1">{error}</p>
              )}

              <button
                type="submit"
                disabled={loading}
                className="mt-3 w-full rounded-full bg-blue-600 text-white text-sm font-semibold py-2.5 shadow-md hover:bg-blue-700 disabled:opacity-60 disabled:cursor-not-allowed transition-transform hover:-translate-y-1px active:translate-y-1px"
              >
                {loading ? "Logging in..." : "Login"}
              </button>
            </form>

            <button
              type="button"
              onClick={() => router.push("/")}
              className="mt-4 text-xs text-gray-500 hover:text-gray-700 self-center"
            >
              ← Back to Home
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}