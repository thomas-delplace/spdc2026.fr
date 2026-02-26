import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';
import SocialBar from './socials';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0B3D91] text-white footer-section">
      <img src='/paperBottom.png' style={{position:'absolute', top:'-2px', transform:'scaleY(-1)'}} alt="" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Column */}
          {/* <div>
            <h3 className="footer-title">Faisons mieux avec Vous !</h3>
            <p className="text-sm text-blue-200">
              Programme bientôt disponible ici.
            </p>
          </div> */}

          {/* Quick Links */}
          {/* <div>
            <h4 className="footer-title">Accès rapide</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="<footer-link>">Accueil</Link></li>
              <li><Link to="/programme" className="footer-link">Programme</Link></li>
              <li><Link to="/liste" className="footer-link">Liste</Link></li>
              <li><Link to="/evenements" className="footer-link">Événements</Link></li>
              <li><Link to="" className="footer-link">Événements</Link></li>
            </ul>
          </div> */}

          {/* Get Involved */}
          {/* <div>
            <h4 className="footer-title">Get Involved</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/nous-contacter" className="footer-link">Nous contacter</Link></li>
              <li><Link to="/mentions-legales" className="footer-link">Mentions légales</Link></li>
            </ul>
          </div> */}

          {/* Social & Legal */}
          {/* <div>
            <h4 className="footer-title">Réseaux sociaux</h4>
            <SocialBar id='02'/>
            <ul className="space-y-2 text-sm">
            </ul>
          </div> */}
        </div>

        <div className="mt-8 pt-8 text-sm text-center text-blue-200" style={{paddingBottom:'100px'}}>
          <h4 className='text-white text-3xl lg:text-6xl'>Retrouvez très bientôt notre programme ici ...</h4>
          <p className="mt-4" style={{color:'var(--color-yellow-400)'}}>&copy; {currentYear} Faisons mieux avec Vous ! Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}