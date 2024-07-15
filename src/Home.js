import { useState } from 'react';
import {surprise, getDateIdea} from './scripts/getIdea'
import './Home.css'; // Import the CSS for styling

const Home = () => {
    const [popup, setPopup] = useState({ visible: false, idea: null, type: null });
  
    const handleButtonClick = (type) => {
      const idea = type === 'surprise' ? surprise() : getDateIdea(type);
      setPopup({ visible: true, idea, type });
    };
  
    const closePopup = () => {
      setPopup({ visible: false, idea: null, type: null });
    };
  
    const redoIdea = () => {
      const idea = popup.type === 'surprise' ? surprise() : getDateIdea(popup.type);
      setPopup({ ...popup, idea });
    };
  
    return (
      <div className="home">
        <div className="button-container">
          <button className="date-button" onClick={() => handleButtonClick('surprise')}>Surprise Me!</button>
        </div>
        <div className="button-container">
          <button className="date-button" onClick={() => handleButtonClick('longDistanceDates')}>Long Distance Dates</button>
          <button className="date-button" onClick={() => handleButtonClick('freeDates')}>Free Dates</button>
          <button className="date-button" onClick={() => handleButtonClick('datesToDressUpFor')}>Dates to Dress Up For</button>
          <button className="date-button" onClick={() => handleButtonClick('lateNightDates')}>Late Night Dates</button>
          <button className="date-button" onClick={() => handleButtonClick('daytimeDates')}>Daytime Dates</button>
        </div>
        {popup.visible && (
          <div className="popup">
            <div className="popup-content">
              <div style={{width: '100%', display: 'flex', justifyContent: 'end'}}>
                <button className="close-button" onClick={closePopup}>×</button>
              </div>
              <h2>{popup.idea.idea}</h2>
              <p>{popup.idea.description}</p>
              <button className="redo-button" onClick={redoIdea}>Redo</button>
            </div>
          </div>
        )}
      </div>
    );
  };
  
  
export default Home;
