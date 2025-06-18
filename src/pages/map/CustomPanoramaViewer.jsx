import React, { useState, useRef } from 'react';
import { ReactPhotoSphereViewer } from 'react-photo-sphere-viewer';
import { VirtualTourPlugin } from '@photo-sphere-viewer/virtual-tour-plugin';

// Assuming you have these custom images in your public/images folder
// e.g., public/images/next_arrow.png and public/images/back_arrow.png
// You can download free arrow icons from FlatIcon, FontAwesome, etc.
const NEXT_ARROW_ICON = '/images/next_arrow.png';
const BACK_ARROW_ICON = '/images/back_arrow.png';
const INFO_ICON = '/images/info_icon.png'; // Example for markers

const tourData = [
  {
    id: 'main-entrance',
    panorama: '/assets/img/360/gate22.jpg',
    name: 'Main Entrance',
    links: [
      {
        nodeId: 'library',
        position: { yaw: '-200', pitch: '0deg' },
        tooltip: 'Go to Library',
        // --- Custom Arrow Icon for this link ---
        arrowStyle: {
          image: NEXT_ARROW_ICON, // Use your custom arrow image
          size: { width: 60, height: 60 }, // Adjust size as needed
          // You can also add a className for more specific CSS
          // className: 'custom-link-arrow'
        }
      },
      {
        nodeId: 'student-center',
        position: { yaw: '-45deg', pitch: '5deg' },
        tooltip: 'Visit Student Center',
        arrowStyle: {
          image: NEXT_ARROW_ICON,
          size: { width: 60, height: 60 },
        }
      },
    ],
    markers: [
      {
        id: 'welcome-marker',
        position: { yaw: '0deg', pitch: '10deg' },
        html: '<div class="info-marker"><h3>Welcome to Our Campus!</h3><p>Start your journey here to explore our vibrant college life.</p></div>',
        anchor: 'bottom center',
        tooltip: 'Campus Overview',
      },
      {
        id: 'flag-marker',
        position: { yaw: '90deg', pitch: '20deg' },
        image: INFO_ICON, // Using a generic info icon for markers
        size: { width: 48, height: 48 },
        tooltip: 'National Flag',
      }
    ],
  },
  {
    id: 'library',
    panorama: '/images/library.jpg',
    name: 'Library',
    links: [
      {
        nodeId: 'main-entrance',
        position: { yaw: '150deg', pitch: '0deg' },
        tooltip: 'Back to Main Entrance',
        // --- Use a 'back' arrow for returning links ---
        arrowStyle: {
          image: BACK_ARROW_ICON, // A different arrow for 'back'
          size: { width: 60, height: 60 },
          // You can also rotate the arrow if your image isn't oriented correctly
          // style: { transform: 'rotate(180deg)' }
        }
      },
      {
        nodeId: 'reading-room',
        position: { yaw: '30deg', pitch: '0deg' },
        tooltip: 'Explore Reading Room',
        arrowStyle: {
          image: NEXT_ARROW_ICON,
          size: { width: 60, height: 60 },
        }
      },
    ],
    markers: [
      {
        id: 'library-info-marker',
        position: { yaw: '-20deg', pitch: '-5deg' },
        html: '<div class="info-marker"><h3>The Central Library</h3><p>Home to over 500,000 books and digital resources. Enjoy quiet study spaces and collaborative zones.</p></div>',
        anchor: 'bottom center',
        tooltip: 'About the Library',
      },
      {
        id: 'study-area-marker',
        position: { yaw: '70deg', pitch: '0deg' },
        image: INFO_ICON,
        size: { width: 32, height: 32 },
        tooltip: 'Study Area',
      }
    ],
  },
  {
    id: 'student-center',
    panorama: '/images/student_center.jpg',
    name: 'Student Center',
    links: [
      {
        nodeId: 'main-entrance',
        position: { yaw: '180deg', pitch: '0deg' },
        tooltip: 'Back to Main Entrance',
        arrowStyle: {
          image: BACK_ARROW_ICON,
          size: { width: 60, height: 60 },
        }
      },
    ],
    markers: [
      {
        id: 'cafe-marker',
        position: { yaw: '90deg', pitch: '0deg' },
        html: '<div class="info-marker"><h3>Campus Cafe</h3><p>Grab a coffee, a quick bite, or just relax with friends.</p></div>',
        anchor: 'bottom center',
        tooltip: 'Visit the Cafe',
      },
      {
        id: 'game-room-marker',
        position: { yaw: '-90deg', pitch: '0deg' },
        image: INFO_ICON,
        size: { width: 40, height: 40 },
        tooltip: 'Game Room',
      }
    ],
  },
  {
    id: 'reading-room',
    panorama: '/images/reading_room.jpg',
    name: 'Reading Room',
    links: [
      {
        nodeId: 'library',
        position: { yaw: '-90deg', pitch: '0deg' },
        tooltip: 'Back to Library',
        arrowStyle: {
          image: BACK_ARROW_ICON,
          size: { width: 60, height: 60 },
        }
      },
    ],
    markers: [
        {
            id: 'quiet-zone-marker',
            position: { yaw: '10deg', pitch: '5deg' },
            html: '<div class="info-marker"><h3>Quiet Reading Zone</h3><p>Perfect for focused study and deep concentration.</p></div>',
            anchor: 'bottom center',
            tooltip: 'About the Reading Zone',
        }
    ]
  },
];

function CustomPanoramaViewer() {
  const [currentSceneId, setCurrentSceneId] = useState('main-entrance');
  const viewerRef = useRef(null);

  const plugins = [
    [
      VirtualTourPlugin,
      {
        nodes: tourData,
        startNodeId: currentSceneId,
        transitionOptions: {
          speed: '20rpm',
        },
        // --- Optional: Global arrow style for all links if not overridden per-link ---
        // arrowStyle: {
        //   image: '/images/default_arrow.png',
        //   size: { width: 50, height: 50 },
        // },
      },
    ],
  ];

  const handleReady = (instance) => {
    viewerRef.current = instance;
    const virtualTour = instance.getPlugin(VirtualTourPlugin);
    if (virtualTour) {
      virtualTour.addEventListener('node-changed', ({ node }) => {
        setCurrentSceneId(node.id);
        const navbar = instance.getNavbar();
        const currentSceneItem = navbar.getItem('current-scene');
        if (currentSceneItem) {
            currentSceneItem.tooltip = `Current: ${node.name}`;
        }
      });
    }
  };

  return (
    <div className="CustomPanoramaViewer">
      <h1>College Campus Virtual Tour</h1>
      <div className="tour-container">
        <ReactPhotoSphereViewer
          ref={viewerRef}
          height={'600px'}
          width={'100%'}
          plugins={plugins}
          navbar={[
            'zoom',
            'move',
            'fullscreen',
            {
              id: 'current-scene',
              title: `Current: ${tourData.find(node => node.id === currentSceneId)?.name}`,
              className: 'custom-navbar-item',
              onClick: () => {},
            },
          ]}
          onReady={handleReady}
          loadingImg="/loading.gif"
        />
      </div>

      <div className="navigation-menu">
        <h2>Locations</h2>
        <ul>
          {tourData.map((scene) => (
            <li key={scene.id}>
              <button
                onClick={() => {
                  if (viewerRef.current) {
                    const virtualTour = viewerRef.current.getPlugin(VirtualTourPlugin);
                    if (virtualTour && virtualTour.getCurrentNode().id !== scene.id) {
                      virtualTour.setCurrentNode(scene.id);
                    }
                  }
                }}
                disabled={currentSceneId === scene.id}
              >
                {scene.name}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default CustomPanoramaViewer;