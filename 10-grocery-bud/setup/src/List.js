import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
const List = (props) => {
  const { list, remove, edit } = props;

  return (
    <>
      <div className='grocery-list'>
        {list.map((item, index) => {
          const { id, title } = item;
          return (
            <article key={id} className='grocery-item'>
              <p className='title'>{title}</p>
              <div className='btn-container'>
                <button
                  type='button'
                  className='edit-btn'
                  onClick={() => edit(index)}
                >
                  <FaEdit />
                </button>
                <button
                  type='button'
                  className='delete-btn'
                  onClick={() => remove(index)}
                >
                  <FaTrash />
                </button>
              </div>
            </article>
          );
        })}
      </div>
    </>
  );
};

export default List;
