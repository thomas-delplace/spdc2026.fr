import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useContext, useEffect } from 'react';
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
import { useLightbox } from './context/LightboxContext';
import { X } from 'lucide-react';
import ScrollBlocker from 'react-scroll-blocker'
import GalleryPage from './pages/GalleryPage'


export default function App() {
  const { lightbox, closelb } = useLightbox()
  const { open, src, alt } = lightbox
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
        <div className={open ?  'blur app' : 'app'}>
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
                    <Route path="/galerie" element={<GalleryPage />} />
                  </Routes>
                </main>
            <Footer />
          </div>
        </div>
        {open && (
          <>
          <ScrollBlocker/>
        <div
          style={{
            position: 'fixed',
            top:0,
            left:0,
            width:'100vw',
            height:'100vh',
            zIndex: 9999,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            background: 'rgba(255,255,255,0.3)',
            cursor:'pointer'
          }} onClick={()=>{closelb()}}
        >
          <div style={{
               position: 'absolute',
               right: '16px',
               top: '16px',
               width: '48px',
               height: '48px',
               cursor: 'pointer',
               zIndex: 10000,
               backgroundColor:'var(--color-blue-600)',
               borderRadius:'50%',
               display:'flex',
               justifyContent:'center',
               alignItems:'center'
          }}>
            <X style={{
               width:'32px',
               height:'32px',
               color:'white'
              }}
            onClick={() => {closelb()}}/>
          </div>
          
            <img src={src} alt={alt} style={{outline:'10px solid white', maxWidth:'80vw', maxHeight:'80vh', boxShadow:'0px 0px 30px -5px rgba(0,0,0,0.9)'}}/>
        </div>
        </>)}
      </Router>
  );
}