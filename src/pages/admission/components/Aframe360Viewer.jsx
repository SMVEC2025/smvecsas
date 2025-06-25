import React, { useEffect } from "react";

const Aframe360Viewer = () => {
  useEffect(() => {
    const interval = setInterval(() => {
      const camera = document.querySelector('[camera]');
      if (camera) {
        camera.object3D.rotation.y += 0.0015; // smooth slow rotation
      }
    }, 16); // ~60 FPS

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ width: "90vw", height: "500px" }}>
      <a-scene
        embedded
        style={{ width: "100%", height: "100%" }}
      >
        <a-sky src="/360.jpg" rotation="0 -90 0"></a-sky>

        {/* Camera */}
        <a-entity
          camera
          position="0 1.6 0"
          look-controls-enabled="false"
          wasd-controls-enabled="false"
        ></a-entity>
      </a-scene>
    </div>
  );
};

export default Aframe360Viewer;
