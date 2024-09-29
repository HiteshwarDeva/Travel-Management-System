import React, { useState } from 'react';
import axios from 'axios';
import './index.css'

const HotelSearch = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [error, setError] = useState('');

  const API_KEY = '';//ypur google custom search api key 
  const SEARCH_ENGINE_ID = '';// google search engine id

  const searchHotels = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(`https://www.googleapis.com/customsearch/v1`, {
        params: {
          key: API_KEY,
          cx: SEARCH_ENGINE_ID,
          q: `hotels in ${query}`,
          num: 10,
        },
      });
      setResults(response.data.items);
    } catch (err) {
      setError('Error fetching data');
    }
  };

  return (
    <div className='hotels-bg-container'>
        <h1 className='hotels-heading'>Enter the location</h1>
      <form className='hotels-formEl' placeholder='location' onSubmit={searchHotels}>
        <input
          type="text"
          placeholder="Enter place"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className='hotels-inputEl'
        />
        <br/>
        <button type="submit" className='hotels-btn'>Search</button>
      </form>
      {error && <p>{error}</p>}
      <div className="cards">
        {results.map((item, index) => (
          <div key={index} className="card">
            <h3>{item.title}</h3>
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              {item.link}
            </a>
            <p>{item.snippet}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HotelSearch;
