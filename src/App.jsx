import React, { useState } from 'react';
import './App.css';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import profilePic from "./assets/profile.jpg";

const App = () => {
  const [value, setValue] = useState(0);
  const [steps, setSteps] = useState(1);
  const [allowNegative, setAllowNegative] = useState(true);

  const [lowerBound, setLowerBound] = useState(allowNegative ? -100 : 0);
  const [upperBound, setUpperBound] = useState(100);

  const increment = () => {
    if (value + steps <= upperBound) setValue(value + steps);
  };

  const decrement = () => {
    if (value - steps >= lowerBound) setValue(value - steps);
  };

  const handleStepChange = (e) => {
    const num = Number(e.target.value);
    if (!isNaN(num) && num >= 1) setSteps(num);
  };

  const handleLowerBoundChange = (e) => {
    const num = Number(e.target.value);
    if (!isNaN(num) && num < upperBound) {
      setLowerBound(num);
      if (value < num) setValue(num);
    }
  };

  const handleUpperBoundChange = (e) => {
    const num = Number(e.target.value);
    if (!isNaN(num) && num > lowerBound) {
      setUpperBound(num);
      if (value > num) setValue(num);
    }
  };

  const handleAllowNegativeChange = () => {
    const newAllow = !allowNegative;
    setAllowNegative(newAllow);
    if (!newAllow && lowerBound < 0) {
      setLowerBound(0);
      if (value < 0) setValue(0);
    }
  };

  return (
    <div>
      <div className="container">
        <div className="heading-box">
          <h1 className="heading">Counter App</h1>
        </div>

        <div className="App">
          <h1 className="title">COUNTER</h1>

          <div className="display">
            <span className="number">{value}</span>
          </div>

          <div className="bounds-inputs">
            <input
              type="number"
              value={upperBound}
              onChange={handleUpperBoundChange}
              className="bounds"
              min={lowerBound + 1}
            />
            <input
              type="number"
              value={lowerBound}
              onChange={handleLowerBoundChange}
              className="bounds"
              min={allowNegative ? -9999 : 0}
            />
          </div>

          <div className="Button">
            <button
              className="btn inc"
              onClick={increment}
              disabled={value + steps > upperBound}
            >
              +
            </button>
            <button className="reset" onClick={() => setValue(0)}>Reset</button>
            <button
              className="btn dec"
              onClick={decrement}
              disabled={value - steps < lowerBound}
            >
              -
            </button>
          </div>

          <div>
            <input
              type="number"
              value={steps}
              onChange={handleStepChange}
              className="steps-input"
              min="1"
            />
          </div>

          <div className="checkbox">
            <label>
              <input
                type="checkbox"
                checked={allowNegative}
                onChange={handleAllowNegativeChange}
              />
              Allow Negative
            </label>
          </div>
        </div>
      </div>

      <footer>
        <div className="about-app">
          <h2>About App</h2>
          <p>
            The Counter App is a small React project that lets you increase, decrease,or reset a number. It comes with extra features like setting upper and lower limits, choosing step size, and an option to allow or block negative numbers.
          </p>
          <p>
            Built using React hooks and styled with modern CSS, this app shows how simple ideas can be made more useful with customization.
          </p>
        </div>

        <div className="bottom-panels">
          <div className="panel developer-panel">
            <h3>Developer Info</h3>
            <img src={profilePic} alt="Developer" className="profile-pic" />

            <div className="name-box">
              <p className="username">Prateek Amar Batham</p>
              <p className="rollno">Roll No.: 25/WD-FSWD-A4/JULY-6162</p>
            </div>

            <p className="bio">
              I’m a B.Tech CSD student at MITS-DU Gwalior, passionate about web development,
              UI/UX design, and building interactive apps that balance functionality with creativity.
              Skilled in HTML, CSS, JavaScript, React, and currently exploring full-stack development with MERN.
            </p>
          </div>

          <div className="panel contact-panel">
            <h3>Contact the Developer</h3>
            <div className="contact-boxes">
              <div className="contact-box">
                <FaGithub className="contact-icon" />
                <a
                  href="https://github.com/Omyx0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-btn"
                >
                  GitHub
                </a>
              </div>

              <div className="contact-box">
                <FaLinkedin className="contact-icon" />
                <a
                  href="https://www.linkedin.com/in/prateek-amar-batham-827734329/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-btn"
                >
                  LinkedIn
                </a>
              </div>
            </div>
            <p className="email-text">
              <MdEmail />om31batham10@gmail.com
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;