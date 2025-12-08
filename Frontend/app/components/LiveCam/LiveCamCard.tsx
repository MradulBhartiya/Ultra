"use client";

import { useEffect, useRef, useState } from "react";
import { usePoseEstimator } from "./usePoseEstimator";
import { renderPose } from "./PoseCanvas";

export default function LiveCamCard() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { detectPose } = usePoseEstimator(videoRef, canvasRef);

  const [isRunning, setIsRunning] = useState(false);

  const startCamera = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({
      video: true,
    });

    const video = videoRef.current;
    if (!video) return;

    video.srcObject = stream;

    video.onloadeddata = () => {
      video.play();
      setIsRunning(true);
    };
  };

  useEffect(() => {
    if (!isRunning) return;

    const loop = async () => {
      const video = videoRef.current;
      if (!video || video.videoWidth === 0) {
        requestAnimationFrame(loop);
        return;
      }

      const results = await detectPose();

      if (results && canvasRef.current) {
        renderPose(canvasRef.current, results);
      }

      requestAnimationFrame(loop);
    };

    loop();
  }, [isRunning]);

  useEffect(() => {
    startCamera();
  }, []);

  return (
    <div className="w-full h-full flex items-center bg-gray-100/20 rounded-2xl justify-center">
      <video ref={videoRef} className="hidden" />

      <canvas
        ref={canvasRef}
        width={640}
        height={480}
        className="w-full h-auto max-h-full object-contain border border-gray-300 rounded-xl"
      />
    </div>
  );
}


