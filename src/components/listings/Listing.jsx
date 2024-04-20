import tests from "../../database/test.json";
import { FaIndianRupeeSign } from "react-icons/fa6";
import "./listing.css";

export default function Listing() {
  return (
    <div className="listing-container" id="rent">
      {tests.map((test) => {
        return (
          // eslint-disable-next-line react/jsx-key
          <div className="listings">
            <div className="image-container">
              <img className="image" src={test.image} alt="" />
            </div>
            <div className="listing-text">
              <span className="name">{test.name}</span>
              <div>{test.availability}</div>
              <div>{test.distance_km} kilometers away</div>
              <div className="pricing">
                <FaIndianRupeeSign className="icon" size={17} />
                <div>{test.pricing}</div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
