import React from 'react';
import { ReactPhotoSphereViewer } from 'react-photo-sphere-viewer';
import { GyroscopePlugin } from '@photo-sphere-viewer/gyroscope-plugin';
   const requestGyroPermission = async () => {
  if (
    typeof DeviceOrientationEvent !== 'undefined' &&
    typeof DeviceOrientationEvent.requestPermission === 'function'
  ) {
    const permission = await DeviceOrientationEvent.requestPermission();
    if (permission === 'granted') {
      console.log('Gyro permission granted');
    } else {
      alert('Permission not granted for gyroscope');
    }
  }
};

const PanoramaViewer = () => {
  return (
    <>
    <div style={{ height: '100vh', width: '100%' }}>
      <ReactPhotoSphereViewer
        src="/assets/img/360/canteen.jpg" // Place image in public folder
        height="100vh"
        width="100%"
        plugins={[GyroscopePlugin]}
        defaultYaw={0}
        touchmoveTwoFingers={true}
      />
    </div>
        <button onClick={requestGyroPermission}>Active</button>
    </>

  );
};

export default PanoramaViewer;
