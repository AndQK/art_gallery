import Navbar from "./components/navigation/navbar";
import "./App.css";
import HomePage from "./pages/homepage";
import Gallery from "./pages/gallery";
import Quiz from "./pages/quiz";
import NotFound from "./pages/notfound";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
