import React from 'react';
import { useParams, Link } from 'react-router-dom';
import useFetch from './useFetch';
const urlNoPicture =
  'https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png';

const SingleMovie = () => {
  const { id } = useParams();
  const { loading, error, data: movie } = useFetch(`&i=${id}`);

  if (loading) {
    return <div className='loading'>Loading ...</div>;
  }

  if (error.show) {
    return (
      <div className='page-error'>
        <h1>{error.msg}</h1>
        <Link to='/' className='btn'>
          back to movies
        </Link>
      </div>
    );
  }

  movie.Poster = movie.Poster !== 'N/A' ? movie.Poster : urlNoPicture;

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
