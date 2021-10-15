import React, { useEffect } from 'react';

const Alert = (props) => {
  const { alert, setAlert, list } = props;
  const { msg, type } = alert;

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert({ show: false, msg: '', type: '' });
    }, 3000);
    return () => clearTimeout(timeout);
  }, [list, setAlert]);

  return <p className={`alert alert-${type}`}>{msg}</p>;
};

export default Alert;
