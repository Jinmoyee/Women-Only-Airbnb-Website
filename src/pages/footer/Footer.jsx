import "./footer.css";

export default function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-item">
        <span className="span">SHE SHARE</span>
        <ul>
          <li>About us</li>
          <li>Careers</li>
          <li>Contact Us</li>
          <li>Follow Us</li>
        </ul>
      </div>
      <div className="footer-item">
        <span className="span">SUPPORT</span>
        <ul>
          <li>FAQ's</li>
          <li>Cancellation Policy</li>
        </ul>
      </div>
      <div className="footer-item">
        <span className="span">BECOME A HOST</span>
        <ul>
          <li>Hosting Resources</li>
          <li>Hosting Resources</li>
          <li>Share a room</li>
          <li>Pets</li>
        </ul>
      </div>
      <div className="footer-item">
        <span className="span">TERMS AND POLICY</span>
        <ul>
          <li>Terms and Conditions</li>
          <li>Privacy Policy</li>
        </ul>
      </div>
    </div>
  );
}
