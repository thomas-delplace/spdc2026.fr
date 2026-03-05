import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { ArrowRight, Briefcase, GraduationCap, Shield, Heart, Building, ChevronDown, ChevronUp } from 'lucide-react';
import Hero from '../components/Hero';
import Program from '../data/program';
import FilAriane from '../components/FilAriane';
export function MeasurePage() {
  const { chapter , measure} = useParams()
  console.log(Program)
  const chapterContent = Program.find(e => e.link == chapter)
  // if(!chapterContent){ window.location.href = '/' }
  const measureContent = chapterContent?.measures.find(e => e.id == measure)
  // if(!measureContent){ window.location.href='/' }
  console.log(chapterContent)
  console.log(measureContent)
  return (
    <div>
      {/* Hero - Clean and Minimal */}
      <Hero>
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block mb-4" data-aos="fade-up">
            <span className="text-white text-xs font-bold uppercase tracking-[0.3em]">
              {`CHAPITRE ${chapterContent?.index}`}
            </span>
          </div>
          <h1 className="text-6xl lg:text-7xl text-white mb-8" data-aos="fade-up" data-aos-delay="100">
            {chapterContent?.title}
          </h1>
        </div>
        <img src='/paperBottom.png' className="paperBottom"/>
      </Hero>

      {/* Introduction */}
      <section
          style={{paddingTop:'20px'}}
          className="py-20 lg:py-24 bg-white">
            <div className="profession-de-foi-container mx-auto px-4 sm:px-6 lg:px-8" style={{fontSize:'1.25rem', borderLeft:`4px solid var(${chapterContent?.color})`, borderBottom:`4px solid var(${chapterContent?.color})`}}>
              <FilAriane chapter={chapterContent}/>
              <h2 className="text-3xl lg:text-5xl text-white mb-8" style={{color:`var(${chapterContent?.color})`}} data-aos="fade-up" data-aos-delay="100">
                {measureContent?.title}
              </h2>
              {measureContent?.image.src
                ? <img className='measure-head-img mb-8' src={measureContent?.image.src} alt="" />
                : null
              }
              <div style={{fontFamily:'Config Variable'}}>
                {measureContent?.text}
              </div>
            </div>
      </section>   
    </div>
  );
}