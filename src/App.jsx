import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Feed, Footer, Navbar } from "./components";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Feed />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
