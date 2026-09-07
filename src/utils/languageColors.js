/**
 * Retorna a cor canônica de uma linguagem de programação.
 * Extraído de luxjson.jsx para reutilização.
 */
export function getLanguageColor(language) {
  const colors = {
    JavaScript: '#f1e05a',
    TypeScript: '#3178c6',
    Python: '#3572A5',
    HTML: '#e34c26',
    CSS: '#563d7c',
    Java: '#b07219',
    C: '#555555',
    'C++': '#f34b7d',
    'C#': '#178600',
    Ruby: '#701516',
    PHP: '#4F5D95',
    Go: '#00ADD8',
    Rust: '#dea584',
    Swift: '#ffac45',
    Kotlin: '#A97BFF',
    Dart: '#00B4AB',
    Vue: '#41b883',
    React: '#61dafb',
    Angular: '#dd0031',
    Node: '#68a063',
    Express: '#000000',
    MongoDB: '#47A248',
    PostgreSQL: '#336791',
    MySQL: '#4479A1',
    Firebase: '#FFCA28',
    Docker: '#2496ED',
    Kubernetes: '#326CE5',
    AWS: '#FF9900',
    Azure: '#0078D4',
    GCP: '#4285F4',
  };
  return colors[language] || '#6c757d';
}
