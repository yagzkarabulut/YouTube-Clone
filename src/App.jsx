import { BrowserRouter, Route, Routes } from "react-router-dom";
import Feed from "./pages/Feed";
import VideoDetail from "./pages/VideoDetail";
import SearchResult from "./pages/SearchResult";
import Header from "./components/Header";
import { RiH1 } from "react-icons/ri";
import Undefined from "./components/Undefined";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/watch" element={<VideoDetail />} />
        <Route path="/results" element={<SearchResult />} />
        <Route path="*" element={<Undefined />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
