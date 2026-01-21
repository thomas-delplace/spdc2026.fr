import { useState } from "react"
import program from "./program.json"

const Chapters = () => {
    const [openedMeasures,setOpenedMeasures] = useState({})
    const toggleMeasures = (chapterIndex, measureIndex) => {
        const key = `${chapterIndex}-${measureIndex}`
        setOpenedMeasures(previous => ({
            ...previous,
            [key]: !previous[key]
        }))
    }
    let textColor
    return (
        program.chapters.map((value,chapterIndex) => (
            <div key={chapterIndex} className='chapter' style={{border:`2px solid ${value.color}`}}>
                <div className="chapter-title" style={{backgroundColor:value.color, color:value.clearText ? "white" : "black"}}><h2>{value.title}</h2></div>
                <div className="chapter-description">{value.description}</div>
                <ul className="measure-list">
                    {value.measures.map((value,measureIndex) => {
                        const isOpen = openedMeasures[`${chapterIndex}-${measureIndex}`]
                        return(
                            <li key={measureIndex} className="measure-item">
                            <div className="measure-title" onClick={() => {toggleMeasures(chapterIndex, measureIndex)}}>
                                <span className="arrow">keyboard_arrow_down</span>
                                <h3>{value.title}</h3>
                            </div>
                            <div className="measure-description" style={{maxHeight : !isOpen ? "0px" : "5000px", opacity: isOpen && "1"}}>
                                <p className="short">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce feugiat eleifend nibh, nec malesuada magna pulvinar at. Fusce consectetur accumsan dui quis dictum. Duis condimentum ornare laoreet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque molestie, turpis et sollicitudin sagittis, libero ligula elementum arcu.</p>
                                <p className="long"> Pellentesque molestie, turpis et sollicitudin sagittis, libero ligula elementum arcu, in lacinia leo dolor eget tortor. Aliquam erat volutpat. Suspendisse facilisis augue eu mauris feugiat pulvinar. In rutrum dignissim sem a cursus. Phasellus auctor id neque eu pulvinar. Proin egestas velit et ligula semper maximus. Fusce justo ipsum, cursus sit amet magna sit amet, tincidunt laoreet erat. Cras placerat interdum accumsan. Pellentesque molestie, turpis et sollicitudin sagittis, libero ligula elementum arcu, in lacinia leo dolor eget tortor. Aliquam erat volutpat. Suspendisse facilisis augue eu mauris feugiat pulvinar. In rutrum dignissim sem a cursus. Phasellus auctor id neque eu pulvinar. Proin egestas velit et ligula semper maximus. Fusce justo ipsum, cursus sit amet magna sit amet, tincidunt laoreet erat. Cras placerat interdum accumsan. Pellentesque molestie, turpis et sollicitudin sagittis.</p>
                            </div>
                           
                        </li>
                        )
                    })}
                </ul>
            </div>
        ))
    )
}
export default Chapters