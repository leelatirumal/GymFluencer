import React, { useEffect, useRef } from 'react';
import './Part2.css';
import Part3 from './Part3';

function Part2() {
    const divRefs = useRef([]);

    useEffect(() => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('slide-in');
          } else {
            entry.target.classList.remove('slide-in');
          }
        });
      });
  
      divRefs.current.forEach((div) => {
        observer.observe(div);
      });
  
      return () => observer.disconnect();
    }, []);
  

  

  return (
    <>
    <div id="container-fluid" className='container'>
      <div ref={(div) => (divRefs.current[0] = div)} className="animated-step">
        <div className="image-container">
          <img src="https://shivlab.com/wp-content/uploads/2022/12/fitness-featured.png" alt="Image 1" />
        </div>
        <div className="text-container">
          <h2>Step 1: Click on Get Started
        </h2>
          <p>Start by opening the GymFluencer. The intuitive home screen gives 
            you quick access to all features.
        </p>
        </div>
      </div>

      {/* Repeat for the other 4 steps */}
      <div ref={(div) => (divRefs.current[1] = div)} className="animated-step">
        <div className="image-container">
          <img src="./StrengthLog-Workout-Log-v5-removebg-preview.png" alt="Image 2" />
        </div>
        <div className="text-container">
          <h2>Step 2: Log Your Exercises</h2>
          <p>Easily log your exercises by selecting from a wide range of activities.
             Track your progress with detailed logs.
            </p>
        </div>
      </div>

      <div ref={(div) => (divRefs.current[2] = div)} className="animated-step">
        <div className="image-container">
          <img src="./1611327373-screen-shot-2021-01-22-at-9-55-48-am-1611327358-removebg-preview.png" alt="Image 2" />
        </div>
        <div className="text-container">
          <h2>Step 3: Count Your Reps          
          </h2>
          <p>Count your reps with precision, ensuring every detail is logged. Stay informed on your progress.
            </p>
        </div>
      </div>

      <div ref={(div) => (divRefs.current[3] = div)} className="animated-step">
        <div className="image-container">
          <img src="https://i0.wp.com/www.strengthlog.com/wp-content/uploads/2022/04/StrengthLog-Workout-Tracker-Dark.png?resize=548%2C1024&ssl=1" alt="Image 2" />
        </div>
        <div className="text-container">
          <h2>Step 4: Track Your Progress
        </h2>
          <p>Review your workout stats and progress over time to stay motivated and reach your fitness goals.
            </p>
        </div>
      </div>

      <div ref={(div) => (divRefs.current[4] = div)} className="animated-step">
        <div className="image-container">
          <img src="https://www.kimfrenchfitness.com/storage/images-processed/w-850_h-auto_m-fit_s-any__Group%201014.png" alt="Image 2" />
        </div>
        <div className="text-container">
          <h2>Step 5: Review Your Progress
        </h2>
          <p>Check your workout summaries and progress over time to stay motivated 
            and achieve your fitness goals.
            </p>
        </div>
      </div>

      {/* ... */}
    </div>
    <Part3/>
    </>
  );
}

export default Part2;