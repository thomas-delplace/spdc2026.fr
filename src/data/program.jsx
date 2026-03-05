import { ArrowRight, Briefcase, GraduationCap, Shield, Heart, Building, ChevronDown, ChevronUp } from 'lucide-react';
export const Program = [
    {
        /**
        * LA VOIX DES OUBLIE·ES
         */
        index:1,
        id: 'la-voix-des-oublie-es',
        link: 'la-voix-des-oublie-es',
        title: 'La voix des oublié·es ...',
        summary: (
            <>
                <h5 style={{color:`var(--color-pink)`}}>Saint-Pierre-des-Corps est une ville qu’on regarde trop souvent de loin. Une ville qu’on décrit, qu’on commente, qu’on caricature parfois. Mais rarement une ville qu’on écoute.</h5>
                <p>Nous voulons remettre au centre celles et ceux qu’on ne voit plus : les familles précaires, les jeunes sans solutions, les personnes âgées isolées, les associations qui tiennent le lien social, les habitantes et habitants des quartiers populaires.</p>
                <p>Notre programme part d’un principe simple : ceux qui vivent la ville doivent décider de son avenir.</p>
            </>
            
        ),
        icon: ArrowRight,
        color:"--color-pink",
        measures:[
            {
                id:"referendum-initiative-citoyenne-ric",
                image:{
                    src:'/measures/referendum.webp',
                    alt:'Habitants votant et participant à une assemblée citoyenne'
                },
                key:true,
                title:"Instaurer un Référendum d’Initiative Citoyenne (RIC) dès 16 ans et sans condition de nationalité",
                text:(
                    <>
                        <h5 style={{color:`var(--color-pink)`}}>
                        À Saint-Pierre-des-Corps, les décisions municipales doivent appartenir aux habitants, pas à une poignée d’élus.
                        </h5>

                        <p>
                        Trop souvent, les choix importants se prennent sans celles et ceux qui vivent la ville au quotidien. 
                        Entre deux élections, la parole citoyenne disparaît et la démocratie se résume à attendre six ans en espérant être écouté.
                        Nous refusons cette mise à distance permanente des habitantes et habitants.
                        </p>

                        <p>
                        Les jeunes, les personnes étrangères, les familles populaires, les travailleurs précaires font tourner la commune chaque jour,
                        mais n’ont presque jamais la possibilité d’influencer directement les décisions locales. 
                        Pourtant, ce sont eux qui subissent en premier les choix politiques.
                        </p>

                        <p>
                        Nous créerons un <span style={{fontWeight:'bold', color:`var(--color-pink)`}}>Référendum d’Initiative Citoyenne (RIC)</span> communal.
                        Chaque personne résident de manière régulière à Saint-Pierre-des-Corps pourra faire une proposition sur une plateforme dédiée ou directeent en mairie. Chaque proposition qui aura reçu le soutien de 10% de la population de la ville sera mise au vote dans le cadre du référendum. Si le nombre de votants atteint 50% des personnes en droit de participer au scrutin, la décision sera mise en place par la municipalité. les habitants pourront proposer une mesure, modifier un projet ou demander l’abrogation d’une décision.
                        Le vote sera ouvert dès 16 ans et sans condition de nationalité, parce que vivre ici, c’est déjà avoir son mot à dire.
                        </p>

                        <p style={{fontWeight:'bold', color:`var(--color-pink)`}}>
                        Notre ambition est claire : faire entrer la démocratie dans la vie quotidienne.
                        À Saint-Pierre-des-Corps, le pouvoir doit revenir à celles et ceux qui font la ville, pas à celles et ceux qui la dirigent d’en haut.
                        </p>
                    </>
                )
            },
            {
                id:"ric-revocatoire",
                image:{
                    src:'/measures/referendum.webp',
                    alt:'Habitants participant à un vote citoyen pour décider du maintien d’un élu'
                },
                key:true,
                title:"Instaurer un Référendum d’Initiative Citoyenne révocatoire",
                text:(
                    <>
                        <h5 style={{color:`var(--color-pink)`}}>
                        Un élu doit rendre des comptes en permanence, pas seulement tous les six ans.
                        </h5>

                        <p>
                        Une fois élus, trop de responsables politiques agissent sans contrôle réel des habitants.
                        Promesses oubliées, décisions imposées, manque d’écoute : les citoyens n’ont aujourd’hui aucun moyen d’agir entre deux élections.
                        Cette impunité démocratique nourrit la défiance et l’abstention.
                        </p>

                        <p>
                        Nous voulons changer les règles du jeu.
                        La démocratie ne doit pas être un chèque en blanc, mais un contrat clair entre les élus et la population.
                        Si ce contrat est rompu, les habitantes et habitants doivent pouvoir reprendre la main.
                        </p>

                        <p>
                        Nous mettrons donc en place un <span style={{fontWeight:'bold', color:`var(--color-pink)`}}>Référendum d’Initiative Citoyenne révocatoire</span>.
                        À partir de la moitié du mandat d’un élu, une procédure de révocation pourra être proposée.
                        Toute personne de plus de 16 ans vivant dans la commune, sans condition de nationalité, pourra signer et voter.
                        </p>

                        <p>
                        Pour être soumis au vote, la proposition devra recueillir le soutien d’au moins 20 % de la population.
                        Le référendum sera valide avec un quorum minimum de 50 % des personnes ayant le droit de participer.
                        Ainsi, la décision restera collective, légitime et incontestable.
                        </p>

                        <p style={{fontWeight:'bold', color:`var(--color-pink)`}}>
                        Notre objectif est simple : des élus responsables, contrôlés et toujours au service des habitants.
                        À Saint-Pierre-des-Corps, le pouvoir ne doit jamais se confisquer. Il appartient au peuple, du premier au dernier jour du mandat.
                        </p>
                    </>
                )
            },{
                id:"campagnes-actives-inscription-listes-electorales",
                image:{
                    src:'/measures/electeur.webp',
                    alt:''
                },
                title:"Lancer chaque année une campagne d'inscription sur les listes électorales",
                text:(
                    <>
                        <h5 style={{color:`var(--color-pink)`}}>
                        Trop d’habitantes et d’habitants sont privés de vote simplement parce qu’ils ne sont pas inscrits. Ce n’est pas un manque d’intérêt, c’est un manque d’accompagnement.
                        </h5>

                        <p>
                        Déménagements, démarches administratives complexes, méconnaissance des dates limites : chaque élection, des centaines de Corpopétrussiens découvrent trop tard qu’ils ne peuvent pas participer. 
                        Résultat : une démocratie qui parle au nom de toutes et tous… mais sans toutes et tous.
                        </p>

                        <p>
                        Nous mènerons donc <span style={{fontWeight:'bold'}}>une campagne municipale d’inscription sur les listes électorales chaque année</span>, au plus près des quartiers, des marchés, des écoles, des associations et des lieux de travail. 
                        Aller vers les gens, expliquer, aider à remplir les formulaires, accompagner celles et ceux qui se sentent éloignés des institutions : la mairie doit faciliter le droit de vote, pas le compliquer.
                        </p>

                        <p style={{fontWeight:'bold', color:`var(--color-pink)`}}>
                        Notre conviction est simple : plus nous sommes nombreux à voter, plus la ville nous ressemble. La démocratie n’a de sens que si personne n’est laissé à la porte du scrutin.
                        </p>
                    </>
                )
            },
            {
                id:"enquete-annuelle-satisfaction-citoyenne",
                image:{
                    src:'/measures/enquete.webp',
                    alt:''
                },
                title:"Effectuer une grande enquête citoyenne sur leur satisfaction quant à l'action de la municipalité",
                text:(
                    <>
                        <h5 style={{color:`var(--color-pink)`}}>
                        La démocratie ne se résume pas à glisser un bulletin dans l’urne tous les six ans. Les habitantes et habitants doivent pouvoir évaluer, critiquer et orienter l’action municipale en continu.
                        </h5>

                        <p>
                        Trop souvent, les décisions se prennent loin du quotidien réel des gens. Services publics qui se dégradent, projets mal compris, priorités déconnectées : quand on n’écoute pas, on finit par gouverner à côté.
                        Et la défiance grandit.
                        </p>

                        <p>
                        Nous mettrons donc en place <span style={{fontWeight:'bold'}}>une enquête annuelle de satisfaction citoyenne</span>, accessible à toutes et tous, en ligne et sur papier, pour recueillir des avis clairs sur les services municipaux, les politiques menées et les priorités à venir. 
                        Les résultats seront rendus publics et débattus en conseil municipal, avec des engagements concrets pour corriger ce qui ne fonctionne pas.
                        </p>

                        <p style={{fontWeight:'bold', color:`var(--color-pink)`}}>
                        Notre objectif est simple : une mairie qui rend des comptes, qui apprend de ses erreurs et qui avance avec ses habitants. Parce que gouverner, ce n’est pas décider à la place des gens, c’est agir avec eux.
                        </p>
                    </>
                )
            },
            {
                id:"droit-interpellation-conseil-municipal",
                image:{
                    src:'/measures/interpel.webp',
                    alt:''
                },
                key:true,
                title:"Mettre en place un droit d'interpellation et de critique de toutes et tous en fin de conseil municipal",
                text:(
                    <>
                        <h5 style={{color:`var(--color-pink)`}}>
                        Un conseil municipal ne doit pas être un spectacle où l’on regarde les élu·es décider entre eux. Il doit devenir un moment d’échange direct avec la population.
                        </h5>

                        <p>
                        Trop souvent, les habitantes et habitants assistent aux séances sans pouvoir poser leurs questions, exprimer leurs difficultés ou demander des comptes sur des décisions qui impactent pourtant leur vie quotidienne. 
                        Cette distance nourrit l’incompréhension, la colère et la défiance envers la politique locale.
                        </p>

                        <p>
                        Nous instaurerons donc <span style={{fontWeight:'bold'}}>un droit d’interpellation citoyenne de 30 minutes à la fin de chaque conseil municipal</span>. 
                        Chacun pourra prendre la parole pour signaler un problème, proposer une idée, demander des explications sur une délibération, ou tout simplement exprimer son mécontentement. Même pour nous secouer un peu s’il le faut. Une démocratie vivante, ça parle fort, et c’est très bien comme ça.
                        </p>

                        <p style={{fontWeight:'bold', color:`var(--color-pink)`}}>
                        Notre objectif est clair : rendre la mairie accessible, humaine et contrôlable par ses habitants. Parce que les décisions publiques doivent toujours pouvoir être discutées par celles et ceux qui les vivent.
                        </p>
                    </>
                )
            },
            {
                id:"baisser-indemnite-maire-augmenter-adjoints",
                image:{
                    src:'',
                    alt:''
                },
                key:true,
                title:"Rééquilibrer les indemnités : baisser celle du maire et revaloriser celles des adjoints",
                text:(
                    <>
                        <h5 style={{color:`var(--color-pink)`}}>
                        Être élu·e n’est pas un privilège, c’est un service public. Les indemnités doivent refléter l’engagement, pas une rente politique.
                        </h5>

                        <p>
                        En France, les indemnités de fonction des élu·es municipaux sont fixées en pourcentage d’un indice public (indice brut 1027) et varient selon la taille de la commune. Elles compensent les sujétions liées à l’exercice du mandat, mais ne doivent ni enrichir ni installer durablement une caste politique.
                        </p>

                        <p>
                            L'ensemble des indemnités constituent ce qu'on appelle l'enveloppe du maire :
                        </p>
                        <p style={{borderLeft:'5px solid var(--color-pink)', padding:'2rem', marginLeft:'calc(2rem + 5px)',fontFamily:"'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",background:'linear-gradient(to right, color-mix(in srgb, var(--color-pink), transparent 80%), color-mix(in srgb, var(--color-pink), transparent 90%))'}}>
                            <ul style={{marginBottom:'1rem'}}>
                                <li>2778,71€ pour le maire</li>
                                <li>1175,61 € par adjoint·e (9 adjoint·es)</li>
                                <li>Enveloppe totale : 13359,20 €</li>
                            </ul>
                            <span style={{fontStyle:'italic'}}>
                            Ces montants restent dans les limites légales, mais dessinent un déséquilibre net entre l’indemnité du maire et la charge réelle de travail de ses adjoints. Libre choix du conseil municipal de répartir cette enveloppe comme ils le décident.
                            </span>
                        </p>

                        <p>
                        Nous proposons de rééquilibrer cette enveloppe : réduire l’indemnité du maire pour rapprocher la fonction de son sens originel de service, et révaloriser celles des adjoint·es qui portent un volume de travail considérable au quotidien.
                        </p>
                        {/**
                         * 
                         * EXEMPLE
                         * 
                         * Enveloppe du maire : 13359.2
                         * 
                         * maire + 9 adjoints + 5 délégués
                         * Maire et adjoints :1145.07 bruts / 950.41 nets
                         * Délégués : 381.69 bruts / 316.80 nets
                         * 
                         */}

                        <p>
                        Cela ne changera pas le <span style={{textDecoration:'underline'}}>montant global</span> des indemnités allouées à la municipalité, car les enveloppes sont plafonnées par la loi, mais <span style={{textDecoration:'underline'}}>redistribuera la reconnaissance financière vers celles et ceux qui œuvrent de manière concrète au service des habitants</span>, loin des logements de fonction ou des logiques de prestige.
                        </p>

                        <p style={{fontWeight:'bold', color:'black'}}>Le maire touchera la même indemnité que ses adjoints, conformément à l'article L2123-4 alinéa IV du Code général des collectivités territoriales (CGCT).</p>
                        <p style={{fontWeight:'bold', color:`var(--color-pink)`}}>
                        Notre objectif n’est pas de créer des rentes, mais d’affirmer que servir la ville doit être digne, équitable et tourné vers l’intérêt général. Chez nous, l’engagement ne doit pas enrichir au détriment de l’efficacité collective.
                        </p>
                    </>
                )
            },
            {
                id:"publication-indemnites-elus",
                image:{
                    src:'',
                    alt:''
                },
                key:false,
                title:"Publier le montant des indemnités des élu·es",
                text:(
                    <>
                        <h5 style={{color:`var(--color-pink)`}}>
                        L’argent public ne doit jamais être un sujet tabou. La transparence n’est pas une option : c’est une condition de la confiance démocratique.
                        </h5>

                        <p>
                        Trop souvent, les montants des indemnités des élu·es sont difficiles à trouver, noyés dans des documents administratifs techniques ou absents des supports municipaux accessibles. 
                        Ce flou alimente les fantasmes, les rumeurs et la défiance, alors même que la clarté permettrait d’assainir le débat public.
                        </p>

                        <p>
                        Nous publierons <span style={{fontWeight:'bold'}}>de manière claire, accessible et compréhensible le montant exact des indemnités perçues par chaque élu·e</span>, ainsi que leur évolution au cours du mandat. 
                        Ces informations seront disponibles sur le site de la ville et mises à jour régulièrement. Parce que rendre des comptes ne doit pas être une contrainte, mais une habitude.
                        </p>

                        <p style={{fontWeight:'bold', color:`var(--color-pink)`}}>
                        Notre engagement est simple : chaque euro issu des impôts des Corpopétrussien·nes doit pouvoir être tracé, compris et discuté. La démocratie locale se renforce quand la transparence devient la règle, pas l’exception.
                        </p>
                    </>
                )
            }
        ],
        objectives:[]
    },
    {

        /**
         * ET DE L'URGENCE SOCIALE
         */
        index:2,
        id: 'et-de-l-urgence-sociale',
        link: "et-de-l-urgence-sociale",
        title: '... et de l\'urgence sociale',
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
        ],
        objectives:''
    },
    {
        /**
         * UNE VILLE QUI SE RÉVEILLE
         */
        index:3,
        id: 'une-ville-qui-se-reveille',
        link: "une-ville-qui-se-reveille",
        title: 'Une ville qui se réveille',
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

        ],
        objectives:''
    },
    {
        /**
         * DES QUARTIERS QUI VIVENT
         */
        index:4,
        id: 'des-quartiers-qui-s-animent',
        link: "des-quartiers-qui-s-animent",
        title: 'Des quartiers qui s\'animent',
        summary: (
            <>
                <h5 style={{color:`var(--color-pink-lfi)`}}>La culture n’est pas un luxe. Le sport n’est pas un supplément. Les associations ne sont pas des figurantes.</h5>
                <p>Ce sont elles qui font battre le cœur de la ville. Nous voulons une ville qui vit toute l’année. Des quartiers où l’on se rencontre, où l’on crée, où l’on joue, où l’on fête ensemble. Des espaces où la jeunesse a sa place. Des lieux où les talents locaux sont soutenus.</p>
                <p style={{fontWeight:'bold', color:`var(--color-pink-lfi)`}}>Faire vibrer la ville, c’est renforcer la cohésion.</p>
            </>
        ),
        icon: ArrowRight,
        color:"--color-pink-lfi",
        measures:[
            {
                id:'',
                image:{
                    src:'',
                    alt:''
                },
                key:false, // Est-ce une mesure phare ?
                title:"efjio geogrioe goe gjieog e",  // Titre affiché sur la page programme
                text:""  // Corps du texte de l'explication de la mesure : JSX
            }
        ],
        objectives:''
    },
    {
        /**
         * UNE POPULATION QUI RESPIRE
         */
        index:5,
        id: 'une-population-qui-respire',
        link: "une-population-qui-respire",
        title: 'Une population qui respire',
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
        icon: ArrowRight,
        color:"--color-green-500",
        measures:[
            {
                id:'',
                image:{
                    src:'',
                    alt:''
                },
                key:false, // Est-ce une mesure phare ?
                title:"hoife g p ghuie gieg re g eog",  // Titre affiché sur la page programme
                text:""  // Corps du texte de l'explication de la mesure : JSX
            }
        ],
        objectives:''
    },
    {
        /**
         * L'ESPRIT TRANQUILLE
         */
        index:6,
        id: 'l-esprit-tranquille',
        link: "l-esprit-tranquille",
        title: 'L\'esprit tranquille',
        summary: (
            <>
                <h5 style={{color:`var(--color-blue-lfi)`}}>La tranquillité ne se décrète pas à coups de caméras.</h5>
                <p>Elle se construit par la présence humaine, la prévention, la médiation, le dialogue. Nous croyons à la sécurité par le lien, à la prévention plutôt qu’à la surveillance généralisée, à la responsabilité collective plutôt qu’à la suspicion permanente.</p>
                <p style={{fontWeight:'bold', color:`var(--color-blue-lfi)`}}>Avoir l’esprit tranquille, c’est savoir que la ville veille sur vous, pas qu’elle vous observe.</p>
            </>
        ),
        icon: ArrowRight,
        color:"--color-blue-lfi",
        measures:[
            {
                id:'',
                image:{
                    src:'',
                    alt:''
                },
                key:false, // Est-ce une mesure phare ?
                title:"hdiuee fiehe fjieofoe foe fejoif ",  // Titre affiché sur la page programme
                text:""  // Corps du texte de l'explication de la mesure : JSX
            }
        ],
        objectives:''
    }
]


