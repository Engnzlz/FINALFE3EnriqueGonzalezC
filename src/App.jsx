import { Outlet } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { AppProvider, ContextProvider } from "./Components/utils/global.context";


function App() {
  return (
    <AppProvider>
      <div className="App">
        <Navbar />

        <Outlet />

        <Footer />
      </div>
    </AppProvider>
  );
}

export default App;
