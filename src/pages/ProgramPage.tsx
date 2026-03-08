import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { ArrowRight, Briefcase, GraduationCap, Shield, Heart, Building, ChevronDown, ChevronUp } from 'lucide-react';
import Hero from '../components/Hero';
import Program from '../data/program';
export function ProgramPage() {
  const chapterRef = useRef<Record<string, HTMLDivElement | null>>({})
  const [expandedChapter, setExpandedChapter] = useState<string | null>(null);
  const toggleChapter = (id: string) => {
    setExpandedChapter(expandedChapter === id ? null : id);

    requestAnimationFrame(()=> {
      const element = chapterRef.current[id]
      if (!element) return
      element.scrollIntoView({
        behavior:'smooth',
        block:'start'
      })
      // const rect = element.getBoundingClientRect()
      // window.scrollTo({
      //   top:rect.top+window.scrollY-90,
      //   behavior:'smooth'
      // })
    })
  }
  return (
    <div>
      {/* Hero - Clean and Minimal */}
      <Hero>
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block mb-4" data-aos="fade-up">
            <span className="text-white text-xs font-bold uppercase tracking-[0.3em]">
              Pour faire mieux ...
            </span>
          </div>
          <h1 className="text-5xl lg:text-7xl text-white mb-8" data-aos="fade-up" data-aos-delay="100">
            Votre programme
          </h1>
        </div>
        <img src='paperBottom.png' className="paperBottom"/>
      </Hero>
      {/* Introduction */}
      <section style={{paddingTop:'20px'}} className="py-20 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl text-[#0B3D91] mb-6" data-aos="fade-up">
              Pourquoi « votre » programme ?
            </h2>
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p data-aos="fade-up" data-aos-delay="100">
                Car il est le fruit de longs mois de rencontres avec la population et d'un travail commun avec beaucoup de citoyens. Nous avons publié un questionnaire au mois de mai dernière et avons obtenu de nombreuses réponses qui nous ont permis de partir des observations, des envies et des colères de la population. Car un programme doit toujours partir d'observations de terrain.
              </p>
              <p data-aos="fade-up" data-aos-delay="200">
                Nous transformerons Saint-Pierre pour plus de justice sociale, un meilleur accès à la culture, plus de sureté et de tranquillité publique, un meilleur accès aux soins, etc.
              </p>
              <p className="text-[#0B3D91] font-semibold" data-aos="fade-up" data-aos-delay="300">
                C'est avec vous que nous avons commencé le travail, c'est avec vous que nous continuerons !
              </p>
            </div>
          </div>
        </div>
      </section>



      {/* Five Pillars - Card Grid */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="mb-16" data-aos="fade-up">
              <h2 className="text-3xl lg:text-4xl text-[#0B3D91] mb-4" style={{color:'var(--color-pink)'}}>
                Un programme en six grands axes pour faire revivre Saint-Pierre
              </h2>
              <p className="text-lg text-gray-600">
                Cliquez sur chaque section pour en savoir plus
              </p>
            </div>
            <div className="space-y-4">


              {Program.map((chapter, index) => (
                <div key={index} ref={(activeChapter) => {chapterRef.current[chapter.id] = activeChapter}} className='chapter-card'>
                <Card
                  className={`border-2 transition-all ${
                    expandedChapter === chapter.id 
                      ? 'border-pink shadow-lg' 
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                   style={expandedChapter === chapter.id ? {border:`2px solid var(${chapter.color})`} : {}}>
                  <CardContent className="p-0">
                    {/* Card Header */}
                    <div className="p-6 lg:p-8 flex items-center gap-6 cursor-pointer"
                    onClick={() => toggleChapter(chapter.id)}>
                      <div className="flex-shrink-0">
                        <div className='w-16 h-16 rounded-lg flex items-center justify-center' style={{backgroundColor:`var(${chapter.color})`}}>
                          <span style={{fontFamily:'Apotek Comp', fontSize:'1.5rem', color:'white'}}>➜</span>
                        </div>
                      </div>
                      <div className="flex-1 min-w-0 align-center items-center">
                        <h3 className='text-2xl lg:text-3xl' style={{color:`var(${chapter.color})`}}>
                          {index + 1}. {chapter.title}
                        </h3>
                      </div>
                      <div className="flex-shrink-0">
                        {expandedChapter === chapter.id ? (
                          <ChevronUp className="text-pink" size={28} />
                        ) : (
                          <ChevronDown className="text-gray-400" size={28} />
                        )}
                      </div>
                    </div>



                    {/* Expanded Content */}
                    {expandedChapter === chapter.id && (
                      <div className="border-t border-gray-200 bg-gray-50 p-6 lg:p-8" style={{borderRadius:'20px', paddingBottom:0}}>
                        <div className="grid gap-8">


                          {/* Key Policy Points */}
                          <div>
                            {chapter.summary}
                            <h4 style={{marginTop:'2rem',color:`color-mix(in srgb, var(${chapter.color}) 80%, transparent)`, fontSize:'1.5rem', letterSpacing:'0.1em'}}>
                              Nos mesures phares
                            </h4>
                            <span style={{fontFamily:'Config Variable', color:'rgba(0,0,0,0.5)'}}>(cliquez sur une mesure pour obtenir plus d'informations)</span>
                              {chapter.measures.map((measure, key) => (
                                measure?.key &&
                                <Link key={key} to={`${chapter.link}/${measure.id}`}>
                                  <Card className={`border-2 transition-all measure-box measure-box${chapter.color}`}>
                                    <h3 className='config-variable' style={{fontSize:'1.25rem'}}>{measure.title}</h3>
                                  </Card>
                                </Link>
                              ))}
                          </div>
                        </div>
                        <div style={{paddingBlock:'2rem', display:'flex', flexDirection:'column', justifyContent:'stretch', alignItems:'stretch'}}>
                          <Link to={`/programme/${chapter.link}`}>
                            <Button
                              className='button-chapter'
                              data-color={chapter.color}>
                                  Les autres mesures
                            </Button>
                          </Link>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>     
    </div>
  );
}