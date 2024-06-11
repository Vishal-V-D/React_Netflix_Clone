import React, { useEffect, useRef, useState } from 'react'
import './TitleCards.css'
import cards_data from '../../../assets/cards/Cards_data'
import { Link } from 'react-router-dom';

const TitleCards = ({title,category}) => {


  const cardsRef = useRef();

  const [apidata,setapidata] = useState([])

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'key_goes_here'
    }
  };
  
  










  const handleWheel = (event) => {
    event.preventDefault();
    cardsRef.current.scrollLeft += event.deltaY;
  }


  useEffect(() => {

    fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
    .then(response => response.json())
    .then(response => setapidata(response.results))
    .catch(err => console.error(err));


    const currentCardsRef = cardsRef.current;

    if (currentCardsRef) {
      currentCardsRef.addEventListener('wheel', handleWheel);
    }

    // Cleanup function to remove the event listener
    return () => {
      if (currentCardsRef) {
        currentCardsRef.removeEventListener('wheel', handleWheel);
      }
    };
  }, []);

  return (
    <div className='titlecards'>
      <h2>{title?title:"Popular on Netflix"}</h2>
      <div className="card-list" ref={cardsRef}>
        {apidata.map((card, index) => {
          return (
            <Link to={`/Player/${card.id}`} className="card" key={index}>
              <img src={`https://image.tmdb.org/t/p/w500`+
                card.backdrop_path} alt={card.name} />
              <p>{card.original_title}</p>
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default TitleCards;
