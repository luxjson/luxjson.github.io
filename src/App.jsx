import Rotas from './routes';
import AuthProvider from './context/AuthContext';

/**
 * O useEffect de URL redirect foi removido.
 * O React Router já lida com isso nativamente via <Route path="/insomnia">.
 * Aquele código substituía a URL manualmente, o que causava um flash no histórico.
 */
function App() {
  return (
    <AuthProvider>
      <Rotas />
    </AuthProvider>
  );
}

export default App;
