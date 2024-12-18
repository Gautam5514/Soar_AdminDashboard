import { iconsImgs } from "../../utils/images";
import "./ContentTop.css";
import { useContext } from "react";
import { SidebarContext } from "../../context/SideBarContext";

const ContentTop = () => {
    const { toggleSidebar } = useContext(SidebarContext);
    return (
        <div className="main-content-top">
            <div className="content-top-left">
                <button
                    type="button"
                    className="sidebar-toggler"
                    onClick={() => toggleSidebar()}
                >
                    <img src={iconsImgs.menu} alt="" />
                </button>
                <h3 className="content-top-title">Overview</h3>
            </div>
            <div className="content-top-btns mr-[50px] ">
                <div className="searchbar">
                    <span>
                        <img src={iconsImgs.search} alt="" />
                    </span>
                    <input type="text" placeholder="Search for something" />
                </div>
                <button type="button" className="search-btn content-top-btn">
                    <i className="fa-solid fa-gear"></i>
                </button>
                <button className="notification-btn content-top-btn">
                    <img src={iconsImgs.bell} />
                    <span className="notification-btn-dot"></span>
                </button>
                <div className="account">
                    <img src="./person_three.jpg" alt="" />
                </div>
            </div>
        </div>
    );
};

export default ContentTop;
