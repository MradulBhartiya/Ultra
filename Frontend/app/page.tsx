import ModelViewer3D from "./components/ModelViewer3D";

export default function Home() {
  return (
    <div className="grid grid-cols-3 gap-6">
      {/* Left side - Camera + Output */}
      <div className="col-span-2 space-y-6">
        <div className="bg-gray-100 rounded-xl h-[350px] flex items-center justify-center">
          <p>Camera Input Placeholder</p>
        </div>

        <div className="bg-gray-100 rounded-xl h-[250px] flex items-center justify-center">
          <p>Output Stickman Placeholder</p>
        </div>
      </div>

      {/* Right side - 3D Model */}
      <div className="bg-gray-50 rounded-xl h-[600px] p-4">
        <ModelViewer3D activeMuscles={[]} />
      </div>
    </div>
  );
}
