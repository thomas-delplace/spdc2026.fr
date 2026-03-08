import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { ArrowRight, Briefcase, GraduationCap, Shield, Heart, Building, ChevronDown, ChevronUp } from 'lucide-react';
import Hero from '../components/Hero';
import Program from '../data/program';
import FilAriane from '../components/FilAriane';
export function ChapterPage() {
  const { chapter } = useParams()
  const chapterContent = Program.find(e => e.id == chapter)
  return (
    <>
    {
      //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      ////////////////////                                                                                        //////////////////////
      ////////////////////                                          HERO                                          //////////////////////
      ////////////////////                                                                                        //////////////////////
      //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    }
      <Hero>
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block mb-4" data-aos="fade-up">
            <span className="text-white text-xs font-bold uppercase tracking-[0.3em]">
              PROGRAMME - CHAPITRE {chapterContent?.index}
            </span>
          </div>
          <h1 className="text-5xl lg:text-7xl text-white mb-8" data-aos="fade-up" data-aos-delay="100">
            {chapterContent?.title}
          </h1>
        </div>
        <img src='/paperBottom.png' className="paperBottom"/>
      </Hero>
      {
        ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        ////////////////////                                                                                     //////////////////////
        ////////////////////                                        INTRO                                        //////////////////////
        ////////////////////                                                                                     //////////////////////
        ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      }
      <section style={{paddingBlock:'20px'}} className="py-20 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <FilAriane/>
            <div>{chapterContent?.summary}</div>
          </div>
        </div>
      </section>
      {
        ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        ////////////////////                                                                                     //////////////////////
        ////////////////////                                    KEY MEASURES                                     //////////////////////
        ////////////////////                                                                                     //////////////////////
        ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      }
      <section style={{paddingInline:'1rem'}}>
        <div className="max-width-950 chapterpage-measures" style={{margin:"auto", paddingBottom:"50px"}}>
        <h5 style={{fontFamily:'Apotek Comp', color:`var(${chapterContent?.color})`, fontSize:'2rem'}}>Avec vous, nous allons ...</h5>
          {chapterContent?.measures.map((measure, index) => (
            measure?.key
            ? <Link to={`/programme/${chapterContent.link}/${measure.id}`}>
                <Card key={measure.id} className='transition-all right-slide' style={{borderColor:`var(${chapterContent.color})`}} data-aos="fade-up">
                  <div className="left-border" style={{backgroundColor:`var(${chapterContent.color})`}}></div>
                  <CardContent className="p-0 relative">
                    <div className="p-6 lg:p-8 flex items-center gap-6">
                      {///////////////////////////////////////// BULLET
                      }
                      <div className='w-16 h-16 rounded-lg flex items-center justify-center arrow-right start-0' style={{backgroundColor:`var(${chapterContent.color})`}}>
                          <span style={{fontFamily:'Apotek Comp', fontSize:'1.5rem'}}>➜</span>
                      </div>
                      {///////////////////////////////////////// TITLE
                      }
                      <div className="flex-1 min-w-0">
                        <h3 className='text-2xl lg:text-3xl' style={{color:`color-mix(in srgb, var(${chapterContent.color}) 60%, blue)`, letterSpacing:'0.05rem'}}>
                          {measure.title}
                        </h3>
                      </div>
                    </div>                
                  </CardContent>
                </Card>
              </Link>
              :null
          ))}          
        </div> 
        <div className="max-width-950" style={{margin:"auto", paddingBottom:"50px"}}>
          <h5 style={{fontFamily:'Apotek Comp', color:`var(${chapterContent?.color})`, fontSize:'2rem'}}>Mais aussi ...</h5>
          <ul className='all-measures-list'>
            {chapterContent?.measures.map((measure,index) => (
              measure?.key
                ? null
                : <li key={index} data-color={chapterContent.color}>{measure?.title}</li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}