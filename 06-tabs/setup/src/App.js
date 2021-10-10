import React, { useState, useEffect } from 'react';
import { FaAngleDoubleRight } from 'react-icons/fa';
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tabs-project';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [value, setValue] = useState(0);
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    async function fetchJobs() {
      try {
        const resp = await fetch(url);
        const data = await resp.json();
        setJobs(data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    }
    fetchJobs();
  }, []);

  const active = (ev, index) => {
    // const buttons = document.querySelectorAll('.job-btn');
    // buttons.forEach((button) => {
    //   button.classList.remove('active-btn');
    //   return <></>;
    // });

    // ev.target.classList.add('active-btn');
    setValue(index);
  };

  if (isLoading) {
    return (
      <section className='section loading'>
        <h1> Loading...</h1>;
      </section>
    );
  } else {
    const { title, dates, company, duties } = jobs[value];
    return (
      <section className='section'>
        <div className='title'>
          <h2>experience</h2>
          <div className='underline'></div>
        </div>
        <div className='jobs-center'>
          <div className='btn-container'>
            {jobs.map((job, index) => {
              const { company } = job;
              return (
                <button
                  key={index}
                  className={`job-btn ${index === value && 'active-btn'}`} // Curly brace string literals
                  onClick={(ev) => active(ev, index)}
                >
                  {company}
                </button>
              );
            })}
          </div>
          <article className='job-info'>
            <h3>{title}</h3>
            <h4>{company}</h4>
            <p className='job-date'>{dates}</p>
            {duties.map((duty, index) => {
              return (
                <div key={index} className='job-desc'>
                  <FaAngleDoubleRight className='job-icon' />
                  <p>{duty}</p>
                </div>
              );
            })}
          </article>
        </div>
        <button type='button' className='btn'>
          more info
        </button>
      </section>
    );
  }
}

export default App;
