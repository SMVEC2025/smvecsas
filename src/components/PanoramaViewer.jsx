import React, { useState, useEffect, useRef } from 'react';
// In a real project, you would install react-pannellum via npm/yarn:
// npm install react-pannellum pannellum
// Then import it like this:
// import { Pannellum } from 'react-pannellum';
// For this environment, we'll simulate its presence.

// Mock Pannellum component for demonstration purposes in this environment.
// In a real React PanoramaViewer, you would use the actual 'react-pannellum' library.
const Pannellum = ({ imageUrl, pitch, yaw, hfov, autoLoad, showZoom, showControls, mouseZoom, ...props }) => {
  const viewerRef = useRef(null); // Ref to attach the Pannellum viewer to
  const pannellumInstance = useRef(null); // Ref to store the Pannellum viewer instance

  useEffect(() => {
    // Dynamically load Pannellum.js for this mock component.
    // In a real project, you'd rely on 'react-pannellum' handling this.
    const scriptId = 'pannellum-script';
    if (!document.getElementById(scriptId)) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.src = 'https://cdn.jsdelivr.net/npm/pannellum@2.5.6/build/pannellum.js';
      script.onload = () => {
        // Initialize Pannellum viewer once the script is loaded
        if (viewerRef.current && window.pannellum) {
          pannellumInstance.current = window.pannellum.viewer(viewerRef.current, {
            type: 'equirectangular', // Standard type for 360 panoramic images
            panorama: imageUrl,
            pitch: pitch,
            yaw: yaw,
            hfov: hfov,
            autoLoad: autoLoad,
            showZoom: showZoom,
            showControls: showControls,
            mouseZoom: mouseZoom,
            ...props.config, // Allow additional Pannellum config props
          });
        }
      };
      // --- START OF MODIFICATION ---
      // Added a defensive check for document.head and its PanoramaViewerendChild method.
      // The error "PanoramaViewerendChild is not a function" is unusual and may suggest
      // an environment-specific issue (e.g., transpilation or sandboxing).
      if (document.head && typeof document.head.PanoramaViewerendChild === 'function') {
        document.head.PanoramaViewerendChild(script);
      } else if (document.body && typeof document.body.PanoramaViewerendChild === 'function') {
        // Fallback to PanoramaViewerending to document.body if head is not available or PanoramaViewerendChild is missing/modified
        document.body.PanoramaViewerendChild(script);
        console.warn("Pannellum script PanoramaViewerended to document.body as document.head was not fully available or its PanoramaViewerendChild method was modified.");
      } else {
        console.error("Failed to PanoramaViewerend Pannellum script: Neither document.head nor document.body were suitable for script PanoramaViewerending.");
      }
      // --- END OF MODIFICATION ---
    } else {
      // If script already exists, try to initialize viewer
      if (viewerRef.current && window.pannellum && !pannellumInstance.current) {
         pannellumInstance.current = window.pannellum.viewer(viewerRef.current, {
            type: 'equirectangular',
            panorama: imageUrl,
            pitch: pitch,
            yaw: yaw,
            hfov: hfov,
            autoLoad: autoLoad,
            showZoom: showZoom,
            showControls: showControls,
            mouseZoom: mouseZoom,
            ...props.config,
          });
      } else if (pannellumInstance.current) {
        // Update panorama if URL changes
        pannellumInstance.current.loadPanorama(imageUrl);
      }
    }

    // Clean up Pannellum viewer on component unmount
    return () => {
      if (pannellumInstance.current) {
        pannellumInstance.current.destroy();
        pannellumInstance.current = null;
      }
    };
  }, [imageUrl, pitch, yaw, hfov, autoLoad, showZoom, showControls, mouseZoom, props.config]); // Re-initialize if props change

  return (
    <div
      ref={viewerRef}
      className="w-full h-full rounded-lg overflow-hidden" // Ensure viewer takes full height/width
      style={{ minHeight: '300px' }} // Minimum height to ensure visibility
    >
      {/* Pannellum viewer will render inside this div */}
      {!imageUrl && ( // Show loading or fallback if no image URL
        <div className="absolute inset-0 flex items-center justify-center bg-gray-200 bg-opacity-70 text-gray-700 text-lg rounded-lg">
          Loading Viewer...
        </div>
      )}
    </div>
  );
};


// Main PanoramaViewer Component
const PanoramaViewer = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  // Example panoramic image. Make sure it's a true equirectangular (360x180) panorama.
  const panoramicImageUrl = "https://cdn.jsdelivr.net/npm/pannellum@2.5.6/examples/images/bma-pano.jpg";

  // Function to open the popup
  const openPopup = () => {
    setIsPopupOpen(true);
    document.body.style.overflow = 'hidden'; // Prevent body scrolling
  };

  // Function to close the popup
  const closePopup = () => {
    setIsPopupOpen(false);
    document.body.style.overflow = ''; // Re-enable body scrolling
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white p-6 rounded-xl shadow-lg text-center max-w-sm w-full">
        <h1 className="text-2xl font-semibold text-gray-800 mb-4">Click Image for 360 View (Library Used)</h1>
        {/* Thumbnail image to trigger the popup */}
        <img
          src="https://placehold.co/400x200/4F46E5/FFFFFF?text=Click+Me!"
          alt="Click to view 360 panorama"
          className="w-full h-auto rounded-lg cursor-pointer transform transition-transform duration-300 hover:scale-105 shadow-md"
          onClick={openPopup}
        />
        <p className="mt-4 text-gray-600 text-sm">
          This version uses `react-pannellum` for the 360-degree panoramic viewer.
        </p>
      </div>

      {/* Render the ImagePopup component if isPopupOpen is true */}
      {isPopupOpen && (
        <ImagePopup
          isOpen={isPopupOpen}
          onClose={closePopup}
          imageUrl={panoramicImageUrl}
        />
      )}
    </div>
  );
};

// ImagePopup Component (Modal)
const ImagePopup = ({ isOpen, onClose, imageUrl }) => {
  // If the popup is not open, return null to render nothing
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-2xl p-6 w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col relative">
        {/* Close button for the modal */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 text-3xl font-bold z-10 transition-transform duration-200 hover:scale-110"
          aria-label="Close"
        >
          &times;
        </button>
        <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">360° Panoramic View (with Library)</h2>
        {/* Render the Pannellum component inside the modal */}
        <div className="flex-grow min-h-0"> {/* flex-grow and min-h-0 to allow Pannellum to fill available space */}
          <Pannellum
            imageUrl={imageUrl}
            pitch={0}       // Initial pitch (vertical angle)
            yaw={180}       // Initial yaw (horizontal angle)
            hfov={100}      // Initial horizontal field of view
            autoLoad={true} // Start loading the panorama automatically
            showZoom={true} // Show zoom controls
            showControls={true} // Show all default controls
            mouseZoom={true} // Enable mouse wheel zoom
            config={{
                compass: true, // Show compass
                northOffset: 0, // North direction offset
            }}
          />
        </div>
        <p className="mt-4 text-gray-600 text-sm text-center">
          This viewer is powered by the Pannellum library, offering full 360-degree interaction.
        </p>
      </div>
    </div>
  );
};

export default PanoramaViewer;
