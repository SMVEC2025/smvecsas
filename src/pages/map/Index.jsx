import React from 'react';
import CustomPanoramaViewer from './CustomPanoramaViewer'; // Adjust path

const Index = () => {
  const datas = [
    '/assets/img/360/gate2.jpg',
    '/assets/img/360/gate22.jpg'
  ];

  return (
    <div style={{ width: '100%', height: '100vh' }}>
      <CustomPanoramaViewer datas={datas} />
    </div>
  );
};

export default Index;