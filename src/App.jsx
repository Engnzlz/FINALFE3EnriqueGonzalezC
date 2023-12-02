import { Outlet } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from "./Routes/Home";
import { AppProvider, useAppContext } from "./Components/utils/global.context"; // Importa useAppContext

function App() {
  const { state } = useAppContext(); // Usa useAppContext para obtener el estado global

  // Aplica la clase CSS correspondiente al tema
  const themeClass = state.theme === 'dark' ? 'dark' : '';

  return (
    <AppProvider>
      <div className={`App ${themeClass}`}> {/* Aplica la clase CSS correspondiente al tema */}
        <Home />
        <Outlet />
        <Footer />
      </div>
    </AppProvider>
  );
}

export default App;
