import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/HomePage/Home.jsx";
import Book from "./components/Book/Book";
import History from "./components/History/History";
import "./App.css";
import AboutUs from "./components/AboutUs/AboutUs";
import News from "./components/News/News";
import Contact from "./components/Contact/Contact";
import General from "./components/General/General";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/general" element={<General />}></Route>
          <Route path="/book" element={<Book />}></Route>
          <Route path="/history" element={<History />}></Route>
          <Route path="/news" element={<News />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/about" element={<AboutUs />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
