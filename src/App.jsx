import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Feed, Navbar } from "./components";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Feed />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
