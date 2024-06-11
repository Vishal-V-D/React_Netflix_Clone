import React, { useEffect, useState } from 'react';
import './Player.css';
import { useNavigate, useParams } from 'react-router-dom';
import back_arrow_icon from '../../assets/back_arrow_icon.png';

const Player = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [apidata, setApidata] = useState({
    name: "",
    key: "",
    published_at: "",
    type: ""
  });

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMmM1MTk2MGJkYWFlM2EwNjAyMWFlMWRkMjdlYzNiNyIsInN1YiI6IjY2NjJhZTY1MmI1NmViYWYwNjc2MzFhZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qkGrtJKa0rCyn5VLDeOrZQYuLZwdunxr8_ywA5PnJec'
    }
  };

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
      .then(response => response.json())
      .then(response => {
        if (response.results && response.results.length > 0) {
          setApidata(response.results[0]);
        } else {
          console.error('No video data found');
        }
      })
      .catch(err => console.error(err));
  }, [id]);

  return (
    <div className='player'>
      <img src={back_arrow_icon} alt="back" onClick={() => { navigate(-1); }} />
      {apidata.key ? (
        <iframe
          width='90%'
          height='90%'
          src={`https://www.youtube.com/embed/${apidata.key}`}
          title='trailer'
          allowFullScreen
        ></iframe>
      ) : (
        <p>Loading...</p>
      )}
      <div className="player-info">
        <p>{apidata.published_at ? apidata.published_at.slice(0, 10) : 'N/A'}</p>
        <p>{apidata.name}</p>
        <p>{apidata.type}</p>
      </div>
    </div>
  );
}

export default Player;
