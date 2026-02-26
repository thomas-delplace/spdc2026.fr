import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { ArrowRight, Briefcase, GraduationCap, Shield, Heart, Building, ChevronDown, ChevronUp } from 'lucide-react';
import Hero from '../components/Hero';
import { Program } from '../data/program';
export function ProgramPage() {
  const [expandedChapter, setExpandedChapter] = useState<string | null>(null);

  const pillars = [
    {
      id: 'economy',
      link: "/programme/economie-et-emploi",
      icon: Briefcase,
      title: 'Economic Empowerment',
      summary: 'Creating economic opportunities and supporting business growth across Nigeria.',
      keyPoints: [
        {text:'Support for SMEs through access to capital and business development services', link:'https://google.fr'},
        {text:'Job creation programs targeting youth and underserved communities', link:''},
        {text:'Investment policies that attract capital while protecting local businesses', link:''},
        {text:'Infrastructure development to support economic activity', link:''},
      ],
      objectives: [
        'Establish SME support fund with transparent application process',
        'Launch skills-to-employment programs in partnership with private sector',
        'Review and reform tax policies to encourage entrepreneurship',
        'Develop digital economy infrastructure nationwide',
      ],
    },
    {
      id: 'education',
      icon: GraduationCap,
      title: 'Education & Human Capital Development',
      summary: 'Building a skilled, educated population ready for the 21st century.',
      keyPoints: [
        'Increased funding for public education with strict oversight',
        'Skills-based and technology-driven curriculum reform',
        'Teacher training and professional development programs',
        'Youth-focused scholarship and mentorship initiatives',
      ],
      objectives: [
        'Increase education budget allocation to meet UNESCO standards',
        'Integrate digital literacy into primary and secondary curricula',
        'Establish teacher excellence programs with performance incentives',
        'Create 10,000 tech scholarships for underserved students annually',
      ],
    },
    {
      id: 'security',
      icon: Shield,
      title: 'Security & Rule of Law',
      summary: 'Ensuring safety, justice, and institutional integrity for all citizens.',
      keyPoints: [
        'Strengthening community-based security initiatives',
        'Professionalizing security institutions through training and accountability',
        'Zero tolerance for corruption in law enforcement',
        'Justice system reforms for faster, fairer outcomes',
      ],
      objectives: [
        'Deploy community policing units in all local government areas',
        'Institute mandatory training and regular audits for security personnel',
        'Establish independent oversight body for law enforcement',
        'Digitize court systems to reduce case backlogs',
      ],
    },
    {
      id: 'healthcare',
      icon: Heart,
      title: 'Healthcare & Social Welfare',
      summary: 'Accessible, affordable healthcare as a fundamental right for all Nigerians.',
      keyPoints: [
        'Improved access to affordable healthcare services',
        'Support systems for vulnerable populations',
        'Strengthening primary healthcare infrastructure',
        'Health insurance expansion and reform',
      ],
      objectives: [
        'Upgrade primary healthcare centers in every local government',
        'Expand health insurance coverage to reach 50% of population',
        'Launch maternal and child health programs in rural areas',
        'Establish emergency response systems nationwide',
      ],
    },
    {
      id: 'governance',
      icon: Building,
      title: 'Transparency & Governance',
      summary: 'Open, accountable government that serves the people.',
      keyPoints: [
        'Open government practices with public access to information',
        'Clear, regular reporting on public spending and projects',
        'Citizen participation in policy-making and budgeting',
        'Digital platforms for government services and feedback',
      ],
      objectives: [
        'Publish all government contracts and budgets online',
        'Implement quarterly public reporting on all major projects',
        'Create digital platforms for citizen input on policies',
        'Establish anti-corruption hotlines with whistleblower protection',
      ],
    },
  ];

  const toggleChapter = (id: string) => {
    setExpandedChapter(expandedChapter === id ? null : id);
  };

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
                <Card 
                  key={chapter.id} 
                  className={`border-2 transition-all ${
                    expandedChapter === chapter.id 
                      ? 'border-pink shadow-lg' 
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                   style={expandedChapter === chapter.id ? {border:`2px solid ${chapter.color}`} : {}}>
                  <CardContent className="p-0">
                    {/* Card Header */}
                    <div className="p-6 lg:p-8 flex items-start gap-6 cursor-pointer"
                    onClick={() => toggleChapter(chapter.id)}>
                      <div className="flex-shrink-0">
                        <div className='w-16 h-16 rounded-lg flex items-center justify-center' style={{backgroundColor:chapter.color}}>
                          <chapter.icon className="text-white" size={28} strokeWidth={2} />
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className='text-2xl lg:text-3xl mb-3' style={{color:chapter.color}}>
                          {index + 1}. {chapter.title}
                        </h3>
                        <p className={`text-lg text-gray-600 leading-relaxed`}>
                          {chapter.summary}
                        </p>
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
                        <div className="grid md:grid-cols-2 gap-8">
                          {/* Key Policy Points */}
                          <div>
                            <h4 className="text-lg font-bold text-pink mb-4" style={{color:chapter.color}}>
                              Nos mesures phares
                            </h4>
                            <ul className="space-y-3">
                              {chapter.measures.map((measure, idx) => (
                                measure.key &&
                                <li key={idx} className="flex items-start gap-3">
                                  <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-pink mt-2"></div>
                                  <span className="text-gray-700 leading-relaxed">{measure.title}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Specific Objectives */}
                          <div>
                            <h4 className="text-lg font-bold text-pink mb-4" style={{color:chapter.color}}>
                              Nos objectifs
                            </h4>
                            <ul className="space-y-3">
                              {chapter.objectives.map((objective, idx) => (
                                <li key={idx} className="flex items-start gap-3">
                                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-pink flex items-center justify-center text-white text-xs font-bold">
                                    {idx + 1}
                                  </div>
                                  <span className="text-gray-700 leading-relaxed">{objective}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                        <div style={{paddingBlock:'2rem', display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
                          <Link to={chapter.link}>
                            <Button style={{cursor:'pointer',display:'block', paddingBlock:'1rem', height:'auto', background:`linear-gradient(to left, color-mix(in srgb, ${chapter.color}, white 30%), ${chapter.color})`}}>Les autres mesures</Button>
                          </Link>
                        </div>
                      </div>
                    
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Approach */}
      {/* <section className="py-20 lg:py-24 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="mb-12">
              <h2 className="text-3xl lg:text-4xl text-[#0B3D91] mb-4">
                How We'll Deliver
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="border-2 border-gray-200 bg-white">
                <CardContent className="p-8">
                  <div className="w-12 h-12 rounded-lg bg-[#0B3D91] flex items-center justify-center mb-4">
                    <span className="text-2xl text-white">01</span>
                  </div>
                  <h3 className="text-xl text-[#0B3D91] mb-3">Evidence-Based</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Every policy backed by data, research, and consultation with experts and communities
                  </p>
                </CardContent>
              </Card>
              <Card className="border-2 border-gray-200 bg-white">
                <CardContent className="p-8">
                  <div className="w-12 h-12 rounded-lg bg-[#0B3D91] flex items-center justify-center mb-4">
                    <span className="text-2xl text-white">02</span>
                  </div>
                  <h3 className="text-xl text-[#0B3D91] mb-3">Collaborative</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Working with communities, experts, and all stakeholders to ensure success
                  </p>
                </CardContent>
              </Card>
              <Card className="border-2 border-gray-200 bg-white">
                <CardContent className="p-8">
                  <div className="w-12 h-12 rounded-lg bg-[#0B3D91] flex items-center justify-center mb-4">
                    <span className="text-2xl text-white">03</span>
                  </div>
                  <h3 className="text-xl text-[#0B3D91] mb-3">Action-Oriented</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Clear timelines, measurable outcomes, and regular progress reporting
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section> */}

     
    </div>
  );
}