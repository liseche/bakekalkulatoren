import React, { useEffect, useState } from 'react';
import './App.css';

const App: React.FC = () => {
  const [inputValue, setInputValue] = useState('');
  const handleSendClick = () => {
    if (inputValue) {
      alert(`You entered: ${inputValue}`);
    } else {
      alert('Please enter some text!');
    }
  };

  return (
    <div className="app-container">
      <div className="cute-header">
        <h1 className="headerTitle">
          Bakekalkulatoren
          <img
            src="/whisk.png"
            alt="Cute Icon"
            className="headerIcon sparkle"
          />
        </h1>
      </div>
      <div className="content"> {/* Main content area */}
        <div>En side som konverterer ingredienser i oppskrifter til måleenheter du eier.</div>
        <div className="grid-container">
          {/* First column with check-off boxes */}
          <div className="checkbox-column">
            <h3>Velg ingrediens&shy;målene du har:</h3>
            <div className="checkbox-list">
              <label><input type="checkbox" /> Litermål</label>
              <label><input type="checkbox" /> Kjøkkenvekt</label>
              <label><input type="checkbox" /> Mummikopp</label>
              <label><input type="checkbox" /> Teskje</label>
              <label><input type="checkbox" /> Spiseskje</label>
              <label><input type='checkbox' /> Vannkoker</label>
              <label><input type='checkbox' /> Linjal</label>
              {/* Add more checkboxes as needed */}
            </div>
          </div>

          {/* Second column for inserting text */}
          <div className="input-column">
            <textarea
              className="big-text-field"
              placeholder="Lim inn oppskriften din her..."
            ></textarea>
          </div>

          {/* Third column to display text */}
          <div className="display-column">
            <div className="display-text">
              (Den konverterte oppskriften vil dukke opp her)
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;