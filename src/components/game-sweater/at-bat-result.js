import React, { useEffect } from 'react';

const AtBatResult = ({ eventData, onClose }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      onClose();
    }, 5000);

    return () => {
      clearTimeout(timeout);
    };
  }, [onClose]);

  return (
    <div className="floating-div">
      {/* Render the information from the event */}
      <p>{eventData}</p>
    </div>
  );
};

export default AtBatResult;
