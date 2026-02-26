const Hero = ({children}) => {
    return(
        <section style={{backgroundImage: "url('/header_bg.png')", backgroundAttachment:"fixed"}} className="py-24 relative lg:py-32 border-b border-gray-200">
            <div style={{display:'flex',alignItems:'center', justifyContent:'center'}} className="container mx-auto px-4 sm:px-6 lg:px-8">
            {children}
            </div>
        </section>
    )
}
export default Hero