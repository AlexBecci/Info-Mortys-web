import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Character from "./components/Character";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <div className="bg-slate-800">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/character/:id" element={<Character />}></Route>
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
