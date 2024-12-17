import { useEffect, useState } from 'react';
import { navigationLinks } from '../../data/data';
import "./Sidebar.css";
import { useContext } from 'react';
import { SidebarContext } from '../../context/SideBarContext';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClipboardCheck } from "@fortawesome/free-solid-svg-icons";


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
                <div className="flex items-center space-x-2">
                    {/* Font Awesome Icon */}
                    <FontAwesomeIcon icon={faClipboardCheck} className="text-white text-sm" />
                    {/* Task Text */}
                    <span className="font-bold text-sm text-white">
                        Soar Task
                    </span>
                </div>
            </div>

            <nav className="navigation">
                <ul className="nav-list">
                    {
                        navigationLinks.map((navigationLink) => (
                            <li className="nav-item" key={navigationLink.id}>
                                <a href="#" className={`nav-link ${navigationLink.id === activeLinkIdx ? 'active' : null}`}>
                                    <img src={navigationLink.image} className="nav-link-icon" alt={navigationLink.title} />
                                    <span className="nav-link-text">{navigationLink.title}</span>
                                </a>
                            </li>
                        ))
                    }
                </ul>
            </nav>
        </div>
    )
}

export default Sidebar
