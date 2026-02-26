import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Calendar, MapPin, Clock, Users } from 'lucide-react';
import Hero from '../components/Hero';

export function EventsPage() {
  const upcomingEvents = [
    {
      id: 1,
      title: 'Réunion publique',
      date: '26 février 2026',
      time: '19h00 - 21h30',
      location: 'Salle de la Médaille, 15 rue de la République',
      description: '',
      // capacity: '200 seats available',
      image: '/reupublic.jpg',
    },
    {
      id: 2,
      title: 'Café et biscuits',
      date: '28 février 2026',
      time: '9h30 - 13h00',
      location: 'Place Maurice Thorez',
      description: 'Venez discuter avec les membres de l\'équipe autour d\'un café et de quelques biscuits.',
      image: '/cafebiscuit.jpg',
    },,
    {
      id: 2,
      title: 'Café et biscuits',
      date: '7 mars 2026',
      time: '9h30 - 13h00',
      location: 'Place Maurice Thorez',
      description: 'Le dernier marché qu\'on aura le droit de faire avant les élections ! Venez prendre le café avant la victoire !',
      image: '/cafebiscuit.jpg',
    },
    {
      id: 2,
      title: 'Réunion publique',
      date: '11 mars 2026',
      time: '19h00 - 21h30',
      location: 'Salle de la Médaille, 15 rue de la République',
      description: '',
      image: '/reupublic.jpg',
    }
  ];

  const pastEvents = [
    {
      title: 'Café et biscuits',
      date: '21 février 2026',
      summary: 'Nous étions au marché de Saint-Pierre-des-Corps, comme tous les samedis, afin de rencontrer la population et échanger avec vous !',
    },
    {
      title: 'Réunion publique',
      date: '14 février 2026',
      summary: 'De nombreuses personnes sont venues à la salle de la Médaille entendre nos propositions pour les 6 années à venir dans votre ville.',
    },
    {
      title: 'Café au marché',
      date: '14 février 2026',
      summary: 'Comme toujours, le marché était rempli et de nombreuses discutions ont été tenues sur les besoins et les envies de la population.',
    },
    {
      title: 'Café et gateaux',
      date: '7 février 2026',
      summary: 'Encore de longues conversations autour de boissons chaudes et de petites préparations maisons de nos collistiers.',
    },
    {
      title: 'Réunion publique',
      date: '6 février 2026',
      summary: 'Une réunion publique à l\'Aubrière bien surprenante par la présence de jeunes adolescents du quartier de la Rabaterie venus nous faire part de leurs craintes et de leurs envies.',
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero */}
      <Hero>
        <div style={{textAlign:'center', width:'100%'}} className="max-w-4xl">
            <div className="inline-block mb-4" data-aos="fade-up">
              <span className="text-white text-xs font-bold uppercase tracking-[0.3em]">
                VENEZ NOUS RENCONTRER
              </span>
            </div>
            <h1 className="text-white text-6xl lg:text-7xl font-bold mb-6" data-aos="fade-up" data-aos-delay="100">
              ÉVÉNEMENTS
            </h1>
            {/* <p className="text-2xl text-blue-100 leading-relaxed" data-aos="fade-up" data-aos-delay="200">
              Réunions publiques, cafés sur les marchés, venez échanger sur l'avenir de votre ville.
            </p> */}
          </div>
          <img src='paperBottom.png' className="paperBottom"/>
      </Hero>

      {/* Upcoming Events */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl lg:text-4xl text-[#0B3D91] mb-12" data-aos="fade-up" style={{color:'var(--color-pink)'}}>Agenda</h2>
            <div className="space-y-6">
              {upcomingEvents.map((event, index) => (
                <Card key={event.id} className="border-2 border-gray-200 hover:border-[#0B3D91] transition-all" data-aos="fade-up" data-aos-delay={index * 100}>
                  <div className="md:flex">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full md:w-64 h-48 md:h-auto object-cover rounded-t-lg md:rounded-l-lg md:rounded-tr-none"
                    />
                    <CardContent style={{paddingBottom:'20px'}} className="pt-6 flex-1">
                      <h3 className="mb-3" style={{color:'var(--color-blue-600)'}}>{event.title}</h3>
                      <div className="space-y-2 mb-4">
                        <div className="flex items-center gap-2 text-gray-600 text-sm">
                          <Calendar size={16} className="text-blue-600" />
                          {event.date}
                        </div>
                        <div className="flex items-center gap-2 text-gray-600 text-sm">
                          <Clock size={16} className="text-blue-600" />
                          {event.time}
                        </div>
                        <div className="flex items-center gap-2 text-gray-600 text-sm">
                          <MapPin size={16} className="text-blue-600" />
                          {event.location}
                        </div>
                        {event.capacity && 
                        <div className="flex items-center gap-2 text-gray-600 text-sm">
                          <Users size={16} className="text-blue-600" />
                          {event.capacity}
                        </div>}
                        
                      </div>
                      <p className="text-gray-600 text-sm mb-4">{event.description}</p>
                    </CardContent>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl mb-8 text-center" style={{color:'var(--color-pink)'}}>Recent Events</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {pastEvents.map((event, index) => (
              <Card key={index}>
                <CardContent className="pt-6">
                  <h3 className="mb-2" style={{color:'var(--color-blue-600)'}}>{event.title}</h3>
                  <div className="text-sm text-gray-500 mb-3">{event.date}</div>
                  <div className="text-sm text-blue-600 mb-3">{event.attendance}</div>
                  <p className="text-gray-600 text-sm">{event.summary}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Host an Event */}
      {/* <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <Card className="bg-blue-50 border-blue-200">
              <CardContent className="pt-6">
                <h2 className="text-3xl mb-4 text-center">Host an Event in Your Community</h2>
                <p className="text-gray-700 mb-6 text-center">
                  Want to organize a house party, voter registration drive, or community meet-and-greet? We'll provide the materials and support.
                </p>
                <div className="flex justify-center">
                  <Button size="lg">Get Started as Event Host</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section> */}

      {/* Event Updates */}
      {/* <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl mb-4">Never Miss an Event</h2>
            <p className="text-xl text-blue-100 mb-8">
              Sign up to receive event notifications and updates about activities in your area.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900"
                required
              />
              <Button variant="secondary" size="lg">Subscribe</Button>
            </form>
          </div>
        </div>
      </section> */}
    </div>
  );
}