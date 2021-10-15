import React, { useState, useEffect } from 'react';
import List from './List';
import Alert from './Alert';

const getLocalStorage = () => {
  let list = localStorage.getItem('list');
  if (list) {
    return (list = JSON.parse(localStorage.getItem('list')));
  } else {
    return [];
  }
};

function App() {
  const [item, setItem] = useState('');
  const [alert, setAlert] = useState({ show: false, msg: '', type: '' });
  const [list, setList] = useState(getLocalStorage);
  const [submitMode, setSubmitMode] = useState(true);
  const [editIndex, setEditIndex] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (item) {
      setAlert({ show: true, msg: 'item added to the list', type: 'success' });
      const newItem = { id: new Date().getTime().toString(), title: item };
      setList([...list, newItem]);
      setItem('');
    } else setAlert({ show: true, msg: 'please enter value', type: 'danger' });
  };

  const remove = (index) => {
    const newList = [...list];
    newList.splice(index, 1);
    setList(newList);
    setAlert({ show: true, msg: 'item removed', type: 'danger' });
  };

  const deleteAll = () => {
    setList([]);
    setAlert({ show: true, msg: 'empty list', type: 'danger' });
  };

  const handleEdit = (e) => {
    e.preventDefault();
    if (item) {
      setAlert({ show: true, msg: 'value changed', type: 'success' });
      const newList = [...list];
      const newItem = { id: newList[editIndex].id, title: item };
      newList[editIndex] = newItem;
      setList(newList);
      setItem('');
      setSubmitMode(true);
    } else {
      setAlert({ show: true, msg: 'please enter value', type: 'danger' });
    }
  };

  const edit = (index) => {
    setEditIndex(index);
    setSubmitMode(false);
    const { title } = list[index];
    setItem(title);
  };

  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(list));
  }, [list]);

  return (
    <section className='section-center'>
      <form
        onSubmit={submitMode ? handleSubmit : handleEdit}
        className='grocery-form'
      >
        {alert.show && <Alert alert={alert} setAlert={setAlert} list={list} />}
        <h3>grocery bud</h3>
        <div className='form-control'>
          <input
            type='text'
            className='grocery'
            placeholder='e.g. eggs'
            value={item}
            onChange={(e) => setItem(e.target.value)}
          />
          <button type='submit' className='submit-btn'>
            {submitMode ? 'submit' : 'edit'}
          </button>
        </div>
      </form>
      {list.length > 0 && (
        <div className='grocery-container'>
          <List list={list} remove={remove} edit={edit} />
          <button onClick={deleteAll} className='clear-btn'>
            clear items
          </button>
        </div>
      )}
    </section>
  );
}

export default App;
