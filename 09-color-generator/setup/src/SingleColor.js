import React, { useState, useEffect } from 'react';
import rgbToHex from './utils';

const SingleColor = ({ color, tint, shade }) => {
  const [alert, setAlert] = useState(false);

  const newColor = color.tint(tint).shade(shade);
  const hexColor = rgbToHex(...newColor.rgb);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(false);
    }, 3000);

    return () => clearTimeout(timeout);
  }, [alert]);

  const copyClipboard = async () => {
    try {
      setAlert(true);
      await navigator.clipboard.writeText(hexColor);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <article
      onClick={copyClipboard}
      className={`color ${shade ? 'color-light' : false}  `}
      style={{ backgroundColor: hexColor }}
    >
      <p className='percent-value'>{tint || shade}%</p>
      <p className='color-value'>{hexColor}</p>
      {alert && <p className='alert'>copied to clipboard</p>}
    </article>
  );
};

export default SingleColor;
