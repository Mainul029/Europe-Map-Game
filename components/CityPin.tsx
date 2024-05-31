import React from 'react';

interface CityPinProps {
  lat: number;
  lng: number;
}

const CityPin: React.FC<CityPinProps> = ({ lat, lng }) => (
  <div style={{
    position: 'absolute',
    top: `${lat}%`,
    left: `${lng}%`,
    transform: 'translate(-50%, -50%)',
    background: 'red',
    borderRadius: '50%',
    width: '10px',
    height: '10px',
  }} />
);

export default CityPin;
