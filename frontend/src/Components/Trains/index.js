import React, { useState } from 'react';
import axios from 'axios';
import './index.css'

const TrainList = () => {
  const [trains, setTrains] = useState([]);
  const [fromStationCode, setFromStationCode] = useState('');
  const [toStationCode, setToStationCode] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchTrains = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get('https://irctc1.p.rapidapi.com/api/v2/trainBetweenStations', {
        params: {
          fromStationCode: fromStationCode,
          toStationCode: toStationCode
        },
        headers: {
          'x-rapidapi-key': '',//Your rapid api key and host
          'x-rapidapi-host': ''
        },
      });

      console.log(response.data.data); // Check the structure of response.data

      setTrains(response.data.data); // Assuming response.data is an array
      console.log(typeof (trains))

    } catch (error) {
      setError('Error fetching data');
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchTrains();
  };

  return (
    <div className='trains-bg-container'>
        <img src='Images/trains-1.jpeg' className='trains-img'/>
      <div className='trains-container'>
        <h2 className='trains-heading'>Train Schedule</h2>
        <form onSubmit={handleSubmit} className='trains-formEl'>
          <div>
            <label htmlFor="fromStationCode" className='trains-labelEl'>From Station Code:</label>
            <br />
            <input
              type="text"
              id="fromStationCode"
              value={fromStationCode}
              onChange={(e) => setFromStationCode(e.target.value)}
              className='trains-inputEl'
            />
          </div>
          <div>
            <label htmlFor="toStationCode" className='trains-labelEl'>To Station Code:</label>
            <br />
            <input
              type="text"
              id="toStationCode"
              value={toStationCode}
              onChange={(e) => setToStationCode(e.target.value)}
              className='trains-inputEl'
            />
          </div>
          <button type="submit" className='trains-btn'>Search Trains</button>
        </form>

        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}

        <ul className='trains-container'>
          {trains.map((train, index) => (
            <li key={index} className='trains-card'>
              <p className='train-number'>Train Number: {train.train_number}</p>
              <p className='train-name'>Train Name: {train.train_name}</p>
              <p>Origin: {train.train_origin_station}</p>
              <p>Destination: {train.train_destination_station}</p>
              <p>Departure Time: {train.depart_time}</p>
              <p>Arrival Time: {train.arrival_time}</p>
              <p>Distance: {train.distance} km</p>
            </li>
          ))}
        </ul>
      </div>
      
    </div>
  );
};

export default TrainList;
