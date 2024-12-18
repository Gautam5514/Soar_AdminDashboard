import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import './index.css';
import Content from './layout/content/Content';
import Sidebar from './layout/Sidebar/Sidebar';
import Setting from './components/setting/Setting';

function App() {
  return (
    <Router>
      <div className='app'>
        <Sidebar />
        <Routes>
          <Route path="/" element={<Content />} />
          <Route path="/setting" element={<Setting />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
