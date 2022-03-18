import Bounties from './components/pages/Bounties'
import Bounty from './components/pages/Bounty'
import Home from './components/pages/Home'

import './App.css';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'

function App() {
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
            element={<Bounties />}
          />

          <Route 
            path="/bounties/:id"
            element={<Bounty />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
