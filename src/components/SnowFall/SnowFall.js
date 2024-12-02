import React from 'react';
import Snowfall from 'react-snowfall';

const SnowEffect = () => {
  return (
    <div style={{ position: 'relative', height: '100vh', overflow: 'hidden' }}>
      <Snowfall />
      <h1 style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
        Chào Mừng Đến Với Website!
      </h1>
    </div>
  );
};

export default SnowEffect;
