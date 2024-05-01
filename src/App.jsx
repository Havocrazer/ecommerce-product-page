import LandingPage from "./pages/LandingPage";
import { ImageProvider } from "./context/ImageContext.jsx";
import { ItemCartProvider } from "./context/ItemCartContext.jsx";
import "./App.css";

function App() {
  return (
    <ImageProvider>
      <ItemCartProvider>
        <LandingPage />
      </ItemCartProvider>
    </ImageProvider>
  );
}

export default App;
