import "./Content.css";
import ContentTop from "../../components/ContentTop/ContentTop";
import ContentMain from "../../components/ContentMain/ContentMain";

const Content = () => {
    return (
        <div>
            <ContentTop />

            <div className="main-content">
                <ContentMain />
            </div>
        </div>
    );
};

export default Content;
