import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ScrollToTop } from './components/ScrollToTop';
import { ScrollToTopButton } from './components/ScrollToTopButton';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { ProgramPage } from './pages/ProgramPage';
import { Liste } from './pages/Liste';
import { Candidat } from './pages/Candidat'
import { EventsPage } from './pages/EventsPage';
import { ChapterPage } from './pages/ChapterPage';
import { MeasurePage } from './pages/MeasurePage';

export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
      offset: 120,
    });
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <ScrollToTopButton />
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/programme" element={<ProgramPage />} />
            <Route path="/programme/:chapter" element={<ChapterPage />} />
            <Route path="/programme/:chapter/:measure" element={<MeasurePage />} />
            <Route path="/liste" element={<Liste />} />
            <Route path="/candidat/:id" element={<Candidat />} />
            <Route path="/agenda" element={<EventsPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}