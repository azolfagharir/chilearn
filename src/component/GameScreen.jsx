import React, { useState } from 'react';

const GameScreen = () => {
  const [circles, setCircles] = useState([]);

  // Function to handle touch or click events
  const handleTouchOrClick = (event) => {
    const { clientX, clientY } = event.touches ? event.touches[0] : event;
    const newCircle = { x: clientX, y: clientY };

    // Add the new circle to the list of circles
    setCircles([...circles, newCircle]);
  };

  return (
    <div
      /*style={{ position: 'relative', width: '100vw', height: '100vh', backgroundColor: 'lightblue', backgroundOpacity: '0',}}*/
      className='realtive w-full h-full bg-lime-200 bg-opacity-0'
      onTouchStart={handleTouchOrClick} // For touch events
      onClick={handleTouchOrClick} // For mouse clicks
    >
      {/* Render circles at the touch/click locations */}
      {circles.map((circle, index) => (
        <div
          key={index}
          style={{
            position: 'absolute',
            left: circle.x - 25, // Adjust the size of the circle
            top: circle.y - 25, // Adjust the size of the circle
            width: 50, // Adjust the size of the circle
            height: 50, // Adjust the size of the circle
            borderRadius: '50%',
            backgroundColor: 'green',
          }}
        />
      ))}
    </div>
  );
};

export default GameScreen;
