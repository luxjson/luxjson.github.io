
export function Home() {
  return (
    <main className="page home-page">
      <section className="hero">
        <h1>Undead Pixel Games</h1>
        <p className="subtitle">Indie game studio — projetos experimentais e pixel art</p>
        <div className="hero-actions">
          <a className="btn" href="/games">Ver jogos</a>
          <a className="btn btn-outline" href="/contact">Contato</a>
        </div>
      </section>

      <section className="about">
        <h2>Sobre</h2>
        <p>Estúdio indie focado em experiências imersivas com pixel art e design experimental.</p>
      </section>
    </main>
  );
}

export function Games() {
  return (
    <main className="page games-page">
      <h1>Games</h1>
      <p>Lista de jogos e projetos.</p>

      <div className="games-grid">
        <article className="game-card">
          <h3>Projeto Alpha</h3>
          <p>Descrição curta do projeto.</p>
          <a className="link" href="#">Saiba mais</a>
        </article>

        <article className="game-card">
          <h3>Projeto Beta</h3>
          <p>Descrição curta do projeto.</p>
          <a className="link" href="#">Saiba mais</a>
        </article>
      </div>
    </main>
  );
}

export function Contact() {
  return (
    <main className="page contact-page">
      <h1>Contato</h1>
      <p>Tem um convite, partnership ou só quer conversar? Envie um e-mail:</p>
      <a className="email" href="mailto:contato@undeadpixel.com">contato@undeadpixel.com</a>

      <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
        <label>
          Nome
          <input name="name" type="text" />
        </label>
        <label>
          Mensagem
          <textarea name="message" rows="6" />
        </label>
        <button className="btn" type="submit">Enviar</button>
      </form>
    </main>
  );
}