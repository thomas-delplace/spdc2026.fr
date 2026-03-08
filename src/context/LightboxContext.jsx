import { createContext, useContext, useState } from 'react'

const LightboxContext = createContext()

export const useLightbox = () => {
  const ctx = useContext(LightboxContext)
  if (!ctx) throw new Error('useLightbox must be used inside LightboxProvider')
  return ctx
}

export const LightboxProvider = ({ children }) => {
  const [lightbox, setLightbox] = useState({ open: false, src: null, alt: null })

  const openlb = (src, alt) => {
    console.log('lb open')
    setLightbox({ open: true, src, alt })}
  const closelb = () => setLightbox({ open: false, src: null, alt: null })

  return (
    <LightboxContext.Provider value={{ lightbox, openlb, closelb }}>
      {children}
    </LightboxContext.Provider>
  )
}