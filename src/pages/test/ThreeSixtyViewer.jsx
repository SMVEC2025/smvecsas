import React, { useRef, useEffect, useState, useContext } from 'react';
import 'aframe';
import { Scene, Entity } from 'aframe-react';
import { LuMoveLeft, LuMoveRight } from "react-icons/lu";
import { BsHeadsetVr } from "react-icons/bs";
import { IoMdHome } from "react-icons/io";
import VirtualTourHeader from '../../components/header/VirtualTourHeader';
import { TfiGallery } from "react-icons/tfi";
import PreLoader from './PreLoader'; // Assuming this is your existing PreLoader component
import { AppContext } from '../../context/AppContext';

const ThreeSixtyViewer = ({ imageUrl }) => {
    const { isVisible, setIsVisible } = useContext(AppContext);

    const sceneRef = useRef(null);
    const [isMobile, setIsMobile] = useState(false);
    const [inVRMode, setInVRMode] = useState(false);
    const [splitImage, setSplitImage] = useState(false);
    const [alive, setAlive] = useState(false);
    const [showSidebar, setShowSidebar] = useState(false);
    const [sidebarCategory, setSidebarCategory] = useState('campus');
    const [filteredImage, setFliteredImage] = useState([]);
    const [currentImage, setCurrentImage] = useState(null); // Initialize as null
    const [suggestingImage, setSuggestingImage] = useState([]);
    const [isLoadingImage, setIsLoadingImage] = useState(false); // New state for image loading

    useEffect(() => {
        // --- Mobile Detection ---
        const checkIfMobile = () => {
            const userAgent = navigator.userAgent || navigator.vendor || window.opera;
            setIsMobile(/android|iphone|ipad|ipod|blackberry|windows phone/i.test(userAgent));
        };

        checkIfMobile();
        window.addEventListener('resize', checkIfMobile);

        // --- A-Frame Event Listeners ---
        const sceneAFrameEl = sceneRef.current ? sceneRef.current.el : null;

        if (sceneAFrameEl) {

            const handleEnterVR = () => {
                setInVRMode(true);
            };

            const handleExitVR = () => {
                setInVRMode(false);
            };

            sceneAFrameEl.addEventListener('enter-vr', handleEnterVR);
            sceneAFrameEl.addEventListener('exit-vr', handleExitVR);

            return () => {
                window.removeEventListener('resize', checkIfMobile);
                if (sceneAFrameEl) {
                    sceneAFrameEl.removeEventListener('enter-vr', handleEnterVR);
                    sceneAFrameEl.removeEventListener('exit-vr', handleExitVR);
                }
            };
        } else {
        }

        return () => {
            window.removeEventListener('resize', checkIfMobile);
        };
    }, []);

    const handleEnterVRClick = () => {
        if (sceneRef.current && sceneRef.current.el && sceneRef.current.el.tagName === 'A-SCENE') {
            sceneRef.current.el.enterVR();
        } else {
            console.warn("Attempted to enter VR, but A-Frame scene DOM element is not available.");
        }
    };

    const handleExitVRClick = () => {
        if (sceneRef.current && sceneRef.current.el && sceneRef.current.el.tagName === 'A-SCENE') {
            sceneRef.current.el.exitVR();
        } else {
            console.warn("Attempted to exit VR, but A-Frame scene DOM element is not available.");
        }
    };

    const imageData = [
        { id: 1, name: 'SMVEC SAS', image: '/assets/img/360/new/artsentrance.jpg', thumb: '/assets/img/360/thumb/artsentrance.jpg', cat: 'campus' },
        { id: 2, name: 'Canteen', image: '/assets/img/360/new/canteen.jpg', thumb: '/assets/img/360/thumb/canteen.png', cat: 'facility' },
        { id: 3, name: 'Entrance 1', image: '/assets/img/360/new/entrance1.jpg', thumb: '/assets/img/360/thumb/entrance1.jpg', cat: 'campus' },
        { id: 4, name: 'Entrance 2', image: '/assets/img/360/new/entrance2.jpg', thumb: '/assets/img/360/thumb/entrance2.jpg', cat: 'campus' },
        { id: 5, name: 'Garden', image: '/assets/img/360/new/garden.jpg', thumb: '/assets/img/360/thumb/garden.jpg', cat: 'campus' },
        { id: 6, name: 'Gate 1', image: '/assets/img/360/new/gate1.jpg', thumb: '/assets/img/360/thumb/gate1.jpg', cat: 'campus' },
        { id: 7, name: 'Gate 2', image: '/assets/img/360/new/gate2.jpg', thumb: '/assets/img/360/thumb/gate2.jpg', cat: 'campus' },
        { id: 8, name: 'tennis court', image: '/assets/img/360/new/tennis.jpg', thumb: '/assets/img/360/thumb/tennis.png', cat: 'facility' },
        { id: 9, name: 'volley ball', image: '/assets/img/360/new/volleyball.jpg', thumb: '/assets/img/360/thumb/volleyball.png', cat: 'facility' },
        { id: 10, name: 'Garden 2', image: '/assets/img/360/new/garden1.jpg', thumb: '/assets/img/360/thumb/garden1.jpg', cat: 'campus' },
        { id: 11, name: 'Computer science lab', image: '/assets/img/360/lab/lab1.jpg', thumb: '/assets/img/360/lab/lab1.jpg', cat: 'lab' },
        { id: 12, name: 'Physics lab', image: '/assets/img/360/lab/lab2.jpg', thumb: '/assets/img/360/lab/lab2.jpg', cat: 'lab' },
        { id: 13, name: 'Biotech lab', image: '/assets/img/360/lab/lab3.jpg', thumb: '/assets/img/360/lab/lab3.jpg', cat: 'lab' },
        { id: 14, name: 'Chemistry lab', image: '/assets/img/360/lab/lab4.jpg', thumb: '/assets/img/360/lab/lab4.jpg', cat: 'lab' },
        { id: 15, name: 'Computer graphics lab', image: '/assets/img/360/lab/lab5.jpg', thumb: '/assets/img/360/lab/lab5.jpg', cat: 'lab' },
        { id: 16, name: 'Computer science lab', image: '/assets/img/360/lab/lab6.jpg', thumb: '/assets/img/360/lab/lab6.jpg', cat: 'lab' },
    ];

    useEffect(() => {
        // Set initial image when component mounts
        if (imageData.length > 0 && !currentImage) {
            setCurrentImage(imageData[0]);
        }
    }, [imageData, currentImage]);

    useEffect(() => {
        const filtering = () => {
            const filtered = imageData.filter(e => e.cat === sidebarCategory);
            setFliteredImage(filtered);
            // Optionally, set the current image to the first of the filtered category
            if (filtered.length > 0 && (!currentImage || currentImage.cat !== sidebarCategory)) {
                handleSelectImage(filtered[0]);
            }
        };
        filtering();
    }, [sidebarCategory]);

    const preloadImage = (url) => {
        return new Promise((resolve, reject) => {
            const img = new Image();
            img.src = url;
            img.onload = () => resolve();
            img.onerror = (err) => reject(err);
        });
    };

    const handleSelectImage = async (e) => {
        if (isMobile) {
            setIsLoadingImage(true);
            setShowSidebar(false)
            try {
                await preloadImage(e.image); // Preload the new image
                setCurrentImage(e); // Set new image after preloading
                const index = filteredImage.findIndex(obj => obj.id === e.id);
                // Logic for suggesting images
                if (index > -1) {
                    const suggestions = [];
                    for (let i = 1; i <= 3; i++) {
                        if (index + i < filteredImage.length) {
                            suggestions.push(filteredImage[index + i]);
                        }
                    }
                    setSuggestingImage(suggestions);
                } else {
                    setSuggestingImage([]);
                }
            } catch (error) {
                console.error("Failed to load image:", error);
                // Handle error (e.g., show a fallback image or message)
            } finally {
                setTimeout(() => {
                                    setIsLoadingImage(false); // Hide loader regardless of success or failure

                }, 1000);
            }
            return
        }
        if (e.id === currentImage?.id) return; // Avoid re-loading the same image

        setIsLoadingImage(true); // Show loader
        try {
            await preloadImage(e.image); // Preload the new image
            setCurrentImage(e); // Set new image after preloading
            const index = filteredImage.findIndex(obj => obj.id === e.id);
            // Logic for suggesting images
            if (index > -1) {
                const suggestions = [];
                for (let i = 1; i <= 3; i++) {
                    if (index + i < filteredImage.length) {
                        suggestions.push(filteredImage[index + i]);
                    }
                }
                setSuggestingImage(suggestions);
            } else {
                setSuggestingImage([]);
            }
        } catch (error) {
            console.error("Failed to load image:", error);
            // Handle error (e.g., show a fallback image or message)
        } finally {
            setIsLoadingImage(false); // Hide loader regardless of success or failure
        }
    };

    const handleLeft = () => {
        const index = filteredImage.findIndex(obj => obj.id === currentImage.id);
        if (index > 0) {
            handleSelectImage(filteredImage[index - 1]);
        }
    };

    const handleRight = () => {
        const index = filteredImage.findIndex(obj => obj.id === currentImage.id);
        if (index < filteredImage.length - 1) {
            handleSelectImage(filteredImage[index + 1]);
        }
    };

    function handleGridClose() {
        setSplitImage(false);
    }
    function handleEnter() {
        setAlive(true);
        setSplitImage(true);
    }
    function handleBoxLeave() {
        setAlive(false);
    }
    function handleLeave() {
        setSplitImage(false);
    }

    return (
        <div className='tsv-main'>
            {/* Show PreLoader based on isLoadingImage state */}
            {isLoadingImage && <PreLoader />}

            <VirtualTourHeader />
            <Scene ref={sceneRef}>
                {currentImage && <a-sky src={currentImage.image}></a-sky>}
                <a-camera user-was-moved="true"></a-camera>
            </Scene>

            <div className='footer'>
                <div className='left' onClick={handleLeft}><LuMoveLeft /></div>
                <div className='center' onClick={handleEnterVRClick}><BsHeadsetVr /></div>
                <div className='right' onClick={handleRight}><LuMoveRight /></div>
            </div>

            {/* ///listing images */}
            <div className={`listing-images ${splitImage ? 'spread' : ''}`} onMouseLeave={handleLeave}>
                {suggestingImage?.map((e, i) => (
                    <div key={e.id} onClick={() => { handleSelectImage(e); }} className='items' onMouseEnter={handleEnter}>
                        <img src={e.image} alt={e.name} />
                    </div>
                ))}
            </div>

            <div className='left_button' onClick={() => { setShowSidebar(true); }}>
                <TfiGallery />
            </div>

            <div className={`left_bar ${showSidebar ? "show" : ""}`}
                onMouseEnter={() => { setShowSidebar(true); }}
                onMouseLeave={() => { setShowSidebar(false); }}
            >
                {showSidebar && (
                    <>
                        <div className='bar'>
                            <span onClick={() => { setSidebarCategory('campus'); }} className={`category ${sidebarCategory === 'campus' ? "true" : ""}`}>Campus</span>
                            <span onClick={() => { setSidebarCategory('lab'); }} className={`category ${sidebarCategory === 'lab' ? "true" : ""}`}>Labs</span>
                            <span onClick={() => { setSidebarCategory('facility'); }} className={`category ${sidebarCategory === 'facility' ? "true" : ""}`}>Facilities</span>
                        </div>
                        <div className='container'>
                            {filteredImage?.map((e, i) => (
                                <div key={e.id} onClick={() => { handleSelectImage(e); }} className='list-items'>
                                    <img src={e.thumb} alt={e.name} />
                                    <div className='content'>
                                        <div>{e.name}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default ThreeSixtyViewer;