import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Notfound from './sub/404';
import Jshinm from './sub/jshinm';
import './App.css';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Notfound />} />
        <Route path="/jshinm" element={<Jshinm />} />
      </Routes>
    </Router>
  );
}

export default App;
