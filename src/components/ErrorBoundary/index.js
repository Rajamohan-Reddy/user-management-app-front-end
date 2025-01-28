import { Link } from "react-router-dom";
import "./index.css";

const ErrorBoundary = () => (
  <div className="error-boundary-container">
    <img
      src="https://res.cloudinary.com/dchkvmpzf/image/upload/v1738002167/aoesrf96uiuhdeijqmpn.jpg"
      alt="avatar"
      className="form-logo"
    />
    <h1 className="lost-way-heading">Page Not Found!</h1>
    <p className="direction-paragraph">Click on the below button to navigate</p>
    <Link to="/" className="link-item">
      <button className="home-btn">Home</button>
    </Link>
  </div>
);

export default ErrorBoundary;
