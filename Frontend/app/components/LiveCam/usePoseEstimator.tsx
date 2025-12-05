import { useEffect, useRef } from "react";
import {
  PoseLandmarker,
  FilesetResolver,
} from "@mediapipe/tasks-vision";

export function usePoseEstimator(videoRef: any, canvasRef: any) {
  const landmarkerRef = useRef<any>(null);

  useEffect(() => {
    const init = async () => {
      const vision = await FilesetResolver.forVisionTasks(
        "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.0/wasm"
      );

      landmarkerRef.current = await PoseLandmarker.createFromOptions(vision, {
        baseOptions: {
          modelAssetPath:
            "https://storage.googleapis.com/mediapipe-models/pose_landmarker/pose_landmarker_lite/float16/1/pose_landmarker_lite.task",
        },
        runningMode: "VIDEO",
        numPoses: 1,
      });
    };

    init();
  }, []);

  const detectPose = async () => {
    if (!landmarkerRef.current || !videoRef.current) return;

    const results = await landmarkerRef.current.detectForVideo(
      videoRef.current,
      performance.now()
    );

    return results;
  };

  return { detectPose };
}
