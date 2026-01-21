import './App.css'
import Chapters from './assets/chapters'
import program from './assets/program.json'

function App() {

  return (
    <>
      <img src="header.png" alt="image de présentation" className='header' />
      <div className="wrapper">
        <h1>{program.title}</h1>
        <p className="main-description">{program.description}</p>
        <Chapters/>
      </div>
    </>
  )
}

export default App
