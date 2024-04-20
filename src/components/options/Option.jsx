import { FiPlus } from "react-icons/fi";
import "./option.css";
import Sidebar from "../sidebar/Sidebar";

export default function Option() {
  return (
    <div className="main-container">
      <div className="option-container">
        <div className="share-container">
          <div className="share-room">
            <input type="file" id="file" name="file" />
            <label htmlFor="file" className="">
              <div className="icon-container">
                <FiPlus size={70} className="icon" />
              </div>
              <span className="text">Share a room</span>
            </label>
          </div>
        </div>
        <a href="#rent" className="rent-room">
          <div className="image-container">
            {/* <img src={Hero} alt="" className="hero-img" /> */}
          </div>
          <div className="rent-text-tag">RENT A ROOM</div>
        </a>
      </div>
      <div className="sidebar-container">
        <Sidebar />
      </div>
    </div>
  );
}
