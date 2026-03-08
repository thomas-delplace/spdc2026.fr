import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Badge, badgeVariants } from '../components/ui/badge';
import { Newspaper, ArrowRight, Users, Target, Shield, Heart, Briefcase, ChevronRight, TrendingUp, Award, CheckCircle2, Calendar, MapPin, Clock} from 'lucide-react';
import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';
import ProfessionDeFoi from '../components/Professiondefoi'
import SocialBar from '../components/Socials';
import HeroCandidate from '../components/HeroCandidate';
import PhotoGrid from '../components/PhotoGrid';
import photos from '../data/photos';

export function HomePage() {
  const nextEvent = {
      id: 1,
      title: 'Dernière réunion publique !',
      date: 'Mercredi 11 mars 2026',
      time: '19h00 - 21h30',
      location: 'Salle de la Médaille, 15 rue de la République',
      description: '',
      // capacity: '200 seats available',
      image: '20260218_tract.png'
    }

  return (
    <div className="bg-white">
      <HeroCandidate>
        <div className="relative z-10 lg:pr-8 flex flex-column mobile-align-self-end justify-content-center align-items-center gap-30px">
          <img className='big-logo' src='/logo_simple_blanc_lfi.png' alt="" />
        </div>
      </HeroCandidate>

      {/* 2. CREDIBILITY SNAPSHOT — Why This Candidate Matters */}
      <section className="py-16 lg:py-20 bg-white" style={{paddingBlock:'35px'}}>
        <div className="container align-center mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <SocialBar id='01'/>
          </div>
        </div>
      </section>

        <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl lg:text-4xl text-[#0B3D91] mb-12" data-aos="fade-up" style={{color:'var(--color-pink)'}}>Notre prochaine rencontre</h2>
            <div className="space-y-6">
                <Card className="border-2 border-gray-200 transition-all" data-aos="fade-up">
                  <div className="md:flex">
                    <img
                      src={nextEvent.image}
                      alt={nextEvent.title}
                      className="w-full md:w-64 h-48 md:h-auto object-cover rounded-t-lg md:rounded-l-lg md:rounded-tr-none"
                    />
                    <CardContent className="pt-6 flex-1">
                      <h3 className="mb-3" style={{color:'var(--color-blue-600)'}}>{nextEvent.title}</h3>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-gray-600 text-sm">
                          <Calendar size={16} className="text-blue-600" />
                          {nextEvent.date}
                        </div>
                        <div className="flex items-center gap-2 text-gray-600 text-sm">
                          <Clock size={16} className="text-blue-600" />
                          {nextEvent.time}
                        </div>
                        <div className="flex items-center gap-2 text-gray-600 text-sm">
                          <MapPin size={16} className="text-blue-600" />
                          {nextEvent.location}
                        </div>
                      </div>
                      <p className="text-gray-600 text-sm">{nextEvent.description}</p>
                    </CardContent>
                  </div>
                </Card>
            </div>
          </div>
        </div>
      </section>
       <section className='bg-white'>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl lg:text-4xl text-[#0B3D91] mb-12" data-aos="fade-up" style={{color:'var(--color-pink)'}}>En action</h2>
            <PhotoGrid photos={photos} x='6' nb={6} />
            <Link to='/galerie'>
              <Button className='hover-opacity-600' data-aos='slide-up' style={{borderRadius:'4px',cursor:'pointer',marginTop:'0.4rem',width:'100%',backgroundColor:'var(--color-pink)' }}>VOIR LA GALERIE &rarr;</Button>
            </Link>
          </div>
        </div>
      </section>
      <section className='bg-white'>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl lg:text-4xl text-[#0B3D91] mb-12 mt-12" data-aos="fade-up" style={{color:'var(--color-pink)'}}>Dans la presse ...</h2>
            <iframe
              data-aos='fade-in'
              width="100%"
              height="166"
              scrolling="no"
              frameBorder="no"
              allow="autoplay"
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A2278611404&color=%23c500ea&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true">
              </iframe>
              <div style={{fontSize:'10px',color:'#cccccc', lineBreak:'anywhere', wordBreak:'normal', overflow:'hidden', whiteSpace:'nowrap', textOverflow:'ellipsis', fontFamily:'Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif', fontWeight:'100'}}>
                <a href="https://soundcloud.com/rfl-en-touraine"
                   title="Rfl En Touraine" 
                   target="_blank"
                   style={{color: "#cccccc", textDecoration: "none"}}>Rfl En Touraine</a> ·
                <a href="https://soundcloud.com/rfl-en-touraine/rfl101-elections-municipales-3"
                   title="RFL101 Elections Municipales Thomas DELPLACE LFI à SPDC"
                   target="_blank"
                   style={{color: "#cccccc", textDecoration: "none"}}>RFL101 Elections Municipales Thomas DELPLACE LFI à SPDC</a>
              </div>
              <div data-aos='fade-up' className='yt-container'>
                <iframe className='yt-iframe' src="https://www.youtube.com/embed/CFEx-pR-hMw?si=WdXRUJ0m_q_-ewHo" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                <iframe className='yt-iframe' src="https://www.youtube.com/embed/XSqrePcJ1yA?si=8u4-YcWK13CG3ZdX" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                {/* <div style={{width:'100%', height:"200px", backgroundColor:'orange'}}></div>
                <div style={{width:'100%', height:"200px", backgroundColor:'red'}}></div> */}
              </div>
              <div data-aos='fade-up'>
                <iframe className='yt-solo' src="https://www.youtube.com/embed/ptzmmtLNXmE?si=JwE2lQCLhQyqTcjO" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
              </div>
              
              
          </div>
        </div>
      </section>
      <ProfessionDeFoi/>
    </div>
  );
}