import { Link } from "react-router-dom";
import "./notfound.css";

function NotFound() {
  return (
    <div className="not-found-container">
      <div className="spinner"></div>
      <h1>Oops!</h1>
      <p>We couldn't find the page you're looking for.</p>
      <p>
        But don't worry, you can always go back to our{" "}
        <Link to="/">homepage</Link>.
      </p>
    </div>
  );
}

export default NotFound;
