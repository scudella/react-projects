import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { API_ENDPOINT } from './context';
const urlNoPicture =
  'https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png';

const SingleMovie = () => {
  const [loading, setLoading] = useState(false);
  const [movie, setMovie] = useState(null);
  const { id } = useParams();
  const urlSingleMovie = `${API_ENDPOINT}&i=${id}`;

  const getMovie = async (url) => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      data.Poster = data.Poster !== 'N/A' ? data.Poster : urlNoPicture;
      setMovie(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    console.log('singlemovie');
    getMovie(urlSingleMovie);
    // eslint-disable-next-line
  }, [id]);

  if (loading) {
    return <h1 className='loading'>Loading ...</h1>;
  }

  if (!movie) {
    return <h2 className='section-title'>no movie to display</h2>;
  }

  return (
    <section className='single-movie'>
      <img src={movie.Poster} alt={movie.Title} />
      <div className='single-movie-info'>
        <h2>{movie.Title}</h2>
        <p>{movie.Plot}</p>
        <h4>{movie.Year}</h4>
        <Link to='/' className='btn'>
          back to movies
        </Link>
      </div>
    </section>
  );
};
export default SingleMovie;
