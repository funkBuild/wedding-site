import React from 'react';

const WeddingInvitation = () => {
  return (
    <div className="invitation-container">
      <style>{`

      `}</style>
      
      <div className="shell-icon" />
      
      <div className="invite-text">YOU ARE INVITED TO</div>
      <div className="wedding-of">THE WEDDING OF</div>
      
      <div className="names">
        Matt &<br />
        Em
      </div>
      
      <div className="date-container">
        <div className="date-number">08</div>
        <div className="date-circle">11</div>
        <div className="date-number">25</div>
      </div>
      
      <div className="time">AT 2:30PM</div>
      
      <div className="location">
        North Thomson's Beach,<br />
        Rottnest Island
      </div>
    </div>
  );
};

export default WeddingInvitation;