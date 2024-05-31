import { useState, useEffect } from 'react';
import Image from 'next/image';
import cities from '../public/cities.json';
import CityPin from './CityPin';
import styles from '../styles/Home.module.css';

const Map = ({ onPinDrop }: { onPinDrop: (lat: number, lng: number) => void }) => {
  const [pins, setPins] = useState<{ lat: number; lng: number }[]>([]);
  const [mapLoaded, setMapLoaded] = useState(false);

  useEffect(() => {
    setMapLoaded(true);
  }, []);

  const handleMapClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = (e.target as HTMLElement).getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Assuming the map image is 800x600
    const lat = 60 - (y / 600) * 30; // Example calculation
    const lng = (x / 800) * 40 - 10; // Example calculation

    setPins([...pins, { lat, lng }]);
    onPinDrop(lat, lng); // Call the passed in onPinDrop function
  };

  return (
    <div className={styles.map} onClick={handleMapClick}>
      {mapLoaded && (
        <Image
          src="/images/map.png"
          alt="Map of Europe"
          width={800}
          height={600}
        />
      )}
      {pins.map((pin, index) => (
        <CityPin key={index} lat={pin.lat} lng={pin.lng} />
      ))}
      {cities.cities.map((city, index) => (
        <CityPin key={index} lat={city.position.lat} lng={city.position.lng} />
      ))}
    </div>
  );
};

export default Map;
