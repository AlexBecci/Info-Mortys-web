import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { Home } from "./components/Home";
import { CharacterDetails } from "./components/Character";
import EpisodeDetails from "./components/Episode";

function App() {
  return (
    <Router>
      <div className="bg-slate-800 font-bold text-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/character/:id" element={<CharacterDetails />}></Route>
          <Route path="/episode/:id" element={<EpisodeDetails />}></Route>

        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
