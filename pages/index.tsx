import { useState } from 'react';
import Head from 'next/head';
import Map from '../components/map';
import Scoreboard from '../components/Scoreboard';
import styles from '../styles/Home.module.css';

const Home = () => {
  const [score, setScore] = useState(1500);
  const [foundCities, setFoundCities] = useState<string[]>([]);

  const onPinDrop = (lat: number, lng: number) => {
    // Example function to handle pin drop
    console.log(`Pin dropped at: ${lat}, ${lng}`);
    // Here, you can add logic to calculate the distance from the dropped pin to the correct city,
    // update the score, and manage found cities.
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Europe Map Game</title>
        <meta name="description" content="Find the cities on the map" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>Europe Map Game</h1>
        <Map onPinDrop={onPinDrop} />
        <Scoreboard score={score} foundCities={foundCities} />
      </main>
    </div>
  );
};

export default Home;

