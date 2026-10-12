import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="page__container notfound__container">
      <p className="notfound__code">404</p>
      <h1 className="notfound__title">Page not found</h1>
      <p className="notfound__text">
        The page you're looking for doesn't exist or has moved.
      </p>
      <div className="notfound__links">
        <Link to="/home" className="notfound__link">Home</Link>
        <Link to="/link212" className="notfound__link">Link 212</Link>
        <Link to="/contact" className="notfound__link">Contact</Link>
      </div>
    </div>
  );
}
