import candidats from "../data/candidats"

const HeroCandidate = ({rang, children}) => {
    let candidat
    if (!rang){
        candidat = candidats[0]
    } else {
        candidat = candidats.find(candidat => candidat.rang === Number(rang))
    }
    return(
        <section className="heroImage-section relative text-white overflow-hidden candidate">
        {/* style={{backgroundImage:`${headerImage.src}`}} */}
        {/* Background Image for Mobile - Full Bleed */}
        {rang && <span className="text-white text-8xl lg:text-8xl rang-candidat-hero">{candidat.rang}</span>}
        <div className="absolute inset-0 lg:hidden">
          <img
            src={candidat.photo}
            alt={`${candidat.prenom} ${candidat.nom}`}
            className="candidate-picture heroImage w-full h-full object-bottom"
          />
          {/* <div className="absolute inset-0 bg-gradient-to-b from-[#0B3D91]/80 via-[#0B3D91]/85 to-[#0B3D91]/90"></div> */}
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative bg-gradient">
          <img src='/paperBottom.png' className="paperBottom"/>
          <div className="grid lg:grid-cols-2 gap-0 items-center min-h-[85vh] sm:min-h-[85vh]">
            {/* Left: Headline + CTAs */}
            {children}

            {/* Right: Candidate Image - Desktop Only */}
            <div className="hidden lg:block relative lg:absolute lg:right-0 lg:top-0 lg:h-full lg:w-1/2">
              <div className="relative h-full candidate" data-aos="fade-up" data-aos-duration="900">
                <img
                    src={candidat.photo}
                    alt={`${candidat.prenom} ${candidat.nom}`}
                    className="candidate-picture heroImage object-bottom"
                />
                {/* <div className="absolute inset-0 bg-gradient-to-r from-[#0B3D91] via-[#0B3D91]/60 to-transparent"></div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
        // <section style={{backgroundImage: "url('/header_bg.png')"}} className="py-24 relative lg:py-32 border-b border-gray-200">
        //     <div style={{display:'flex',alignItems:'center', justifyContent:'center'}} className="container mx-auto px-4 sm:px-6 lg:px-8">
        //     {children}
        //     </div>
        // </section>
    )
}
export default HeroCandidate











