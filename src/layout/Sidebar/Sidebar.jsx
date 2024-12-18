import { useEffect, useState, useContext } from 'react';
import { SidebarContext } from '../../context/SideBarContext';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClipboardCheck } from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation } from 'react-router-dom';
import { navigationLinks } from '../../data/data';
import './Sidebar.css';

const Sidebar = () => {
    const [sidebarClass, setSidebarClass] = useState("");
    const { isSidebarOpen } = useContext(SidebarContext);
    const location = useLocation(); // To get the current route location

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
                <div className="flex items-center space-x-2">
                    <FontAwesomeIcon icon={faClipboardCheck} className="text-white text-sm" />
                    <span className="font-bold text-xl text-black">Soar Task</span>
                </div>
            </div>

            <nav className="navigation">
                <ul className="nav-list">
                    {navigationLinks.map((navigationLink) => (
                        <li className="nav-item" key={navigationLink.id}>
                            <Link
                                to={navigationLink.path} // Uses the path from navigationLinks
                                className={`nav-link ${location.pathname === navigationLink.path ? 'active' : ''}`}>
                                <img src={navigationLink.image} className="nav-link-icon" alt={navigationLink.title} />
                                <span className="nav-link-text">{navigationLink.title}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
};

export default Sidebar;
