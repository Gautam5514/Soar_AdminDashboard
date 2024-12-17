import './App.css';
import './index.css';
import Content from './layout/content/Content';
import Sidebar from './layout/Sidebar/Sidebar';

function App() {
  return (
    <>
      <div className='app'>
        <Sidebar />
        <Content />
      </div>
    </>
  )
}

export default App
