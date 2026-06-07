import { Link } from "react-router-dom";
import '../assets/styles/games.css';
import Header from "../components/Header";
import Footer from "../components/Footer";
import InsomniaPlaceholder from '../assets/images/i.png';
import LightPlaceholder from '../assets/images/the light.jpg';


export default function Games() {
  const gameList = [
    {
      id: "01",
      title: "INSOMNIA",
      status: "IN DEVELOPMENT",
      description: "A deep dive into atmospheric horror and psychological tension.",
      image: InsomniaPlaceholder,
      tag: "PSICHOLOGY HORROR"
    },
    {
      id: "02",
      title: "LIGHT",
      status: "RELEASED",
      description: "Immerse yourself in a mystery that tells the story of a lost world.",
      image: LightPlaceholder,
      tag: "HORROR"
    }
  ];

  return (
    <div className="material-wrapper">
      <Header />
      
      <main className="games-container">
        <header className="page-header">
          <div className="badge">GALLERY · PROJECTS</div>
          <h1 className="hero-title">OUR <span className="text-pink">GAMES.</span></h1>
        </header>

        <section className="games-grid">
          {gameList.map((game) => (
            <div key={game.id} className="game-card">
              <div className="card-media">
                <img src={game.image} alt={game.title} className="game-thumb" />
                <div className="card-badge fix">{game.status}</div>
              </div>
              
              <div className="card-content">
                <div className="card-top">
                  <h2 className="game-card-title">{game.title}</h2>
                  <span className="card-tag fix">{game.tag}</span>
                </div>
                <p className="game-card-desc">{game.description}</p>
                {game.title === "INSOMNIA" ? (
                    <Link to="/insomnia" className="card-btn">
                        VIEW GAME PAGE
                    </Link>
                    ) : (
                    <a href={`https://somiari.itch.io/${game.title}`} target="_blank" rel="noopener noreferrer" className="card-btn">
                        VIEW IN STORE
                    </a>
                    )}
              </div>
            </div>
          ))}
        </section>
      </main>

      <Footer />
    </div>
  );
}