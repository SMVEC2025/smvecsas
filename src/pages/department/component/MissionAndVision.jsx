import React from 'react';

const MissionVision = () => {
  return (
    <section className="mv-section">
      <div className="mv-container">
        <h2 className="mv-heading">Our Vision & Mission</h2>
        <div className="mv-cards">
          <div className="mv-card vision">
            <h3 className="mv-title">Vision</h3>
            <p className="mv-text">
SMVEC School of Arts and Science envisions becoming a center of excellence in higher education by nurturing intellectual growth, creativity, and ethical responsibility. We aim to empower students with knowledge, values, and skills to meet global challenges and contribute meaningfully to society.            </p>
          </div>
          <div className="mv-card mission">
            <h3 className="mv-title">Mission</h3>
            <p className="mv-text">
Our mission is to provide a transformative learning environment that fosters academic excellence, research, and holistic development. We are committed to delivering industry-relevant education, encouraging innovation, and producing responsible graduates who excel professionally and socially.

            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;