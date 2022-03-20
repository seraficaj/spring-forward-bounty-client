import { useEffect, useState } from 'react';
import axios from 'axios';

import { Button } from '@mui/material';

import Bounties from './components/pages/Bounties'
import Bounty from './components/pages/Bounty'
import Home from './components/pages/Home'

import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'

function App() {
  const [bounties, setBounties] = useState([]);
  useEffect(() => {
    axios.get(`${process.env.REACT_APP_SERVER_URL}/bounties`).then(res => {
      setBounties(res.data);
    })
  }, [])

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route 
            exact path="/"
            element={<Home />}
          />

          <Route 
            exact path="/bounties"
            element={<Bounties bounties={bounties} />}
          />

          <Route 
            path="/bounties/:id"
            element={<Bounty bounties={bounties}/>}
          />
        </Routes>
      </div>
      <Button variant="contained">Hello World</Button>
    </Router>
  );
}

export default App;
