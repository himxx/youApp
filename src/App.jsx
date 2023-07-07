import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { ChannelDetail, Feed, Footer, Navbar, SearchFeed } from "./components";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Feed />} />
        <Route  path="/channel/:id" element={<ChannelDetail />} />
        <Route  path="/search/:searchTerm" element={<SearchFeed />} />

      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
