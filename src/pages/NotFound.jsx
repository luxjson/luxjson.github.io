import { Link } from 'react-router-dom';
import '../assets/styles/notfound.css';

export default function NotFound() {
  return (
    <div className="not-found-container">
      <i className="fa-solid fa-ban"></i>
      <Link to="/" className="back-home-btn">
        Voltar para o início
      </Link>
    </div>
  );
}