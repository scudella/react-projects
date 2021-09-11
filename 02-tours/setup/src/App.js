import React, { useState, useEffect } from 'react';
import Loading from './Loading';
import Tours from './Tours';
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const fetchTours = () => {
    setIsLoading(true);
    fetch(url)
      .then((resp) => resp.json())
      .then((toursRecord) => {
        console.log(toursRecord);
        setIsLoading(false);
        setTours(toursRecord);
      })
      .catch((error) => console.log(error));
  };
  const removeTour = (id) => {
    setTours(tours.filter((tour) => tour.id !== id));
  };

  useEffect(() => fetchTours(), []);

  if (isLoading) {
    return <Loading />;
  }

  if (tours.length) {
    return (
      <>
        <main>
          <Tours tours={tours} removeTour={removeTour} />
        </main>
      </>
    );
  } else {
    return (
      <>
        <main>
          <div className="title">
            <h2>no tours left</h2>
            <button className="btn" onClick={() => fetchTours()}>
              refresh
            </button>
          </div>
        </main>
      </>
    );
  }
}

export default App;
