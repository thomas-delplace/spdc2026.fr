////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////                                                                                                                  /////////////////
/////////////////                                                                                                                  /////////////////
/////////////////                                          ET DE L'URGENCE SOCIALE                                                 /////////////////
/////////////////                                                                                                                  /////////////////
/////////////////                                                                                                                  /////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const part2 = {
        index:2,
        id: 'et-de-l-urgence-sociale',
        link: "et-de-l-urgence-sociale",
        title: '... et de l\'urgence sociale',
        image:{
            src:'',
            alt:''
        },
        summary: (
            <>
                <h5 style={{color:`var(--color-blue-600)`}}>À Saint-Pierre-des-Corps, l’urgence n’est pas théorique.</h5>
                <p>
                Elle se voit dans les logements vacants et le mal-logement.
                Elle se ressent dans l’accès aux soins.
                Elle se vit dans la précarité des familles monoparentales.
                Elle s’incarne dans le chômage de longue durée.
                </p>
                <p>Nous refusons la gestion froide des chiffres.
                Nous voulons une mairie qui protège.
                Une ville populaire ne doit pas s’excuser d’être solidaire.</p>
                <p style={{fontWeight:'bold', color:`var(--color-blue-600)`}}>Elle doit en faire sa fierté.</p>
            </>
        ),
        icon: "➜",
        color:"--color-blue-600",
        measures:[
            {
                id:"agir-vacance-logements",
                image:{
                    src:'',
                    alt:''
                },
                key:true,
                title:"Agir contre la vacance des logements et redonner vie aux 654 biens inoccupés (dernières données de l'INSEE)",
                text:(
                    <>
                        <h5 style={{color:`var(--color-blue-600)`}}>
                        654 logements inoccupés sur 8045 à Saint-Pierre-des-Corps. Plus de 8 %. Un logement sur 12 vide… dans une ville où une personne sur quatre vit sous le seuil de pauvreté.
                        </h5>

                        <p>
                        Laisser des centaines de logements vides n’est pas un hasard : c’est un choix politique. 
                        Certains biens restent inoccupés pour des raisons spéculatives. Des logements sociaux sont bloqués, murés, protégés par des dispositifs anti-effraction, pendant que des familles attendent une attribution. Notre commune est celle qui compte <span style={{fontWeight:'bold'}}>le plus haut taux de logements sociaux du département : 45 %</span> mais combien sont condamnés ? <br></br>
                        Cette pénurie organisée pousse vers le privé, plus cher, plus instable. Ce système aggrave la précarité au lieu de la combattre.
                        </p>

                        <p>
                        Nous mettrons en place une <span style={{fontWeight:'bold'}}>Taxe d’Habitation sur les Logements Vacants (THLV)</span>, comme le permet le Code général des impôts (articles 1407 bis et suivants). 
                        Un logement durablement vide dans une ville populaire ne peut plus être neutre fiscalement. 
                        Cette mesure encouragera la remise sur le marché des biens inoccupés et permettra de mobiliser des ressources pour agir.
                        </p>

                        <p>
                        Nous interpellerons également avec force la métropole et l’office public <span style={{fontWeight:'bold'}}>Val Touraine Habitat</span> afin que les logements sociaux vacants soient remis en circulation rapidement. 
                        Nous ne pouvons plus supporter l’inefficacité administrative ou les blocages structurels.
                        </p>

                        <p style={{fontWeight:'bold', color:`var(--color-blue-600)`}}>
                        Notre engagement est clair : dans une ville populaire, chaque logement doit servir à loger. 
                        Nous ne laisserons plus la vacance nourrir la précarité. À Saint-Pierre-des-Corps, nous choisirons la justice sociale et la remise en mouvement de notre territoire.
                        </p>
                    </>
                )
            },
            {
                id:"commission-handicap-accessibilite",
                image:{
                    src:'',
                    alt:''
                },
                key:true,
                title:"Mettre en place une commission handicap et accessibilité associant les habitantes et habitants concernés",
                text:(
                    <>
                        <h5 style={{color:`var(--color-blue-600)`}}>
                        L’accessibilité ne doit pas être pensée “pour” les personnes concernées, mais “avec” elles. Rien sur nous sans nous.
                        </h5>

                        <p>
                        Trop souvent, les politiques publiques en matière de handicap se limitent au strict minimum réglementaire. 
                        On installe une rampe ici, un panneau là, et l’on considère le sujet réglé. 
                        Pourtant, l’accessibilité ne concerne pas seulement les personnes en situation de handicap permanent : elle touche aussi les personnes âgées, les parents avec poussette, les blessé·es temporaires, les personnes malvoyantes ou malentendantes. 
                        C’est une question de dignité et d’égalité concrète.
                        </p>

                        <p>
                        Nous mettrons en place <span style={{fontWeight:'bold'}}>une commission municipale du handicap et de l’accessibilité</span> associant directement les habitantes et habitants concernés, les associations locales, les aidant·es et les professionnel·les. 
                        Cette commission sera consultée en amont des projets d’aménagement urbain, de rénovation de bâtiments publics, d’organisation d’événements et de services municipaux. 
                        Elle pourra formuler des propositions concrètes et rendre des avis publics.
                        </p>

                        <p>
                        L’objectif est clair : passer d’une logique d’obligation légale minimale à une logique d’accessibilité universelle. 
                        Une ville bien pensée pour les plus fragiles devient une ville plus confortable pour tout le monde.
                        </p>

                        <p style={{fontWeight:'bold', color:`var(--color-blue-600)`}}>
                        À Saint-Pierre-des-Corps, nous voulons une ville où personne ne reste sur le trottoir. 
                        L’inclusion ne sera pas un slogan : elle sera une méthode de travail et un principe d’action permanent.
                        </p>
                    </>
                )
            },
            {
                id:"renforcer-centre-municipal-sante",
                image:{
                    src:'',
                    alt:''
                },
                key:true,
                title:"Renforcer les effectifs du centre municipal de santé, diversifier les spécialités médicales et étendre son implantation sur la commune",
                text:(
                    <>
                        <h5 style={{color:`var(--color-blue-600)`}}>
                        Se soigner ne doit jamais dépendre de son revenu, de son quartier ou de sa capacité à avancer les frais. La santé est un droit, pas un privilège.
                        </h5>

                        <p>
                        À Saint-Pierre-des-Corps, où 24 % de la population vit sous le seuil de pauvreté et où le chômage atteint 13,66 %, l’accès aux soins est un enjeu majeur. 
                        Dans ce contexte, le centre municipal de santé est un outil précieux. Il permet l’accès au tiers payant, à des tarifs maîtrisés et à un suivi médical de proximité.
                        </p>

                        <p>
                        Nous renforcerons <span style={{fontWeight:'bold'}}>les effectifs médicaux et paramédicaux</span> afin de réduire les délais de rendez-vous et d’améliorer le suivi des patient·es. 
                        Nous diversifierons les spécialités proposées (santé mentale, gynécologie, pédiatrie, prévention, etc.) pour éviter aux habitant·es de devoir parcourir des kilomètres ou renoncer aux soins.
                        </p>

                        <p>
                        Nous travaillerons également à <span style={{fontWeight:'bold'}}>étendre l’implantation du centre sur la commune</span>, afin d’en rapprocher les services des quartiers et de lutter contre les inégalités territoriales d’accès aux soins. 
                        La santé publique doit aller vers les gens, pas l’inverse.
                        </p>

                        <p style={{fontWeight:'bold', color:`var(--color-blue-600)`}}>
                        Notre ambition est claire : faire du centre municipal de santé un pilier de la justice sociale locale. 
                        À Saint-Pierre-des-Corps, personne ne devra renoncer à se soigner pour des raisons financières ou géographiques.
                        </p>
                    </>
                )
            },
            {
                id:"cantine-bio-gratuite",
                image:{
                    src:'',
                    alt:''
                },
                key:true,
                title:"Tendre progressivement vers une cantine bio et gratuite pour tous, avec une alternative végétarienne équilibrée quotidienne",
                text:(
                    <>
                        <h5 style={{color:`var(--color-blue-600)`}}>
                        Aucun enfant ne devrait avoir le ventre qui gronde en classe. Bien manger n’est pas un luxe : c’est une condition pour apprendre, grandir et s’émanciper.
                        </h5>

                        <p>
                        Dans une ville où 24 % des habitantes et habitants vivent sous le seuil de pauvreté, la cantine scolaire est un enjeu social majeur. 
                        Pour beaucoup d’enfants, c’est parfois le repas le plus complet de la journée. 
                        Faire de la restauration scolaire un levier d’égalité est donc une responsabilité politique.
                        </p>

                        <p>
                        Nous engagerons la commune vers <span style={{fontWeight:'bold'}}>une cantine progressivement 100 % bio et de qualité</span>, en favorisant les circuits courts et les producteurs locaux quand cela est possible. 
                        Chaque jour, une <span style={{fontWeight:'bold'}}>alternative végétarienne équilibrée</span> sera proposée, respectueuse des recommandations nutritionnelles et accessible à toutes et tous, sans stigmatisation.
                        </p>

                        <p>
                        Notre objectif est clair : <span style={{fontWeight:'bold'}}>aller vers la gratuité pour tous</span>. 
                        Parce que la cantine ne doit pas être un marqueur social. La gratuité universelle supprime les barrières administratives, met fin aux impayés humiliants et place tous les enfants sur un pied d’égalité, quelle que soit la situation de leurs parents.
                        </p>

                        <p style={{fontWeight:'bold', color:`var(--color-blue-600)`}}>
                        Investir dans l’alimentation scolaire, c’est investir dans la santé publique, dans l’écologie et dans l’avenir. 
                        À Saint-Pierre-des-Corps, nous voulons que chaque enfant mange bien, mange sain, et mange avec la même dignité que les autres.
                        </p>
                    </>
                )
            },
            {
                id:"adhesions-aidees-associations",
                image:{
                    src:'',
                    alt:''
                },
                key:true,
                title:"Mettre en place des adhésions aidées aux associations sportives et culturelles de la ville pour les enfants des foyers précaires",
                text:(
                    <>
                        <h5 style={{color:`var(--color-blue-600)`}}>
                        Le sport et la culture ne sont pas des activités “en plus”. Ce sont des droits essentiels pour grandir, s’émanciper et prendre confiance en soi.
                        </h5>

                        <p>
                        À Saint-Pierre-des-Corps, où 24 % des habitantes et habitants vivent sous le seuil de pauvreté, de nombreuses familles doivent renoncer à inscrire leurs enfants dans un club sportif ou une activité culturelle faute de moyens. 
                        Pourtant, ces espaces sont des lieux d’apprentissage, de socialisation et de construction personnelle irremplaçables.
                        </p>

                        <p>
                        Le dispositif national Pass’Sport, aujourd’hui recentré et fragilisé, ne couvre qu’une partie des jeunes et laisse de côté de nombreux enfants, notamment les plus petits. 
                        Nous mettrons donc en place <span style={{fontWeight:'bold'}}>un système municipal d’adhésions aidées</span> pour les associations sportives et culturelles de la ville, accessible dès le plus jeune âge pour les foyers précaires.
                        </p>

                        <p>
                        Ce soutien viendra compléter les dispositifs existants, sans stigmatisation, avec une procédure simple et digne. 
                        Il permettra à chaque enfant de choisir une activité — sport, musique, danse, théâtre, arts plastiques — sans que la question financière soit un obstacle.
                        </p>

                        <p style={{fontWeight:'bold', color:`var(--color-blue-600)`}}>
                        Investir dans l’accès au sport et à la culture, c’est investir dans l’égalité réelle. 
                        À Saint-Pierre-des-Corps, aucun talent ne doit rester sur le banc de touche pour une question d’argent.
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
                title:'',
                text:(
                    <>
                    
                    </>
                )
            },
        ],
        objectives:''
    }

export default part2