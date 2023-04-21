import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import TeamStats from './components/containers/team-stats'
import reportWebVitals from './reportWebVitals';
import AddDropScheduler from './components/add-drop-scheduler/schedule-add-drops';
import GameWeatherContainer from './components/game-weather/game-weather-container'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<BrowserRouter>
<Routes>
        {/* <Route path="/" element={<Layout />}> */}
          <Route index element={<App />} />
          <Route path="team-stats" element={<TeamStats />} />
          <Route 
          path="add-drop-scheduler" 
          element={<AddDropScheduler></AddDropScheduler>} />
          <Route path="game-weather" element={<GameWeatherContainer></GameWeatherContainer>} />
          <Route path="*" element={<App />} />
        {/* </Route> */}
      </Routes>
    
</BrowserRouter>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
