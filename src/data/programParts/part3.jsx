////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////                                                                                                                  /////////////////
/////////////////                                                                                                                  /////////////////
/////////////////                                        UNE VILLE QUI SE RÉVEILLE                                                 /////////////////
/////////////////                                                                                                                  /////////////////
/////////////////                                                                                                                  /////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const part3 = {
        index:3,
        id: 'une-ville-qui-se-reveille',
        link: "une-ville-qui-se-reveille",
        title: 'Une ville qui se réveille',
        image:{
            src:'',
            alt:''
        },
        summary:(
            <>
                <h5 style={{color:`var(--color-yellow-500)`}}>Une ville, ce n’est pas seulement des bâtiments. C’est une énergie.</h5>
                <p>Aujourd’hui, trop d’espaces sont fermés, vacants, sous-utilisés. Trop de décisions se prennent sans vision d’ensemble. Trop de projets avancent sans consultation réelle. Nous voulons réveiller la ville. Réinvestir ses commerces. Redonner vie aux rues. Rendre les choix d’urbanisme transparents et discutés.</p>
                <p style={{fontWeight:'bold', color:`var(--color-yellow-500)`}}>Saint-Pierre-des-Corps ne doit plus subir. Elle doit choisir.</p>
            </>
            
        ),
        icon: (<span>➜</span>),
        color:"--color-yellow-500",
        measures:[
            {
                id:"instaurer-un-bail-d-implantation-communal-bic",
                image:{
                    src:'',
                    alt:''
                },
                key:true,
                title:"Instaurer un Bail d'Implantation Communal (BIC)",
                text:(
                    <>
                        <h5 style={{color:`var(--color-yellow-500)`}}>
                        À Saint-Pierre-des-Corps, trop de rideaux restent baissés. Trop de vitrines vides. Pendant que des habitant·es veulent entreprendre, des locaux commerciaux dorment, parfois depuis des années.
                        </h5>

                        <p>
                        La ville possède elle-même certains de ces locaux vacants. Plutôt que de subir cette désertification commerciale, nous en ferons un levier d’action. 
                        Nous créerons un <span style={{fontWeight:'bold'}}>Bail d’Implantation Communal (BIC)</span> d’une durée minimale de 5 ans, prioritairement destiné aux créateurs et créatrices d’entreprise de Saint-Pierre-des-Corps.
                        </p>

                        <p>
                        Le principe est simple et protecteur : <span style={{fontWeight:'bold'}}>un loyer indexé sur le chiffre d’affaires</span>, avec une première année à zéro euro pour permettre le lancement de l’activité. 
                        Ensuite, le loyer évoluera progressivement, de manière transparente et proportionnée à la réussite du commerce. 
                        Si l’activité ne parvient pas à se stabiliser et doit cesser, le bail prendra fin sans pénalité. En revanche, en cas de départ anticipé volontaire, un mécanisme équilibré garantira que la collectivité ne soit pas lésée.
                        </p>

                        <p>
                        Ce dispositif permet de sécuriser la création d’un véritable fonds de commerce, d’encourager l’audace entrepreneuriale et de remettre de la vie dans nos quartiers. 
                        Et nous ne nous arrêterons pas là : nous porterons ce modèle à l’échelle métropolitaine avec la création d’un <span style={{fontWeight:'bold'}}>Bail d’Implantation Métropolitain (BIM)</span>, et nous ouvrirons des négociations avec les propriétaires privés de locaux vacants pour étendre ce mécanisme au-delà du patrimoine communal.
                        </p>

                        <p style={{fontWeight:'bold', color:`var(--color-yellow-500)`}}>
                        Notre ambition est claire : transformer les vitrines vides en lieux de travail, de rencontre et de fierté locale. L’économie de proximité n’est pas un décor, c’est le cœur battant de la ville. Et nous choisirons de la faire revivre.
                        </p>
                    </>

                    
                )
            },
            {
                id:"lutter-contre-la-vacance-des-locaux-commerciaux",
                image:{
                    src:'',
                    alt:''
                },
                key:true,
                title:"Lutter contre la vacance des locaux commerciaux",
                text:(
                    <>
                        <h5 style={{color:'var(--color-gray-500'}}>
                            Nous mettrons en oeuvre une politique vigoureuse de lutte contre les locaux commerciaux abandonnés en actionnant les leviers légaux à notre disposition :
                        </h5>
                        <ul>
                            <li>
                                Taxes sur les friches commerciales (TFC) pour les locaux commerciaux vacants depuis plus de 24 mois;
                            </li>
                            <li>
                                Aide à la réouverture des locaux vacants en contrepartie de l'établissement d'un BIC;
                            </li>
                            <li>
                                Préemption de locaux ou de fonds de commerce pour mettre en place des BIC;
                            </li>
                            <li>
                                Déclarations d'Abandon Manifeste selon l'article L2243 du Code Général des Collectivités Territoriales.
                            </li>
                        </ul>
                    </>
                
                )
            },
            {
                id:"mettre-en-place-un-territoire-zero-chomeur",
                image:{
                    src:'',
                    alt:''
                },
                key:true,
                title:"Mettre en place un Territoire Zéro Chômeur de Longue Durée",
                text:(
                    <>
                        <h5 style={{color:`var(--color-yellow-500)`}}>
                        À Saint-Pierre-des-Corps, le chômage et la pauvreté frappent trop fort pour qu’on détourne le regard.
                        </h5>
                        <p>
                        Selon l’INSEE, près d’un habitant sur cinq en âge de travailler est sans emploi, et près d’un quart des ménages vivent sous le seuil de pauvreté.
                        Derrière ces chiffres, ce sont des compétences inutilisées, des parcours brisés, des familles fragilisées.
                        </p>

                        <p>
                        Pourtant, les besoins sont immenses : entretenir la ville, développer les services de proximité,
                        accompagner les personnes âgées, renforcer la transition écologique, créer du lien social.
                        Le travail ne manque pas. Ce qui manque, c’est l’organisation pour le rendre accessible à toutes et tous.
                        </p>

                        <p>
                        Nous engagerons donc Saint-Pierre-des-Corps dans l’expérimentation « Territoire zéro chômeur de longue durée ».
                        La commune mettra en place un <span style={{fontWeight:'bold', color:`var(--color-yellow-500)`}}>Comité Local pour l’Emploi (CLE)</span> réunissant acteurs publics,
                        associations et personnes privées d’emploi afin de créer des activités utiles au territoire et des emplois en CDI,
                        à temps choisi, non précaires et non délocalisables.
                        </p>

                        <p style={{fontWeight:'bold', color:`var(--color-yellow-500)`}}>
                        Notre objectif est clair : proposer un emploi digne à chaque personne durablement privée d’emploi qui le souhaite.
                        Parce que dans notre ville, personne ne doit rester sur le bord du chemin.
                        </p>
                    </>
                )
            },
            {
                id:"ameliorer-desserte-est-ville",
                image:{
                    src:'',
                    alt:''
                },
                key:true,
                title:"Améliorer la desserte de transports en commun dans l'est de la ville (compétence métropolitaine)",
                text:(
                    <>
                        <h5 style={{color:`var(--color-yellow-500)`}}>
                        L’égalité territoriale ne s’arrête pas au centre-ville. Se déplacer facilement ne doit pas dépendre de son quartier.
                        </h5>

                        <p>
                        À Saint-Pierre-des-Corps, les habitantes et habitants de l’est de la commune subissent une desserte insuffisante en transports en commun. 
                        Fréquences limitées, correspondances longues, accès compliqué aux pôles d’emploi ou aux services publics : ces contraintes pèsent directement sur le quotidien, notamment dans une ville où le taux de chômage atteint 13,66 %.
                        </p>

                        <p>
                        Même si la compétence relève de la métropole, nous porterons une exigence claire : <span style={{fontWeight:'bold'}}>augmentation des fréquences, meilleure amplitude horaire et amélioration des correspondances</span> pour les quartiers de l’est. 
                        Nous défendrons également l’adaptation des itinéraires en fonction des besoins réels des habitant·es, en concertation avec eux.
                        </p>

                        <p>
                        Une ville populaire ne peut pas être enclavée. Les transports structurent l’accès à l’emploi, à la formation, aux soins et à la vie culturelle. 
                        Nous ferons entendre la voix des Corpopétrussien·nes auprès de la métropole pour que l’équité territoriale devienne une priorité concrète et budgétaire.
                        </p>

                        <p style={{fontWeight:'bold', color:`var(--color-yellow-500)`}}>
                        Notre engagement est simple : aucun quartier ne doit rester à l’écart. 
                        À Saint-Pierre-des-Corps, nous défendrons un droit réel à la mobilité pour toutes et tous.
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
                id:'etat-lieux-projets-urbanisme',
                image:{
                    src:'',
                    alt:''
                },
                key:false,
                title:'Réaliser un état des lieux des projets d’urbanisme',
                text:(null)
            },
            {
                id:'requalification-cachin',
                image:{
                    src:'',
                    alt:''
                },
                key:false,
                title:'Requalifier la rue Marcel Cachin',
                text:(null)
            },
            {
                id:'repenser-rabaterie',
                image:{
                    src:'',
                    alt:''
                },
                key:false,
                title:'Repenser la rue de la Rabaterie',
                text:(null)
            },
            {
                id:'requalifier-maurice-thorez',
                image:{
                    src:'',
                    alt:''
                },
                key:false,
                title:'Requalifier la place Maurice Thorez',
                text:(null)
            }
        ],
        objectives:''
    }

export default part3