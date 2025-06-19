import React, { useState, useEffect, useContext } from 'react';
import { PanoramaViewer } from 'react-pannellum-next';
import SideBar from '../../map/components/SideBar';
import { AppContext } from '../../../context/AppContext';
import Navbar from '../../../components/header/Navbar';
import TopHeader from '../../../components/header/TopHeader';

const Test = () => {
  const datas = [
    '/assets/img/360/new/gate1.jpg',
    '/assets/img/360/new/entrance1.jpg'
  ];

  const [imagesLoaded, setImagesLoaded] = useState(false); // New state to track loading
  const{imagePath, setImagePath}=useContext(AppContext)
  useEffect(() => {
    setImagePath(datas[0])
    const loadImage = (url) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = url;
        img.onload = () => resolve();
        img.onerror = () => reject(new Error(`Failed to load image: ${url}`));
      });
    };

    // Preload all images
    Promise.all(datas.map(loadImage))
      .then(() => {
        setImagesLoaded(true);
        console.log('All images preloaded!');
      })
      .catch((error) => {
        console.error('Error preloading images:', error);
      });
  }, []); // Run only once on component mount

  const hotSpots = [
    {
      pitch: -15,
      yaw: 15,
      type: 'custom',
      text: 'Go to Gate View 2',
      createTooltipFunc: createCustomHotspot({
        icon: 'https://cdn-icons-png.freepik.com/256/4103/4103110.png',
        description: 'Switching to second gate view.',
        targetImage: datas[1],
      }),
    },
    {
      pitch: -5,
      yaw: -90,
      type: 'custom',
      text: 'Go back to Gate View 1',
      createTooltipFunc: createCustomHotspot({
        icon: '/assets/icons/room.png',
        description: 'Switching back to first gate view.',
        targetImage: datas[0],
      }),
    },
  ];

  function createCustomHotspot({ icon, description, targetImage }) {
    return function (hotSpotDiv, args) {
      hotSpotDiv.innerHTML = `
        <div class="icon-container">
        
          <div class="custom-hotspot" title="${args?.text || ''}">
            <img src="${icon}" alt="icon" style="width: 32px; height: 32px;" />
          </div>
        </div>
      `;

      hotSpotDiv.style.cursor = 'pointer';

      hotSpotDiv.onclick = () => {
        // alert(description || 'No description available.'); // You might want to remove this alert for a smoother experience
        if (targetImage) setImagePath(targetImage);
      };
    };
  }

  if (!imagesLoaded) {
    return <div>Loading panoramas...</div>; // Show a loading indicator
  }

  return (
   <>
  
    <div style={{ width: '100%', height: '100vh' }}>
      <PanoramaViewer
        imagePath={imagePath}
        autoLoad={true}
        showZoomCtrl={true}
        showFullscreenCtrl={true}
      />
    </div>
   </>
  );
};

export default Test;