// PoseCanvas.tsx


// Pose skeleton connections (same as Mediapipe)
export const POSE_CONNECTIONS = [
    [0, 1], [1, 2], [2, 3], [3, 7],
    [0, 4], [4, 5], [5, 6], [6, 8],
    [9, 10],
    [11, 12], [11, 13], [13, 15],
    [12, 14], [14, 16],
    [15, 17], [16, 18],
    [11, 23], [12, 24],
    [23, 24], [23, 25], [24, 26],
    [25, 27], [26, 28],
    [27, 29], [28, 30],
    [29, 31], [30, 32],
  ];
  
  export const renderPose = (canvas: HTMLCanvasElement, results: any) => {
    if (!results?.landmarks?.length) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
  
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.lineWidth = 3;
    ctx.strokeStyle = "#00bfff";
    ctx.fillStyle = "#ff0000";
  
    const landmarks = results.landmarks[0];
  
    // Draw connections
    POSE_CONNECTIONS.forEach(([start, end]) => {
      const p1 = landmarks[start];
      const p2 = landmarks[end];
      if (!p1 || !p2) return;
  
      ctx.beginPath();
      ctx.moveTo(p1.x * canvas.width, p1.y * canvas.height);
      ctx.lineTo(p2.x * canvas.width, p2.y * canvas.height);
      ctx.stroke();
    });
  
    // Draw points
    landmarks.forEach((lm: any) => {
      ctx.beginPath();
      ctx.arc(lm.x * canvas.width, lm.y * canvas.height, 4, 0, 2 * Math.PI);
      ctx.fill();
    });
  };
  