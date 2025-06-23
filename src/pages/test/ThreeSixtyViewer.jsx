import React, { useRef, useEffect, useState, useContext } from 'react';
import 'aframe';
import { Scene, Entity } from 'aframe-react';
import { LuMoveLeft, LuMoveRight } from "react-icons/lu";
import { BsHeadsetVr } from "react-icons/bs";
import { IoMdHome } from "react-icons/io";
import VirtualTourHeader from '../../components/header/VirtualTourHeader';
import { TfiGallery } from "react-icons/tfi";
import PreLoader from './PreLoader';
import { AppContext } from '../../context/AppContext';

const ThreeSixtyViewer = ({ imageUrl }) => {
    const { isVisible, setIsVisible } = useContext(AppContext)

    const sceneRef = useRef(null);
    const [isMobile, setIsMobile] = useState(false);
    const [inVRMode, setInVRMode] = useState(false);
    const [splitImage, setSplitImage] = useState(false)
    const [alive, setAlive] = useState(false)
    const [showSidebar, setShowSidebar] = useState(false)
    const [sidebarCategory, setSidebarCategory] = useState('campus')
    const [filteredImage, setFliteredImage] = useState([])
    const [currentImage, setCurrentImage] = useState([

    ])
    const [suggestingImage, setSuggestingImage] = useState([])
    useEffect(() => {
        // --- Mobile Detection ---
        const checkIfMobile = () => {
            const userAgent = navigator.userAgent || navigator.vendor || window.opera;
            setIsMobile(/android|iphone|ipad|ipod|blackberry|windows phone/i.test(userAgent));
        };

        checkIfMobile();
        window.addEventListener('resize', checkIfMobile);

        // --- A-Frame Event Listeners ---
        // Access the actual A-Frame DOM element via .el
        const sceneAFrameEl = sceneRef.current ? sceneRef.current.el : null;

        if (sceneAFrameEl) {
            console.log('A-Frame scene DOM element found:', sceneAFrameEl); // Debugging line

            const handleEnterVR = () => {
                console.log('Entered VR mode!');
                setInVRMode(true);
            };

            const handleExitVR = () => {
                console.log('Exited VR mode!');
                setInVRMode(false);
            };

            sceneAFrameEl.addEventListener('enter-vr', handleEnterVR);
            sceneAFrameEl.addEventListener('exit-vr', handleExitVR);

            // Cleanup function for useEffect
            return () => {
                window.removeEventListener('resize', checkIfMobile);
                if (sceneAFrameEl) { // Also check on cleanup
                    sceneAFrameEl.removeEventListener('enter-vr', handleEnterVR);
                    sceneAFrameEl.removeEventListener('exit-vr', handleExitVR);
                }
            };
        } else {
            console.log('A-Frame scene DOM element not yet available.'); // Debugging line
            // This might happen on the very first render before A-Frame fully initializes.
            // React will re-run this effect when sceneRef.current becomes available.
        }

        // Cleanup for resize listener (independent of A-Frame element)
        return () => {
            window.removeEventListener('resize', checkIfMobile);
        };

    }, []); // Empty dependency array means this runs once on mount

    // Rest of your component code remains the same...

    const handleEnterVRClick = () => {

        // Also access the .el property here for entering VR
        if (sceneRef.current && sceneRef.current.el && sceneRef.current.el.tagName === 'A-SCENE') {
            sceneRef.current.el.enterVR(); // Call enterVR on the A-Frame element
        } else {
            console.warn("Attempted to enter VR, but A-Frame scene DOM element is not available.");
        }
    };

    const handleExitVRClick = () => {
        // Also access the .el property here for exiting VR
        if (sceneRef.current && sceneRef.current.el && sceneRef.current.el.tagName === 'A-SCENE') {
            sceneRef.current.el.exitVR(); // Call exitVR on the A-Frame element
        } else {
            console.warn("Attempted to exit VR, but A-Frame scene DOM element is not available.");
        }
    };
    useEffect(() => {
        setCurrentImage(imageData[0])



    }, []);
    function handleGridClose() {
        setSplitImage(false)
    }
    function handleEnter() {
        setAlive(true)
        setSplitImage(true)
    }
    function handleBoxLeave() {
        setAlive(false)
    }
    function handleLeave() {

        setSplitImage(false)

    }

    const imageData = [
        {
            id: 1,
            name: 'SMVEC SAS',
            image: '/assets/img/360/new/artsentrance.jpg',
            thumb: '/assets/img/360/thumb/artsentrance.jpg',
            
            cat: 'campus'

        },
        {
            id: 2,
            name: 'Canteen',
            image: '/assets/img/360/new/canteen.jpg',
            thumb: '/assets/img/360/thumb/canteen.jpg',

            cat: 'facility'

        },
        {
            id: 3,
            name: 'Entrance 1',
            image: '/assets/img/360/new/entrance1.jpg',
            thumb: '/assets/img/360/thumb/entrance1.jpg',

            cat: 'campus'

        },
        {
            id: 4,
            name: 'Entrance 2',
            image: '/assets/img/360/new/entrance2.jpg',
            thumb: '/assets/img/360/thumb/entrance2.jpg',
            cat: 'campus'

        },
        {
            id: 5,
            name: 'Garden',
            image: '/assets/img/360/new/garden.jpg',
            thumb: '/assets/img/360/thumb/garden.jpg',
            cat: 'campus'

        },
        {
            id: 6,
            name: 'Gate 1',
            image: '/assets/img/360/new/gate1.jpg',
            thumb: '/assets/img/360/thumb/gate1.jpg',
            cat: 'campus'

        },
        {
            id: 7,
            name: 'Gate 2',
            image: '/assets/img/360/new/gate2.jpg',
            thumb: '/assets/img/360/thumb/gate2.jpg',
            cat: 'campus'

        },
        {
            id: 8,
            name: 'tennis court',
            image: '/assets/img/360/new/tennis.jpg',
            thumb: '/assets/img/360/thumb/tennis.jpg',
            cat: 'facility'

        },
        {
            id: 9,
            name: 'volley ball',
            image: '/assets/img/360/new/volleyball.jpg',
            thumb: '/assets/img/360/thumb/volleyball.jpg',
            cat: 'facility'

        },
        {
            id: 10,
            name: 'Garden 2',
            image: '/assets/img/360/new/garden1.jpg',
            thumb: '/assets/img/360/thumb/garden1.jpg',
            cat: 'campus'

        },
        {
            id: 11,
            name: 'Computer science lab',
            image: '/assets/img/360/lab/lab1.jpg',
            thumb: '/assets/img/360/lab/lab1.jpg',
            cat: 'lab'

        },
        {
            id: 12,
            name: 'Physics lab',
            image: '/assets/img/360/lab/lab2.jpg',
            thumb: '/assets/img/360/lab/lab2.jpg',
            cat: 'lab'

        },
        {
            id: 13,
            name: 'Biotech lab',
            image: '/assets/img/360/lab/lab3.jpg',
            thumb: '/assets/img/360/lab/lab3.jpg',
            cat: 'lab'
        },
        {
            id: 14,
            name: 'Chemistry lab',
            image: '/assets/img/360/lab/lab4.jpg',
            thumb: '/assets/img/360/lab/lab4.jpg',
            cat: 'lab'
        },
        {
            id: 15,
            name: 'Computer graphics lab',
            image: '/assets/img/360/lab/lab5.jpg',
            thumb: '/assets/img/360/lab/lab5.jpg',
            cat: 'lab'

        },
        {
            id: 16,
            name: 'Computer science lab',
            image: '/assets/img/360/lab/lab6.jpg',
            thumb: '/assets/img/360/lab/lab6.jpg',
            cat: 'lab'

        },

    ]
    console.log("alive,", alive)

    useEffect(() => {
        const filtering = () => {
            const filterd = imageData.filter(e => e.cat == sidebarCategory)
            setFliteredImage(filterd)

        }
        filtering()
        const suggesting = () => {

        }
    }, [sidebarCategory])


    function handleSelectImage(e) {
        setCurrentImage(e)
        const index = filteredImage.findIndex(obj => obj.id === e.id);
        console.log("ID", index)
        console.log("length", filteredImage.length - 4)
        console.log('condition', index < filteredImage.length - 4)
        if (index < filteredImage.length - 3) {
            setSuggestingImage([filteredImage[index + 1], filteredImage[index + 2], filteredImage[index + 3],])
            return

        }
        else {
            setSuggestingImage([])
        }
        if (index < filteredImage.length - 2) {
            setSuggestingImage([filteredImage[index + 1], filteredImage[index + 2]])
            return


        }
        else {
            setSuggestingImage([])
        }
        if (index < filteredImage.length - 1) {
            setSuggestingImage([filteredImage[index + 1]])
            return


        }
        else {
            setSuggestingImage([])
        }
        // console.log(filteredImage[22])
    }
    console.log(suggestingImage)
    const handleHotspotClick = (newImageId) => {

    };
    const handleLeft = () => {
        const index = filteredImage.findIndex(obj => obj.id === currentImage.id);
        if (index > 0) {
            setCurrentImage(filteredImage[index - 1])
        }

    }
    const handleRight = () => {
        const index = filteredImage.findIndex(obj => obj.id === currentImage.id);
        if (index < filteredImage.length - 1) {
            setCurrentImage(filteredImage[index + 1])
        }
    }
    return (
        <div className='tsv-main'>
            <PreLoader />
            <VirtualTourHeader />
            <Scene ref={sceneRef}  >
                <a-sky src={currentImage.image}></a-sky>
                <a-camera user-was-moved="true"></a-camera>
                {/* Hotspot Example */}
             
                {/* {currentImage.id == 1 && ( // Only show this hotspot if in room1
                    <a-entity
                        geometry="primitive: sphere; radius: 0.5"
                        material="color: #FF0000; opacity: 0.8"
                        position="2 1 -3" // Adjust position as needed
                        onClick={() => handleHotspotClick('room2')} // Change to room2 on click
                    >
                        <a-text
                            value="Go to Room 2"
                            align="center"
                            position="0 0.7 0" // Position text above the sphere
                            width="5"
                            color="#FFFFFF"
                        ></a-text>
                    </a-entity>
                )} */}

                {/* {currentImage.id === 'room2' && (
                    <a-entity
                        geometry="primitive: box; width: 0.8; height: 0.8; depth: 0.1"
                        material="color: #00FF00; opacity: 0.8"
                        position="-3 0.5 1"
                        onClick={() => handleHotspotClick('room1')}
                    >
                         <a-text
                            value="Back to Room 1"
                            align="center"
                            position="0 0 0.1"
                            width="4"
                            color="#FFFFFF"
                        ></a-text>
                    </a-entity>
                )} */}

            </Scene>

            <div className='footer'>
                <div className='left' onClick={handleLeft}><LuMoveLeft /></div>
                <div className='center' onClick={handleEnterVRClick}><BsHeadsetVr /></div>
                <div className='right' onClick={handleRight}><LuMoveRight /></div>
            </div>
        

            {/* ///listing images */}

            <div className={`listing-images ${splitImage ? 'spread' : ''}`} onMouseLeave={handleLeave}>
                {suggestingImage?.map((e, i) => (
                    <div onClick={() => { handleSelectImage(e) }} className='items' onMouseEnter={handleEnter}>
                        <img src={e.image} alt="" />
                    </div >
                ))}

            </div>
            <div className='left_button' onClick={() => { setShowSidebar(true) }}>
                <TfiGallery />
            </div>
            <div className={`left_bar ${showSidebar ? "show" : ""}`}
                onMouseEnter={() => { setShowSidebar(true) }}
                onMouseLeave={() => { setShowSidebar(false) }}
            >
                {showSidebar && (
                    <>
                        <div className='bar'>
                            <span onClick={() => { setSidebarCategory('campus') }} className={`category ${sidebarCategory == 'campus' ? "true" : ""}`}>Campus</span>
                            <span onClick={() => { setSidebarCategory('lab') }} className={`category ${sidebarCategory == 'lab' ? "true" : ""}`}>Labs</span>
                            <span onClick={() => { setSidebarCategory('facility') }} className={`category ${sidebarCategory == 'facility' ? "true" : ""}`} >Facilities</span>

                        </div>
                        <div className='container'>
                            {filteredImage?.map((e, i) => (
                                <div onClick={() => { handleSelectImage(e) }} className='list-items'>
                                    <img src={e.thumb} alt="" />
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