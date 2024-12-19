import ContentTop from "../ContentTop/ContentTop";
import "./Setting.css";
import { Link } from 'react-router-dom';
function Setting() {
    return (
        <div className="top flex-auto" >
            <ContentTop />
        <div className="profile-container">
            
            <div className="form-header ">
                <h3 className="">Edit Profile</h3>
                <div className="tabs">
                    
                <Link to="/preferences" className="pre">Preferences</Link>
                <Link to="/security">Security</Link>
                </div>
            </div>

            <div className="profile-content">
                {/* Profile Image */}
                <div className="profile-image">
                    <img src="./person_three.jpg" alt="Profile" />
                </div>

                {/* Form */}
                <form className="profile-form">
                    <div className="form-group">
                        <label>Your Name</label>
                        <input type="text" placeholder="Charlene Reed" />
                    </div>
                    <div className="form-group">
                        <label>User Name</label>
                        <input type="text" placeholder="Charlene Reed" />
                    </div>

                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" placeholder="charlenereed@gmail.com" />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" placeholder="**********" />
                    </div>

                    <div className="form-group">
                        <label>Date of Birth</label>
                        <input type="text" placeholder="25 January 1990" />
                    </div>
                    <div className="form-group">
                        <label>Present Address</label>
                        <input type="text" placeholder="San Jose, California, USA" />
                    </div>

                    <div className="form-group">
                        <label>Permanent Address</label>
                        <input type="text" placeholder="San Jose, California, USA" />
                    </div>
                    <div className="form-group">
                        <label>City</label>
                        <input type="text" placeholder="San Jose" />
                    </div>

                    <div className="form-group">
                        <label>Postal Code</label>
                        <input type="text" placeholder="45962" />
                    </div>
                    <div className="form-group">
                        <label>Country</label>
                        <input type="text" placeholder="USA" />
                    </div>

                    {/* Save Button */}
                    <div className="save-btn">
                        <button type="submit">Save</button>
                    </div>
                </form>
            </div>
        </div>
        </div>
    );
}

export default Setting;
