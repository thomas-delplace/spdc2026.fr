import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { ArrowRight } from 'lucide-react';
import Hero from '../components/Hero';
import candidats from '../data/candidats';
import { useState } from 'react';

export function Liste() {

  return (
    <div className="bg-white">
      {/* Hero */}
      <Hero>
        <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-4" data-aos="fade-up">
              <span className="text-white text-xs font-bold uppercase tracking-[0.3em]">
                DÉCOUVREZ
              </span>
            </div>
            <h1 className="text-5xl lg:text-7xl text-white mb-8" data-aos="fade-up" data-aos-delay="100">
              VOS FUTUR·ES ÉLU·ES
            </h1>
            <p className="no-indent text-xl lg:text-2xl text-gray-200 leading-relaxed max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="200">
              Des citoyen·nes et insoumis·es au plus près de vous, des quatre coins de la ville et qui représentent la diversité de notre population
            </p>
          </div>
          <img src='paperBottom.png' className="paperBottom"/>
      </Hero>

      <section className="section-liste">
        <div className="wrapper-liste">
          {candidats.map((candidat,key) => (
            <div key={key} className='carte-candidat' data-aos="fade-up" >
              <Link to={`/candidat/${candidat.rang}`} style={{display:'content', padding:'0', alignSelf:'start', justifySelf:'start'}}>
                <div className='candidat-overlay'>
                  <img src="/plus_round.svg" alt="Plus"/>
                </div>
              </Link>
              <img src={candidat.photo}  className='photo-candidat' alt={`Photo de ${candidat.prenom} ${candidat.nom}`} />
              <div className='nom-candidat'><h4 className='nom-candidat-h4'>{`${candidat.prenom} ${candidat.nom}`}</h4></div>
              <span className='rang-candidat-under'>{candidat.rang}</span>
              <span className='rang-candidat'>{candidat.rang}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline */}
      {/* <section className="py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="mb-16" data-aos="fade-up">
              <h2 className="text-3xl lg:text-4xl text-[#0B3D91] mb-4">Key Milestones</h2>
              <div className="w-20 h-0.5 bg-[#FF6F00]"></div>
            </div>

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div key={index} className="relative pl-10 border-l-2 border-gray-300" data-aos="fade-up" data-aos-delay={index * 100}>
                  <div className="absolute left-0 top-0 w-3 h-3 bg-[#FF6F00] rounded-full border-2 border-white"></div>
                  <div className="space-y-2">
                    <div className="text-sm text-[#FF6F00] font-bold uppercase tracking-wider">
                      {item.year}
                    </div>
                    <h3 className="text-2xl lg:text-3xl text-[#0B3D91]">
                      {item.phase}
                    </h3>
                  </div>
                  <div className="space-y-6">
                    {item.achievements.map((achievement, achIndex) => (
                      <Card key={achIndex} className="border-2 border-gray-200 bg-white">
                        <CardContent className="p-6 lg:p-8">
                          <h4 className="text-xl text-[#0B3D91] mb-3">
                            {achievement.title}
                          </h4>
                          <p className="text-gray-600 leading-relaxed mb-6">
                            {achievement.description}
                          </p>
                          <div className="bg-gray-50 p-4 rounded">
                            <div className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">
                              Measurable Impact
                            </div>
                            <ul className="space-y-2">
                              {achievement.metrics.map((metric, metricIndex) => (
                                <li key={metricIndex} className="flex items-start gap-3">
                                  <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[#0B3D91] mt-2"></div>
                                  <span className="text-gray-700 text-sm">{metric}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials /}
      <section className="py-20 lg:py-28 bg-white border-t border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="mb-16">
              <h2 className="text-3xl lg:text-4xl text-[#0B3D91] mb-4">
                What People Say
              </h2>
              <p className="text-lg text-gray-600">
                Voices from the communities served over the past decade.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="border-2 border-gray-200 bg-gray-50">
                  <CardContent className="p-8">
                    <div className="mb-6">
                      <div className="text-5xl text-[#0B3D91] mb-4">"</div>
                      <p className="text-gray-700 leading-relaxed italic">
                        {testimonial.quote}
                      </p>
                    </div>
                    <div className="pt-4 border-t border-gray-300">
                      <p className="text-sm text-gray-600">
                        — {testimonial.author}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Credibility Statement /}
      <section className="py-20 lg:py-28 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl text-[#0B3D91] mb-6">
              Experience that Informs Policy
            </h2>
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                This track record is not just a resume—it's the foundation of this campaign's policy platform. Every proposal is informed by real experience working with communities, understanding their challenges, and seeing what works.
              </p>
              <p>
                The work done at the grassroots level provides genuine insight into the realities faced by everyday Nigerians. It's not about speculation or theory. It's about solutions tested in the field, refined through feedback, and backed by results.
              </p>
              <p className="text-[#0B3D91] font-semibold">
                This campaign is built on a decade of showing up, listening, and delivering—not just making promises.
              </p>
            </div>
          </div>
        </div>
      </section> */}

      {/* CTA */}
      {/* <section className="py-20 lg:py-24 bg-white border-t border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl text-[#0B3D91] mb-6">
              From Community Service to National Leadership
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-10">
              This track record demonstrates commitment to service and accountability. With your support, we'll scale this approach to create transformative change for all Nigerians.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/manifesto">
                <Button size="lg" className="bg-[#0B3D91] hover:bg-[#0A2F6E] text-white px-10 py-6 text-lg h-auto">
                  See Our Full Agenda
                  <ArrowRight className="ml-2" size={20} />
                </Button>
              </Link>
              <Link to="/join">
                <Button size="lg" variant="outline" className="border-2 border-[#0B3D91] text-[#0B3D91] hover:bg-[#0B3D91] hover:text-white px-10 py-6 text-lg h-auto">
                  Join the Campaign
                  <ArrowRight className="ml-2" size={20} />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
}