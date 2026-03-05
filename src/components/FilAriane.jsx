import { Link } from 'react-router-dom';

const Links = {
    Accueil : () => (<Link to='/' className='fil-d-ariane-lien'>Accueil</Link>),
    Programme : () => (<Link to='/programme' className='fil-d-ariane-lien'>Programme</Link>),
    Chapter : ({slug, text}) => (<Link to={slug} className='fil-d-ariane-lien'>{text}</Link>)
}

const FilAriane = ({chapter  = {}}) => {
    return(
        <span className='fil-d-ariane'>
            <Links.Accueil/>
            &nbsp;&nbsp;&nbsp;&#12297;&nbsp;
            <Links.Programme/>
            &nbsp;&nbsp;&nbsp;&#12297;&nbsp;
            {chapter
                ? <Links.Chapter slug={chapter?.link} text={chapter?.title}/>
                : null
            }
        </span>
    )
}

export default FilAriane