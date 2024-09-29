import React, { useState } from 'react';
import axios from 'axios';
import './index.css'

const PNRStatusChecker = () => {
  const [pnr, setPnr] = useState('');
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    setPnr(e.target.value);
  };

  const checkPNRStatus = async () => {
    if (!pnr) {
      setError('Please enter a PNR number');
      return;
    }

    setLoading(true);
    setError(null);
    setStatus(null);

    const options = {
      method: 'GET',
      url: `https://irctc1.p.rapidapi.com/api/v3/getPNRStatus?pnrNumber=${pnr}`,
      headers: {
        'x-rapidapi-key': '',//ypur rapi api key
        'x-rapidapi-host': ''
      }
    };

    try {
      const response = await axios.request(options);
      if (response.data.status) {
        setStatus(response.data.data);
      } else {
        setError('Failed to fetch PNR status');
      }
    } catch (error) {
      setError('An error occurred while fetching PNR status');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='pnr-background'>
      <h1 className='pnr-heading'>Check PNR Status</h1>
      <input
        type="text"
        value={pnr}
        onChange={handleInputChange}
        placeholder="Enter PNR number"
        className='pnr-input'
      />
      <button className='pnr-btn' onClick={checkPNRStatus} disabled={loading}>
        {loading ? 'Checking...' : 'Check Status'}
      </button>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      {status && (
        <div className='pnr-result'>
          <h2 className='result-heading'>Booking Details</h2>
          <p className='result-para'>PNR: {status.Pnr}</p>
          <p className='result-para'>Train No: {status.TrainNo}</p>
          <p className='result-para'>Train Name: {status.TrainName}</p>
          <p className='result-para'>From: {status.From}</p>
          <p className='result-para'>To: {status.To}</p>
          <p className='result-para'>Date of Journey: {status.Doj}</p>
          <p className='result-para'>Booking Status: {status.PassengerStatus[0].BookingStatus}</p>
          <p className='result-para'>Current Status: {status.PassengerStatus[0].CurrentStatus}</p>

          {status.PassengerStatus[0].CurrentStatus.startsWith('WL') ? (
            <p style={{ color: 'orange' }}>Your booking is in waiting list.</p>
          ) : (
            <p style={{ color: 'green' }}>Your booking is confirmed!</p>
          )}
        </div>
      )}
    </div>
  );
};

export default PNRStatusChecker;
