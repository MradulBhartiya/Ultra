import "./globals.css";
import Navbar from "./components/Navbar";

export const metadata = {
  title: "Exercise Analyzer",
  description: "AI powered exercise form correction",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-black">
        <Navbar />
        <main className="px-8 py-6">{children}</main>
      </body>
    </html>
  );
}
