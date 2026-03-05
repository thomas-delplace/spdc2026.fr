import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Badge, badgeVariants } from '../components/ui/badge';
import { ArrowRight, Users, Target, Shield, Heart, Briefcase, ChevronRight, TrendingUp, Award, CheckCircle2, Calendar, MapPin, Clock} from 'lucide-react';
import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';
import ProfessionDeFoi from '../components/Professiondefoi'
import SocialBar from '../components/socials';
import HeroCandidate from '../components/HeroCandidate';

export function HomePage() {
  const nextEvent = {
      id: 1,
      title: 'Réunion publique',
      date: 'Jeudi 26 février 2026',
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
                    <CardContent style={{paddingBottom:'20px'}} className="pt-6 flex-1">
                      <h3 className="mb-3" style={{color:'var(--color-blue-600)'}}>{nextEvent.title}</h3>
                      <div className="space-y-2 mb-4">
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
                      <p className="text-gray-600 text-sm mb-4">{nextEvent.description}</p>
                    </CardContent>
                  </div>
                </Card>
            </div>
          </div>
        </div>
      </section>

      <ProfessionDeFoi/>
    </div>
  );
}