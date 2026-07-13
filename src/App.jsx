import Rotas from "./routes"
import AuthProvider from "./context/AuthContext"
import { useEffect } from "react"

function App() {

  useEffect(() => {
    const search = window.location.search;
    if (search.includes('/insomnia')) {
      window.history.replaceState(null, null, '/insomnia');
    }
  }, []);
  

  return (
      <AuthProvider>
        <Rotas />
      </AuthProvider>
  );

}

export default App
