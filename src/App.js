import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Sliders from "./components/Sliders/Sliders";
import DiscoverPage from "./components/DiscoverPage/DiscoverPage";
import Features from "./components/Features/Features";
import Benefits from "./components/Benefits/Benefits";
import VideoCollections from "./components/VideoCollections/VideoCollections";
import Partners from "./components/Partners/Partners";
import TagPage from "./components/TagPage/TagPage";
import Platforms from "./components/Platforms/Platforms";

function App() {
  return (
    <div className="clipmine-container">
      <Navbar />
      <Sliders />
      <DiscoverPage />
      <Features />
      <Benefits />
      <VideoCollections />
      <Partners />
      <TagPage />
      <Platforms />
    </div>
  );
}

export default App;
