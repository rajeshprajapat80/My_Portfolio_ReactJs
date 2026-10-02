import { Link } from "react-router-dom";

function NotFound() {
  return (
    <section className="page not-found">
      <div>
        <div className="error-number">404</div>
        <h1>Page Not Found</h1>
        <p>The page you are looking for doesn't exist.</p>
        <Link to="/" className="btn primary">
          Back to Home
        </Link>
      </div>
    </section>
  );
}

export default NotFound;
