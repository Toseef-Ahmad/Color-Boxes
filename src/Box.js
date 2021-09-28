import React, { useState, useEffect } from 'react';

export const Box = (props) => {
  const [color, setColor] = useState(null);
  useEffect(() => {
    genrateRandomColor();
  }, []);

  let red = 0;
  let green = 0;
  let blue = 0;

  const styles = {
    colorBox: {
      width: 200,
      height: 200,
      backgroundColor: `rgb(${color})`,
    },
  };

  const genrateRandomColor = () => {
    red = Math.floor(Math.random() * 256);
    green = Math.floor(Math.random() * 256);
    blue = Math.floor(Math.random() * 256);
    setColor([red, green, blue]);
  };

  return (
    <>
      <div style={styles.colorBox} onClick={genrateRandomColor}></div>
    </>
  );
};
