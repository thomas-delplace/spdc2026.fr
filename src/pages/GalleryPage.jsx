import PhotoGrid from "../components/PhotoGrid";
import Hero from '../components/Hero';
import photos from "../data/photos";

const GalleryPage = () => {
    return(
        <>
            <Hero>
                <div className="max-w-4xl mx-auto text-center">
                    <div className="inline-block mb-4" data-aos="fade-up">
                        <span className="text-white text-xs font-bold uppercase tracking-[0.3em]">
                        En action
                        </span>
                    </div>
                    <h1 className="text-6xl lg:text-7xl text-white mb-8" data-aos="fade-up" data-aos-delay="100">
                        GALERIE PHOTO
                    </h1>
                </div>
                <img src='/paperBottom.png' className="paperBottom"/>
            </Hero>
            <section>
                <div className="container mx-auto px-4 py-24 sm:px-6 lg:px-8">
                    <div className="max-w-5xl mx-auto">
                        <PhotoGrid photos={photos} x={4} nb={100}/>
                    </div>
                </div>
            </section>
        </>
    )
}
export default GalleryPage