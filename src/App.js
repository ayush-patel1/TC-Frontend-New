import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Aavartan from "./pages/Aavartan";
import Vigyaan from "./pages/Vigyaan";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Spons from "./sections/Spons";
import Navigation from "./layout/Navigation";
import ScrollTop from "./layout/ScrollTop";
import Login from "./layout/Login";
import HailTechno from "./layout/HailTechno";
import styled from 'styled-components';
// import ParticlesBackground from "./layout/ParticlesBackground";
import BackgroundVideo from "./layout/BackgroundVideo";
import ProblemStatements from "./pages/ProblemStatements";
import EventsGalleryPage from "./pages/EventsGalleryPage";
import VigyaanGalleryPage from "./pages/VigyaanGalleryPage";

const BackgroundContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
`;

const ContentContainer = styled.div`
  position: relative;
  z-index: 1;
`;

function App() {
  return (
    <div>
      <ContentContainer>
      <BrowserRouter>
        <Navbar />
        <Navigation/>
        <Login/>
        <ScrollTop/>
        <HailTechno/>
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route exact path="/aavartan" element={<Aavartan />} />
          <Route exact path="/aavartan/gallery" element={<EventsGalleryPage />} />
          <Route exact path="/vigyaan/gallery" element={<VigyaanGalleryPage />} />
          <Route exact path="/vigyaan" element={<Vigyaan />} />
          <Route exact path="/vigyaan/statements" element={<ProblemStatements />} />
          <Route exact path="/sponsors" element={<Spons />} />
        </Routes>
        <Footer />
      </BrowserRouter>
      </ContentContainer>
        <BackgroundContainer>
          {/* <ParticlesBackground/> */}
          <BackgroundVideo/>
        </BackgroundContainer>
    </div>
  );
}

export default App;
