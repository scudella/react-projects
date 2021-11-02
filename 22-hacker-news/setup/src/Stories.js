import React from 'react';

import { useGlobalContext } from './context';

const Stories = () => {
  const { news, loading, removeStory } = useGlobalContext();
  console.log(news);
  if (loading) {
    return <div className='loading'>Loading ...</div>;
  }
  if (!news) {
    return <div>News is empty</div>;
  }
  if (!news.hits) {
    return <div>hits is empty</div>;
  }
  const stories = news.hits;
  return (
    <section className='stories'>
      {stories.map((story) => {
        const {
          author,
          num_comments,
          objectID: id,
          points,
          title,
          story_title,
          url,
        } = story;

        return (
          <article key={id} className='story'>
            <h4 className='title'>
              {title ? title : story_title.substring(0, 80)}
            </h4>
            <p className='info'>
              {points} points by <span>{author} | </span>
              {num_comments} comments
            </p>
            <div>
              <a
                href={url}
                className='read-link'
                target='_blank'
                rel='noopener noreferrer'
              >
                read more
              </a>
              <button
                className='remove-btn'
                onClick={(e) => {
                  e.preventDefault();
                  removeStory(id);
                }}
              >
                remove
              </button>
            </div>
          </article>
        );
      })}
    </section>
  );
};

export default Stories;
