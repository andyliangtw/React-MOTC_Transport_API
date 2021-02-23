import { useState, useEffect } from 'react';

import motcAPI from '../../api/motcAPI';

export default function Main() {
  const [allScenicSpot, setAllScenicSpot] = useState([]);

  const initScenicSpot = async () => {
    const { data } = await motcAPI.getAllScenicSpot();
    setAllScenicSpot(data);
  };

  useEffect(() => {
    initScenicSpot();
  }, []);

  return (
    <div>
      {allScenicSpot &&
        allScenicSpot.map((spot, i) => {
          return <p key={i}>{i}: {spot.Name}</p>;
        })}
    </div>
  );
}
