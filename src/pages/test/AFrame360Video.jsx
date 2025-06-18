import React, { useEffect, useRef, useState } from 'react';
import 'aframe'; // Import the A-Frame library

const AFrame360Video = ({ videoSrc }) => {
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isMuted, setIsMuted] = useState(true); // Start muted due to browser policies

    const togglePlay = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
                setIsMuted(false); // Unmute when user explicitly plays
            }
            setIsPlaying(!isPlaying);
        }
    };

    const toggleMute = () => {
        if (videoRef.current) {
            videoRef.current.muted = !isMuted;
            setIsMuted(!isMuted);
        }
    };

    // Ensure video state is synchronized with A-Frame's internal video element
    useEffect(() => {
        const handleVideoLoaded = () => {
            if (videoRef.current) {
                // Set initial state based on video element properties
                setIsPlaying(!videoRef.current.paused);
                setIsMuted(videoRef.current.muted);
            }
        };

        // If the component is mounted, add event listener for loadeddata
        if (videoRef.current) {
            videoRef.current.addEventListener('loadeddata', handleVideoLoaded);
        }

        // Cleanup function for event listener
        return () => {
            if (videoRef.current) {
                videoRef.current.removeEventListener('loadeddata', handleVideoLoaded);
            }
        };
    }, []); // Run once on mount

    return (
        <div style={{ position: 'relative', width: '100%', height: '100vh', overflow: 'hidden' }}>
            {/* A-Frame Scene */}
            <a-scene
                embedded // Embeds the scene directly into the page, allowing other HTML elements
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
            >
                {/* Assets preloader */}
                <a-assets>
                    <video
                        id="my360video"
                        ref={videoRef} // Reference to the actual video element
                        src={videoSrc}
                        loop={true}
                        autoPlay={true} // A-Frame tries to autoplay, but browser policies might prevent it
                        muted={true} // Start muted to comply with browser autoplay policies
                        playsInline={true} // Important for iOS
                        crossOrigin="anonymous" // Needed if video is on a different domain
                    ></video>
                </a-assets>

                {/* The 360 video sphere */}
                <a-videosphere src="#my360video"></a-videosphere>

                {/* Camera - A-Frame provides a default, but explicit often gives more control */}
                <a-camera></a-camera>
            </a-scene>

            {/* Overlay for Play/Mute controls and instructions */}
            <div
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    background: isPlaying ? 'transparent' : 'rgba(0, 0, 0, 0.7)',
                    color: 'white',
                    fontFamily: 'Arial, sans-serif',
                    transition: 'background 0.5s ease',
                    zIndex: 100, // Ensure controls are above the A-Frame scene
                    pointerEvents: isPlaying ? 'none' : 'auto' // Disable pointer events when playing
                }}
            >
                {!isPlaying && (
                    <>
                        <h2>Click to Enter Immersive Experience</h2>
                        <button
                            onClick={togglePlay}
                            style={{
                                padding: '15px 30px',
                                fontSize: '1.2em',
                                backgroundColor: '#007bff',
                                color: 'white',
                                border: 'none',
                                borderRadius: '5px',
                                cursor: 'pointer',
                                marginTop: '20px',
                                pointerEvents: 'auto'
                            }}
                        >
                            Play 360 Video
                        </button>
                    </>
                )}

                {isPlaying && ( // Show mute button only when playing
                    <button
                        onClick={toggleMute}
                        style={{
                            position: 'absolute',
                            bottom: '20px',
                            right: '20px',
                            padding: '10px 15px',
                            backgroundColor: 'rgba(0, 0, 0, 0.5)',
                            color: 'white',
                            border: 'none',
                            borderRadius: '5px',
                            cursor: 'pointer',
                            zIndex: 101, // Above the overlay
                            pointerEvents: 'auto' // Allow interaction
                        }}
                    >
                        {isMuted ? 'Unmute' : 'Mute'}
                    </button>
                )}
            </div>
        </div>
    );
};

export default AFrame360Video;