import { useLightbox } from "../context/LightboxContext"

const PhotoGrid = ({photos, x, nb=0}) => {
    const { openlb } = useLightbox()
    return(
        <div className="photo-grid" style={{display:'grid', gridTemplateColumns:`repeat(${x}, 1fr)`, gap:'0.5rem'}}>
            {photos.map((photo, key) => {
                if(photos.indexOf(photo) <= nb - 1){
                    return(
                        <img data-aos='slide-up' className='hover-opacity-800 ease-in-out duration-300' key={key} src={photo.src} alt={photo.alt} style={{width:'100%', display:'block', aspectRatio:'1/1', objectFit:'cover', cursor:'pointer', borderRadius:'4px'}} onClick={()=>{openlb(photo.src, photo.alt)}}/>
                    )}
            })}
        </div>
    )
}
export default PhotoGrid