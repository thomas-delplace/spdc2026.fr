////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////                                                                                                                  /////////////////
/////////////////                                                                                                                  /////////////////
/////////////////                                         UNE POPULATION QUI RESPIRE                                               /////////////////
/////////////////                                                                                                                  /////////////////
/////////////////                                                                                                                  /////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const part5 = {
    index:5,
    id: 'une-population-qui-respire',
    link: "une-population-qui-respire",
    title: 'Une population qui respire',
    image:{
        src:'',
        alt:''
    },
    summary: (
        <>
            <h5 style={{color:`var(--color-green-500)`}}>Respirer, c’est une nécessité.</h5>
            <p>Respirer un air moins pollué.</p>
            <p>Respirer dans des espaces verts.</p>
            <p>Respirer dans des rues apaisées.</p>
            <p>Respirer face aux canicules.</p>
            <p>La bifurcation écologique n’est pas un slogan. C’est une condition de santé publique. Nous voulons une ville plus verte, plus fraîche, plus douce à vivre.</p>
            <p style={{fontWeight:'bold', color:`var(--color-green-500)`}}>Une ville qui prépare l’avenir plutôt que de le subir.</p>
        </>
    ),
    icon: (<span>➜</span>),
    color:"--color-green-500",
    measures:[
        {
            id:"refus-activites-polluantes",
            image:{
                src:'',
                alt:''
            },
            key:true,
            title:"Refuser les permis pour des activités écocides ou fortement polluantes",
            text:(
                <>
                    <h5 style={{color:`var(--color-green-500)`}}>
                    La santé des habitants et la protection de l’environnement doivent passer avant les intérêts économiques polluants.
                    </h5>

                    <p>
                    Les collectivités locales ont une responsabilité majeure dans l’aménagement du territoire. Autoriser certaines activités industrielles ou commerciales peut avoir des conséquences durables sur la qualité de l’air, de l’eau, des sols et sur la santé des habitants.
                    </p>

                    <p>
                    À Saint-Pierre-des-Corps, ville déjà marquée par des infrastructures lourdes et des nuisances environnementales, il n’est pas question d’ajouter de nouvelles activités nuisibles. Nous refuserons <span style={{fontWeight:'bold'}}>les permis et autorisations pour des projets écocides, dangereux pour l’environnement ou fortement polluants</span>.
                    </p>

                    <p>
                    Au contraire, nous encouragerons l’installation d’activités utiles socialement, respectueuses de l’environnement et créatrices d’emplois durables. Le développement économique de la ville doit être compatible avec la transition écologique et la qualité de vie des habitants.
                    </p>

                    <p style={{fontWeight:'bold', color:`var(--color-green-500)`}}>
                    Notre cap est clair : protéger la santé des Corpopétrussiens et préserver notre environnement pour les générations futures.
                    </p>
                </>
            )
        },
        {
            id:"points-eau-fontaines-ville",
            image:{
                src:'',
                alt:''
            },
            key:true,
            title:"Créer des points d’eau et des fontaines pour rafraîchir la ville et lutter contre les îlots de chaleur",
            text:(
                <>
                    <h5 style={{color:`var(--color-green-500)`}}>
                    Face aux étés de plus en plus chauds, la ville doit s’adapter pour protéger ses habitants.
                    </h5>

                    <p>
                    Le réchauffement climatique rend les épisodes de chaleur plus fréquents et plus intenses. Dans les zones urbaines, le béton et l’asphalte accumulent la chaleur et créent des <span style={{fontWeight:'bold'}}>îlots de chaleur</span> qui rendent la vie difficile, en particulier pour les personnes âgées, les enfants et les habitants des quartiers les plus denses.
                    </p>

                    <p>
                    Nous installerons <span style={{fontWeight:'bold'}}>de nouveaux points d’eau et des fontaines accessibles dans les espaces publics</span> : parcs, places, zones piétonnes et lieux de passage. Ces équipements permettront aux habitants de se rafraîchir, de remplir une gourde et de rendre l’espace public plus agréable pendant les périodes de fortes chaleurs.
                    </p>

                    <p>
                    Ces aménagements s’inscrivent dans une stratégie plus large d’adaptation climatique : végétalisation des espaces publics, création d’îlots de fraîcheur et transformation progressive de la ville pour la rendre plus respirable.
                    </p>

                    <p style={{fontWeight:'bold', color:`var(--color-green-500)`}}>
                    Notre objectif est simple : faire de Saint-Pierre-des-Corps une ville qui protège ses habitants face aux défis climatiques, et où l’espace public reste vivable même lors des étés les plus chauds.
                    </p>
                </>
            )
        },
        {
            id:"lutte-pollution-lumineuse",
            image:{
                src:'',
                alt:''
            },
            key:true,
            title:"Lutter contre la pollution lumineuse en réduisant l’éclairage nocturne et en modernisant les lampadaires",
            text:(
                <>
                    <h5 style={{color:`var(--color-green-500)`}}>
                    Une ville bien éclairée n’est pas une ville surexposée. Réduire la pollution lumineuse permet de protéger l’environnement tout en économisant de l’énergie.
                    </h5>

                    <p>
                    Aujourd’hui, une grande partie de l’éclairage public reste allumée à pleine puissance toute la nuit, même lorsque les rues sont désertes. Cette situation entraîne un <span style={{fontWeight:'bold'}}>gaspillage d’énergie important</span>, perturbe la biodiversité nocturne et empêche de retrouver un ciel nocturne plus naturel.
                    </p>

                    <p>
                    Nous agirons auprès de la métropole, compétente en matière d’éclairage public, pour <span style={{fontWeight:'bold'}}>diminuer l’intensité des éclairages la nuit et moderniser progressivement les équipements</span>. L’installation de lampadaires équipés de détecteurs de présence permettra d’augmenter la lumière uniquement lorsque des piétons, cyclistes ou véhicules passent à proximité.
                    </p>

                    <p>
                    Cette évolution permettra à la fois de <span style={{fontWeight:'bold'}}>réduire la consommation énergétique, protéger la faune nocturne et améliorer le confort des habitants</span>, tout en maintenant un éclairage adapté lorsque cela est nécessaire.
                    </p>

                    <p style={{fontWeight:'bold', color:`var(--color-green-500)`}}>
                    Notre objectif est clair : une ville plus sobre, plus respectueuse de l’environnement et capable d’adapter ses équipements aux défis écologiques d’aujourd’hui.
                    </p>
                </>
            )
        },
        {
            id:"vegetalisation-canopee-ville",
            image:{
                src:'',
                alt:''
            },
            key:true,
            title:"Végétaliser massivement la ville et développer de grandes canopées pour créer des zones d’ombre",
            text:(
                <>
                    <h5 style={{color:`var(--color-green-500)`}}>
                    Face aux chaleurs de plus en plus fortes, planter des arbres et créer de l’ombre devient une priorité pour protéger les habitants.
                    </h5>

                    <p>
                    Aujourd’hui, les véritables espaces arborés capables de créer une <span style={{fontWeight:'bold'}}>canopée urbaine</span> restent rares à Saint-Pierre-des-Corps. Les deux principaux exemples sont le parc du Grand Mail et l’allée piétonne au cœur du boulevard Langevin. Pourtant, ces lieux montrent à quel point les arbres transforment le quotidien : fraîcheur, ombre, qualité de l’air et cadre de vie plus agréable.
                    </p>

                    <p>
                    Nous lancerons donc <span style={{fontWeight:'bold'}}>un vaste plan de végétalisation de la commune</span> afin de multiplier les plantations d’arbres et développer de nouvelles canopées dans les rues, les places, les écoles et les espaces publics. L’objectif est simple : créer de véritables zones ombragées où il fait bon marcher, se rencontrer et vivre la ville, même pendant les périodes de fortes chaleurs.
                    </p>

                    <p>
                    Cette stratégie permettra aussi de <span style={{fontWeight:'bold'}}>lutter contre les îlots de chaleur, améliorer la qualité de l’air et favoriser la biodiversité</span>, tout en rendant les quartiers plus agréables et plus respirables.
                    </p>

                    <p style={{fontWeight:'bold', color:`var(--color-green-500)`}}>
                    Notre ambition est claire : transformer progressivement Saint-Pierre-des-Corps en une ville plus verte, plus fraîche et plus vivable pour toutes et tous.
                    </p>
                </>
            )
        },
        //////////////////////////////////////////////////////////////////////
        //////////////////////////////////////////////////////////////////////
        //////////////////////////////////////////////////////////////////////
        ////////////////////////////////////////////////////////////////////// AUTRES MESURES
        //////////////////////////////////////////////////////////////////////
        //////////////////////////////////////////////////////////////////////
        //////////////////////////////////////////////////////////////////////
        {
            id:'',
            image:{
                src:'',
                alt:''
            },
            key:false,
            title:"",
            text:(
                <>
                
                </>
            )
        },
    ],
    objectives:''
}

export default part5