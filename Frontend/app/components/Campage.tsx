import type { Dispatch, SetStateAction } from "react";

export default function Campage({ setIsLiveCam ,isLiveCam}: { setIsLiveCam: Dispatch<SetStateAction<boolean>>,isLiveCam:boolean }) {
  return (
    <div className="h-full w-[50%] rounded-2xl flex justify-center items-center bg-gray-100/40 shadow-2xl shadow-gray-500">
      <div className="text-black flex flex-col items-center gap-6">
        <h1 className="text-2xl font-semibold tracking-wide">
          Live cam or Upload a video?
        </h1>

        <div className="flex gap-6">

            {isLiveCam?<button
                onClick={() => setIsLiveCam(false)}
                className="flex items-center gap-2 px-5 py-2 bg-white text-red-600 rounded-xl shadow-lg shadow-gray-500 transition cursor-pointer active:scale-95"
                >
                <span className="stop-btn dot w-3 h-3 rounded-full bg-red-600"></span>
                <p className="font-medium">Stop Live</p>
                </button>
                :
                <button
                    type="button"
                    onClick={() => {
                    setIsLiveCam(true);
                    }}
                    className="px-8 py-2 bg-blue-600 text-white shadow-lg shadow-gray-500 rounded-xl hover:bg-blue-700 transition"
                    >
                    Live Cam
                </button>
            }

          <button
            type="button"
            // onClick={() => {
            // }}
            className="px-9 py-2 bg-green-600 text-white rounded-xl shadow-lg shadow-gray-500 hover:bg-green-700 transition"
          >
            Upload
          </button>
        </div>
      </div>
    </div>
  );
}
