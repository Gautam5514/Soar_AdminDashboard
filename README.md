# Soar Admin Dashboard

## Overview
The Soar Admin Dashboard is a web application designed to provide an intuitive and efficient interface for managing various administrative tasks. This project is built using React and includes several components and features to enhance user experience.

## Project Structure
The project is organized into several directories, each containing specific components and assets:

- `src/`: Contains the main source code for the application.
  - `components/`: Contains reusable components used throughout the application.
  - `layout/`: Contains layout components such as the Sidebar and Content.
  - `context/`: Contains context providers for managing global state.
  - `data/`: Contains static data used in the application.
  - `App.jsx`: The main application component.
  - `index.css`: Global CSS styles.
  - `main.jsx`: Entry point for the React application.

## Getting Started
To get started with the project, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/soar-admin-dashboard.git
   cd soar-admin-dashboard
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the application:**
   ```bash
   npm start
   ```

## Components

### App.jsx
The main application component that sets up the router and defines the main layout of the application.
```jsx
// ...existing code...
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// ...existing code...
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
```

### Sidebar.jsx
The Sidebar component provides navigation links and user information.
```jsx
// ...existing code...
import { useEffect, useState, useContext } from 'react';
// ...existing code...
const Sidebar = () => {
    const [activeLinkIdx] = useState(1);
    const [sidebarClass, setSidebarClass] = useState("");
    const { isSidebarOpen } = useContext(SidebarContext);

    useEffect(() => {
        if (isSidebarOpen) {
            setSidebarClass('sidebar-change');
        } else {
            setSidebarClass('');
        }
    }, [isSidebarOpen]);

    return (
        <div className={`sidebar ${sidebarClass}`}>
            <div className="user-info ml-4">
                <div className="flex items-center space-x-">
                    <FontAwesomeIcon icon={faClipboardCheck} className="text-white text-sm" />
                    <span className="font-bold text-xl text-black">
                        Soar Task
                    </span>
                </div>
            </div>
            <nav className="navigation">
                <ul className="nav-list">
                    {navigationLinks.map((navigationLink) => (
                        <li className="nav-item" key={navigationLink.id}>
                            <Link to={navigationLink.path || '#'} className={`nav-link ${navigationLink.id === activeLinkIdx ? 'active' : ''}`}>
                                <img src={navigationLink.image} className="nav-link-icon" alt={navigationLink.title} />
                                <span className="nav-link-text">{navigationLink.title}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
}
export default Sidebar;
```

### ContentMain.jsx
The ContentMain component organizes various sections such as MyCardsSection, Transactions, and charts.
```jsx
// ...existing code...
import "./ContentMain.css";
import MyCardsSection from "../MyCard/MyCardSection";
import Transactions from "../Transactions/Transactions";
import QuickTransfer from "../QuickTransfer/QuickTransfer";
import ExpenseStatistics from "../ExpenseStatics/ExpenseStatics";
import BalanceHistoryChart from "../BalanceHistory/BalanceHistory";
import WeeklyActivityChart from "../WeeklyActiveChart/WeeklyActiveCharts";

const ContentMain = () => {
    return (
        <div className="main-content-holder">
            <div className="content-grid-one">
                <MyCardsSection />
                <MyCardsSection />
                <div>
                    <h3 className="text-black text-xl font-semibold mb-10 mt-5">Recent Transaction</h3>
                    <Transactions />
                </div>
            </div>
            <div className="seconddiv">
                <div className="flex mb-5 gap-5">
                    <WeeklyActivityChart />
                    <ExpenseStatistics />
                </div>
            </div>
            <div className="bottomdiv">
                <div className="flex gap-5 ">
                    <QuickTransfer />
                    <BalanceHistoryChart />
                </div>
            </div>
        </div>
    );
};
export default ContentMain;
```

### main.jsx
The entry point for the React application that renders the App component.
```jsx
// ...existing code...
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
```

