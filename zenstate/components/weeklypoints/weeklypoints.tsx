import React from 'react';
import './WeekForm.css';

const WeekForm: React.FC = () => {
  const inputBackgroundColor = 'rgba(255, 255, 255, 0.5)'; 

  return (
    <div className="week-form">
      <form>
        <div>
          {/* First Row: weekdays */}
          <div className="weekdays">
            <div className="day">Sun</div>
            <div className="day">Mon</div>
            <div className="day">Tue</div>
            <div className="day">Wed</div>
            <div className="day">Thu</div>
            <div className="day">Fri</div>
            <div className="day">Sat</div>
          </div>
          {/* Second Row: Points */}
          <div className="points">
            {[0, 0, 0, 0, 0, 0, 0].map((point, index) => (
              <div key={index} className="cell">
                <input
                  type="number"
                  value={point}
                  className="input-cell"
                  readOnly
                />
              </div>
            ))}
          </div>
        </div>
      </form>
    </div>
  );
};

export default WeekForm;
