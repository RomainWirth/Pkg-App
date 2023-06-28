import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './store';
import {
  fetchParkingSpotsRequest,
  addParkingSpotRequest,
  removeParkingSpotRequest,
} from './store/parking/actions';

const App: React.FC = () => {
  const dispatch = useDispatch();
  const parkingSpots = useSelector((state: RootState) => state.parking.parkingSpots);

  useEffect(() => {
    dispatch(fetchParkingSpotsRequest());
  }, [dispatch]);

  const handleAddParkingSpot = () => {
    dispatch(addParkingSpotRequest());
  };

  const handleRemoveParkingSpot = (id: any) => {
    dispatch(removeParkingSpotRequest(id));
  };

  return (
    <div>
      <h1>Gestion de parking</h1>

      <button onClick={handleAddParkingSpot}>Ajouter une place de parking</button>

      <h2>Places de parking :</h2>
      <ul>
        {parkingSpots.map((spot) => (
          <li key={spot.id}>
            Place {spot.id}: {spot.isOccupied ? 'Occupée' : 'Libre'}
            <button onClick={() => handleRemoveParkingSpot(spot.id)}>Quitter</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
