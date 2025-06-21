import React from 'react';

const MissionVision = ({missionData}) => {
  return (
    <section className="mv-section">
      <div className="mv-container">
        <h2 className="mv-heading">Our Vision & Mission</h2>
        <div className="mv-cards">
          <div className="mv-card vision">
            <h3 className="mv-title">Vision</h3>
            <p className="mv-text">
              {missionData.mission}
              </p>
          </div>
          <div className="mv-card mission">
            <h3 className="mv-title">Mission</h3>
            <p className="mv-text">
              {missionData.vision}

            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;